import React from "react";

import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";
import {
	type RouteProp,
	useNavigation,
	useRoute,
} from "@react-navigation/native";
import { api } from "../../services/api";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { type ParamsList } from "../../routes/AppRouter";
import { styles } from "./styles";

export interface RouteDetailParams {
	Finish: {
		number: string | number;
		order_id: string;
	};
}

export type FinishRouteProps = RouteProp<RouteDetailParams, "Finish">;

export function Finish() {
	const route = useRoute<FinishRouteProps>();
	const navigation = useNavigation<NativeStackNavigationProp<ParamsList>>();

	async function handleFinish() {
		try {
			await api.put(`/orders/send/${route.params.order_id}`);

			navigation.popToTop();
		} catch (err) {
			console.log(`handleFinish: ${err}`);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={[styles.title, { fontSize: 40 }]}>
					Deseja concluir o pedido?
				</Text>
				<Text style={[styles.title, { fontSize: 32 }]}>
					Mesa {route.params.number}
				</Text>

				<TouchableOpacity style={styles.button} onPress={handleFinish}>
					<Text style={styles.titleButton}>Finalizar</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
