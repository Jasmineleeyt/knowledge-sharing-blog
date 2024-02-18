const newPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#newPost-title").value.trim();
  const content = document.querySelector("#newPost-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post.");
    }
  }
};

document
  .querySelector('.add-post')
  .addEventListener('submit', newPost);