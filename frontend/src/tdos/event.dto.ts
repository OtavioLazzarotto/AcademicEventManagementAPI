export interface EventDto {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  createdBy: string;
}

export interface EventResponse {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  createdBy: {
    id: string;
    name: string;
    email: string;
    roles: string;
  };
  created_at: Date;
  updated_at: Date;
}