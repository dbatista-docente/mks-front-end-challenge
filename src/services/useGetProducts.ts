import { axiosApi } from "@/pages/api";
import { useQuery } from "react-query"

const getProducts = async ({
    page,
    rows,
    sortBy,
    orderBy,
}: IGetProductsParams) => {
    const response = await axiosApi.get("/v1/products", {
        params: {
            page,
            rows,
            sortBy,
            orderBy,
        }
    })
    return response.data
}

export const useGetProducts = ({
    page,
    rows,
    sortBy,
    orderBy,
}: IGetProductsParams) => {
    return useQuery({
        queryKey: [
            "get-products",
            page,
            rows,
            sortBy,
            orderBy
        ],
        queryFn: () => getProducts({
            page,
            rows,
            sortBy,
            orderBy
        })
    })
}