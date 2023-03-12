import axios from "axios";
import RequestInterceptor from "./requestInterceptor";

const http_lib = axios.create({})

// http_lib.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"
// http_lib.defaults.headers.common["access-control-allow-origin"] = '*'
http_lib.interceptors.request.use(RequestInterceptor);

export default http_lib;