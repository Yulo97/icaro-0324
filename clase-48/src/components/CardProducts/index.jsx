export const CardProduct = ({ title, price, descrition, category, image }) => {
  return (
    <div className="cardProduct">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <span>
        <b>$ {price}</b>
      </span>
      <span>{descrition}</span>
      <p>{category}</p>
      <button>Comprar</button>
    </div>
  );
};
