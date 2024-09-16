export default function Photo({ name, src }) {
  return (
    <div>
      <img src={src} alt={name} />
    </div>
  );
}
