export interface IClient {
  id: number;
  name: string;
  project_name?: string;
  comment?: string;
  create_at: Date;
  update_at: Date;
}
