import "./App.css";
import Container from "./components/container";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
}

export default App;
