import { FC, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { Product } from "../../types/Product";
import styles from "./Card.module.scss";

export interface CardProps {
	product: Product;
}

export const Card: FC<CardProps> = ( props ) => {
	const {
		product
	} = props;

	const { addProductToCart, removeProductFromCart } = useAction();

	const [isAddedToCart, setAddedToCart] = useState(product.isAddedToCart);

	const addProductToCartHandler = () => {
		if (isAddedToCart) {
			removeProductFromCart(product.id);
			setAddedToCart(false);
		} else {
			addProductToCart(product);
			setAddedToCart(true);
		}
	}

	return (
		<div className={styles.card}>
			<p>{product.name}</p>
			<p>{product.price}</p>
			<button onClick={addProductToCartHandler}>
				{ isAddedToCart ? "Убать" : "В корзину" }
			</button>
		</div>
	);
};
