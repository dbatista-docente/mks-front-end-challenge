import ButtonCart from "../ButtonCart";
import { SFlex, SH2Mks, SH2Sistemas, SHeader } from "./style";

const Header = () => {
  return (
    <>
      <SHeader>
        <SFlex>
          <SH2Mks>MKS</SH2Mks>
          <SH2Sistemas>Sistemas</SH2Sistemas>
        </SFlex>
        <ButtonCart></ButtonCart>
      </SHeader>
    </>
  );
};

export default Header;
