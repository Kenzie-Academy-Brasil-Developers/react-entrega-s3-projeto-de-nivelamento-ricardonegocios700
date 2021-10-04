import { ListProducts } from "../../components/ListProducts/listProducts.jsx";
import { CadProduct } from "../../components/CadProduct/cadProduct.jsx";
export const Products = ({ products, setProducts, setCart, cart }) => {
  return (
    <>
      <h1>Produtos</h1>
      <CadProduct products={products} setProducts={setProducts} />
      <ListProducts products={products} setCart={setCart} cart={cart} />
    </>
  );
};
