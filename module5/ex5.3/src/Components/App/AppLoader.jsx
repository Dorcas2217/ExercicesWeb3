import { ProviderWrapper as OpignonProviderWrapper } from "../../Context/counterContext";
import { ProviderWrapper as  ThemeProviderWrapper } from "../../Context/themeCountext";
import App from "./App";


const AppLoader= () => {
  return (
    <OpignonProviderWrapper>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </OpignonProviderWrapper>
  );
};

export default AppLoader