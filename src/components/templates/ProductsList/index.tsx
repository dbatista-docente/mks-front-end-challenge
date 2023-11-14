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
import { IProductCart } from "@/services/interfaces/productCart.interface"



const ProductLists: React.FC = () => {
  const { data, isLoading } = useGetProducts({
    page: 1,
    rows: 8,
    sortBy: "name",
    orderBy: "ASC"
  })
  const [switchModal, setSwitchModal] = useState<boolean>(false)
  const [productsCart, setProductsCart, removeProductsCart] = useLocalStorage<IProductCart[]>('c', []);

  const handleProductCard = (action: string, product: IProduct | IProductCart) => {
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
          const existingProduct = updatedCart[existingProductIndex];

          // Remova o produto específico com o ID correspondente
          updatedCart.splice(existingProductIndex, 1);

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
    <Header setSwitchModal={setSwitchModal} productsCart={productsCart} />
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
      <ModalCart switchModal={switchModal} setswitchModal={setSwitchModal} productsCart={productsCart} handleProductCard={handleProductCard} />
    </SMain>
    <Footer />
  </>


}



export default ProductLists