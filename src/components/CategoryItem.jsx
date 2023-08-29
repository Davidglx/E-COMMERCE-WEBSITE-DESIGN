import styled from 'styled-components';
import { mobile} from '../responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px ;
    position: relative;
`
const Image = styled.img`
width: 100%;

height: 100%;
object-fit: cover;
${mobile({ height: "30vh" })}
 `
 const Info = styled.h1`
 position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0; 
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
 `
const Title  = styled.div`
color: white;
margin-bottom: 20px;
font-family: cursive;
font-weight: bolder;

`
const Button = styled.button`
border: none;
padding: 20px;
border-radius: 10px;
background-color: white;
color: teal;
cursor: pointer;
font-weight: bolder;

`


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
        </Container>
    )
}

export default CategoryItem; 