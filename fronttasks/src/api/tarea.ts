import { CreateTask, UpdateTask } from "../interface/task.interface";

const API = "http://localhost:3000/api";

export const getTasksRequest = async () => fetch(`${API}/tareas`);

export const getTaskIdRequest = async (id: string) =>
  fetch(`${API}/tareas/${id}`);

export const createTaskRequest = async (tarea: CreateTask) =>
  fetch(`${API}/tareas`, {
    method: "POST",
    body: JSON.stringify(tarea),
    headers: {
      "Content-Type": "application/json", // Aquí está la corrección
    },
  });

export const updateTaskRequest = async (id: string, tarea: UpdateTask) =>
  fetch(`${API}/tareas/${id}`, {
    method: "PUT",
    body: JSON.stringify(tarea),
    headers: {
      "Content-Type": "application/json", // Aquí está la corrección
    },
  });

export const deleteTaskRequest = async (id: string) =>
  fetch(`${API}/tareas/${id}`, {
    method: "DELETE",
  });
