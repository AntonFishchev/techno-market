import { FC } from "react";
import styles from "./NotFoundPage.module.scss";

export interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ( props ) => {
	return (
		<div className={styles.notFoundPage}>
			Путь не найден
		</div>
	);
};
