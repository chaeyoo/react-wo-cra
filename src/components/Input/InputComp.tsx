import { StyledInput } from "@components/Input/Input.styles";
import { InputProps } from "@components/Input/Input.types";

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <div>
            <label>
                {label}
                <StyledInput {...props} />
            </label>
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    );
};

export default Input;
