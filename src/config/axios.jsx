import Axios from "axios";
import { getItem,convertBase64,dataURLtoFile,resizeFile } from "../components";
import firebase from "./firebase.jsx";
const server = process.env.REACT_APP_BACKEND_URL;
// const server = 'http://localhost:8000/api/';
export function postImage(file, name) {
  return new Promise((resolve, reject) => {
    const storage = firebase.storage();
    let storageRef = storage.ref(`${name}.jpg`);
    storageRef
      .put(file)
      .then((res) => {
        storageRef.getDownloadURL().then(function (url) {
          resolve(url);
        });
      })
      .catch((err) => {
        reject(JSON.parse(err));
      });
  });
}
export function getImage(file) {
  return new Promise((resolve, reject) => {
    const storage = firebase.storage();
    let storageRef = storage.ref(`foto_produk/${file}.jpg`);
    storageRef
      .getDownloadURL()
      .then(function (url) {
        // console.log('ini url', url)
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = async function (event) {
          let data = await convertBase64(xhr.response);
          const file = dataURLtoFile(data);
          const res = await resizeFile(file);
          resolve(res);
        };
        xhr.onerror = async function (err) {
          // console.log('ERROR',err);
          reject("eror");
        };
        xhr.open("GET", url);
        xhr.send();
        // resolve(url);
      })
      .catch((err) => {
        // console.log(JSON.parse(err.customData.serverResponse).error);
        reject(JSON.parse(err.customData.serverResponse).error);
      });
  });
}
export function deleteImage(name) {
  return new Promise((resolve, reject) => {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let desertRef = storageRef.child(`${name}.jpg`);
    desertRef
      .delete()
      .then(function () {})
      .catch(function (error) {
        reject(error);
      });
  });
}
export function putDataParams(endpoint, params) {
  let instance = Axios.create({
    baseURL: server,
    headers: { Authorization: "Bearer " + getItem("token") },
    params: params,
  });
  return new Promise((resolve, reject) => {
    instance
      .put(endpoint)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        var hasil = /Invalid Token./i.test(
          err && err.response && err.response.data
        );
        if (hasil) {
          window.location.reload();
          localStorage.clear();
        } else {
          reject(err);
        }
      });
  });
}

export function getDataParams(endpoint, params) {
  let instance = Axios.create({
    baseURL: server,
    headers: { Authorization: "Bearer " + getItem("token") },
    params: params,
  });
  return new Promise((resolve, reject) => {
    instance
      .get(endpoint)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        var hasil = /Invalid Token./i.test(
          err && err.response && err.response.data
        );
        if (hasil) {
          window.location.reload();
          localStorage.clear();
        } else {
          reject(err);
        }
      });
  });
}

export function postData(endpoint, data) {
  let instance = Axios.create({
    baseURL: server,
    headers: { Authorization: "Bearer " + getItem("token") },
  });
  return new Promise((resolve, reject) => {
    instance
      .post(endpoint, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        var hasil = /Invalid Token./i.test(
          err && err.response && err.response.data
        );
        if (hasil) {
          window.location.reload();
          localStorage.clear();
        } else {
          reject(err);
        }
      });
  });
}
export function getData(endpoint, data) {
  let instance = Axios.create({
    baseURL: server,
    headers: { Authorization: "Bearer " + getItem("token") },
  });
  return new Promise((resolve, reject) => {
    instance
      .get(endpoint, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        var hasil = /Invalid Token./i.test(
          err && err.response && err.response.data
        );
        if (hasil) {
          window.location.reload();
          localStorage.clear();
        } else {
          reject(err);
        }
      });
  });
}

export function deleteData(endpoint, data) {
  let instance = Axios.create({
    baseURL: server,
    headers: { Authorization: "Bearer " + getItem("token") },
  });
  return new Promise((resolve, reject) => {
    instance
      .delete(endpoint)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) {
          reject(err);
        } else {
          var hasil = /Invalid Token./i.test(
            err && err.response && err.response.data
          );
          if (hasil) {
            window.location.reload();
            localStorage.clear();
          } else {
            reject(err);
          }
        }
      });
  });
}
export function putData(endpoint, data, ignore = [], encrypt = false) {
  let instance = Axios.create({
    baseURL: server,
    headers: { Authorization: "Bearer " + getItem("token") },
  });
  return new Promise((resolve, reject) => {
    instance
      .put(endpoint, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (Axios.isCancel(err)) {
          reject(err);
        } else {
          var hasil = /Invalid Token./i.test(
            err && err.response && err.response.data
          );
          if (hasil) {
            window.location.reload();
            localStorage.clear();
          } else {
            reject(err);
          }
        }
      });
  });
}
