import { CreateTask, UpdateTask } from "../interface/task.interface";
import useAuthStore from "../store/useAuthStore";

const API = "http://localhost:3000/api";

export const getAuthHeaders = () => {
  const token = useAuthStore.getState().token;
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const getTasksRequest = async () => fetch(`${API}/tareas`);

export const getTaskIdRequest = async (id: string) =>
  fetch(`${API}/tareas/${id}`);

export const createTaskRequest = async (tarea: CreateTask) =>
  fetch(`${API}/tareas`, {
    method: "POST",
    body: JSON.stringify(tarea),
    headers: getAuthHeaders(),
  });

export const updateTaskRequest = async (id: string, tarea: UpdateTask) =>
  fetch(`${API}/tareas/${id}`, {
    method: "PUT",
    body: JSON.stringify(tarea),
    headers: getAuthHeaders(),
  });

export const deleteTaskRequest = async (id: string) =>
  fetch(`${API}/tareas/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
