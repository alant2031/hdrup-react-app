import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const httpClient = axios.create({
	baseURL,
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});

export default httpClient;
