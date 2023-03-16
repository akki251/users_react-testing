import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";
import { user } from "@testing-library/user-event";

const users = [
  {
    name: "jane",
    email: "jane@g.com",
  },
  {
    name: "same",
    email: "same@g.com",
  },
];

test("render one row per user", () => {
  // RENDER THE COMPONENT

  const { container } = render(<UserList users={users} />);

  //   screen.logTestingPlaygroundURL();

  // there is also another fallback in which we can use test-id and within in combination
  
  // FIND ALL ROWS
  const rows = container.querySelectorAll("tbody tr");
  // ASSERTION : CORRECT NUMBER OF ROWS IN TABLE

  expect(rows).toHaveLength(users.length);
});

test("render the email and name of each user", () => {
  render(<UserList users={users} />);

  // screen.logTestingPlaygroundURL()

  for (let user of users) {
    const name = screen.getByRole("cell", {
      name: user.name,
    });
    const email = screen.getByRole("cell", {
      name: user.email,
    });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
