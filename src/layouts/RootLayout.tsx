import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer, NavBar } from "@component";
import { animate } from "@util/animate";
import { AuthProvider } from "../context/auth/AuthProvider";
import { CartProvider } from "../context/cart/CartProvider";

const Container = styled.div`
  ${animate()}
`;

export const RootLayout = () => {
  return (
    <AuthProvider>
      <Container>
        <CartProvider>
          <NavBar />
          <Outlet />
        </CartProvider>
        <Footer />
      </Container>
    </AuthProvider>
  );
};
