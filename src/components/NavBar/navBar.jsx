import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Link to="/">Produtos</Link> - <Link to="/cart">Carrinho</Link>
    </>
  );
};
