import axios from "axios";

async function GetServerURL() {
  await axios.get("https://techcse2020.pythonanywhere.com")
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
  const today = Date.now()
  const hours = (today.valueOf() - timestamp.valueOf()) / 3600000
  if (hours > 4) {
    await GetServerURL()
  }
  request.url = localStorage.getItem('reqURL') + '/api' + request.url
  return request;
}

export default RequestInterceptor