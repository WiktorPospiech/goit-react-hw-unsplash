import Photo from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function PhotoList({ photos }) {
  return (
    <ul className={css.gallery}>
      {photos.map((pho) => (
        <li key={pho.id} name={pho.name}>
          <Photo src={pho.src} alt={pho.alt} />
        </li>
      ))}
    </ul>
  );
}
