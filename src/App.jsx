import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes.jsx";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme.js";
import CircularBackdropLoader from "./components/CircularBackdropLoader.jsx";
import {useSelector} from "react-redux";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    const isLoading = useSelector((state) => state.loader.isLoading);

  return (
      <>
          { isLoading && <CircularBackdropLoader/>}
          <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                  <BrowserRouter>
                      <AppRoutes/>
                  </BrowserRouter>
              </QueryClientProvider>
          </ThemeProvider>
      </>
  )
}

export default App
