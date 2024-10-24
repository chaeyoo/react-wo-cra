import styled from '@emotion/styled';
import { StyledButtonProps } from '@components/Button/Button.types';

export const StyledButton = styled.button<StyledButtonProps>`
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

