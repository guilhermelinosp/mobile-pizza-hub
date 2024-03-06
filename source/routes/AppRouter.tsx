import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Dashboard } from "../screens/Dashboard";
import { Finish } from "../screens/Finish";
import { Order } from "../screens/Order";

export interface ParamsList {
	Dashboard: undefined;
	Finish: {
		number: string | number;
		order_id: string;
	};
	Order: {
		number: string | number;
		order_id: string;
	};
}

const { Navigator, Screen } = createNativeStackNavigator<ParamsList>();

export const AppRouter = () => {
	return (
		<Navigator>
			<Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					headerShown: false,
					contentStyle: {
						backgroundColor: "transparent",
					},
				}}
			/>

			<Screen
				name="Order"
				component={Order}
				options={{
					headerShown: false,
					contentStyle: {
						backgroundColor: "transparent",
					},
				}}
			/>

			<Screen
				name="Finish"
				component={Finish}
				options={{
					headerShown: true,
					contentStyle: {
						backgroundColor: "transparent",
					},
					headerStyle: {
						backgroundColor: "#1d1d1d",
					},
					headerTintColor: "#fff",
					headerTitle: "Voltar",
				}}
			/>
		</Navigator>
	);
};
