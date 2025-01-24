import { useState, useContext } from "react";
import "./CreateArchive.scss";
import {
  BASENDPOINT,
  ARCHIVEPOINT,
  UPLOAD_CLOUDINARY,
} from "../../../../variable";
import ArchiveContext from "../../../Utils/Reducer/ArchiveReducer";

const CreateArchive = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(ArchiveContext);
  console.log(state);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({ type: "CHANGE_INPUT", payload: { name, value } });
  };

  const handleImageUpload = (e) => {
    const fileList = Array.from(e.target.files);
    if (fileList.length > 0) {
      setFiles(fileList);
    } else {
      console.error("No files selected");
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append("projectPics", file));

      // Uploading images to backend
      const uploadResponse = await fetch(BASENDPOINT + UPLOAD_CLOUDINARY, {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload images to backend");
      }

      const { projectPics: projectPicsUrls } = await uploadResponse.json();

      const projectData = {
        ...state,
        projectPics: projectPicsUrls,
      };

      console.log("pro",projectData);
      
      const projectResponse = await fetch("http://localhost:30000/api/archive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });
      console.log(projectResponse);

      if (!projectResponse.ok) {
        throw new Error("Failed to create project");
      }

      // Reset form
      dispatch({ type: "RESET_FORM" });
      setFiles([]);
      window.location.href = "/archive";
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
        <h1>Add Archive</h1>
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
              <label htmlFor="">Team ID</label>
              <input
                type="text"
                name="teamId"
                placeholder="Exisiting Team ID"
                value={state?.archTeamId}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="">Year</label>
              <input
                type="text"
                name="year"
                placeholder="e.g. 2000"
                value={state?.year}
                onChange={handleChange}
              />
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

export default CreateArchive;
