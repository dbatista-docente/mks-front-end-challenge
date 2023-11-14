import { useState } from 'react';
import { useLocalStorage } from 'react-use';
import { IProduct } from './interfaces/product.interface';
import { IProductCart } from './interfaces/productCart.interface';

interface IUseShoppingCart {
    handleProductCard: (action: string, product: IProduct | IProductCart) => void;
}

interface IProps {
    productsCart: IProductCart[] | undefined;
    setProductsCart: React.Dispatch<React.SetStateAction<IProductCart[] | undefined>>;
    removeProductsCart: () => void
}

const useShoppingCart = ({productsCart, setProductsCart, removeProductsCart}: IProps): IUseShoppingCart => {

    const handleProductCard = (action: string, product: IProduct | IProductCart  ) => {
        const { id, name, brand, photo, price } = product;
        const productCard = { id, name, brand, photo, price, amount: 1 };

        switch (action) {
            case "add": {
                const updatedCart = [...(productsCart || [])];
                const existingProductIndex = updatedCart.findIndex((p) => p.id === productCard.id);

                if (existingProductIndex !== -1) {
                    const existingProduct = updatedCart[existingProductIndex];
                    existingProduct.amount += 1;
                } else {
                    updatedCart.push({ ...productCard, amount: 1 });
                }

                setProductsCart(updatedCart);
                break;
            }
            case "removeById": {
                const updatedCart = [...(productsCart || [])];
                const existingProductIndex = updatedCart.findIndex((p) => p.id === id);

                if (existingProductIndex !== -1) {
                    const existingProduct = updatedCart[existingProductIndex];

                    if (existingProduct.amount > 1) {
                        existingProduct.amount -= 1;
                    } else {
                        updatedCart.splice(existingProductIndex, 1);
                    }

                    setProductsCart(updatedCart);
                }

                break;
            }
            case "remove": {
                const updatedCart = [...(productsCart || [])];
                const existingProductIndex = updatedCart.findIndex((p) => p.id === id);

                if (existingProductIndex !== -1) {
                    updatedCart.splice(existingProductIndex, 1);
                    setProductsCart(updatedCart);
                }

                break;
            }

            case "removeAll": {
                removeProductsCart();
                break;
            }
            default:
                break;
        }
    };

    return {
        handleProductCard
    };
};

export default useShoppingCart;
