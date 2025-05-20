import axios from "axios";
import type { User } from "../utils/interfaces";
const url = import.meta.env.VITE_API_URL + "/users";

const userService = {
  getUsers: () => axios.get<User[]>(url),
  addUser: (data: Omit<User, "id">) => axios.post(url, data),
  updateUser: (id: number, data: Omit<User, "id">) =>
    axios.put(`${url}/${id}`, data),
  deleteUser: (id: number) => axios.delete(`${url}/${id}`),
};

export default userService;
