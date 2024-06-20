interface Comments {
  name: string;
  comment: string;
  date: string;
}
export interface CommentsPayload {
  message: string;
  payload: [{ commentId: string; comments: Comments[] }];
  success: boolean;
  code: number;
}
