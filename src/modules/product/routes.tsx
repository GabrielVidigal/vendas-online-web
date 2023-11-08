import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';
import ProductInsert from './screens/ProductInsert';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
  PRODUCT_ISNERT = '/product/insert',
}

export const productScreens: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: ProductRoutesEnum.PRODUCT_ISNERT,
    element: <ProductInsert />,
  },
];
