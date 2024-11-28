import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("Renders the nav bar successfully", () => {
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  test("Renders the logo with correct attributes", () => {
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
    // Logo URL from constants.ts
    expect(logoElement).toHaveAttribute(
      "src",
      "https://i.ibb.co/s9Qys2j/logo.png"
    );
    expect(logoElement).toHaveAttribute("height", "45");
  });

  test("Contains a link that navigates to the home page", () => {
    const linkElement = screen.getByRole("link", { name: /logo/i });
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
