import { setOrdersAction } from ".";
import { OrderType } from "../../../shared/types/OrderType";
import { useAppSelector } from "../../hooks";
import { useDispatch } from 'react-redux';

export const useOrderReducer = () => {
    const dispatch = useDispatch();
    const { orders } = useAppSelector((state) => state.orderReducer);

    const setOrders = (orders: OrderType[]) => {
        dispatch(setOrdersAction(orders))
    }

    return {
        orders,
        setOrders,
    }
}