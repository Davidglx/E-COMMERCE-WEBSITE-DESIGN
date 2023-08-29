import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`
height: 60vh;
background-color: #e4b6b6;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
    
`

const Title = styled.div`
font-size: 70px;
margin-bottom: 20px;
font-family: cursive;
`

const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer  = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 10px solid lightgray;
`

const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`

const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletters</Title>
        <Desc>Get Timely updates from your favourite products.</Desc>
        <InputContainer>
        <Input  placeholder="your email"/>
        <Button>
            <SendIcon />
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;