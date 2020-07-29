import React from 'react';
import './App.css';

import { useSimpleForm } from 'simple-form-uncontrolled';

const App = () => {
    const [ref] = useSimpleForm();

    return (
        <form
            ref={ref}
            onSubmit={(e) => {
                e.preventDefault();
                console.log('evento json: ', e.target.getJson());
            }}
            noValidate
        >
            Arquivo: <input type='file' name='file' />
            <br />
            Arquivos: <input type='file' name='files' multiple />
            <br />
            {/*
            <input
                type='image'
                name='image'
                alt='texugo'
                defaultValue='image'
            />
            
            <input type='reset' name='reset' defaultValue='reset' />
            <input type='submit' name='submit' defaultValue='submit' />
            <input type='button' name='button' defaultValue='button' />

            <input type='checkbox' name='checkbox' defaultValue='checkbox 1' /> 1
            <input type='checkbox' name='checkbox' defaultValue='checkbox 2' /> 2
            <input type='color' name='color' defaultValue='color' />
            <input type='date' name='date' defaultValue='date' />
            <input type='datetime-local' name='local' defaultValue='local' />
            <input type='email' name='email' defaultValue='email' />
            <input type='hidden' name='hidden' defaultValue='hidden' />
            <input type='month' name='month' defaultValue='month' />
            <input type='number' name='number' defaultValue='number' />
            <input type='password' name='password' defaultValue='password' />
            <input type='radio' name='radio' defaultValue='radio' />
            <input type='range' name='range' defaultValue='range' />
            <input type='search' name='search' defaultValue='search' />
            <input type='tel' name='tel' defaultValue='tel' />
            <input type='text' name='text' defaultValue='text' />
            <input type='time' name='time' defaultValue='time' />
            <input type='url' name='url' defaultValue='url' />
            <input type='week' name='week' defaultValue='week' />


            <select multiple name='multiplos-options'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
             */}
            {/* <input type='text' name='teste' />

            <select name='unico-options'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            <select multiple name='multiplos-options'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            <div>
                <input type='checkbox' name='multiplos-checkbox' value='1' /> 1
                <input type='checkbox' name='multiplos-checkbox' value='2' /> 2
                <input type='checkbox' name='multiplos-checkbox' value='3' /> 3
            </div>

            <div>
                <input type='radio' name='radio' value='1' /> 1
                <input type='radio' name='radio' value='2' /> 2
                <input type='radio' name='radio' value='3' /> 3
            </div> */}
            <button type='submit'>getJson</button>
        </form>
    );
};

export default App;

/*
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
            <input type='search' name='search' />
            <input type='submit' name='submeter' value='SUBMETER FORMULÁRIO' />
            <input type='reset' name='reset' value='RESETAR FORMULÁRIO' />
            <input type='button' name='botao' value='BOTÃO INPUT' />
*/
