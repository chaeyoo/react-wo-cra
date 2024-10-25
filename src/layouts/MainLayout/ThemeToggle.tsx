import styled from "@emotion/styled";
import { useTheme } from "@context/ThemeContext";
import { Theme } from "../../types/theme";

const ToggleButton = styled.button<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.background};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
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
      {isDark ? "☀️" : "🌙"}
    </ToggleButton>
  );
};
