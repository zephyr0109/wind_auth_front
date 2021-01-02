import axios from 'axios';
console.log(process.env);
axios.defaults.baseURL = `${process.env.VUE_APP_SERVER_URL}`;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

let httpUtil = {
  async post(path, data) {
    return await axios.post(path, data);
  },
  async get(path, data = null) {
    if (data) {
      let dataStr = '?';
      let keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        dataStr += keys[i] + '=' + data[keys[i]];
        if (i < keys.length - 1) {
          dataStr += '&';
        }
      }
      return await axios.get(path + dataStr);
    } else {
      return await axios.get(path);
    }
  },
};

export default httpUtil;
