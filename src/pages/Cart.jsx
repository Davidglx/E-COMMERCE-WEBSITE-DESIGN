import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 500;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px; 
`
const TopButton = styled.button`
    padding: 10px; 
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;


const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
`;

const ProductDetail = styled.div`
flex: 2;
display: flex
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
justify-content: space-between;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
 width: 25px;
 height: 25px;
 border-radius: 50%;
 background-color: ${props => props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetails = styled.div`
flex: 1;
display: flex;;
align-items: center;
justify-content: center;
flex-direction: column;
color: ${props => props.color};
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;

`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.div`
    font-weight: 200;
`
const SummaryItem= styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.div`
    
`
const SummaryItemPrice = styled.div`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {


    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <Title>YOUR BAG</Title>

                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.sneakerfiles.com/wp-content/uploads/2020/06/nike-air-force-1-low-white-university-red-ck7663-102.png" />
                                <Details>
                                    <ProductName><b>Product:</b>NIKE AIR FORCE 1</ProductName>
                                    <ProductId><b>ID:</b>7061585731 </ProductId>
                                    <ProductColor color="crimson" />
                                    <ProductSize><b>Size:</b>46</ProductSize>
                                </Details>
                            </ProductDetail>
                        
                            <PriceDetails  color="crimson">
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>60</ProductAmount>
                                    < RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>$ 150</ProductPrice>
                            </PriceDetails>
                      
                            </Product>
                     
                            <Hr />
                        <Product>
                            <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/46/72/1d/46721d1a7354b18a59c4f4a2acc1be6d.png" />
                                <Details>
                                    <ProductName><b>Product:</b>VINTAGE CAMO O MAD</ProductName>
                                    <ProductId><b>ID:</b>7061585731 </ProductId>
                                    <ProductColor color="darkGreen" />
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails  color="darkGreen">
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>12</ProductAmount>
                                    < RemoveIcon />
                                </ProductAmountContainer>
                                <ProductPrice>$ 300</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.seekpng.com/png/detail/932-9325871_c-decor-rimless-sunglasses-cartier-glasses-buffs.png" />
                                <Details>
                                    <ProductName><b>Product:</b>CARTIER C DECOR</ProductName>
                                    <ProductId><b>ID:</b>7061585731 </ProductId>
                                    <ProductColor  color="goldenrod"/>
                                    <ProductSize><b>Size:</b>7.2</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails color="goldenRod">
                                <ProductAmountContainer>
                                <AddIcon />
                                <ProductAmount>67</ProductAmount>
                                < RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 6730</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                          <Product>
                            <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName><b>Product:</b>IDAN</ProductName>
                                    <ProductId><b>ID:</b>7061585731 </ProductId>
                                    <ProductColor  color="black"/>
                                    <ProductSize><b>Size:</b>37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails color="black">
                                <ProductAmountContainer>
                                <AddIcon />
                                <ProductAmount>20</ProductAmount>
                                < RemoveIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>

                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                    <SummaryItemText>SubTotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                    <SummaryItemText  >Total</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>

            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Cart;


