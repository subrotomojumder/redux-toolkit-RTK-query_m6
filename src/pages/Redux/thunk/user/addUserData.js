import { addUser } from "../../productAction/productAction";
const addUserData = (user) => {
    return async (dispatch, getState) => {
        // server mongoDb database CURD M-65
        const res = await fetch("http://localhost:5000/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json",
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(
                addUser({
                    _id: data.insertedId,
                    ...user
                })
            );
        }
        // console.log(data)
    }
}

export default addUserData;