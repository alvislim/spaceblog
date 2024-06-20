import { useQuery } from "@tanstack/react-query";
import { localBackEnd } from "../constant";
import { CommentsPayload } from "../type/comments";

export const postComment = (id: string, comment: string, name: string) => {
  return fetch(`${localBackEnd}/postComment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      commentInput: comment,
      name: name,
    }),
  });
};

const getComments = (): Promise<CommentsPayload> => {
  return fetch(`${localBackEnd}/getComments`)
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

export const useComments = () => {
  return useQuery<CommentsPayload, Error>({
    queryKey: ["getComments"],
    queryFn: () => getComments(),
  });
};
