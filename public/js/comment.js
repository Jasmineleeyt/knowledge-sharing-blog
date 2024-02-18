const commentPost = async (event) => {
    event.preventDefault();
    // TO DO: grab post id
    const comment = document.querySelector("#new-comment").value.trim();
  
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to add comment.");
      }
    }
  };
  
  document
    .querySelector('.add-comment')
    .addEventListener('submit', newPost);