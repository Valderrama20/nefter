import { useContext, useState } from "react";
import { AuthContext } from "../routes/auth/userContext";
import { URL_FETCH } from './useFetch'

export const useS3 = () => {
  const [image, setImage] = useState("");
  const [loadingImage, setLoading] = useState(false);
  const { user } = useContext(AuthContext)
  
  const handleUpload = async (file, ownerId) => {
    const data = new FormData();

    data.append("file", file);

    setLoading(true);
    try {
      // const didToken = await getUserToken()
      //  console.log(didToken, 'didToken')
      const response = await fetch(`${URL_FETCH}/upload`, {
        headers: {
          Authorization2: user.jwtToken
        },
        method: "POST",
        body: data,

      }).then((res) => res.json());

      const { url, fileKey } = response;
      console.log(response)

      /// TODO: Usar fileKey para enviar en el post de la colección como coverImage

      url &&
        setImage({
          id: "",
          url,
          fileKey,
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const deleteImage = async (publicId) => {
    setImage("");
  };
  return {
    image,
    loadingImage,
    handleUpload,
    deleteImage,
    setImage,
  };
};
