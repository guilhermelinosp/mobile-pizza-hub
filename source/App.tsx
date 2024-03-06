import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
				<StatusBar style="light" />
			</AuthProvider>
		</NavigationContainer>
	);
}
