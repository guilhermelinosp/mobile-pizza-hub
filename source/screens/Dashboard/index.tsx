import React from "react";
import {
	Text,
	TouchableOpacity,
	SafeAreaView,
	View,
	TextInput,
} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { type ParamsList } from "../../routes/AppRouter";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { api } from "../../services/api";
import { styles } from "./styles";

export function Dashboard() {
	const navigation = useNavigation<NativeStackNavigationProp<ParamsList>>();
	const { signOut, user } = React.useContext(AuthContext);
	const [number, setNumber] = React.useState("");

	async function handleCreateOrder() {
		if (number === "") {
			alert("Number is required");
			return;
		}

		try {
			const { data } = await api.post("/orders", {
				table: Number(number),
			});

			console.log(data);

			navigation.navigate("Order", {
				number,
				order_id: data.id,
			});

			setNumber("");
		} catch (err) {
			console.log(`handleCreateOrder: ${err}`);
		}
	}

	const handleSignOut = () => {
		signOut();
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.head}>
				<Text style={styles.titleHead}>{user.name.split(" ")[0]}</Text>

				<TouchableOpacity onPress={handleSignOut}>
					<FontAwesome name="sign-out" size={30} color="#fff" />
				</TouchableOpacity>
			</View>

			<View style={styles.body}>
				<Text style={styles.titleBody}>Novo Pedido</Text>

				<TextInput
					style={[styles.inputBody]}
					placeholder={"Número da Mesa"}
					keyboardType="numeric"
					value={number}
					onChangeText={setNumber}
				></TextInput>

				<TouchableOpacity style={styles.buttonBody} onPress={handleCreateOrder}>
					<Text style={styles.buttonText}>Iniciar Pedido</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
