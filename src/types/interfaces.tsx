export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

export interface TaskItem {
  id: string;
  projectId: string;
  text: string;
}
