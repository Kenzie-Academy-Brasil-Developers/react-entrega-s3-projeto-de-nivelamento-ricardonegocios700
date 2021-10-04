import { useState } from "react";
import { Products } from "../../pages/Products/product";
import "./cadProductCss.css";
export const CadProduct = ({ products, setProducts }) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscont] = useState();
  const [description, setDescription] = useState();
  const [code, setCode] = useState();

  //optei por deixar aqui e comentar, para eu não ter que voltar no git
  // const nextCode = () => {
  //   let a = 0;
  //   products.map((item) => {
  //     return item.code > code && (a = item.code + 1);
  //   });
  //   setCode(a);
  // };

  const handleButton = () => {
    //nextCode();
    const newProduct = {
      code: code,
      name: name,
      price: price,
      discount: discount,
      description: description,
    };
    setProducts([...products, newProduct]);
  };
  return (
    <>
      <h2>Cadastrar produto:</h2>
      <div className="inputTags">
        <input
          placeholder="Code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          placeholder="Produto"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Preço"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Desconto"
          type="number"
          value={discount}
          onChange={(e) => setDiscont(e.target.value)}
        />
        <input
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => handleButton()}>Salvar</button>
      </div>
    </>
  );
};
