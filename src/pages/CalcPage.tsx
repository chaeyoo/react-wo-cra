import { Flex } from "@components/Flex/Flex.styles";
import {
  InefficientCalculator,
  OptimizedCalculator,
} from "@features/calculator/containers";

export default function CalcPage() {
  return (
    <>
      <Flex
        direction="row"
        align="center"
        justify="center"
        gap={20}
        style={{ marginBottom: "1rem" }}
      >
        <InefficientCalculator title="" />
        <OptimizedCalculator title="" />
      </Flex>
      <hr />
      <h5>개선 포인트</h5>
      <ol>
        <li>상태(State) 변경</li>
        useState 훅을 통해 생성된 모든 상태의 변경은 리렌더링을 유발
        <li>불필요한 리렌더링을 일으키는 부분들</li>
        handleCalculate 함수 내에서 history 업데이트 시 새 배열을 만드는 방식
        <br />
        historyItems를 컴포넌트 함수 내부에서 매번 새로 생성
        <li>Props 변경</li>
        title이나 theme props가 변경될 때도 리렌더링이 발생
      </ol>

      <h5>개선 처리사항</h5>
      <ul>
        <li>historyItems 계산을 useMemo로 최적화</li>
        <li>handleCalculate 함수를 useCallback으로 메모이제이션</li>
        <li>입력 핸들러들도 useCallback으로 최적화</li>
        <li>Input과 Select 컴포넌트 메모이제이션</li>
        <li>히스토리 관련 컴포넌트 분리</li>
        <li>계산 로직 최적화</li>
        <li>Select 옵션을 useMemo로 분리하여 불필요한 재생성 방지</li>
        <li>컴포넌트 구조를 더 작은 단위로 분리하여 리렌더링 범위 최소화</li>
      </ul>
    </>
  );
}
