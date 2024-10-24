import { RadioProps } from "@components/Radio/Radio.types";

export const Radio: React.FC<RadioProps> = ({ label, name, value, checked, onChange }) => {
    return (
        <label>
            <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
            {label}
        </label>
    );
};