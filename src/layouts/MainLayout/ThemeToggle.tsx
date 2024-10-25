import styled from "@emotion/styled";
import { Theme } from "../../types/theme";
import { useTheme } from "@hooks/useTheme";

const ToggleButton = styled.button<{ theme: Theme }>`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark, theme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} theme={theme}>
      <h1> {isDark ? "☀️" : "🌙"}</h1>
    </ToggleButton>
  );
};
