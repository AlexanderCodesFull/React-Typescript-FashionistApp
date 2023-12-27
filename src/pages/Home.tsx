import {
  Announcement,
  Categories,
  NewsLetter,
  Products,
  Slider,
} from "@component";
import { animate } from "@util/animate";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 4rem;
  ${animate()}
`;

export const Home = () => {
  return (
    <Container>
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </Container>
  );
};
