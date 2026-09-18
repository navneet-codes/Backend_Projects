import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/Create-post", formData)
      .then(() => {
        navigate("/Feed");
      })
      .catch((error) => {
        console.log(error);
        alert("Error in creating post");
      });
  };

  return (
    <div className=" font-mono flex flex-col w-full h-auto items-center p-10">
      <h1 className=" text-4xl p-10 text-white">Create New Post</h1>

      <form
        onSubmit={formHandler}
        className="  flex flex-col w-[50%] bg-white text-2xl text-black rounded-2xl p-10"
      >
        <label htmlFor="image">Choose Image</label>
        <label
          htmlFor="image"
          className="  w-full bg-gray-300 border-2 rounded-xl h-50 flex items-center justify-center cursor-pointer text-gray-500"
        >
          {fileName || "+Add Image here..."}
        </label>
        <input
          placeholder=" Add Image here..."
          type="file"
          id="image"
          name="image"
          accept="image/*"
          className=" hidden"
          onChange={(e) => {
            setFileName(e.target.files[0]?.name ?? "");
          }}
        />

        <label htmlFor="caption" className=" mt-10">
          write caption
        </label>
        <textarea
          className=" w-full text-white bg-gray-600 p-4  border-2 rounded-xl h-30 resize-none"
          type="text"
          id="caption"
          name="caption"
          placeholder=" write caption here"
          required
        />

        <button
          className=" mt-10 font-extrabold text-3xl  bg-purple-700 h-15 rounded-2xl"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
