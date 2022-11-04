import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActionCreation from "../store/actionCreators/product";

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(TodoActionCreation, dispatch);
}