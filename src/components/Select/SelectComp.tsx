import { StyledSelect } from "@components/Select/Select.styles";
import { SelectProps } from "@components/Select/Select.types";

export const Select: React.FC<SelectProps> = ({
  label = "",
  options,
  error,
  ...props
}) => {
  return (
    <div>
      <label>
        {label}
        <StyledSelect {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </label>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};
