import { FC } from "react";
import { CartItem } from "../../components/CardItem/CartItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./CartPage.module.scss";

export interface CartPageProps {}

export const CartPage: FC<CartPageProps> = ( props ) => {
	const {} = props;

	const state = useTypedSelector(state => state.product)


	return (
		<div className={styles.cartPage}>
			{
				state.cartProducts.map(el => <CartItem product={el}/>)
			}
			<p>Общая сумма: {state.cartProducts.reduce((acc, el) => acc + el.price, 0)}</p>
		</div>
	);
};
