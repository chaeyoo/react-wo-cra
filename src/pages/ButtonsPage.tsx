import { Button } from "@common/Button/ButtonComp";

export default function Buttons() {
    return <>
        <Button>Default Button</Button>
        <Button variant="primary" size="large">Large Primary Button</Button>
        <Button variant="secondary" size="small">Small Secondary Button</Button>
        <Button variant="danger" onClick={() => console.log('Danger!')}>
            Danger Button
        </Button>
    </>
}