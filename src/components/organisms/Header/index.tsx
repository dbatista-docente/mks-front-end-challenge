import { Dispatch, SetStateAction } from "react";
import ButtonCart from "../../atoms/ButtonCart";
import { SFlex, SH2Mks, SH2Sistemas, SHeader } from "./style";

interface IProps {
  setSwitchModal: Dispatch<SetStateAction<boolean>>
}

const Header = ({setSwitchModal}: IProps) => {
  return (
    <>
      <SHeader>
        <SFlex>
          <SH2Mks>MKS</SH2Mks>
          <SH2Sistemas>Sistemas</SH2Sistemas>
        </SFlex>
        <ButtonCart setswitchModal={setSwitchModal}/>
      </SHeader>
    </>
  );
};

export default Header;
