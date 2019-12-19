import axios from "axios";
import { IP, PORT } from "../dataTemp/env";

const api = axios.create({
  baseURL: `http://${IP}:${PORT}`
});

export default api;
