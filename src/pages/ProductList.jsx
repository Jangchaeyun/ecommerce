import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px" })}
`;

const Option = styled.option`
    
`;

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>옷</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    제품 필터:
                </FilterText>
                <Select>
                    <Option disabled selected>
                        색상
                    </Option>
                    <Option>하얀색</Option>
                    <Option>블랙</Option>
                    <Option>빨간색</Option>
                    <Option>노란색</Option>
                    <Option>녹색</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        사이즈
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>분류 필터:</FilterText>
                <Select>
                    <Option select>신상품</Option>
                    <Option>가격 (내림차순)</Option>
                    <Option>가격 (오름차순)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList