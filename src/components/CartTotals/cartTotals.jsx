export const CartTotals = ({ cart }) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const descontos = cart.reduce((acc, item) => {
    return acc + item.discount;
  }, 0);
  const a_pagar = total - descontos;

  return (
    <>
      <div>Sua compra está em R$ {total.toFixed(2)}, </div>
      <div>você ganhou desconto de R$ {descontos.toFixed(2)}</div>
      <div>Total a pagar R$ {a_pagar.toFixed(2)}</div>
    </>
  );
};
