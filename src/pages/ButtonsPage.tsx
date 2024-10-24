import { Button } from "@components/Button";
import { Flex } from "@components/Flex/Flex.styles";

export default function Buttons() {
  return (
    <Flex direction="column" align="start" justify="center">
      <Button>Default Button</Button>
      <Button variant="primary" size="large">
        Large Primary Button
      </Button>
      <Button variant="secondary" size="small">
        Small Secondary Button
      </Button>
      <Button variant="danger" onClick={() => console.log("Danger!")}>
        Danger Button
      </Button>
    </Flex>
  );
}
