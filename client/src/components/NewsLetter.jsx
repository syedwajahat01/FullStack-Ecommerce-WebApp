import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
        height: 60vh;
        background-color: #fcf5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column
        `;
const Title = styled.h1`
        margin-top: 50px;
        font-size: 70px;
        margin-bottom: 20px;
`;

const Description = styled.div`
        font-style: 24px;
        font-weight: 300;
        margin-bottom: 20px;
        ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
        width: 50%;
        height: 40px;
        background-color: white;
        display: flex;
        border-radius: 25px;
        justify-content: space-between;
        ${mobile({ width: "80%" })}
`;

const Input = styled.input`
        flex:8;
        padding-left: 20px;
        border-radius: 25px;

`;
const Button = styled.button`
        flex: 1;
        border: none;
        background-color: teal;
        color: white;
        border-radius: 25px;
        
 `;

const NewsLetter = () => {
  return (
    <Container>
    <Title>NewsLetter</Title>
    <Description>Get Timely Updates from your Favorite Products. </Description>
    <InputContainer>
    <Input placeholder='Your Email'/>
    <Button>
    <Send/>
    </Button>
    </InputContainer>
    </Container>
  )
}

export default NewsLetter;