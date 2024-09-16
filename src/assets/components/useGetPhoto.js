import { useState } from "react";
import { fetchPhoto } from "./ImageCard/rick-api";

export const useGetPhoto = () => {
  const [photoList, setCharactersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPhoto = async (name) => {
    try {
      setIsLoading(true);
      const photos = await fetchPhoto(name);
      setCharactersList(photos);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    photoList,
    getPhoto,
  };
};
