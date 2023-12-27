import { animate } from "@util/animate";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  ${animate()}
`;

export const AuthLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
