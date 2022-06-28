import { useDispatch, useSelector } from "react-redux";

export default () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);

	return [state, dispatch];
};
