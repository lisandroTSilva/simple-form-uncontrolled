import React from 'react';

import { useSimpleForm } from 'simple-form-uncontrolled';

const App = () => {
    const [ref] = useSimpleForm();

    return (
        <form ref={ref}>
            <fieldset name='fieldName2'>
                <fieldset name='fieldName'>
                    <input type='text' name='nome1' defaultValue='1' />
                </fieldset>
            </fieldset>
            <div>
                <input type='text' name='nome2' defaultValue='2' />
            </div>
            <div>
                <span>
                    <fieldset name='fieldName4'>
                        <input type='text' name='nome3' defaultValue='3' />
                    </fieldset>
                </span>
            </div>

            <fieldset name='fieldNameComDois'>
                <input
                    type='text'
                    name='filhofieldset'
                    defaultValue='txugo'
                ></input>

                <select name='select4' defaultValue='2'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>

                <textarea
                    name='nomeTextArea'
                    defaultValue={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                iure quidem laborum, similique, sapiente harum praesentium,
                veritatis optio inventore expedita sed! Obcaecati libero
                temporibus animi reprehenderit ipsam ab aliquam modi.`}
                ></textarea>
            </fieldset>
        </form>
    );
};

export default App;
