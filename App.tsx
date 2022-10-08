import { Routes } from "./src/routes";
import "react-native-gesture-handler";
import { LoginProvider } from "./src/context/LoginContext";

export default function App() {
  return (
    <LoginProvider>
      <Routes />
    </LoginProvider>
  );
}
