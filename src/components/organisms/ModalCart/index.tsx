import { Dispatch, SetStateAction } from "react"
import { SCloseModal, SHeaderModal, SModalContainer, STitleModal } from "./style"
import { IProductCart } from "@/services/interfaces/productCart.interface";
import CartItemCard from "@/components/molecules/CartItemCard";
import { IProduct } from "@/services/interfaces/product.interface";

interface IProps {
    switchModal: boolean;
    setswitchModal: Dispatch<SetStateAction<boolean>>;
    productsCart: IProductCart[] | undefined;
    handleProductCard: (action: string, product: IProduct | IProductCart) => void
}

const ModalCart = ({ switchModal, setswitchModal, productsCart, handleProductCard }: IProps) => {

    return <>
        <SModalContainer isOpen={switchModal}>
            <SHeaderModal>
                <STitleModal>Carrinho de compras</STitleModal>
                <SCloseModal onClick={() => setswitchModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <circle cx="19" cy="19" r="19" fill="black" />
                    </svg>
                    <span style={{ position: "absolute", color: "#fff", left: "415px", top: "47px" }}>X</span>
                </SCloseModal>
            </SHeaderModal>

            <CartItemCard key={89} product={{
                "id": 8,
                "name": "Headset Cloud Stinger",
                "brand": "HyperX",
                "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
                "price": "600.00",
                "amount": 3
            }} handleProductCard={handleProductCard} />

        </SModalContainer >
    </>
}

export default ModalCart