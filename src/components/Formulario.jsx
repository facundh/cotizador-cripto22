import React from 'react';
import styled from '@emotion/styled';
import useSelectCurrents from '../hooks/useSelectCurrents';
import { currents } from '../data/current';

const InputSubmit = styled.input`
    background-color: #35B0B9  ;
    border: none;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    text-transform: uppercase;
    margin-top: 20px;
    font-weight: 700;
    color: white;
    font-size: 20px;
    &:hover{
        background-color: #3b9ea5;
        transition: 1s ease-in-out;
        box-shadow:11px 13px 14px 9px #000000;
        cursor: pointer;
    }
`

const Formulario = () => {
    const [ monedas, SelectCurrent] = useSelectCurrents('Selecciona tu moneda', currents);
    

    

  return (
    <form>
        <SelectCurrent />
        {monedas}
        

        <InputSubmit 
            type='submit'
            value='cotizar'
        />
    </form>
  )
}

export default Formulario