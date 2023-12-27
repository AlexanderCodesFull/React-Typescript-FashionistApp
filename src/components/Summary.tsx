import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div<{ type: string }>`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span``;

const SummaryItemText = styled.span``;

const Button = styled.button<{ color: string }>`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.color === "white" ? "#fff" : "#000")};
  color: ${(props) => (props.color === "white" ? "#000" : "#fff")};
  font-weight: 600;
  cursor: pointer;
`;

export const Summary = () => {
  return (
    <Container>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem type="">
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>$ 80</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="">
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="">
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>$ 80</SummaryItemPrice>
      </SummaryItem>
      <Link to="/login">
        <Button color="black">CHECKOUT NOW</Button>
      </Link>
    </Container>
  );
};
