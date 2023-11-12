import ProductCard from "@/components/molecules/ProductCard"
import Footer from "@/components/organisms/Footer"
import Header from "@/components/organisms/Header"
import { useGetProducts } from "@/services/useGetProducts"
import { SMain } from "@/styles/stylePages"
import { Head } from "next/document"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductLists = () => {
    const { data, isLoading } = useGetProducts({
        page: 1,
        rows: 6,
        sortBy: "name",
        orderBy: "ASC"
    })

    if (isLoading) return <Skeleton width={"20px"} height={"50px"} />




    console.log(data)

    return <>
        <Header />
        <SMain>
            <ProductCard />
        </SMain>
        <Footer />
        </>
}

export default ProductLists