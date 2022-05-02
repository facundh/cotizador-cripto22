import {useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: white;
  display: block;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: 'Quicksand', sans-serif;
`;

const Select = styled.select`
  
  padding: 14px;
  width: 100%;
  margin-bottom: 10px;
  border-radius:20px;
  text-align: center;
  font-size: 15px;
  color: black;
`

const useSelectCurrents = (label, options) => {
  const [state, setState] = useState('');

  const SelectCurrent = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </Select>
      
     
    </>
  );

  return [state ,SelectCurrent];
};

export default useSelectCurrents;
