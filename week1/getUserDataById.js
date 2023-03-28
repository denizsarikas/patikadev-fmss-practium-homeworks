import axios from "axios";
async function getUserDataById(id) {
  const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const { id: userId, name, username, email, address, phone, website, company } = userResponse.data;
  const posts = postResponse.data;
  const userData = {
    id: userId,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
    posts
  };
  return userData;
}
export default getUserDataById;
