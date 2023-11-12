interface IGetProductsParams {
    page: number;
    rows: number;
    sortBy: "id" | "name" | "price";
    orderBy: "ASC" | "DESC";
}
