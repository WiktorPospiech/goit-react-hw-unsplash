import Photo from "../ImageCard/ImageCard";

export default function PhotoList({ photos }) {
  return (
    <div>
      {photos.map((pho) => (
        <Photo key={pho.id} name={pho.name} />
      ))}
    </div>
  );
}
