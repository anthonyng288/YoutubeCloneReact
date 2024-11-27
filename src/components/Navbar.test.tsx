import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

vi.mock("../utils/components", () => ({
  logo: "test-logo.png",
}));

describe("Navbar component", () => {
  test("Renders the nav bar successfully", () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });
});
