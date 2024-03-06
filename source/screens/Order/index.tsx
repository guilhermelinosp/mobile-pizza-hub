import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Modal,
	SafeAreaView,
	FlatList,
} from "react-native";
import {
	useRoute,
	type RouteProp,
	useNavigation,
} from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { api } from "../../services/api";
import { type ParamsList } from "../../routes/AppRouter";
import { ModalPicker } from "../../components/ModalPicker";
import { ListItems } from "../../components/ListItems";
import { styles } from "./styles";

export interface RouteDetailParams {
	Order: {
		number: string | number;
		order_id: string;
	};
}

export interface CategoryProps {
	id: string;
	name: string;
}

export interface ProductProps {
	id: string;
	name: string;
}

export interface ItemProps {
	id: string;
	product_id: string;
	name: string;
	amount: string | number;
}

export interface RouteDetailParams {
	Order: {
		number: string | number;
		order_id: string;
	};
	[key: string]: any;
}

export type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export function Order() {
	const route = useRoute<OrderRouteProps>();
	const navigation = useNavigation<NativeStackNavigationProp<ParamsList>>();

	const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
	const [category, setCategory] = useState<CategoryProps[] | []>([]);
	const [categorySelected, setCategorySelected] = useState<
		CategoryProps | undefined
	>();

	const [modalProductVisible, setModalProductVisible] = useState(false);
	const [products, setProducts] = useState<ProductProps[] | []>([]);
	const [productSelected, setProductSelected] = useState<
		ProductProps | undefined
	>();

	const [amount, setAmount] = useState("1");
	const [items, setItems] = useState<ItemProps[]>([]);

	useEffect(() => {
		async function loadCategories() {
			try {
				const { data } = await api.get("/categories");

				setCategory(data);
				setCategorySelected(data[0]);
			} catch (err) {
				console.log(`loadCategories: ${err}`);
			}
		}

		loadCategories();
	}, []);

	useEffect(() => {
		async function loadProducts() {
			try {
				if (categorySelected) {
					const { data } = await api.get(`/products/readbycategory`, {
						params: {
							category_id: categorySelected.id,
						},
					});

					setProducts(data);
					setProductSelected(data[0]);
				}
			} catch (err) {
				console.log(`loadProducts: ${err}`);
			}
		}

		loadProducts();
	}, [categorySelected]);

	function handleChangeCategory(item: CategoryProps) {
		setCategorySelected(item);
	}

	function handleChangeProduct(item: ProductProps) {
		setProductSelected(item);
	}

	async function handleCloseOrder() {
		try {
			await api.delete(`/orders/${route.params.order_id}`);

			navigation.goBack();
		} catch (err) {
			console.log(`handleCloseOrder: ${err}`);
		}
	}

	async function handleAddItem() {
		try {
			const { data } = await api.post("/items", {
				order_id: route.params.order_id,
				product_id: productSelected?.id,
				amount: Number(amount),
			});

			const item = {
				id: data.id,
				product_id: productSelected?.id!,
				name: productSelected?.name!,
				amount,
			};

			setItems((oldArray) => [...oldArray, item]);
		} catch (err) {
			console.log(`handleAddItem: ${err}`);
		}
	}

	async function handleDeleteItem(item_id: string) {
		try {
			await api.delete(`/items/${item_id}`);

			setItems((oldArray) => oldArray.filter((item) => item.id !== item_id));
		} catch (err) {
			console.log(`handleDeleteItem: ${err}`);
		}
	}

	async function handleFinishOrder() {
		try {
			navigation.navigate("Finish", {
				order_id: route.params?.order_id,
				number: route.params?.number,
			});
		} catch (err) {
			console.log(`handleFinish: ${err}`);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.titleHeader}>Mesa {route.params.number}</Text>
				{items.length === 0 && (
					<TouchableOpacity onPress={handleCloseOrder}>
						<Feather name="trash-2" size={28} color="#f00" />
					</TouchableOpacity>
				)}
			</View>

			<View style={styles.content}>
				{category.length !== 0 && (
					<TouchableOpacity
						style={styles.input}
						onPress={() => {
							setModalCategoryVisible(true);
						}}
					>
						<Text style={styles.titleBody}>{categorySelected?.name}</Text>
					</TouchableOpacity>
				)}

				{products.length !== 0 && (
					<TouchableOpacity
						style={styles.input}
						onPress={() => {
							setModalProductVisible(true);
						}}
					>
						<Text style={styles.titleBody}>{productSelected?.name}</Text>
					</TouchableOpacity>
				)}

				<View style={styles.quantity}>
					<Text style={styles.titleQuantity}>Quantidade</Text>
					<TextInput
						style={[styles.inputQuantity, {}]}
						keyboardType="numeric"
						value={amount}
						onChangeText={setAmount}
					/>
				</View>

				<View style={styles.action}>
					<TouchableOpacity style={styles.buttonAction} onPress={handleAddItem}>
						<Text style={styles.titleBody}>+</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[
							styles.buttonActionConfirm,
							{ opacity: items.length === 0 ? 0.3 : 1 },
						]}
						disabled={items.length === 0}
						onPress={handleFinishOrder}
					>
						<Text style={styles.titleBody}>Avançar</Text>
					</TouchableOpacity>
				</View>
			</View>

			<FlatList
				showsVerticalScrollIndicator={false}
				style={styles.list}
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ListItems data={item} deleteItem={handleDeleteItem} />
				)}
			/>

			<Modal
				transparent={true}
				visible={modalCategoryVisible}
				animationType="none"
			>
				<ModalPicker
					handleCloseModal={() => {
						setModalCategoryVisible(false);
					}}
					options={category}
					handleSelect={handleChangeCategory}
				/>
			</Modal>

			<Modal
				transparent={true}
				visible={modalProductVisible}
				animationType="none"
			>
				<ModalPicker
					handleCloseModal={() => {
						setModalProductVisible(false);
					}}
					options={products}
					handleSelect={handleChangeProduct}
				/>
			</Modal>
		</SafeAreaView>
	);
}
