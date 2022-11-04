import { FC } from "react";
import { Product } from "../../types/Product";
import styles from "./CartItem.module.scss";

export interface CartItemProps {
	product: Product;
}

export const CartItem: FC<CartItemProps> = ( props ) => {
	const {
		product
	} = props;

	return (
		<div className={styles.cartItem}>
			<p>{product.name}</p>
			<p>{product.price}</p>
		</div>
	);
};
