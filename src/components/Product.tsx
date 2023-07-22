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
    </div>
  );
};

export default Product;
