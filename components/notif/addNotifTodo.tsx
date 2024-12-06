"use client";
import { ChangeEvent, FC, useState } from "react";
import { Button } from "../ui/button";

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

  // Event handler for adding a new todo
  // const handleAdd = async () => {

  //   if (!title || !message || !imageFile) {
  //     alert("Please fill out all fields and upload an image.");
  //     return;
  //   }

  //   // Upload image to Cloudinary and get the image URL
  //   const formData = new FormData();
  //   formData.append('file', imageFile);
  //   formData.append('upload_preset', 'achievements');  // Replace with your preset

  //   try {
  //     const response = await fetch('https://api.cloudinary.com/v1_1/dkfn4xy6q/image/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     const data = await response.json();
  //     const cloudinaryImageUrl = data.secure_url; // This is the image URL to store in the database

  //     // Now, pass the URL to createTodo
  //     createNotif(title, message, cloudinaryImageUrl);
  //     setTitle("");
  //     setMessage("");
  //     setImageSrc(null);
  //     setImageFile(null);
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     alert("Failed to upload image.");
  //   }
  // };

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
    <div className="w-[700px] flex flex-col gap-1 mt-2 bg-neutral-500">
      {/* Input field for entering new todo text */}
      <div className="flex flex-row gap-2 items-center">
        <div className="w-[70px]">
          <label htmlFor="Title">Title:</label>
        </div>
        <div>
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
            onChange={handleTitle}
            value={title}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
          <div className="w-[70px] h-full  items-start">
            <label htmlFor="Message">Message:</label>
          </div>
        <div>
          <textarea
            className="w-[600px] h-[200px] ml-[80px] px-2 py-1 border border-gray-200 rounded outline-none"
            onChange={handleMessage}
            value={message}
          />
        </div>
      </div>

      <div className="flex flex-row gap-9">
        <div className="w-[120px] text-black text-start">
          <label htmlFor="imageUpload">Upload Image:</label>
        </div>
          <div className="w-[320px] text-black">
            <input
              type="file"
              accept="image/*"
              className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
              onChange={handleImageUpload}
            />
          </div>
      </div>
        {/* {imageSrc && (
        <div className="flex justify-center mt-4">
          <img
            src={imageSrc}
            alt="Preview"
            className="w-50 h-32 object-fill border rounded"
            />
          </div>
        )} */}

      {/* Button for adding a new todo */}
      <div className="text-center w-full  mt-2" >
        <Button
          variant="add"
          size="lg"
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddNotif;
