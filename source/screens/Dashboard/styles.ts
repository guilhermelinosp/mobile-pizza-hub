import { StyleSheet } from "react-native";

const REM = 16;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1d1d1d",
		paddingHorizontal: REM * 2.5,
		flexDirection: "column",
	},

	head: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginTop: 40,
	},

	titleHead: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#fff",
	},

	body: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		marginTop: -100,
	},

	titleBody: {
		fontSize: 30,
		color: "#FFF",
		fontWeight: "bold",
	},

	inputBody: {
		width: "100%",
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 8,
		marginTop: 20,
		padding: 10,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},

	buttonBody: {
		width: "100%",
		height: 50,
		backgroundColor: "#f00",
		borderRadius: 8,
		marginTop: 20,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},

	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});
