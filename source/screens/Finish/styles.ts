import { StyleSheet } from "react-native";

const REM = 16;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#1d1d1d",
		paddingHorizontal: REM * 2.5,
	},

	content: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		flex: 1,
		marginTop: -100,
	},

	title: {
		fontWeight: "bold",
		color: "#fff",
		textAlign: "center",
		marginBottom: 30,
	},
	button: {
		width: "100%",
		height: 50,
		backgroundColor: "#f00",
		borderRadius: 8,
		marginTop: 10,

		justifyContent: "center",
		alignItems: "center",
	},
	titleButton: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
});
