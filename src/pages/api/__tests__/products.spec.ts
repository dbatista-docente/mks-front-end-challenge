import { baseUrlAxios } from "../baseUrlAxios";
import { IProduct } from "../interfaces/product.interface";
import { fetchProducts } from "../products";

const mockedAxios = baseUrlAxios as jest.Mocked<typeof baseUrlAxios>;
jest.mock("../baseUrlAxios");

describe("fetchProducts", () => {
  it("should fetch products successfully", async () => {
    const mockData: IProduct[] = [
      {
        id: 1,
        name: "Iphone 11 128 GB",
        brand: "Apple",
        description:
          "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo:
          "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
        price: "5000.00",
        createdAt: "2023-10-30T16:25:01.093Z",
        updatedAt: "2023-10-30T16:25:01.093Z",
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockData });

    const result: IProduct[] = await fetchProducts({
      page: 1,
      rows: 10,
      sortBy: "id",
      orderBy: "ASC",
    });

    // Verifica se o resultado é um array
    expect(Array.isArray(result)).toBe(true);

    // Verifica se cada item no array segue a interface IProduct
    result.forEach((product) => {
      expect(product).toEqual(expect.objectContaining<IProduct>(product));
    });
  });

  it("should handle errors", async () => {
    const errorMessage = "Erro ao buscar produtos";
    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    await expect(
      fetchProducts({
        page: 1,
        rows: 10,
        sortBy: "id",
        orderBy: "ASC",
      })
    ).rejects.toThrowError(errorMessage);
  });
});
