import Product from "./Product";

export default () => {
  const products = [
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220927/Q6jB/63333229aeb269dbb3ab05c7/-288Wx360H-469163724-white-MODEL.jpg",
      name: "Shoes",
      price: 150,
    },
    {
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20757348/2022/11/15/7196bb88-fc71-48ec-a344-9ba7f1b016f81668504191458Trousers1.jpg",
      name: "Jeans",
      price: 120,
    },
    {
      image:
        "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077",
      name: "T-Shirt",
      price: 80,
    },
  ];

  return (
    <section className="product_section">
      <h2>Men's Section</h2>
      <div className="products">
        {products.map(({ name, price, image }) => (
          <Product key={name} price={price} image={image} />
        ))}
      </div>
    </section>
  );
};
