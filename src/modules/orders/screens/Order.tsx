import { ColumnsType } from 'antd/es/table';

import Screen from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { OrderType } from '../../../shared/types/OrderType';
import { useOrder } from '../hooks/useOrder';
import { useNavigate } from 'react-router-dom';
import { OrderRoutesEnum } from '../routes';



const Order = () => {
  const columns: ColumnsType<OrderType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Usuário',
      dataIndex: 'user',
      key: 'user',
      render: (_, target) => <a>{target.user?.name}</a>,
    },
    {
      title: 'Qtd. Produtos',
      dataIndex: 'amountProducts',
      key: 'amountProducts',
      render: (text) => <a>{text}</a>,
    },
  ];

  const { orders } = useOrder();
  const navigate = useNavigate();


  console.log('orders', orders);
  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
        },
      ]}
    >
      <Table
        onRow={() => ({
          onClick: () => navigate(OrderRoutesEnum.ORDER_ID),
        })}
        columns={columns}
        dataSource={orders}
      />
    </Screen>
  );
};

export default Order;
