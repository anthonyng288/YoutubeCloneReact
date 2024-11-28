import { render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("Searchbar component", () => {
  beforeEach(() => {
    render(<Searchbar />);
  });

  test("Renders the search bar successfully", () => {
    const searchbarElement = screen.getByRole("textbox");
    expect(searchbarElement).toBeInTheDocument();
  });

  test("Renders the search icon button", () => {
    const searchIconElement = screen.getByRole("button");
    expect(searchIconElement).toBeInTheDocument();
  });
});
