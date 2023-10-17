export const loadFile = async (file: File) => {
  const formData = new FormData();
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
  );
  formData.append("file", file);

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_CLOUDINARY_URL as string,
      {
        method: "POST",
        body: formData,
      }
    );
    console.log(response);
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};
