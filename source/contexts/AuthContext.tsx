import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { api } from "../services/api";

interface AuthContextData {
	user: UserProps;
	isAuthenticated: boolean;
	signIn: (credentials: SignInProps) => Promise<void>;
	signOut: () => Promise<void>;
	loading: boolean;
	loadingAuth: boolean;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

interface UserProps {
	id: string;
	name: string;
	email: string;
	token: string;
}

interface SignInProps {
	email: string;
	password: string;
}

export const AuthContext = React.createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = React.useState<UserProps>({
		id: "",
		name: "",
		email: "",
		token: "",
	});

	const isAuthenticated = !!user.id;

	const [loading, setLoading] = React.useState(true);
	const [loadingAuth, setLoadingAuth] = React.useState(false);

	React.useEffect(() => {
		const loadStorageData = async () => {
			try {
				const [user, token] = await AsyncStorage.multiGet([
					"@pizzaHub:user",
					"@pizzaHub:token",
				]);

				if (user[1] && token[1]) {
					api.defaults.headers.Authorization = `Bearer ${token[1]}`;
					setUser(JSON.parse(user[1]));
				}

				setLoading(false);
			} catch (err) {
				console.log(`loadStorageData: ${err}`);
			}
		};

		loadStorageData();
	}, []);

	const signIn = async ({ email, password }: SignInProps): Promise<void> => {
		try {
			setLoadingAuth(true);

			const { data } = await api.post("/signin", {
				email,
				password,
			});

			await AsyncStorage.setItem("@pizzaHub:user", JSON.stringify(data.user));
			await AsyncStorage.setItem("@pizzaHub:token", data.token);

			setUser({
				id: data.user.id,
				name: data.user.name,
				email: data.user.email,
				token: data.token,
			});

			api.defaults.headers.Authorization = `Bearer ${data.token}`;

			setLoadingAuth(false);
		} catch (err) {
			setLoadingAuth(false);
			alert("Email or password incorrect");
		}
	};

	const signOut = async (): Promise<void> => {
		try {
			await AsyncStorage.removeItem("@pizzaHub:user");
			await AsyncStorage.removeItem("@pizzaHub:token");

			await AsyncStorage.clear().then(() => {
				setUser({
					id: "",
					name: "",
					email: "",
					token: "",
				});
			});

			api.defaults.headers.Authorization = null;
		} catch (err) {
			console.log(`signOut: ${err}`);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated,
				signIn,
				signOut,
				loading,
				loadingAuth,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
