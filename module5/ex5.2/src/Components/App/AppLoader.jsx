import { ProviderWrapper as OpignonProviderWrapper } from "../../Context/counterContext";
import App from "./App";

const AppLoader= () => {
  return (
    <OpignonProviderWrapper >
        <App />

      </OpignonProviderWrapper >
  )
}

export default AppLoader