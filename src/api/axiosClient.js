import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004/",
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export async function loginUser({ email, password }) {
  try {
    const response = await instance.post("/users/login", { email, password });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export const getContacts = async () => {
  try {
    const response = await instance.get("/api/contacts");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
