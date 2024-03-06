import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/Session";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRouter = () => {
	return (
		<Navigator>
			<Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
					contentStyle: {
						backgroundColor: "transparent",
					},
				}}
			/>
		</Navigator>
	);
};
