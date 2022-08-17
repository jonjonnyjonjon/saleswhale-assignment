import axios from "axios"

export const fetchAllTeams = async () => {
    const { data } = await axios.get("data.json");
    return data.teams
}