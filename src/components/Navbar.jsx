import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';


const Container = styled.div`
  height: 60px;
 
  @media (max-width: 768px) {
    background: red;
    font-size: 11px;
  }
`;



const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  /* position: relative; */
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 10%;
  }

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  @media (max-width: 768px) {
   left: 1rem;
   
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  @media (max-width: 768px) {
    font-size: 10px;
    width: 2rem;
    height: 2rem;
    
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  @media (max-width: 768px) {
   
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  @media (max-width: 768px) {
   font-size: 12px;
   width: 30%;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* ${mobile({ flex: 2, justifyContent: "center" })} */
  @media (max-width: 768px) {
   
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  /* ${mobile({ fontSize: "12px", marginLeft: "10px" })} */
  @media (max-width: 768px) {
   font-size: 10px;
  }
`;

const Navbar = () => {

    return (
        <Container>
            <Wrapper>

                <Left>
                    <Language>EN</Language>

                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>gingerLX.</Logo>
                </Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>  
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};


export default Navbar;

{/* <Container>
    <Wrapper>

        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder="Search" />
                <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
        </Left>

        <Center><Logo></Logo></Center>

        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                    < />
                </Badge>
            </MenuItem>
        </Right>

    </Wrapper>
</Container> */}