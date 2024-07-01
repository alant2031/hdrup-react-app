import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const httpClient = axios.create({
	baseURL,
	timeout: 1000,
});

export default httpClient;
