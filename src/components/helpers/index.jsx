import React, { Component, useEffect, lazy, Suspense, useContext ,useState} from "react";
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelContent,
} from "../panel/panel.jsx";
import { Field, reduxForm, formValueSelector ,reset} from "redux-form";
import {
  ReanderField,
  ReanderSelect,
  ReanderTextArea,
  HiidenFiled,
  InputGroup,
} from "../../components/helpers/field";
import { connect, useSelector } from "react-redux";
import { change } from "redux-form";

import { useDispatch } from "react-redux";
import Tabel from "./tabel.jsx";
import ModalGlobal from "./ModalGlobal.jsx";
import Swal from "sweetalert2";
import { deleteData, postData, postImage, putData,putDataParams } from "../../config/axios.jsx";
import { Berat, NumberOnly } from "./normalize.jsx";
import { createNumberMask } from "redux-form-input-masks";
import Avatar from "react-avatar";
import Skeleton from "react-loading-skeleton";
import { Link, Redirect, Route, withRouter } from "react-router-dom";
import { dataURLtoFile,resizeFile, getItem, getSession, Loading, removeSession, setItem, setSession, ToastNotification, convertBase64, getToday, removeItem, playSound } from "./function.jsx";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import SortableTree, {
  toggleExpandedForAll,
  changeNodeAtPath,
  removeNodeAtPath,
} from "react-sortable-tree";
import images404 from "../../assets/img/404.png"
import momen from "moment";
import "moment/locale/id";
const currencyMask = createNumberMask({
  prefix: "Rp. ",
  locale: "kr-KO",
});

export {
  playSound,
  removeItem,
  InputGroup,
  convertBase64,
  getToday,
  postImage,
  change,
  resizeFile,
  images404,
  dataURLtoFile,
  getSession,
  reset,
  setSession,
  removeSession,
  Loading,
  Suspense,
  toggleExpandedForAll,
  changeNodeAtPath,
  removeNodeAtPath,
  SortableTree,
  useState,
  useContext,
  useEffect,
  Skeleton,
  withRouter,
  useDispatch,
  Redirect,
  lazy,
  Route,
  React,
  Dropdown,
  putDataParams,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  setItem,
  getItem,
  HiidenFiled,
  Berat,
  NumberOnly,
  currencyMask,
  deleteData,
  postData,
  putData,
  ToastNotification,
  Swal,
  useSelector,
  Field,
  ModalGlobal,
  ReanderField,
  ReanderSelect,
  ReanderTextArea,
  formValueSelector,
  Component,
  connect,
  Tabel,
  Link,
  PanelContent,
  reduxForm,
  Panel,
  PanelHeader,
  PanelBody,
  Avatar,
  momen,
};
