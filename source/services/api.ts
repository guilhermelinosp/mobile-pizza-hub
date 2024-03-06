import axios from "axios";

export const api = axios.create({
	baseURL: "https://api-pizza-hub.herokuapp.com/api/v1",
});
