import "./App.css";
import SearchBar from "./assets/components/SearchBar/searchbar";
import Loader from "./assets/components/Loader/Loader";
import Error from "./assets/components/ErrorMessage/ErrorMessage";
import PhotoList from "./assets/components/ImageGallery/ImageGallery";
import { useGetPhoto } from "./assets/components/useGetPhoto";

function App() {
  const { isLoading, error, photoList, getPhoto } = useGetPhoto();

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
      <PhotoList photos={photoList} />
    </>
  );
}

export default App;
