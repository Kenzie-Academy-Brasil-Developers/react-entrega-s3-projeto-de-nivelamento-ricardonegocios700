export const ListCart = ({ cart }) => {
  return (
    <>
      <h2>Carrinho</h2>
      {cart.map((item) => (
        <p>Produto: {!!item.name && item.name}</p>
      ))}
    </>
  );
};
