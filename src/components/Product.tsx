import { MouseEventHandler } from "react";

const Product = ({
  image,
  name,
  price,
  onBuyNowClicked,
}: {
  image: string;
  name: string;
  price: number;
  onBuyNowClicked: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="product">
      <img
        src={image}
        alt=""
        height={200}
        width={200}
        className="product__img"
      />
      <div className="product__info">
        <h4 className="product__name">{name}</h4>
        <p className="product__price">Price: ${price}</p>
        <button className="product__buy_button" onClick={onBuyNowClicked}>
          Buy Now
        </button>
      </div>
      <style jsx>{`
        .product {
          width: fit-content;
          padding: 10px;
          background-color: white;
          border-radius: 8px;
          border: 1px solid #c6c6c6;
          padding: 20px;
        }
        .product:hover {
          transform: scale(1.02);
          border: 1px solid black;
        }
        .product__info {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 5px;
          flex-direction: column;
        }
        .product__name {
          margin: 0;
          font-weight: bold;
        }
        .product__price {
          margin: 0;
          font-weight: 500;
        }
        .product__buy_button {
          margin-top: 10px;
          width: 100%;
          background-color: white;
          color: black;
          border: 1px solid #c6c6c6;
          padding: 10px 0px;
          text-align: center;
          border-radius: 5px;
        }
        .product__buy_button:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Product;
