import axios from "axios";
import { INTERCEPTOR_URL } from "../constants/apiEndpoints";

async function GetServerURL() {
  await axios.get(INTERCEPTOR_URL)
    .then((resp) => {
      localStorage.setItem('reqURL', resp.data['url'])
      localStorage.setItem('url_last_updated', resp.data['last_updated'])
    })
    .catch((err) => {
      console.log(err)
    })
}

async function RequestInterceptor(request) {
  // check if url is present in local storage
  if (localStorage.getItem('reqURL') === null) {
    await GetServerURL();
  }
  const timestamp = new Date(localStorage.getItem('url_last_updated'))
  const today = new Date(Date.now())
  const hours = (today.valueOf() - timestamp.valueOf()) / 3600000
  if (hours > 10) {
    await GetServerURL()
  }
  request.headers["ngrok-skip-browser-warning"] = "69420"
  request.headers["access-control-allow-origin"] = '*'
  if (localStorage.getItem("token") !== null) {
    request.headers["Authorization"] = "Token " + localStorage.getItem('token')
  }
  request.url = localStorage.getItem('reqURL') + '/api' + request.url
  return request;
}

export default RequestInterceptor