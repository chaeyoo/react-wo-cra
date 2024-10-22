import React from 'react';
import { StyledButton } from '@common/Button/Button.styles';
import { ButtonProps } from '@common/Button/Button.types';

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    ...props
}) => {
    return (
        <StyledButton variant={variant} size={size} {...props}>
            {children}
        </StyledButton>
    );
};

