import Swal from "sweetalert2";
import { doDecrypt, doEncrypt } from "./encrypt";
import LoadingForm from "react-fullscreen-loading";
import React from "react";
import Resizer from "react-image-file-resizer";


export const getToday = () => {
  return (
    new Date().getFullYear() +
    "-" +
    ("0" + (new Date().getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + new Date().getDate()).slice(-2)
  );
};

export const playSound =(src) => {
  const sound = new Audio();
  sound.src = src;
  sound.play();
}
export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
export const Loading = () => {
  return (
    <LoadingForm
      loading
      background="rgba(0, 0, 0, 0.35)"
      loaderColor="rgba(94, 147, 117, 1)"
    />
  );
};
export const resizeFile = (file) =>
  new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      720,
      1366,
      "JPEG",
      50,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
export const dataURLtoFile = (dataurl, filename) => {
  // export const dataURLtoFile = (dataurl, filename) =>
  let arr = dataurl.split(","),
  // mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]),
  n = bstr.length,
  u8arr = new Uint8Array(n);
while (n--) {
  u8arr[n] = bstr.charCodeAt(n);
}
return new File([u8arr], filename + ".jpg", { type: "image/jpg" });
};
export const setSession = (nama, data) => {
  sessionStorage.setItem(doEncrypt(nama), JSON.stringify(doEncrypt(data)));
};

export const getSession = (nama) => {
  return sessionStorage.getItem(doEncrypt(nama)) === null
    ? []
    : doDecrypt(JSON.parse(sessionStorage.getItem(doEncrypt(nama))) || "");
};

export const removeSession = (nama) => {
  sessionStorage.removeItem(doEncrypt(nama));
};

export const setItem = (nama, data) => {
  localStorage.setItem(doEncrypt(nama), JSON.stringify(doEncrypt(data)));
};
export const removeItem = (nama) => {
  localStorage.removeItem(doEncrypt(nama));
};

export const getItem = (nama) => {
  return localStorage.getItem(doEncrypt(nama)) === null
    ? []
    : doDecrypt(JSON.parse(localStorage.getItem(doEncrypt(nama))) || "");
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export function ToastNotification(status, text) {
  return new Promise((resolve, reject) => {
    Toast.fire({
      icon: status,
      title: text,
    })
      .then(resolve("berhasil"))
      .catch(reject("error"));
  });
}
