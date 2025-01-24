import { useState, useContext } from "react";
import "./CreateStudentWork.scss";
import StudentWorkContext from "../../../Utils/Reducer/StudentWorkReducer";
import {
  BASENDPOINT,
  STUDENTWORK,
  UPLOAD_CLOUDINARY,
} from "../../../../variable";

const CreateStudentWork = () => {
  const [studentImg, setStudentImg] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(StudentWorkContext);
  console.log(state);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "desc") {
      // Update rawDesc and transform into array for desc
      const descArray = value.split(/\n+/).filter((line) => line.trim() !== "");
      dispatch({ type: "UPDATE_DESC", payload: { rawDesc: value, descArray } });
    } else {
      dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
    }
  };

  const handleImageUpload = (e) => {
    const fileList = Array.from(e.target.files);
    if (fileList.length > 0) {
      setFiles(fileList);
    } else {
      console.error("No files selected");
    }
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
      files.forEach((file) => formData.append("projectPics", file));

      for (let pair of formData.entries()) {
        if (pair[1] instanceof File) {
          console.log(
            `${pair[0]}: ${pair[1].name} (size: ${pair[1].size} bytes, type: ${pair[1].type})`
          );
        } else {
          console.log(`${pair[0]}: ${pair[1]}`);
        }
      }

      // Uploading images to backend
      const uploadResponse = await fetch(BASENDPOINT + UPLOAD_CLOUDINARY, {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload images to backend");
      }

      const { studentImg: studentImgUrl, projectPics: projectPicsUrls } =
        await uploadResponse.json();

      // Construct final data object for `/api/studentWork`
      const projectData = {
        ...state,
        studentImg: studentImgUrl,
        projectPics: projectPicsUrls,
      };

      // Send project data to `/api/studentWork` endpoint
      const projectResponse = await fetch(BASENDPOINT + STUDENTWORK, {
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
      setFiles([]);
      window.location.href = "/publication";
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
        <h1>Add New Work</h1>
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
              <label htmlFor="">Category</label>
              <select
                name="category"
                value={state?.category}
                onChange={handleChange}
              >
                <option value="" disabled>Choose a category</option>
                <option value="design">Design</option>
                <option value="choreography">Choreography</option>
                <option value="editor">Editor</option>
              </select>
            </div>
            <div className="item">
              <div className="item_con">
                <div className="half">
                  <label htmlFor="">Client</label>
                  <input
                    type="text"
                    name="client"
                    placeholder="Person or Company"
                    value={state?.client}
                    onChange={handleChange}
                  />
                </div>
                <div className="half">
                  <label htmlFor="">Year</label>
                  <input
                    type="text"
                    name="year"
                    placeholder="e.g. 2000"
                    value={state?.year}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_con">
                <div className="half">
                  <label htmlFor="">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Address"
                    value={state?.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="half">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Project Place"
                    value={state?.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <label htmlFor="">Video ID</label>
              <input
                name="videoId"
                type="text"
                placeholder="YT Video ID"
                value={state?.videoId}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Upload Images</label>
              <input type="file" multiple onChange={handleImageUpload} />
              <div className="project_images">
                {files &&
                  files?.map((url, i) => (
                    <img key={i} src={URL.createObjectURL(url)} alt="Preview" />
                  ))}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <label htmlFor="">Student Name</label>
              <input
                type="text"
                name="studentName"
                placeholder="Full Name"
                value={state?.studentName}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">School</label>
              <input
                type="text"
                name="school"
                placeholder="Your School"
                value={state?.school}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Student Image</label>
              <input type="file" onChange={handleStudentImage} />
              {studentImg && (
                <img src={URL.createObjectURL(studentImg)} alt="Preview" />
              )}
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

export default CreateStudentWork;
