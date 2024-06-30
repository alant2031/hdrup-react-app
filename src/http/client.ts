import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const client = axios.create({
	baseURL,
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});

export default client;
