import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "@util/responsive";
import { animate } from "@util/animate";
import { Link, useParams } from "react-router-dom";
import { popularProducts } from "@data/all";
import { Product as ProductItem } from "@interface";
import { useCart } from "../hooks/useCart";

const Container = styled.div`
  ${animate()}
  padding-top: 3rem;
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
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
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
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 80%;
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
  width: 3rem;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button<{ color: string }>`
  padding: 15px;
  border: 2px solid #000;
  background-color: ${(props) => (props.color === "black" ? "#000" : "#fff")};
  cursor: pointer;
  font-weight: 500;
  margin: 0 1rem;
  width: max-content;
  color: ${(props) => (props.color === "black" ? "#fff" : "#000")};
`;

const TopButton = styled.button<{ type: string }>`
  padding: 0.7rem;
  margin: 0 0 2rem 0;
  background-color: white;
  font-weight: bold;
`;

export const Product = () => {
  const param = useParams();
  const { addCart, cart, changeQuantity } = useCart();
  const prod: ProductItem | undefined = popularProducts.find(
    (el) => el.id === Number(param.id)
  );
  const quant = cart.find((el) => el.product.id === Number(param.id));

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Link to="/product-list">
            <TopButton type="">CONTINUE SHOPPING</TopButton>
          </Link>
          <Image src={prod?.img || "/src/assets/img/product/prod-5.avif"} />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize defaultValue="M">
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Button color="" onClick={() => changeQuantity(-1, prod!)}>
                <Remove />
              </Button>
              <Amount>{quant?.quantity || 1}</Amount>
              <Button color="black" onClick={() => changeQuantity(1, prod!)}>
                <Add />
              </Button>
            </AmountContainer>
            <Button color="" onClick={() => addCart(prod!)}>
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};
