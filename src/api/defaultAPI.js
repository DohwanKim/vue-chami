import axios from 'axios';

const baseUrl = '...';

const defaultGet = async (api, data) => {
  return axios
    .get(baseUrl + api, {
      params: {
        ...data,
      },
    })
    .then(response => response.data)
    .catch((err) => {
      console.log(err);
    });
};

const defaultPost = async (api, data) => {
  return axios
    .post(baseUrl + api, data)
    .then(response => response.data)
    .catch((err) => {
      console.log(err);
    });
};

export {
  defaultGet,
  defaultPost,
};
