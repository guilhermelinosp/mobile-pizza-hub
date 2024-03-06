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

	title: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#fff",
	},

	subtitle: {
		fontSize: 16,
		color: "#fff",
		marginBottom: 40,
		fontWeight: "bold",
	},

	form: {
		width: "100%",
	},

	input: {
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 8,
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 20,
		padding: 10,
	},

	error: {
		marginLeft: 10,
		justifyContent: "flex-start",
	},

	errorText: {
		color: "#f00",
		fontSize: 14,
	},

	button: {
		width: "100%",
		height: 50,
		backgroundColor: "#f00",
		borderRadius: 8,
		marginTop: 20,
		padding: 10,
		fontWeight: "bold",
		alignItems: "center",
		justifyContent: "center",
	},

	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});
