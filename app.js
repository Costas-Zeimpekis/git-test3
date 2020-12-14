const appContainer = document.querySelector(".app");

async function getPosts() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());

  posts.forEach((post) => {
    appContainer.innerHTML += `
            <div class="post">
                <h1>${post.title}</h1>
            </div>
        `;
  });
}

getPosts();
