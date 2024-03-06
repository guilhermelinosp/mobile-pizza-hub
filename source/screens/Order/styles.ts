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

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginTop: 40,
		marginBottom: 100,
	},

	titleHeader: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#fff",
	},

	content: {
		flex: 1,
		flexDirection: "column",
		width: "100%",
		marginTop: -100,
	},

	input: {
		width: "100%",
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 8,
		fontWeight: "bold",
		marginTop: 20,
		padding: 10,
		justifyContent: "center",
	},

	titleBody: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#1d1d1d",
	},

	quantity: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		paddingLeft: 10,
	},

	titleQuantity: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
		marginTop: 20,
	},

	inputQuantity: {
		width: "70%",
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 8,
		fontWeight: "bold",
		marginTop: 20,
		fontSize: 18,
		padding: 10,
		justifyContent: "center",
		textAlign: "center",
	},

	action: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginTop: 20,
	},

	buttonAction: {
		width: "24%",
		height: 50,
		backgroundColor: "#f00",
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},

	buttonActionConfirm: {
		width: "73%",
		height: 50,
		backgroundColor: "#008000",
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},

	list: {
		width: "100%",
		flex: 1,
	},
});
