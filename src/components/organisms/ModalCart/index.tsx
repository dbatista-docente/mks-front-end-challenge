import { SCloseModal, SHeaderModal, SModalContainer, STitleModal } from "./style"

const ModalCart = () => {
    return <>
        <SModalContainer>
            <SHeaderModal>
                <STitleModal>Carrinho de compras</STitleModal>
                <SCloseModal>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <circle cx="19" cy="19" r="19" fill="black" />
                    </svg>
                    <span style={{ position: "absolute", color: "#fff", left: "415px", top: "47px" }}>X</span>
                </SCloseModal>
            </SHeaderModal>
        </SModalContainer>
    </>
}

export default ModalCart