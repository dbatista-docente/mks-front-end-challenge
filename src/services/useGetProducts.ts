import { axiosApi } from "@/pages/api";
import { useQuery } from "react-query"
import { IProduct } from "./interfaces/product.interface";

const getProducts = async ({
    page,
    rows,
    sortBy,
    orderBy,
}: IGetProductsParams): Promise<IProduct[]> => {
    const response = await axiosApi.get("/v1/products", {
        params: {
            page,
            rows,
            sortBy,
            orderBy,
        }
    })

    return response.data.products
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