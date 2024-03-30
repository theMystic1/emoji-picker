function Placeholder({ handleSearch, setQuery }) {
  async function search(data) {
    handleSearch(data);
    setQuery(data);
  }
  return (
    <p className="text-center text-lg">
      You can search your favorite emoji with key words like{" "}
      <Button onClick={() => search("hands")}>hands</Button> or{" "}
      <Button onClick={() => search("heart")}>heart</Button> or even{" "}
      <Button onClick={() => search("music")}>music</Button>
    </p>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="text-lime-700 italic text-lg font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Placeholder;
