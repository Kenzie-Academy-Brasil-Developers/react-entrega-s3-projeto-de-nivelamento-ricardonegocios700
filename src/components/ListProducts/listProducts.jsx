export const ListProducts = ({ products, setCart, cart }) => {
  return (
    <>
      <h2>Listar produtos</h2>
      <ul>
        {products.map((i) => (
          <li key={i.code}>
            <tr>
              <td>Produto: {!!i.name && i.name}</td>
              <td>Preço: {!!i.price && Number(i.price).toFixed(2)}</td>
              <td>Desconto: {!!i.discount && Number(i.discount).toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3">Descrição: {!!i.description && i.description}</td>
            </tr>
            <tr>
              <button onClick={() => setCart([...cart, i])}>To cart</button>
            </tr>
          </li>
        ))}
      </ul>
    </>
  );
};
