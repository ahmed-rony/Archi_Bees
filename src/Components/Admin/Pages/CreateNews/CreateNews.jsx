import { useState, useContext } from "react";
import "./CreateNews.scss";
import {
  BASENDPOINT,
  NEWSPOINT,
  UPLOAD_CLOUDINARY,
} from "../../../../variable";
import NewsContext from "../../../Utils/Reducer/NewsReducer";

const CreateNews = () => {
  const [studentImg, setStudentImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(NewsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
  };

  const handleStudentImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudentImg(file);
    } else {
      console.error("No file selected");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      if (studentImg) formData.append("studentImg", studentImg);

      // Uploading images to backend
      const uploadResponse = await fetch(BASENDPOINT + UPLOAD_CLOUDINARY, {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload images to backend");
      }

      const { studentImg: studentImgUrl } = await uploadResponse.json();

      // Construct final data object for `/api/studentWork`
      const projectData = {
        ...state,
        image: studentImgUrl,
      };
      
      const projectResponse = await fetch("http://localhost:30000/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!projectResponse.ok) {
        throw new Error("Failed to create project");
      }

      // Reset form
      dispatch({ type: "RESET_FORM" });
      setStudentImg(null);
      window.location.href = "/news";
      alert("Project created successfully!");
    } catch (error) {
      console.error("Error uploading images or creating project:", error);
      alert("Failed to create project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new_project">
      <div className="container">
        <h1>Add News</h1>
        <div className="project">
          <div className="left">
            <div className="item">
              <label htmlFor="">Title</label>
              <input
                name="title"
                type="text"
                placeholder="Name of title"
                value={state?.title}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Date</label>
              <input
                type="text"
                name="date"
                placeholder="e.g. 30.08.2000"
                value={state?.date}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">News Image</label>
              <input type="file" onChange={handleStudentImage} />
              {studentImg && (
                <img src={URL.createObjectURL(studentImg)} alt="Preview" />
              )}
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="">Link</label>
              <input
                type="text"
                name="link"
                placeholder="Exisiting Team ID"
                value={state?.link}
                onChange={handleChange}
              />
            </div>

            <div className="item">
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                cols="30"
                rows="8"
                placeholder="Description"
                // value={Array.isArray(state?.desc) ? state.desc.join("\n") : state.desc}
                value={state?.rawDesc}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              className="brand-btn"
              onClick={handleSubmit}
              disabled={loading} // Disable while loading
            >
              {loading ? "Uploading..." : "Add Project"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNews;
