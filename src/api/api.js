/**
 * Created by XiaAo on 2017/6/17.
 */

import axios from 'axios';


let base = '';

export const requestLogin = params => {
  return axios.post(`${base}/login`, params).then(res => res.data);
};

export const getUserList = params => {
  return axios.get(`${base}/user/list`, {params: params})
    //     .then((res) => {
    //         console.log('456789');
    //         console.log(res.data.users);
    //         return params;
    //     }
    // )
    ;
};

export const getUserListPage = params => {
  return axios.get(`${base}/user/listpage`, {params: params});
};
export const removeUser = params => {
  return axios.get(`${base}/user/remove`, {params: params});
};
export const batchRemoveUser = params => {
  return axios.get(`${base}/user/batchremove`, {params: params});
};
export const addUser = params => {
  return axios.get(`${base}/user/add`, {params: params});
};
export const editUser = params => {
  return axios.get(`${base}/user/edit`, {params: params});
};
