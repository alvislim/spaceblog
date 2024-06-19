import { BrowserRouter, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SpaceBlog from "../page/spaceBlog";

const baseRoutes = [
  {
    path: "/",
    element: <SpaceBlog />,
    children: [],
  },
];

const App = () => {
  const element = useRoutes([...baseRoutes]);
  return element;
};

const queryClient = new QueryClient();

export const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
