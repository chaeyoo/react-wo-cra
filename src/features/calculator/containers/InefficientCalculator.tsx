import React, { useState } from "react";
import {
  CalculatorProps,
  OperationType,
  CalculationHistory,
} from "../components/Calculator/Calculator.types";
import * as S from "../components/Calculator/Calculator.styles";
import { Input } from "@components/Input";
import { Select } from "@components/Select";

export const InefficientCalculator: React.FC<CalculatorProps> = ({
  title,
  theme = "light",
}) => {
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [secondNumber, setSecondNumber] = useState<string>("0");
  const [operation, setOperation] = useState<OperationType>("+");
  const [history, setHistory] = useState<CalculationHistory>([]);

  const handleCalculate = () => {
    let result = 0;
    switch (operation) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }

    setHistory([
      ...history,
      `${firstNumber} ${operation} ${secondNumber} = ${result}`,
    ]);
  };

  const historyItems = history.map((item, index) => (
    <S.HistoryItem key={index}>{item}</S.HistoryItem>
  ));

  return (
    <S.CalculatorWrapper theme={theme}>
      <h2>{title}</h2>
      <S.InputGroup>
        <Input
          label=""
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <Select
          label=""
          value={operation}
          onChange={(e) => setOperation(e.target.value as OperationType)}
          options={[
            { label: "+", value: "+" },
            { label: "-", value: "-" },
            { label: "x", value: "*" },
            { label: "÷", value: "/" },
          ]}
        />
        <Input
          label=""
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
