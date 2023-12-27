import { Add, ProductionQuantityLimits, Remove } from "@mui/icons-material";
import { animate } from "@util/animate";
import { mobile } from "@util/responsive";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import styled from "styled-components";
import { Summary } from "@component";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 3rem;
  ${animate()}
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button<{ type: string }>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
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
  padding-top: 2rem;
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
  width: 200px;
  transition: scale 0.2s ease-in-out;

  &:hover {
    scale: 1.02;
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
  width: 7rem;
  text-align: center;
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
`;

const SummaryItemText = styled.span``;

const Button = styled.button<{ color: string }>`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.color === "white" ? "#fff" : "#000")};
  color: ${(props) => (props.color === "white" ? "#000" : "#fff")};
  font-weight: 600;
  cursor: pointer;
`;

const TextNotFound = styled.h6`
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const Cart = () => {
  const { cart, changeQuantity } = useCart();
  return (
    <Container>
      <Wrapper>
        <Top>
          <NavLink to="/product-list">
            <TopButton type="">CONTINUE SHOPPING</TopButton>
          </NavLink>
          {cart.length > 0 && (
            <TopTexts>
              <TopText>Shopping Bag ( {cart.length} )</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
          )}
          <SummaryItemText />
        </Top>
        <Bottom>
          <Info>
            {cart.length > 0 ? (
              cart.map((el) => (
                <Product key={el.product.id}>
                  <ProductDetail>
                    <Link to={`/product/${el.product.id}`}>
                      <Image src={el.product.img} />
                    </Link>
                    <Details>
                      <ProductName>
                        <b>Product:</b> JESSIE THUNDER SHOES
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> 93813718293
                      </ProductId>
                      <ProductColor color="black" />
                      <ProductSize>
                        <b>Size:</b> 37.5
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Button
                        color="white"
                        onClick={() => changeQuantity(-1, el.product)}
                      >
                        <Remove />
                      </Button>
                      <ProductAmount>{el.quantity}</ProductAmount>
                      <Button
                        color="dark"
                        onClick={() => changeQuantity(1, el.product)}
                      >
                        <Add />
                      </Button>
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
                </Product>
              ))
            ) : (
              <TextNotFound>You have no selected products</TextNotFound>
            )}
            <Hr />
          </Info>
          {cart.length > 0 && <Summary />}
        </Bottom>
      </Wrapper>
    </Container>
  );
};
