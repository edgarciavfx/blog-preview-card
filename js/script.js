// Get blog card elements
const card = document.getElementById("card");
const tag = document.getElementById("tag");
const date = document.getElementById("date");
const title = document.getElementById("title");
const body = document.getElementById("body");
const author = document.getElementById("author");

//urls
const url = "https://jsonplaceholder.typicode.com";

//generates a url from a name
const generateAvatarUrl = (name) => {
  const api = "https://ui-avatars.com/api/?background=f5d33c&name=";
  const formattedName = name.split(" ").join("+");
  return `${api}${formattedName}`;
};

//fetch mock data for title and body
const getRandomBlogData = async () => {
  const postNumber = Math.floor(Math.random() * 99 + 1);
  const postEndpoint = `${url}/posts/${postNumber}`;
  try {
    const response = await fetch(postEndpoint);
    const data = await response.json();
    title.innerHTML = data.title;
    body.innerHTML = data.body;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
};

//fetch mock data for author
const getRandomUsername = async () => {
  const userNumber = Math.floor(Math.random() * 8+1);
  const userEndpoint = `${url}/users/${userNumber}`;
  try {
    const response = await fetch(userEndpoint);
    const data = await response.json();
    const name = data.name;
    author.children[1].innerHTML = name;
    const profilePic = generateAvatarUrl(name);
    author.children[0].src = profilePic;
    
    card.classList.remove('hidden')
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
};

// passing name
getRandomUsername();
getRandomBlogData();
