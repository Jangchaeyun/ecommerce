import styled from "styled-components"

const Container = styled.div`
  heiht: 30px;
  background-color: Thistle;
  color: white;
  display: flex;
  alingn-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500; 
`
const Announcement = () => {
  return (
    <div>
        <Container>
          슈퍼 세일!! 최대 50% 할인!
        </Container>
    </div>
  )
}

export default Announcement