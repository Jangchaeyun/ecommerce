import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
    ),
    url("https://miricanvas.zendesk.com/hc/article_attachments/900006682446/_______6_.png") center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width : "75%" })}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #FFB6C1;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
        <Container>
            <Wrapper>
                <Title>계정 만들기</Title>
                <Form>
                    <Input placeholder="이름"/>
                    <Input placeholder="성"/>
                    <Input placeholder="벌명"/>
                    <Input placeholder="이메일"/>
                    <Input placeholder="비밀번호"/>
                    <Input placeholder="비밀번호 확인"/>
                    <Agreement>
                    개인정보의 처리 및 보호에 관한 사항을 정함으로써 개인의 자유와 권리를 보호하고, 나아가 개인의 존엄과 가치를 구현함을 목적으로 한다.<b>개인정보 보호</b>
                    </Agreement>
                    <Button>만들기</Button>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Register