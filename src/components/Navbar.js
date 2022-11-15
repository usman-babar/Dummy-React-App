import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";

const Header = styled(AppBar)`
  background: #555555;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: white;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Bank Management System</Tabs>
        <Tabs to="/add">Add Bank</Tabs>
        <Tabs to="/all">All banks</Tabs>
      </Toolbar>
    </Header>
  );
}
