import styled from "styled-components";
import { popularProducts } from "@data/all";
import { ProductCard } from "@component";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </Container>
  );
};
