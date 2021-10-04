import { Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products/product.jsx";
import { Cart } from "../pages/Cart/cart.jsx";
import { useState } from "react";

export const Routes = () => {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);
  const [cart, setCart] = useState([]);
  const [result, setResult] = useState([]);
  return (
    <Switch>
      <Route path="/cart">
        <Cart
          result={result}
          setResult={setResult}
          cart={cart}
          setCart={setCart}
          products={products}
        />
      </Route>
      <Route exact path="/">
        <Products products={products} setProducts={setProducts} />
      </Route>
    </Switch>
  );
};
