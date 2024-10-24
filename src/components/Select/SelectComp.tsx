import { StyledSelect } from "@common/Form/Select/Select.styles";
import { SelectProps } from "@common/Form/Select/Select.types";

export const Select: React.FC<SelectProps> = ({ label, options, error, ...props }) => {
    return (
        <div>
            <label>
                {label}
                <StyledSelect {...props}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </StyledSelect>
            </label>
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    );
};
