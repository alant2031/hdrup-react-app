import httpClient from "../http/http-client";

const getPhoto = async (photoId: string) => {
	try {
		const resp = await httpClient.get("/photos/" + photoId);
		return resp.data;
	} catch (error) {
		console.log("Error in Get Photo resource: ", error);
	}
};

export default getPhoto;
