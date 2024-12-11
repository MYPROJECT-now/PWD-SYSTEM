"use client";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  createNotif: (title: string, message: string, imageSrc: string) => void;
}

const AddNotif: FC<Props> = ({ createNotif }) => {
  // State for handling input value
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Event handler for input change
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageSrc(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  const handleAdd = async () => {
    if (!title || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Use an empty string if no image is selected
    const finalImageSrc = imageSrc ?? "";
  
    // If an image is uploaded, proceed with uploading it to Cloudinary
    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', 'achievements');  // Replace with your preset
  
      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dkfn4xy6q/image/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        const cloudinaryImageUrl = data.secure_url; // This is the image URL to store in the database
  
        // Now, pass the URL to createNotif
        createNotif(title, message, cloudinaryImageUrl);
        setTitle("");
        setMessage("");
        setImageSrc(null);
        setImageFile(null);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image.");
      }
    } else {
      // If no image is selected, create notification without image
      createNotif(title, message, finalImageSrc);
      setTitle("");
      setMessage("");
    }
  };
  

  // Rendering the AddTodo component
  return (
    <div className="w-[800px]  shadow-gray-500 shadow-xl">
      {/* Input field for entering new todo text */}
      <div className="flex flex-col gap-3 px-6 pt-6 ">

      <div className="flex flex-col gap-2"> 
        <div className="w-[70px] font-bold text-neutral-500">
          <label htmlFor="Title">TITLE</label>
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] px-2 py-1 border border-gray-200 rounded-sm outline-none"
            onChange={handleTitle}
            value={title}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
          <div className="w-[70px] h-full font-bold text-neutral-500">
            <label htmlFor="Message">MESSAGE</label>
          </div>
        <div>
          <textarea
            className="w-[600px] h-[150px] px-2 py-1 border border-gray-200 rounded-sm outline-none"
            onChange={handleMessage}
            value={message}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-[120px] font-bold text-neutral-500 text-start">
          <label htmlFor="imageUpload">ADD IMAGE</label>
        </div>
          <div className="w-[320px] text-black">
            <input
              type="file"
              accept="image/*"
              className="w-full px-2 py-1 bg-slate-400 border border-gray-200 rounded outline-none"
              onChange={handleImageUpload}
            />
          </div>
      </div>

      </div>


      {/* Button for adding a new todo */}
      <div className="text-end w-full bg-slate-400 mt-2 py-2 pr-2" 
       style={{ 
        backgroundImage: 'linear-gradient(to right, #082059, white)', 
        backgroundSize: '100% 100%' 
      }}
      >
        <button
        className="h-10 w-[100px] text-white text-sm bg-dash rounded-xl font-bold hover:bg-blue-900"
          onClick={handleAdd}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotif;
