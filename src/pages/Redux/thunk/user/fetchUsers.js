import { loadUsers } from "../../productAction/productAction";

const loadUsersData = () => {
    return async(dispatch, getState) => {
        // server mongoDb database CURD M-65
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();

        if (data.length) {
            dispatch(loadUsers(data))
        }
    }
}

export default loadUsersData;

