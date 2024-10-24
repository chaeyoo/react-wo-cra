import styled from '@emotion/styled';
import { StyledCalculatorProps } from './Calculator.types';

export const CalculatorWrapper = styled.div<StyledCalculatorProps>`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme === 'dark' ? '#2d3748' : '#ffffff'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#2d3748'};
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  width: 120px;
  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  width: 80px;
  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #3182ce;
  }
`;

export const HistoryItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
  &:last-child {
    border-bottom: none;
  }
`;