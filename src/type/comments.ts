interface Comments {
  name: string;
  comment: string;
  date: string;
}
interface GenericAPI {
  message: string;
  success: boolean;
  code: number;
}

export interface UserComment {
  _id: string;
  userName: string;
  comments: number;
}

export interface CommentsPayload extends GenericAPI {
  payload: [{ commentId: string; comments: Comments[] }];
}

export interface MatrixPayload extends GenericAPI {
  payload: {
    dateComment: string[];
    userComment: UserComment[];
  };
}
