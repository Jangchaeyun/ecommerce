import { Facebook, Instagram, Twitter, QuestionAnswer, Room, Phone, MailOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    margin: 10px;
`

const Desc = styled.p`
    margin: 20px 10px;
`;

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Cherry.</Logo>
            <Desc>대한민국을 대표하는 온라인 패션 스토어가 전개하는 자체상표(Private Brand)이며, 모던 베이식 캐주얼웨어를 지향합니다. 단순한 유통구조의 효율적인 운영으로 좋은 품질의 제품을 합리적인 가격에 선보입니다. 가치소비 시대의 새로운 기준을 제시합니다.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="FFB400">
                    <QuestionAnswer/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>유용한 링크</Title>
            <List>
                <ListItem>홈</ListItem>
                <ListItem>카트</ListItem>
                <ListItem>패션</ListItem>
                <ListItem>악세서리</ListItem>
                <ListItem>니의 계정</ListItem>
                <ListItem>주문 조회</ListItem>
                <ListItem>위시리스트</ListItem>
            </List>
        </Center>
        <Right>
            <Title>연락</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>
                경기도 부천시 신흥로 56번길 25(심곡동)
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>
                032-610-0114
            </ContactItem>
            <ContactItem>
                <MailOutlined style={{marginRight: "10px"}}/>
                cherry@naver.com
            </ContactItem>
            <Payment src="https://ifh.cc/g/0rrzn5.png"/>
        </Right>
    </Container>
  );
}

export default Footer