export interface CommentsPayload {
  message: string;
  payload: {
    long: string;
    short: string;
  };
  success: boolean;
  code: number;
}
