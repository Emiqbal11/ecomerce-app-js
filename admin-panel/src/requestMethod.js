import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzQ4NzNjYjcxNTY5OTQyMTVhMGY0YiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njg1ODEyMDIsImV4cCI6MTY2ODg0MDQwMn0.j-yPBG3I9NPK6ZS5g5_Z_wrLthJSb-DQCQx3yd6uRHc"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
 