import SkeletonCard from "@/components/atoms/Skeleton"
import ProductCard from "@/components/molecules/ProductCard"
import Footer from "@/components/organisms/Footer"
import Header from "@/components/organisms/Header"
import { IProduct } from "@/services/interfaces/product.interface"
import { useGetProducts } from "@/services/useGetProducts"
import { SContainerProducts, SMain } from "@/components/templates/ProductsList/style"
import ModalCart from "@/components/organisms/ModalCart"


const ProductLists: React.FC = () => {
    const { data, isLoading } = useGetProducts({
        page: 1,
        rows: 8,
        sortBy: "name",
        orderBy: "ASC"
    })

    return <>
        <Header />
        <SMain>
            <SContainerProducts>

                {isLoading && SkeletonCard(8)}
                {!isLoading &&
                    (data ? (data.map((e: IProduct) => (
                        <ProductCard
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            brand={e.brand}
                            description={e.description}
                            photo={e.photo}
                            price={e.price}
                            createdAt={e.createdAt}
                            updatedAt={e.updatedAt}
                        />
                    ))) : SkeletonCard(8))
                }
            </SContainerProducts>
            <ModalCart/>
        </SMain>
        <Footer />
    </>


}



export default ProductLists