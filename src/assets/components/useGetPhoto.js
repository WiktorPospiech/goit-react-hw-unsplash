import { useState } from "react";
import { fetchPhoto } from "./ImageCard/photo-api";

export const useGetPhoto = () => {
  const [photoList, setCharactersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const moreImages = await fetchPhoto(nextPage);
    setCharactersList((prevImages) => [...prevImages, ...moreImages]);
    setPage(nextPage);
  };

  return {
    isLoading,
    error,
    photoList,
    getPhoto,
    handleLoadMore,
    handleImageClick,
    closeModal,
  };
};
