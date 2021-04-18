import { render, screen } from "@testing-library/react";
import RequisitionRegister from "../../servers/login";

describe("Correct Button associated to Component Login and Render", () => {
  test("Should to have Button to Login", async () => {
    render(<RequisitionRegister />);

    expect(await screen.findAllByRole("button")).toHaveLength(1);
  });
});
