import { config } from "./config.js"
const { SERVER_API } = config
export const client = {
  serverApi: SERVER_API,
  setUrl: function(url) {
    this.serverApi = url
  },
  setToken: function(token) {
    this.token = token
  },
  send: async function (url, method = "GET", body = null) {
    // url = SERVER_API + url
    url = `${this.serverApi}${url}`
    const headers = {
      "Content-Type": "application/json"
    }
    if(this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }
    const options = {
      method,
      headers: headers
    }
    if(body) {
      options.body = JSON.stringify(body)
    }
    const response = await fetch(url,options)
    const data = await response.json()
    return {response,data}
  },
  get: function (url, token = null) {
    return this.send(url, "GET", null, token);
  },

  post: function (url, body = {}, token = null) {
    return this.send(url, "POST", body, token);
  },

  put: function (url, body = {}, token = null) {
    return this.send(url, "PUT", body, token);
  },

  patch: function (url, body = {}, token = null) {
    return this.send(url, "PATCH", body, token);
  },

  delete: function (url, token = null) {
    return this.send(url, "DELETE", null, token);
  },
};


