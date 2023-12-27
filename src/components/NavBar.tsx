import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { mobile } from "@util/responsive";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import MenuIcon from "@mui/icons-material/Menu";

const Container = styled.div`
  height: 60px;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuBtn = styled.span`
  @media (min-width: 730px) {
    visibility: hidden;
    display: none;
  }
`;

export const NavBar = () => {
  const { cart } = useCart();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to="/">
            <Logo>FASHIONIST</Logo>
          </NavLink>
        </Center>
        <Right>
          <NavLink to="/register">
            <MenuItem>REGISTER</MenuItem>
          </NavLink>
          <NavLink to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </NavLink>
          <Link to="/cart">
            <MenuItem>
              <Badge
                badgeContent={cart.length || "0"}
                color={cart.length == 0 ? "error" : "primary"}
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <MenuBtn>
            <MenuIcon />
          </MenuBtn>
        </Right>
      </Wrapper>
    </Container>
  );
};
