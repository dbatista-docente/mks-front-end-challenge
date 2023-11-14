import { Dispatch, SetStateAction } from "react";
import { SCloseModal, SFinishButton, SFooterModal, SHeaderModal, SMainModal, SModalContainer, STitleModal, STotal } from "./style";
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
          <STotal>Total: R$ {500}</STotal>
          <SFinishButton>Finalizar Compra</SFinishButton>
        </SFooterModal>
      </SModalContainer>
    </>
  );
};

export default ModalCart;
