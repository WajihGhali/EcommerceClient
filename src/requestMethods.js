import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGUwODg3Mzc5NGExYmExZTg3Nzk5MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDUxMjQwMSwiZXhwIjoxNjcwNzcxNjAxfQ.hA1uTh2p_1h0SGmWEZwnGpXCFlQqxjRGTYk437W7mAw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})