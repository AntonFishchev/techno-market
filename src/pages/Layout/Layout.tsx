import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import styles from "./Layout.module.scss";

export interface LayoutProps {}

export const Layout: FC<LayoutProps> = ( props ) => {
	const {} = props;

	return (
		<>
			<Header />
			
			<Outlet />
		</>
	);
};
