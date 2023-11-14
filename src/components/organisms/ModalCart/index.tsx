import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SFinishButton, SFooterModal, SHeaderModal, SMainModal, SModalContainer, STitleModal, STotal, STotalContainer, STotalPrice } from "./style";
import { IProductCart } from "@/services/interfaces/productCart.interface";
import CartItemCard from "@/components/molecules/CartItemCard";
import { IProduct } from "@/services/interfaces/product.interface";
import CloseButton from "@/components/atoms/CloseButton";

interface IProps {
  switchModal: boolean;
  setswitchModal: Dispatch<SetStateAction<boolean>>;
  productsCart: IProductCart[] | undefined;
  handleProductCard: (action: string, product: IProduct | IProductCart) => void;
}

const ModalCart = ({ switchModal, setswitchModal, productsCart, handleProductCard }: IProps) => {
  const [CalculateTotal, setCalculateTotal] = useState<number>(0)

  const handleCalculateTotal = (cart: IProductCart[] | undefined): number => {
    if (!cart || cart.length === 0) {
      return 0;
    }

    return cart.reduce((total, product) => {
      const productPrice = parseFloat(product.price) || 0;
      return total + productPrice * product.amount;
    }, 0);
  };

  useEffect(() => {
    setCalculateTotal(handleCalculateTotal(productsCart))
  }, [productsCart])

  return (
    <>
      <SModalContainer isOpen={switchModal}>
        <SHeaderModal>
          <STitleModal>Carrinho de compras</STitleModal>
          <CloseButton onClick={() => setswitchModal(false)} width={"38"} />
        </SHeaderModal>

        <SMainModal>
          {productsCart?.map((product) => (
            <CartItemCard key={product.id} product={product} handleProductCard={handleProductCard} />
          ))}
        </SMainModal>

        <SFooterModal>
          <STotalContainer>
            <STotal>Total:</STotal>
            <STotalPrice>R${CalculateTotal}</STotalPrice>
          </STotalContainer>
          <SFinishButton>Finalizar Compra</SFinishButton>
        </SFooterModal>
      </SModalContainer>
    </>
  );
};

export default ModalCart;
