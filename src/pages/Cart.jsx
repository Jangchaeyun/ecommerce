import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 150px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`
    
`;

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.div`
    
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

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
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
    
`;

const SummaryItemPrice = styled.span`
    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>MY BAG</Title>
            <Top>
                <TopButton>쇼핑 계속하기</TopButton>
                <TopTexts>
                    <TopText>장바구니(3)</TopText>
                    <TopText>나의 위시리스트(2)</TopText>
                </TopTexts>
                <TopButton type="filled">결제하기</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://image.msscdn.net/images/goods_img/20200525/1460418/1460418_1_500.jpg?t=20200527180059"/>
                            <Details>
                                <ProductName><b>상품:</b> Heart Lace Up Mini Dress_Black</ProductName>
                                <ProductId><b>품번:</b> HC30532</ProductId>
                                <ProductColor color="#000069"/>
                                <ProductSize><b>사이즈:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>84,000원</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://image.msscdn.net/images/goods_img/20200511/1439527/1439527_5_500.jpg?t=20220527092024"/>
                            <Details>
                                <ProductName><b>상품:</b> 플립플랍 ZEROVITY BIO 크림</ProductName>
                                <ProductId><b>품번:</b> Z-FF-BLAJ</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>사이즈:</b> 250</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>41,800원</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://image.msscdn.net/images/goods_img/20220304/2398610/2398610_1_500.jpg?t=20220414105305"/>
                            <Details>
                                <ProductName><b>상품:</b> 우먼즈 라이트웨이트 크롭 반팔 블레이저 [미디엄 그레이] </ProductName>
                                <ProductId><b>품번:</b> MWBJK101-MR</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>사이즈:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>69,900원</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>주문서</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>소계</SummaryItemText>
                        <SummaryItemPrice>195,700원</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>예상 배송비</SummaryItemText>
                        <SummaryItemPrice>3000원</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>베송비 할인</SummaryItemText>
                        <SummaryItemPrice>- 1000원</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>총 금액</SummaryItemText>
                        <SummaryItemPrice>197,700원</SummaryItemPrice>
                    </SummaryItem>
                    <Button>바로 결제하기</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  );
};

export default Cart