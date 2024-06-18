import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import SpaceBlog from "./page/spaceBlog";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SpaceBlog />
    </QueryClientProvider>
  );
}

export default App;
