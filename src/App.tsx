
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import {ImSpinner6} from "react-icons/im"
import RoutesMain from "./routes";
import { StyledLoading } from "./styles/loading";

function App() {

  const {globalLoading} = useContext(UserContext)

  return (
    <div className="App">
      {globalLoading ? (
        <StyledLoading>
          <ImSpinner6 className="loading" />
        </StyledLoading>
      ) : (
        <>
          <RoutesMain />
        </>
      )}
    </div>
  );
}

export default App;
