import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	decreaseCounter,
	increaseCounter,
} from "../../redux/actions/counterActions";

const Counter = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	console.log(state);

	return (
		<View>
			<Text>Counter : {state.counterReducer}</Text>
			<Button title='Increase' onPress={() => dispatch(increaseCounter())} />
			<Button title='Decrease' onPress={() => dispatch(decreaseCounter())} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default Counter;
