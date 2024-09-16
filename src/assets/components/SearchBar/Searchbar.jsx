export default function SearchBar(getPhoto) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    console.log(name.value);
    getPhoto(name.value);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
