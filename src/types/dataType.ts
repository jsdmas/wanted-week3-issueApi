export interface IissueData {
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
  labels: Ilabels;
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
  reactions: object;
  timeline_url: string;
  performed_via_github_app: object;
  state_reason: object;
  ad?: Ad;
}
export type Ad = {
  image: string;
  link: string;
  alt: string;
  isAd: boolean;
};

export interface Iuser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

interface Ilabels {
  color: string;
  default: false;
  description: string;
  id: number;
  name: string;
  node_id: string;
  url: string;
}
