import SkeletonCard from "@/components/atoms/Skeleton"
import ProductCard from "@/components/molecules/ProductCard"
import Footer from "@/components/organisms/Footer"
import Header from "@/components/organisms/Header"
import { IProduct } from "@/services/interfaces/product.interface"
import { useGetProducts } from "@/services/useGetProducts"
import { SContainerProducts, SMain } from "@/components/templates/ProductsList/style"
import ModalCart from "@/components/organisms/ModalCart"
import { useState } from "react"
import { useLocalStorage } from "react-use"

interface IProductCart {
    id: number;
    amount: number;
    name: string;
    brand: string;
    photo: string;
    price: string;
}

const ProductLists: React.FC = () => {
    const { data, isLoading } = useGetProducts({
        page: 1,
        rows: 8,
        sortBy: "name",
        orderBy: "ASC"
    })
    const [switchModal, setSwitchModal] = useState<boolean>(false)
    const [productsCart, setProductsCart, removeProductsCart] = useLocalStorage<IProductCart[]>('c', []);

    const handleProductCard = (action: string, product: IProduct) => {
        const { id, name, brand, photo, price } = product;
        const productCard = { id, name, brand, photo, price, amount: 1 };

        switch (action) {
            case "add": {
                const updatedCart = [...(productsCart || [])];
                const existingProductIndex = updatedCart.findIndex((p) => p.id === productCard.id);
              
                if (existingProductIndex !== -1) {
                  // Se o produto já existe, crie uma cópia do estado anterior
                  const existingProduct = updatedCart[existingProductIndex];
              
                  // Aumente a quantidade na cópia
                  existingProduct.amount += 1;
                } else {
                  // Se o produto não existe, adicione ao carrinho com quantidade 1
                  updatedCart.push({ ...productCard, amount: 1 });
                }
              
                // Atualize o estado com a cópia modificada ou o novo produto
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
                    // Se a quantidade for 1, remova o produto
                    updatedCart.splice(existingProductIndex, 1);
                  }
              
                  // Atualize o estado com a cópia modificada
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

    return <>
        <Header setSwitchModal={setSwitchModal} />
        <SMain>
            <SContainerProducts>

                {isLoading && SkeletonCard(8)}
                {!isLoading &&
                    (data ? (data.map((e: IProduct) => (
                        <ProductCard
                            key={e.id}
                            product={e}
                            handleProductCard={handleProductCard}
                        />
                    ))) : SkeletonCard(8))
                }
            </SContainerProducts>
            <ModalCart switchModal={switchModal} setswitchModal={setSwitchModal} />
        </SMain>
        <Footer />
    </>


}



export default ProductLists