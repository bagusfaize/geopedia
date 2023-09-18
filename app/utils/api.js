import axios from "axios";

const API_BASE_URL = "https://data.jabarprov.go.id/"

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json'
    }
})

export const getMiningData = async (params) => {
    try {
        const response = await client.get("api-backend/bigdata/disesdm/od_18374_jml_prdks_bahan_galian_tambang__jenis_bahan_galian", params);
        return response.data.data;

    } catch (error) {
        console.error('Error:', error);
    }
}