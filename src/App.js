import "./App.css";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./globals/theme";
import { RecoilRoot } from "recoil";
import { Router } from "@reach/router";
import { useAuth0 } from "./contexts/auth0context";
import { SWRConfig } from "swr";
import { swrFetcher } from "./api/setup";
import useUsersApi from "./api/users";
import Home from "./pages/Home";

function App() {
  // hook used with auth0 to help determine if user is authenticated
  const { isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();

  // custom hook used to call the backend of the application
  const { loginToBackend } = useUsersApi();
  console.log("IS AUTHENTICATED", isAuthenticated);

  // useEffect that will determine if a user is authenticated via auth0
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      async function setTokenToLocalStorage() {
        const idToken = await getIdTokenClaims();
        localStorage.setItem(
          "auth",
          JSON.stringify({ id_token: idToken.__raw })
        );
        await loginToBackend();
      }
      setTokenToLocalStorage();
    }
  }, [isAuthenticated, isLoading, getIdTokenClaims, loginToBackend]);

  return (
    <div className="App">
      <RecoilRoot>
        <SWRConfig
          value={{
            fetcher: swrFetcher,
          }}
        >
          <ThemeProvider theme={theme}>
            <Router>
              <Home path="/" />
              {isAuthenticated && <Home path="/" />}
            </Router>
          </ThemeProvider>
        </SWRConfig>
      </RecoilRoot>
    </div>
  );
}

export default App;
