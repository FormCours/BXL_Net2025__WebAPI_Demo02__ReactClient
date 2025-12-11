import axios from "axios"

export async function getAllSolarSystems(){
    // Récupération depuis la web API pour avoir l'URL a utiliser
    const request = await axios.get("https://localhost:7159/api/SolarSystem");

    return request.data;
}