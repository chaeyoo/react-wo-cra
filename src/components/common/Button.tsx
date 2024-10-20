import React from 'react';
import styled from '@emotion/styled';

// 버튼의 변형(variant)을 정의합니다.
type ButtonVariant = 'primary' | 'secondary' | 'danger';

// 버튼 props의 타입을 정의합니다.
interface ButtonProps {
    variant?: ButtonVariant;
    size?: 'small' | 'medium' | 'large';
}

// 스타일드 컴포넌트의 props 타입을 정의합니다.
type StyledButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 기본 버튼 스타일을 정의합니다.
const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  /* 크기에 따른 스타일 */
  ${props => {
        switch (props.size) {
            case 'small':
                return `
          padding: 8px 16px;
          font-size: 12px;
        `;
            case 'large':
                return `
          padding: 16px 32px;
          font-size: 18px;
        `;
            default: // medium
                return `
          padding: 12px 24px;
          font-size: 16px;
        `;
        }
    }}

  /* 변형(variant)에 따른 스타일 */
  ${props => {
        switch (props.variant) {
            case 'primary':
                return `
          background-color: #007bff;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
            case 'secondary':
                return `
          background-color: #6c757d;
          color: white;
          &:hover {
            background-color: #545b62;
          }
        `;
            case 'danger':
                return `
          background-color: #dc3545;
          color: white;
          &:hover {
            background-color: #bd2130;
          }
        `;
            default:
                return `
          background-color: #f8f9fa;
          color: #212529;
          &:hover {
            background-color: #e2e6ea;
          }
        `;
        }
    }}
`;

// Button 컴포넌트를 정의합니다.
export const Button: React.FC<StyledButtonProps> = ({
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