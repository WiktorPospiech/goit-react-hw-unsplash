import "./App.css";
import SearchBar from "./assets/components/SearchBar/searchbar";
import Loader from "./assets/components/Loader/Loader";
import Error from "./assets/components/ErrorMessage/ErrorMessage";
import PhotoList from "./assets/components/ImageGallery/ImageGallery";
import { useGetPhoto } from "./assets/components/useGetPhoto";
import LoadMoreBtn from "./assets/components/LoadMoreBtn/LoadMoreBtn";
import { useState } from "react";
import Modal from "./assets/components/ImageModal/ImageModal";

function App() {
  const { isLoading, error, photoList, getPhoto, handleLoadMore } =
    useGetPhoto();

  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState("");
  const [alt, setAlt] = useState("");

  const openModal = (largeImage, alt) => {
    setShowModal(true);
    setImageModal(largeImage);
    setAlt(alt);
  };
  const closeModal = () => {
    setShowModal(false);
    setImageModal("");
    setAlt("");
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <h1>Find your inspiration</h1>
      <SearchBar getPhoto={getPhoto} />
      <div>
        <PhotoList photos={photoList} openModal={openModal} />
        {photoList.length > 0 && !isLoading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        {showModal && (
          <Modal closeModal={closeModal} image={imageModal} alt={alt} />
        )}
      </div>
    </>
  );
}

export default App;
