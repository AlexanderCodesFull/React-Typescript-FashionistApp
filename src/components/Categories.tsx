import styled from "styled-components";
import { mobile } from "@util/responsive";
import { categories } from "@data/all";
import { CategoryItem } from "@component";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem {...item} key={item.id} />
      ))}
    </Container>
  );
};
