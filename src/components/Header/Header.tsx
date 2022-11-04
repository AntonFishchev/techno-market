import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
	const {} = props;

	return (
		<header className={styles.header}>
			<Link to="/">Home</Link>
			<Link to="/cart">Cart</Link>
		</header>
	);
};
