import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LaddingPage from "../../pages/laddingPage";

describe("Correct Render and Buttons to Register and Login", () => {
  test("Should to have Button to Login and Register", async () => {
    render(<LaddingPage />);
    expect(await screen.findAllByRole("button")).toHaveLength(2);
  });
});
