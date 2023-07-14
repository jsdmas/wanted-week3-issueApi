import { Iuser } from './dataType';

export interface DetailDataType {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: Iuser;
  labels: object;
  state: string;
  locked: boolean;
  assignee: object;
  assignees: object;
  milestone: object;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: object;
  author_association: string;
  active_lock_reason: object;
  body: string;
  closed_by: object;
  reactions: object;
  timeline_url: string;
  performed_via_github_app: object;
  state_reason: object;
}
