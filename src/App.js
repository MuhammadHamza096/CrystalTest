import "./App.scss";
import Routing from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routing />
      </div>
    </QueryClientProvider>
  );
}

export default App;
