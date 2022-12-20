
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import {ImSpinner6} from "react-icons/im"
import RoutesMain from "./routes";
import { StyledLoading } from "./styles/loading";
import { ThemeProvider } from "styled-components";
import { darkTheme, mainTheme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const {globalLoading, darkMode} = useContext(UserContext)


 

  return (
    <div className="App">
      {globalLoading ? (
        <StyledLoading>
          <ImSpinner6 className="loading" />
        </StyledLoading>
      ) : (
        <>
          <ThemeProvider theme={darkMode ? darkTheme : mainTheme}>
            <RoutesMain />
          </ThemeProvider>
        </>
      )}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? "dark" : "light"}
        />
    </div>
  );
}

export default App;
