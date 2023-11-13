// Exemplo de como usar no componente do carrinho
import { IProductCart } from '@/services/interfaces/productCart.interface';
import {
  SCardCart,
  SPhotoCart,
  SFlexCart,
  SNameProductCart,
  SQuantityContainer,
  SQuantityInput,
  SPriceCart,
} from './style';
import { IProduct } from '@/services/interfaces/product.interface';

interface IProps {
  product: IProductCart;
  handleProductCard: (action: string, product: IProduct | IProductCart) => void
}

const CartItemCard = ({ product, handleProductCard }: IProps) => {
  return (
    <SCardCart>
      <SPhotoCart src={product.photo} alt={product.name} />
      <SNameProductCart>{product.name}</SNameProductCart>
      <SQuantityContainer>
        <button onClick={() => handleProductCard("removeById", product)}>-</button>
        <SQuantityInput type="text" value={product.amount} readOnly />
        <button onClick={() => handleProductCard("add", product)}>+</button>
      </SQuantityContainer>
      <SPriceCart>R${product.price}</SPriceCart>
    </SCardCart>
  );
};

export default CartItemCard
