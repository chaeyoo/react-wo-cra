export type OperationType = '+' | '-' | '*' | '/';

export interface CalculatorProps {
    title: string;
    theme?: 'light' | 'dark';
}

export interface StyledCalculatorProps {
    theme: 'light' | 'dark';
}

export type CalculationHistory = string[];