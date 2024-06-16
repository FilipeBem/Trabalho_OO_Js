document.addEventListener('DOMContentLoaded', () => {
  const apiBaseUrl = 'http://localhost:3000/books';

  const booksList = document.getElementById('books');
  const addBookForm = document.getElementById('add-book-form');
  const tituloInput = document.getElementById('titulo');
  const sinopseInput = document.getElementById('sinopse');
  const editoraInput = document.getElementById('editora');
  const generoInput = document.getElementById('genero');
  const precoInput = document.getElementById('preco');
  const custoInput = document.getElementById('custo');
  const mensagemDiv = document.getElementById('mensagem');
  const cadastrarButton = document.getElementById('cadastrar');
  const atualizarButton = document.getElementById('atualizar');
  const excluirButton = document.getElementById('excluir');

  // ... (resto do código)

  // Adicionar eventos de clique para os botões
  cadastrarButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Tem certeza de cadastrar o livro?')) {
      const titulo = tituloInput.value.trim();
      const sinopse = sinopseInput.value.trim();
      const editora = editoraInput.value.trim();
      const genero = generoInput.value.trim();
      const preco = precoInput.value.trim();
      const custo = custoInput.value.trim();

      if (titulo && sinopse && editora && genero && preco && custo) {
        const livro = {
          titulo,
          sinopse,
          editora,
          genero,
          preco,
          custo,
        };
        // Chamar a função para cadastrar no banco de dados
        cadastrarNoBanco(livro);
        mensagemDiv.innerHTML = 'Livro cadastrado com sucesso!';
        if (addBookForm) {
          addBookForm.reset();
        } else {
          console.error('Formulário não encontrado!');
        }
      } else {
        mensagemDiv.innerHTML = 'Preencha todos os campos!';
      }
    }
  });

  atualizarButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Tem certeza de atualizar o livro?')) {
      const titulo = tituloInput.value.trim();
      const campoAtualizar = prompt('Digite o campo que deseja atualizar (sinopse, editora, genero, preco ou custo)');
      const novoValor = prompt('Digite o novo valor para o campo');

      if (titulo && campoAtualizar && novoValor) {
        const livro = livros.find((livro) => livro.titulo === titulo);
        if (livro) {
          livro[campoAtualizar] = novoValor;
          mensagemDiv.innerHTML = `Campo ${campoAtualizar} atualizado com sucesso`;
          // Chamar a função para atualizar no banco de dados
          atualizarNoBanco(livro);
        } else {
          mensagemDiv.innerHTML = 'Livro não encontrado!';
        }
      } else {
        mensagemDiv.innerHTML = 'Preencha todos os campos!';
      }
    }
  });

  excluirButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Tem certeza de excluir o livro?')) {
      const titulo = tituloInput.value.trim();

      if (titulo) {
        const livro = livros.find((livro) => livro.titulo === titulo);
        if (livro) {
          const indice = livros.indexOf(livro);
          livros.splice(indice, 1);
          mensagemDiv.innerHTML = 'Livro excluído com sucesso!';
          // Chamar a função para deletar no banco de dados
          deletarNoBanco(livro);
        } else {
          mensagemDiv.innerHTML = 'Livro não encontrado!';
        }
      } else {
        mensagemDiv.innerHTML = 'Preencha o campo de título!';
      }
    }
  });
});