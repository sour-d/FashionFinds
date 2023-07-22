import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";

const App = () => {
  const [cart, setCart] = useState(0);
  
  const onBuyNowClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    setCart((prevCart) => prevCart + 1);
  };

  return (
    <div className="main_container">
      <Header added_cart_count={cart}></Header>
      <Products onBuyNowClicked={onBuyNowClick}></Products>
    </div>
  );
};

export default App;
