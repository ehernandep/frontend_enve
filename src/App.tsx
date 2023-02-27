import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./models";
import { Provider } from "react-redux";
import store from "./redux/store";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound/RoutesWithNotFound.utility";
import { AuthGuard } from "./guards";
import SingUp from "./pages/Public/SingUp/SingUp";
import ForgotPassword from "./pages/Public/ForgotPassword/ForgotPassword";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, CssBaseline } from "@mui/material";

const Login = lazy(() => import("./pages/Public/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path='/'
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.SIGNUP} element={<SingUp />} />
              <Route
                path={PublicRoutes.FORGOTPASSWORD}
                element={<ForgotPassword />}
              />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
