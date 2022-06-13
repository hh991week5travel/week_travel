import axios from "axios";


const TOKEN = localStorage.getItem("token");

const api = axios.create({
    // 기본 서버주소
    baseURL: "http://15.164.210.163/",
});