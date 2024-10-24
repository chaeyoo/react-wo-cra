import { Flex } from "@components/Flex/Flex.styles";
import { InefficientCalculator, OptimizedCalculator } from "@features/calculator/containers";

export default function Calculator() {
    return (
        <>
            <Flex direction="column" justify="start" align="start">
                <h3>성능 비교</h3>
                <Flex justify="center" align="center" direction="row" gap={30}>
                    <InefficientCalculator title="Bad" />
                    <OptimizedCalculator title="Optimized" />
                </Flex>
            </Flex>

        </>
    )
}