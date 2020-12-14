const appContainer = document.querySelector(".app");

async function getPosts() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());

  const postsUser1 = posts.filter((post) => post.userId === 1);
  const first3posts = posts.slice(0, 3);
  console.log(first3posts);

  first3posts.forEach((post) => {
    appContainer.innerHTML += `
            <div class="post">
                <h1>${post.title}</h1>
            </div>
        `;
  });
}

getPosts();
