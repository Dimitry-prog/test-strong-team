export type TodoType = {
  id: string;
  text: string;
  isDone: boolean;
  createdAt: Date;
};

export type TodoUpdateType = {
  id: string;
  body: Partial<TodoType>;
};
