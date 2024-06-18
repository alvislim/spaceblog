import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Articles from "./component/articles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Articles />
    </QueryClientProvider>
  );
}

export default App;
