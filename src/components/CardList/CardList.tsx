import { FC } from "react";
import { Product } from "../../types/Product";
import { Card } from "../Card/Card";
import styles from "./CardList.module.scss";

export interface CardListProps {
	products: Product[];
}

export const CardList: FC<CardListProps> = ( props ) => {
	const {
		products
	} = props;

	return (
		<div className={styles.cardList}>
			{
				products.map(item => {
					return <Card product={item}/>
				})
			}
		</div>
	);
};
