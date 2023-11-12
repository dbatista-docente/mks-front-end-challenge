import { axiosApi } from "@/pages/api/axiosApi";
import { useQuery } from "react-query"

interface IGetProductsParams {
    page: number;
    rows: number;
    sortBy: "id" | "name" | "price";
    orderBy: "ASC" | "DESC";
}

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