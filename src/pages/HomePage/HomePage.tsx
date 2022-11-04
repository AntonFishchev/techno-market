import { FC } from "react";
import { Card } from "../../components/Card/Card";
import { CardList } from "../../components/CardList/CardList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Product } from "../../types/Product";
import styles from "./HomePage.module.scss";

export interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ( props ) => {
	const {} = props;

	const state = useTypedSelector(state => state.product)

	return (
		<div className={styles.homePage}>
			<CardList products={state.products}/>
		</div>
	);
};
