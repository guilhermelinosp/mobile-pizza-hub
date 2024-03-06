import { StyleSheet } from "react-native";

const REM = 16;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},

	content: {
		backgroundColor: "#fff",
		borderRadius: 8,
		width: REM * 0.9,
		height: REM * 0.4,
		marginTop: REM * 0.18,
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: "center",
		borderColor: "#1d1d1d",
		borderWidth: 1,
	},

	option: {
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		alignItems: "center",
		height: 60,
		justifyContent: "center",
	},

	optionText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1d1d1d",
	},
});
