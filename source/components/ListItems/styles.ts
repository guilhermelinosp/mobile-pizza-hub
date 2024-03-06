import { StyleSheet } from "react-native";

const REM = 16;

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		borderBottomWidth: 1,
		backgroundColor: "#fff",
		borderRadius: 8,
		padding: REM,
		marginBottom: 10,
	},
	contentName: {
		flex: 1,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
	},
	contentAmount: {
		paddingHorizontal: 10,
		width: 50,
		alignItems: "center",
	},
	amount: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
