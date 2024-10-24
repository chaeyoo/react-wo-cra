import React, { useState, useCallback, useMemo } from 'react';
import { CalculatorProps, OperationType, CalculationHistory } from '../components/Calculator/Calculator.types';
import * as S from '../components/Calculator/Calculator.styles';

export const OptimizedCalculator: React.FC<CalculatorProps> = ({ title, theme = 'light' }) => {
    const [firstNumber, setFirstNumber] = useState<string>('0');
    const [secondNumber, setSecondNumber] = useState<string>('0');
    const [operation, setOperation] = useState<OperationType>('+');
    const [history, setHistory] = useState<CalculationHistory>([]);

    // 메모이제이션된 이벤트 핸들러
    const handleFirstNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstNumber(e.target.value);
    }, []);

    const handleSecondNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondNumber(e.target.value);
    }, []);

    const handleOperationChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setOperation(e.target.value as OperationType);
    }, []);

    // 메모이제이션된 계산 결과
    const calculateResult = useMemo(() => {
        console.log('Calculating result...');
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return 0;
        }
    }, [firstNumber, secondNumber, operation]);

    // 메모이제이션된 히스토리 아이템
    const historyItems = useMemo(() =>
        history.map((item, index) => (
            <S.HistoryItem key={index}>
                {item}
            </S.HistoryItem>
        )),
        [history]
    );

    const handleCalculate = useCallback(() => {
        const calculation = `${firstNumber} ${operation} ${secondNumber} = ${calculateResult}`;
        setHistory(prev => [...prev, calculation]);
    }, [firstNumber, secondNumber, operation, calculateResult]);

    return (
        <S.CalculatorWrapper theme={theme}>
            <h2>{title}</h2>
            <S.InputGroup>
                <S.StyledInput
                    type="number"
                    value={firstNumber}
                    onChange={handleFirstNumberChange}
                />
                <S.StyledSelect
                    value={operation}
                    onChange={handleOperationChange}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">×</option>
                    <option value="/">÷</option>
                </S.StyledSelect>
                <S.StyledInput
                    type="number"
                    value={secondNumber}
                    onChange={handleSecondNumberChange}
                />
            </S.InputGroup>
            <S.Button onClick={handleCalculate}>계산하기</S.Button>
            <div>
                <h3>계산 기록:</h3>
                {historyItems}
            </div>
        </S.CalculatorWrapper>
    );
};