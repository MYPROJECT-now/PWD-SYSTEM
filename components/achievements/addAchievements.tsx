import { ChangeEvent, FC, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAddModal } from "@/store/use-add-modal";
import { Button } from "../ui/button";


interface Props {
  createTodo: (title: string, description: string, imageSrc: string) => void;
}

export const AddAchievement: FC<Props> = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const { isOpen, close } = useAddModal();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageSrc(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  const handleAdd = async () => {
    if (!title || !description || !imageFile) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    // Upload image to Cloudinary and get the image URL
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

      // Now, pass the URL to createTodo
      createTodo(title, description, cloudinaryImageUrl);
      setTitle("");
      setDescription("");
      setImageSrc(null);
      setImageFile(null);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-3xl">
            ADD ACHIEVEMENTS
          </DialogTitle>
          <DialogDescription className="text-center text-xl">
            <div className="w-full flex flex-col gap-0 mt-2">
              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="Title">TITLE:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    type="text"
                    placeholder="TITLE"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleTitleChange}
                    value={title}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-9">
                <div className="w-[120px] text-black text-start">
                  <label htmlFor="Description">DESCRIPTION:</label>
                </div>
                <div className="w-[320px] text-black">
                  <input
                    placeholder="DESCRIPTION"
                    type="text"
                    className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
                    onChange={handleDescriptionChange}
                    value={description}
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

              {imageSrc && (
                <div className="flex justify-center mt-4">
                  <img
                    src={imageSrc}
                    alt="Preview"
                    className="w-50 h-32 object-fill border rounded"
                  />
                </div>
              )}

              <div className="flex justify-center mt-4">
                <Button
                  variant="add"
                  size="lg"
                  onClick={handleAdd}
                >
                  Add
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
