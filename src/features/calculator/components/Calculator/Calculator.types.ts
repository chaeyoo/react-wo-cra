export type OperationType = '+' | '-' | '*' | '/';

export interface CalculatorProps {
    title: string;
    themeMode?: 'light' | 'dark';
}

export interface StyledCalculatorProps {
    themeMode: 'light' | 'dark';
}

export type CalculationHistory = string[];