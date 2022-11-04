import { Dispatch } from "redux";
import { Product } from "../../types/Product";
import { ProductAction, ProductActionTypes } from "../../types/store/product";


export const addProductToCart = (product: Product) => {
	return (dispatch: Dispatch<ProductAction>) => {
		dispatch({
			type: ProductActionTypes.ADD_PRODUCT_TO_CART,
			payload: product,
		})
	};
}

export const removeProductFromCart = (id: number) => {
	return (dispatch: Dispatch<ProductAction>) => {
		dispatch({
			type: ProductActionTypes.REMOVE_PRODUCT_FROM_CART,
			payload: id,
		})
	};
}

