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
import useShoppingCart from "@/services/useShoppingCart"



const ProductLists: React.FC = () => {
  const { data, isLoading } = useGetProducts({
    page: 1,
    rows: 8,
    sortBy: "name",
    orderBy: "ASC"
  })
  const [switchModal, setSwitchModal] = useState<boolean>(false)
  const [productsCart, setProductsCart, removeProductsCart] = useLocalStorage<IProductCart[]>('c', []);
  const { handleProductCard } = useShoppingCart({ productsCart, setProductsCart, removeProductsCart })

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