// import cloudinary from "cloudinary/lib/cloudinary"
import axios from "axios"
import { useState } from "react"
const PRESET_NAME = import.meta.env.VITE_CLOUD_PRESET_NAME
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME

export const useCloudinary = () => {
  const [image, setImage] = useState("")
  const [loadingImage, setLoading] = useState(false)

  const handleUpload = async (e) => {

    const files = e.target.files
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", PRESET_NAME);
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      file.secure_url &&
        setImage({
          id: file.public_id,
          url: file.secure_url
        })
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  const deleteImage = async (publicId) => {
    setImage('')
    // try {
    //   const response = await axios.delete(`http://localhost:3000/cloudinary/?publicId=${publicId}}`)
    //   console.log(response)
    //   setImage(null)
    // } catch (error) {
    //   console.log(error)
    // }

  }
  return {
    image,
    loadingImage,
    handleUpload,
    deleteImage,
    setImage
  }
}
