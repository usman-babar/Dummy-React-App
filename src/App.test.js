import { render, screen } from "@testing-library/react";
import App from "./App";
// import addBank from "./components/AddBank";

// const request = require("supertest");
const addBank = require("../src./components./AddBank");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(addBank).get("/all");
    expect(response.statusCode).toBe(200);
  });
});

const allBank = require("../src./components./AllBanks");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(allBank).get("/all");
    expect(response.statusCode).toBe(200);
  });
});

const deleteBank = require("../src./components./AllBanks");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(deleteBank).get("/all");
    expect(response.statusCode).toBe(200);
  });
});

const editBranch = require("../src./components./EditBranch");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(editBranch).get("/all");
    expect(response.statusCode).toBe(200);
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test("Checking Branch Id", () => {
//   render(<addBank />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
