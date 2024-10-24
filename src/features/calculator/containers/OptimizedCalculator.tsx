import React, { useCallback, useMemo, useState } from "react";
import {
  CalculatorProps,
  OperationType,
  CalculationHistory,
} from "../components/Calculator/Calculator.types";
import * as S from "../components/Calculator/Calculator.styles";
import { Input, InputProps } from "@components/Input";
import { Select, SelectProps } from "@components/Select";

// 1. Input 컴포넌트 메모이제이션
const MemoizedInput = React.memo(
  ({ label, type, value, onChange }: InputProps) => (
    <Input label={label} type={type} value={value} onChange={onChange} />
  )
);

// 2. Select 컴포넌트 메모이제이션
const MemoizedSelect = React.memo(
  ({ label, value, onChange, options }: SelectProps) => (
    <Select label={label} value={value} onChange={onChange} options={options} />
  )
);

// 3. 히스토리 아이템을 별도 컴포넌트로 분리
const HistoryItem = React.memo(({ item }: { item: string }) => (
  <S.HistoryItem>{item}</S.HistoryItem>
));

// 4. 히스토리 리스트 컴포넌트
const HistoryList = React.memo(({ items }: { items: string[] }) => (
  <div>
    <h3>계산 기록:</h3>
    {items.map((item, index) => (
      <HistoryItem key={index} item={item} />
    ))}
  </div>
));

export const OptimizedCalculator: React.FC<CalculatorProps> = ({
  title,
  theme = "light",
}) => {
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [secondNumber, setSecondNumber] = useState<string>("0");
  const [operation, setOperation] = useState<OperationType>("+");
  const [history, setHistory] = useState<CalculationHistory>([]);

  const handleFirstNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstNumber(e.target.value);
    },
    []
  );

  const handleSecondNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSecondNumber(e.target.value);
    },
    []
  );

  const handleOperationChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setOperation(e.target.value as OperationType);
    },
    []
  );

  // 5. 계산 로직을 useMemo로 분리
  const calculateResult = useMemo(() => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return 0;
    }
  }, [firstNumber, secondNumber, operation]);

  const handleCalculate = useCallback(() => {
    setHistory((prev) => [
      ...prev,
      `${firstNumber} ${operation} ${secondNumber} = ${calculateResult}`,
    ]);
  }, [firstNumber, secondNumber, operation, calculateResult]);

  // 6. Select options 메모이제이션
  const operationOptions = useMemo(
    () => [
      { label: "+", value: "+" },
      { label: "-", value: "-" },
      { label: "x", value: "*" },
      { label: "÷", value: "/" },
    ],
    []
  );

  return (
    <S.CalculatorWrapper theme={theme}>
      <h2>{title}</h2>
      <S.InputGroup>
        <MemoizedInput
          label=""
          type="number"
          value={firstNumber}
          onChange={handleFirstNumberChange}
        />
        <MemoizedSelect
          label=""
          value={operation}
          onChange={handleOperationChange}
          options={operationOptions}
        />
        <MemoizedInput
          label=""
          type="number"
          value={secondNumber}
          onChange={handleSecondNumberChange}
        />
      </S.InputGroup>
      <S.Button onClick={handleCalculate}>계산하기</S.Button>
      <HistoryList items={history} />
    </S.CalculatorWrapper>
  );
};
