const editPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#editPost-title").value.trim();
    const content = document.querySelector("#editPost-content").value.trim();
  
    if (title && content) {
    // TO DO: get post id
        const response = await fetch(`/api/post/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to update post.");
      }
    }
  };
  
const deletePost = async (event) => {
    
};

  document
    .querySelector('.add-post')
    .addEventListener('submit', newPost);