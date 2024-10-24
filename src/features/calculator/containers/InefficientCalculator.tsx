import React, { useState } from 'react';
import { CalculatorProps, OperationType, CalculationHistory } from '../components/Calculator/Calculator.types';
import * as S from '../components/Calculator/Calculator.styles';

export const InefficientCalculator: React.FC<CalculatorProps> = ({ title, theme = 'light' }) => {
    const [firstNumber, setFirstNumber] = useState<string>('0');
    const [secondNumber, setSecondNumber] = useState<string>('0');
    const [operation, setOperation] = useState<OperationType>('+');
    const [history, setHistory] = useState<CalculationHistory>([]);

    // 매번 새로운 함수 생성
    const handleCalculate = () => {
        // 불필요한 반복 연산
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            switch (operation) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case '/':
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
            }
        }

        // 매번 새로운 배열 생성
        setHistory([...history, `${firstNumber} ${operation} ${secondNumber} = ${result}`]);
    };

    // 매번 새로운 배열 매핑
    const historyItems = history.map((item, index) => (
        <S.HistoryItem key={index}>
            {item}
        </S.HistoryItem>
    ));

    return (
        <S.CalculatorWrapper theme={theme}>
            <h2>{title}</h2>
            <S.InputGroup>
                <S.StyledInput
                    type="number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                />
                <S.StyledSelect
                    value={operation}
                    onChange={(e) => setOperation(e.target.value as OperationType)}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">×</option>
                    <option value="/">÷</option>
                </S.StyledSelect>
                <S.StyledInput
                    type="number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)}
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