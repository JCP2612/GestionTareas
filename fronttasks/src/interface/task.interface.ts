export interface Tarea {
  _id: string;
  title: string;
  description?: string;
  priority: "Baja" | "Media" | "Alta";
  complete?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateTask = Omit<Tarea, "_id" | "createdAt" | "updatedAt">;

export type UpdateTask = Partial<CreateTask>;
