import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const submitButton = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("jane");
  user.click(emailInput);
  user.keyboard("jane@gmail.com");
  user.click(submitButton);

  //   for printing output
  //   screen.debug();

  const name = await screen.findByRole("cell", {
    name: "jane",
  });
  const email = await screen.findByRole("cell", {
    name: "jane@gmail.com",
  });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});


