import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';

import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequest';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryColum from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { coverNumberToMony } from '../../../shared/functions/money';
import Screen from '../../../shared/components/screen/Screen';
import Button from '../../../shared/components/buttons/button/Button';
import { ProductRoutesEnum } from '../routes';
import { useNavigate } from 'react-router-dom';

const columns: ColumnsType<ProductType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (_, product) => <CategoryColum category={product.category} />,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (_, product) => <a>{coverNumberToMony(product.price)}</a>,
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate()

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnclickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_ISNERT)
  }


  return ( 
      <Screen listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS'
        }
      ]}
      >
        <Button onClick={handleOnclickInsert}>Inserir</Button>
        <Table columns={columns} dataSource={products} />
      </Screen>
      );
};
export default Product;
