import axios from "axios";
async function displayUsers(url, li) {
  // fetch data from a url endpoint
  const data = await axios(url).then(result => {
    console.log(li);
    try {
      result.data.data.map(l =>
        li.insertAdjacentHTML(
          "beforeend",
          fetchUsers(l.avatar, l.first_name, l.last_name, l.email)
        )
      );
    } catch (e) {
      console.log(e.message);
    }
    console.log(result.data.data);
  });

  return data;
}
const list = document.querySelector("tbody");
const url = "https://reqres.in/api/users";
displayUsers(url, list);

const fetchUsers = (avatar, fname, lname, email) => {
  return `<tr><td><img src="${avatar}" /></td><td>${fname} ${lname}</td><td>${email}</td></tr>`;
};
module.exports = { fetchUsers };
