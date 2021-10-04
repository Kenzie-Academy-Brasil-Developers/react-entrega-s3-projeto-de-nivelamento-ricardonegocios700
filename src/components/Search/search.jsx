import { useState } from "react/cjs/react.development";

export const Search = ({ setResult, products }) => {
  const [search, setSearch] = useState();
  const handelSearch = () => {
    setResult(
      products.find((e) => {
        return e.name === search;
      })
    );
  };

  return (
    <>
      <input
        placeholder="Procurar"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handelSearch}>Procurar</button>
    </>
  );
};
