import { axiosApi } from "./axiosApi";
import { IProduct } from "./interfaces/product.interface";

interface IFetchProductsParams {
  page: number;
  rows: number;
  sortBy: "id" | "name" | "price";
  orderBy: "ASC" | "DESC";
}


export const fetchProducts = async ({
  page,
  rows,
  sortBy,
  orderBy,
}: IFetchProductsParams): Promise<IProduct[]> => {
  try {
    const response = await axiosApi.get("/products", {
      params: {
        page,
        rows,
        sortBy,
        orderBy,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar produtos");
  }
};


