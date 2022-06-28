import { Button, StyleSheet, Text, View } from "react-native";
import {
	decreaseCounter,
	increaseCounter,
} from "../../redux/actions/counterActions";
import useCounter from "../hooks/useCounter";

const Counter = () => {
	const [state, dispatch] = useCounter();

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
