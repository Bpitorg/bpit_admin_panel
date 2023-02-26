import axios from "axios";
import RequestInterceptor from "./request_interceptor";

const http_lib = axios.create({})

http_lib.interceptors.request.use(RequestInterceptor);

export default http_lib;