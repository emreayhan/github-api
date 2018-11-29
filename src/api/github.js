import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization:
      "client_id Iv1.32b5936179cd1445,client_secret 52de20fa6f4931a9c552450b8fac8b1846da4897"
  }
});
