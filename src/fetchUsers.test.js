const { fetchUsers } = require("./fetchUsers");
const avatar = "https://i.pravatar.cc/150?img=11";
const fname = "Aniket";
const lname = "Teltumbade";
const email = "aniketteltu@gmail.com";

test("fetching Users", () => {
  expect(fetchUsers(avatar, fname, lname, email)).toBe(
    `<tr><td><img src="https://i.pravatar.cc/150?img=11" /></td><td>Aniket Teltumbade</td><td>aniketteltu@gmail.com</td></tr>`
  );
});
