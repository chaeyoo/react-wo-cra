import React from 'react';
import { Button } from './components/common/Button';

const App: React.FC = () => {
    return <div>

        <Button>Default Button</Button>
        <Button variant="primary" size="large">Large Primary Button</Button>
        <Button variant="secondary" size="small">Small Secondary Button</Button>
        <Button variant="danger" onClick={() => console.log('Danger!')}>
            Danger Button
        </Button>

    </div>
};

export default App;