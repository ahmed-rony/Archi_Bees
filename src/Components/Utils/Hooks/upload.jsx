import axios from "axios";

const upload = async (file, onUploadProgress, folder = "default") => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "filmhped0ote"); // Replace with your actual preset
  data.append("folder", folder); // Optional: Specify a folder in Cloudinary

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/df1l3qdiw/image/upload",
      data,
      {
        onUploadProgress: (progressEvent) => {
          if (onUploadProgress) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            onUploadProgress(percentCompleted); // Report progress
          }
        },
        timeout: 30000, // Set a timeout of 30 seconds
      }
    );

    const { url } = res.data;
    return url;
  } catch (error) {
    console.error("Upload failed:", error.message);
    throw new Error("Failed to upload image. Please try again.");
  }
};

export default upload;
