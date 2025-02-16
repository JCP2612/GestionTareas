import { CreateTask, UpdateTask } from "../interface/task.interface";

const API = "http://localhost:3000/api";

export const getTasksRequest = async () => fetch(`${API}/tareas`);

export const getTaskIdRequest = async (id: string) =>
  fetch(`${API}/tareas/${id}`);

export const createTaskRequest = async (task: CreateTask) =>
  fetch(`${API}/tareas`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type:": "application/json",
    },
  });

export const updateTaskRequest = async (id: string, task: UpdateTask) =>
  fetch(`${API}/tareas/${id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type:": "application/json",
    },
  });

export const deleteTaskRequest = async (id: string) =>
  fetch(`${API}/tareas/${id}`, {
    method: "DELETE",
  });
