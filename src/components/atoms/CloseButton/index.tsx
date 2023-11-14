
import React from "react";
import { SCloseButton } from "./style";

interface IProps {
    onClick: () => void;
    width: string;
}

const CloseButton = ({width = "38", onClick }:IProps) => {
    return (
        <SCloseButton onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height="38" viewBox="0 0 38 38" fill="none">
                <circle cx="19" cy="19" r="19" fill="black" />
                <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="-12 9 50 8" fill="none">
                    <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </svg>
        </SCloseButton>
    );
};

export default CloseButton;
