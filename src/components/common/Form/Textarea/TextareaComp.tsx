import { StyledTextarea } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";

export const Textarea: React.FC<TextareaProps> = ({ label, error, ...props }) => {
    return (
        <div>
            <label>
                {label}
                <StyledTextarea {...props} />
            </label>
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    );
};
