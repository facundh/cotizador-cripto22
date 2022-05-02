import styled from "@emotion/styled"


const ErrorMessage = styled.div`
    background-color: red;
    color: white;
    padding: 15px;
    font-size: 25px;
    border-radius: 10px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    box-shadow:18px -3px 15px 10px #000000 ;
    margin-bottom: 10px;
`




const Error = ({children}) => {
  return (
      
    <ErrorMessage>
            {children}
    </ErrorMessage>
  
  
  )
}

export default Error