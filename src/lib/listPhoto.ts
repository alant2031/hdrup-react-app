import client from "../http/client";

const listPhoto = async (id: string) => {
	try {
		const resp = await client.get("/albums/" + id + "/photos");
		return resp.data;
	} catch (error) {
		console.log("Error in List Photo resource: ", error);
	}
};

export default listPhoto;
