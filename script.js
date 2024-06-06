// Seleciona os elementos do formulário
const form = document.querySelector('form');
const tituloInput = document.querySelector('#titulo');
const sinopseInput = document.querySelector('#sinopse');
const editoraInput = document.querySelector('#editora');
const generoInput = document.querySelector('#genero');
const precoInput = document.querySelector('#preco');
const custoInput = document.querySelector('#custo');
const cadastrarButton = document.querySelector('.button-group button[type="submit"]');
const atualizarButton = document.querySelector('.button-group button[type="button"]');
const excluirButton = document.querySelector('.button-group button[type="reset"]');
const mensagemDiv = document.querySelector('#mensagem');

let livros = [];

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
        livros.push(livro);
        mensagemDiv.innerHTML = 'Livro cadastrado com sucesso!';
        if (form) {
          form.reset();
        } else {
          console.error('Formulário não encontrado!');
        }
      } else {
        mensagemDiv.innerHTML = 'Preencha todos os campos!';
      }
    }
  });

// Função para atualizar um livro
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
          mensagemDiv.innerHTML = `Campo ${campoAtualizar} atualizado com sucesso!`;
        } else {
          mensagemDiv.innerHTML = 'Livro não encontrado!';
        }
      } else {
        mensagemDiv.innerHTML = 'Preencha todos os campos!';
      }
    }
  });
  
  //função para excluir
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
        } else {
          mensagemDiv.innerHTML = 'Livro não encontrado!';
        }
      } else {
        mensagemDiv.innerHTML = 'Preencha o campo de título!';
      }
    }
  });