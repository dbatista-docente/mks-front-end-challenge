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
  SButtonRemoveAmount,
  SContainerQuantityAndPrice,
} from './style';
import { IProduct } from '@/services/interfaces/product.interface';
import CloseButton from '@/components/atoms/CloseButton';

interface IProps {
  product: IProductCart;
  handleProductCard: (action: string, product: IProduct | IProductCart) => void
}

const CartItemCard = ({ product, handleProductCard }: IProps) => {
  return (
    <SCardCart>
      <div style={{ position: "absolute", marginTop: "-105px", marginLeft: "335px" }}>
        <CloseButton onClick={() => handleProductCard("remove", product)} width={'18'} />
      </div>
      <SPhotoCart src={product.photo} alt={product.name} />
      <SNameProductCart>{product.name}</SNameProductCart>
      <SContainerQuantityAndPrice>
        <SQuantityContainer>
          <span style={{ position: "absolute", fontSize: "5px", marginBottom: "30px", marginRight: "50px" }}> Qtd:</span>
          <SButtonRemoveAmount onClick={() => handleProductCard("removeById", product)}>-</SButtonRemoveAmount>
          <SQuantityInput type="text" value={product.amount} readOnly />
          <SButtonRemoveAmount onClick={() => handleProductCard("add", product)}>+</SButtonRemoveAmount>
        </SQuantityContainer>
        <SPriceCart>R${Number(product.price) * product.amount}</SPriceCart>
      </SContainerQuantityAndPrice>
    </SCardCart>
  );
};

export default CartItemCard
