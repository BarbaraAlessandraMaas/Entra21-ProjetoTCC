import Constants from "expo-constants";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://3e38-177-200-213-98.ngrok.io -> http://localhost:3001"
});