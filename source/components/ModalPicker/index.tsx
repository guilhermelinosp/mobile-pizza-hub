import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CategoryProps } from "../../screens/Order";
import { styles } from "./styles";

export interface ModalPickerProps {
	options: CategoryProps[];
	handleCloseModal: () => void;
	handleSelect: (item: CategoryProps) => void;
}

export const ModalPicker = ({
	options,
	handleCloseModal,
	handleSelect,
}: ModalPickerProps) => {
	function onPress(item: CategoryProps) {
		handleSelect(item);
		handleCloseModal();
	}

	const option = options.map((item, index) => (
		<TouchableOpacity
			style={styles.option}
			key={index}
			onPress={() => {
				onPress(item);
			}}
		>
			<Text style={styles.optionText}>{item.name}</Text>
		</TouchableOpacity>
	));

	return (
		<TouchableOpacity style={styles.container} onPress={handleCloseModal}>
			<View style={styles.content}>
				<ScrollView showsVerticalScrollIndicator={false}>{option}</ScrollView>
			</View>
		</TouchableOpacity>
	);
};
