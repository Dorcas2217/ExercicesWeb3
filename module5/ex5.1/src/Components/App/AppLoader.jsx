import { ProviderWrapper as LanguageProviderWrapper } from "../../Context/counterContext";
import App from "./App";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App />

      </LanguageProviderWrapper >
  )
}

export default AppLoader