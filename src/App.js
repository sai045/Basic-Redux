import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import HooksIceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer />
        <NewCakeContainer />
        <HooksIceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
