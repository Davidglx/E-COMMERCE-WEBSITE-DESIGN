import styled from 'styled-components';


const Container  = styled.div`
    height: 30px;
    background-color: teal;
    color:  white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    font-family: cursive;

    @media (max-width: 768px) {
    font-size: 14px;
    padding: .5rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  }
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on orders Over $50
    </Container>
  )
}

export default Announcement;