import { IProductCart } from '@/services/interfaces/productCart.interface';
import { useState, useEffect } from 'react';

export const useProductCount = (initialProducts: IProductCart[]) => {
  const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    const calculateProductCount = (products: IProductCart[]) => {
      const totalCount = products.reduce((count, product) => count + product.amount, 0);
      setProductCount(totalCount);
    };

    calculateProductCount(initialProducts);

    return () => {
      calculateProductCount(initialProducts);
    };
  }, [initialProducts]);

  return productCount;
};
