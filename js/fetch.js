const url = "https://jsonplaceholder.typicode.com";

const generateAvatarUrl = (name) => {
  const api = "https://ui-avatars.com/api/?name=";
  const formattedName = name.split(" ").join("+");
  return `${api}${formattedName}`;
};

//fetch mock data for title and body
const getRandomBlogData = async () => {
  const postNumber = Math.floor(Math.random() * 100);
  const postEndpoint = `${url}/posts/${postNumber}`;
  const response = await fetch(postEndpoint);
  const data = await response.json();
  return data;
};

//fetch mock data for author
const getRandomUsername = async () => {
  const userNumber = Math.floor(Math.random() * 10);
  const userEndpoint = `${url}/users/${userNumber}`;
  const response = await fetch(userEndpoint);
  const data = await response.json();
  return data.name;
};

//tag date tittle body author
console.log(getRandomUsername());
