import { useState } from "react/cjs/react.development";
import { CartTotals } from "../../components/CartTotals/cartTotals.jsx";
import { ListSearch } from "../../components/ListSearch/listSearch.jsx";
import { Search } from "../../components/Search/search.jsx";
import { ListCart } from "../../components/ListCart/listCart.jsx";

export const Cart = ({ result, setResult, products, cart, setCart }) => {
  const [search, setSearch] = useState();

  return (
    <>
      <h1>Carrinho</h1>
      <CartTotals cart={cart} />

      <Search products={products} setResult={setResult} />

      {result ? (
        <ListSearch
          result={result}
          setResult={setResult}
          setCart={setCart}
          cart={cart}
        />
      ) : (
        <h3>Produto não encontrado</h3>
      )}
      <ListCart cart={cart} />
    </>
  );
};
