import { useCallback } from "react";

const useUploadToImgBB = () => {
  const uploadToImgBB = useCallback(async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
    console.log(imgbbApiKey);
    if (!imgbbApiKey) {
      throw new Error("Missing VITE_IMGBB_API_KEY in your environment variables");
    }

    const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error?.message || "Image upload failed");
    }

    return result.data.url;
  }, []);

  return uploadToImgBB;
};

export default useUploadToImgBB;
