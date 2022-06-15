import styled from "styled-components";
const Container = styled.div`  
        height: 30px;
        background-color: teal;
        color: white;
        display: flex;
        font-weight: 500px;
        justify-content: center;
        align-items: center;
`;

const Announcement = () => {
  return (
    <Container>Hurry UP!!! Free Shipping on Orders Over $50</Container>
  )
}

export default Announcement