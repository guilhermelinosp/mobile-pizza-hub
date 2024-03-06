import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ItemsProps {
	data: {
		id: string;
		product_id: string;
		name: string;
		amount: string | number;
	};
	deleteItem: (item_id: string) => void;
}

export function ListItems({ data, deleteItem }: ItemsProps) {
	function handleDeleteItem() {
		deleteItem(data.id);
	}

	return (
		<View style={styles.container}>
			<View style={styles.contentAmount}>
				<Text style={styles.amount}>{data.amount}</Text>
			</View>

			<View style={styles.contentName}>
				<Text style={styles.name}>{data.name}</Text>
			</View>

			<TouchableOpacity onPress={handleDeleteItem}>
				<Feather name="trash-2" color="#F00" size={25} />
			</TouchableOpacity>
		</View>
	);
}
