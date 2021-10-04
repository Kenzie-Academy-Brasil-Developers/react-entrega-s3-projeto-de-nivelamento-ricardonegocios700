import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

export const ListProducts = ({ products }) => {
  const { params } = useParams();

  const history = useHistory();
  const toCart = () => {
    history.push("/cart");
  };
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
          </li>
        ))}
      </ul>
    </>
  );
};
