import { baseUrlAxios } from "./baseUrlAxios";
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
    const response = await baseUrlAxios.get("/products", {
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
