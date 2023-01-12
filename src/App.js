import "./App.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import CatContextProvider from "./pages/home/CatContext";
import { router } from "./navigation";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CatContextProvider>
          <RouterProvider router={router} />
        </CatContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
