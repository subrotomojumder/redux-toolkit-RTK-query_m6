import { loadProducts } from "../../productAction/productAction";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=A");
        const data = await res.json();
        
        if (data.meals.length) {
            dispatch(loadProducts(data.meals))
        }
    }
}

export default loadProductData;