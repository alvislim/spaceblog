interface Comments {
  name: string;
  comment: string;
  date: string;
}

interface Matrix {
  dateComment: string[];
  userComment: string[];
}

interface GenericAPI {
  message: string;
  success: boolean;
  code: number;
}

export interface CommentsPayload extends GenericAPI {
  payload: [{ commentId: string; comments: Comments[] }];
}

export interface MatrixPayload extends GenericAPI {
  payload: Matrix[];
}
