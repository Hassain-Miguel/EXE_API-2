const novoPost = {
    title: "Meu primeiro post",
    body: "Este é um post de teste enviado para a API.",
    userId: 1
  };
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(novoPost)
  })
    .then(response => response.json())
    .then(data => console.log("Resposta da API:", data))
    .catch(error => console.error("Erro ao enviar post:", error));
  