import "./App.css";
import SearchBar from "./assets/components/SearchBar/searchbar";
import Loader from "./assets/components/Loader/Loader";
import Error from "./assets/components/ErrorMessage/ErrorMessage";
import PhotoList from "./assets/components/ImageGallery/ImageGallery";
import { useGetPhoto } from "./assets/components/useGetPhoto";
import LoadMoreBtn from "./assets/components/LoadMoreBtn/LoadMoreBtn";
// import ImageModal from "./assets/components/ImageModal/ImageModal";

function App() {
  const {
    isLoading,
    error,
    photoList,
    getPhoto,
    handleLoadMore,
    handleImageClick,
    isModalOpen,
    closeModal,
    selectedImage,
  } = useGetPhoto();

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
        <PhotoList photos={photoList} onImageClick={handleImageClick} />
        {photoList.length > 0 && !isLoading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
