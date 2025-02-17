export interface Tarea {
  _id?: string;
  title: string;
  description: string;
  priority: "Todas" | "Alta" | "Media" | "Baja";
  complete: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateTask = Omit<Tarea, "_id" | "createdAt" | "updatedAt">;

export type UpdateTask = Partial<CreateTask>;
