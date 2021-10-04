export const ListSearch = ({ result, setCart, cart }) => {
  return (
    <>
      <h2>Resultado</h2>
      <p>Produto: {!!result.name && result.name}</p>
      <p>Preço: {!!result.price && Number(result.price).toFixed(2)}</p>
      <p>Desconto: {!!result.discount && Number(result.discount).toFixed(2)}</p>
      <p>Descrição: {!!result.description && result.description}</p>
      <button onClick={() => setCart([...cart, result])}>
        Adicionar ao carrinho
      </button>
    </>
  );
};
