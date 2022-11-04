import { Product } from "../../types/Product";
import { ProductAction, ProductActionTypes, ProductState } from "../../types/store/product";

const data: Product[] = [
	{
		id: 1,
		name: "IPhone 12",
		price: 120_000,
		isAddedToCart: false
	},
	{
		id: 2,
		name: "IPhone 13",
		price: 150_000,
		isAddedToCart: false
	},
	{
		id: 3,
		name: "IPhone 14",
		price: 170_000,
		isAddedToCart: false
	},
]

const initialState: ProductState = {
	products: data,
	cartProducts: []
};

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
	switch (action.type) {
		case ProductActionTypes.ADD_PRODUCT_TO_CART:
			state["products"] = setAddedToCart(state.products, action.payload.id, true)
			state["cartProducts"] = [...state["cartProducts"], action.payload]
			return state;

		case ProductActionTypes.REMOVE_PRODUCT_FROM_CART:
			state["products"] = setAddedToCart(state.products, action.payload, false)
			state["cartProducts"] = state["cartProducts"].filter(el => el.id !== action.payload)
			return state;
			
		default:
			return state;
	}
};

function setAddedToCart(products: Product[], desiredProductId: number, isAddedToCart: boolean): Product[] {
	return products.map(el => {
		if (el.id === desiredProductId) {
			el.isAddedToCart = isAddedToCart;
		}

		return el;
	})
}