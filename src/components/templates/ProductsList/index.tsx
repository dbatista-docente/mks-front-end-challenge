import { useGetProducts } from "@/services/useGetProducts"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductLists = () => {
    const { data, isLoading } = useGetProducts({
        page: 1,
        rows: 6,
        sortBy: "name",
        orderBy: "ASC"
    })




    console.log(data)

    return <><Skeleton width={"20px"} height={"50px"} /></>
}

export default ProductLists