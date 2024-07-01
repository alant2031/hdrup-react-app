import httpClient from "../http/http-client";

const listAlbum = async () => {
	try {
		const resp = await httpClient.get("/albums");
		return resp.data;
	} catch (error) {
		console.log("Error in List Album resource: ", error);
	}
};

export default listAlbum;
