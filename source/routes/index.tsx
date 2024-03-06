import { AuthContext } from "../contexts/AuthContext";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { AppRouter } from "./AppRouter";
import { AuthRouter } from "./AuthRouter";

export const Routes = () => {
	const { isAuthenticated, loading } = React.useContext(AuthContext);

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size={50} color="#000" />
			</View>
		);
	}

	return isAuthenticated ? <AppRouter /> : <AuthRouter />;
};
