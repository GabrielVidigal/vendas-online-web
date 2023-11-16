import { useDispatch } from "react-redux";
import { setUsersAction } from ".";
import { UserType } from "../../../modules/login/types/UserType";
import { useAppSelector } from "../../hooks";

export const useUserReducer = () => {
    const dispatch = useDispatch();
    const { users } = useAppSelector((state ) => state.userReducer);

    const setUsers = (users: UserType[]) => {
        dispatch(setUsersAction(users))
    }
    return {
        users,
        setUsers,
    }
} 