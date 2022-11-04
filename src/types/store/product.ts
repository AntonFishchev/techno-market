import { Product } from "../Product";

export interface ProductState {
	products: Product[];
	cartProducts: Product[];
}

export enum ProductActionTypes {
	ADD_PRODUCT_TO_CART = "ADD_TO_CARD",
	REMOVE_PRODUCT_FROM_CART = "REMOVE_FROM_CART"
}

export type ProductAction =
	| AddProductToCartAction
	| RemoveProductFromCartAction;

interface AddProductToCartAction {
	type: ProductActionTypes.ADD_PRODUCT_TO_CART;
	payload: Product;
}

interface RemoveProductFromCartAction {
	type: ProductActionTypes.REMOVE_PRODUCT_FROM_CART;
	payload: number;
}