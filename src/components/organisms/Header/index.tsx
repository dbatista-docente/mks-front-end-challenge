import { Dispatch, SetStateAction } from "react";
import ButtonCart from "../../atoms/ButtonCart";
import { SFlex, SH2Mks, SH2Sistemas, SHeader } from "./style";
import { IProductCart } from "@/services/interfaces/productCart.interface";

interface IProps {
  setSwitchModal: Dispatch<SetStateAction<boolean>>
  productsCart: IProductCart[] | undefined
}

const Header = ({setSwitchModal, productsCart}: IProps) => {
  return (
    <>
      <SHeader>
        <SFlex>
          <SH2Mks>MKS</SH2Mks>
          <SH2Sistemas>Sistemas</SH2Sistemas>
        </SFlex>
        <ButtonCart setswitchModal={setSwitchModal} productsCart={productsCart}/>
      </SHeader>
    </>
  );
};

export default Header;
