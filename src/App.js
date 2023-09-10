import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage} />
      <Route path="/chats" exact component={Chatpage} />
    </div>
  );
}

export default App;
