export interface Project {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  tasks: Task[];
  isSelected: boolean;
}

export interface Task {
  id: string;
  title: string;
}
