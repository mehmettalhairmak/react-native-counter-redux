import { StyleSheet, Text, View } from "react-native";
import Counter from "../components/Counter";

HomeScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text>Home Screen</Text>
			<Counter />
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
});

export default HomeScreen;
