import React from 'react';

import { useSimpleForm } from 'simple-form-uncontrolled';

const App = () => {
    const [ref] = useSimpleForm();

    return (
        <form ref={ref}>
            <input type='text' />
        </form>
    );
};

export default App;
