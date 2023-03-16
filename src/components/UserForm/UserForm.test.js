import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserForm from "./UserForm";

test("Render two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // manipulate the component or find an element
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument;
});

test("call onUserAdd, upon submitting the form", () => {
  const mock = jest.fn();

  // Try to render my component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  // OLD WAY NOT RECOMMENDED
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // this method queries on the label text, and return the paired input with it!
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // Simuluate typing in name
  user.click(nameInput);
  user.keyboard("Akshansh");

  // Simulate typing in email
  user.click(emailInput);
  user.keyboard("Akshansh@1gmail.com");

  // Find the button
  const submitButton = screen.getByRole("button");

  // simulate the click button
  user.click(submitButton);

  // ASSERTION to make sure to call onUserAdd
  expect(mock).toHaveBeenCalled();

  expect(mock).toHaveBeenCalledWith({
    name: "Akshansh",
    email: "Akshansh@1gmail.com",
  });
});

test("empties the two inputs when form is submitted", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");
  user.click(nameInput);
  user.keyboard("jane");
  user.click(emailInput);
  user.keyboard("jane@jane.com");

  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
