import { AuthContext } from "../../contexts/AuthContext";
import React from "react";
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
	SafeAreaView,
} from "react-native";
import { styles } from "./styles";

export function SignIn() {
	const { signIn, loadingAuth } = React.useContext(AuthContext);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleSignIn = async () => {
		if (email === "" || password === "") {
			alert("Email and password are required");
			return;
		}

		await signIn({ email, password });
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Pizza Hub</Text>
			<Text style={styles.subtitle}>Welcome back!</Text>
			<View style={styles.form}>
				<>
					<TextInput
						style={[styles.input]}
						placeholder={"Email"}
						value={email}
						onChangeText={(email) => {
							setEmail(email);
						}}
						autoCapitalize="none"
						keyboardType="email-address"
					/>

					<TextInput
						style={[styles.input]}
						placeholder={"Password"}
						value={password}
						onChangeText={(password) => {
							setPassword(password);
						}}
						secureTextEntry
					/>

					<TouchableOpacity style={styles.button} onPress={handleSignIn}>
						{loadingAuth ? (
							<ActivityIndicator size={24} color="#fff" />
						) : (
							<Text style={styles.buttonText}>Sign In</Text>
						)}
					</TouchableOpacity>
				</>
			</View>
		</SafeAreaView>
	);
}
