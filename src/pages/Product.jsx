import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100px;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`
  
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #FFB6C1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #FFB6C1;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://image.msscdn.net/images/goods_img/20210531/1976072/1976072_3_500.jpg?t=20210531154918"/>
            </ImgContainer>
            <InfoContainer>
                <Title>BUCKLE WIDE DENIM PANTS BLUE</Title>
                <Desc>편하고 통 넓은 청바지</Desc>
                <Price>37,950원</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>색상</FilterTitle>
                    <FilterColor color="#9BC3FF"/>
                    <FilterColor color="black"/>
                    <FilterColor color="#828282"/>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                      <FilterSizeOption>S</FilterSizeOption>
                      <FilterSizeOption>M</FilterSizeOption>
                      <FilterSizeOption>L</FilterSizeOption>
                      <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                  </AmountContainer>
                  <Button>장바구니에 담기</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product