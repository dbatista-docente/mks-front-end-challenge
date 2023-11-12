import { SCard } from "./style";

export const ProductCard = () => {
  return <SCard>
    <img src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp" alt="" />
    <div> <h2>Apple Watch Series 4 GPS</h2> <span>$399</span></div>
    <button> <img src="public/shopping-bag.svg" alt="" /> Comprar</button>
  </SCard>;
};

export default ProductCard;
