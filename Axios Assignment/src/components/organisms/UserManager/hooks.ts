import { useEffect, useState } from "react";
import userService from "@services/userService";
import type { User } from "@utils/interfaces";

export const useUserManager = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<User | null>(null);

  const fetchUsers = async () => {
    const res = await userService.getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (data: Omit<User, "id">, id?: number) => {
    if (id) {
      await userService.updateUser(id, data);
      setSelected(null);
    } else {
      await userService.addUser(data);
    }
    fetchUsers();
  };

  const handleDelete = async (id: number) => {
    await userService.deleteUser(id);
    fetchUsers();
  };

  return {
    users,
    selected,
    setSelected,
    handleSubmit,
    handleDelete,
  };
};
