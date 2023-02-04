import { removeUser } from "../../productAction/productAction";

const deleteUser = (id) => {
    return async (dispatch, getState) => {
        // server mongoDb database CURD M-65
        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        });
        const data = await res.json();

        if (data.deletedCount) {
            dispatch(
                removeUser(id)
            );
        }
    }
}

export default deleteUser;