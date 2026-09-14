//Pega referencias dos elementos que ja existem no HTML
const formProduto = document.querySelector('#form-produto'); //query selector pega o primeiro elemento que encontrar com o id especificado
const listaProdutos = document.querySelector('#lista-produtos'); //Usamos querySelector para buscar no HTML um elemento que o JavaScript precisa controlar.

//Escuta o evento de enviar do formulário; percebe a ação do form produtos para submit,chama a função evento
formProduto.addEventListener('submit', function(evento) { 
    //sem isso o navegador regarega a pag ao enviar o form, e a gente não quer isso, queremos que o JS controle o envio do form
    evento.preventDefault(); //Previne o comportamento padrão do formulário de enviar os dados e recarregar a página

    //le o valor digitado em cada campo do formulário
    const nome = document.querySelector('#nome').value;
    const preco = document.querySelector('#preco').value;
    const quantidade = document.querySelector('#quantidade').value;
    const coloracao = document.querySelector('#coloracao').value;

    //cria um novo item da lista com o texto do produto, preço e quantidade
    const item = document.createElement('li');
    item.textContent = `${nome} - R$ ${preco} - Quantidade: ${quantidade} - Coloração: ${coloracao}`;

    //adiciona o novo item no final da lista 
    listaProdutos.appendChild(item);
    //limpa o formulario para o proximo cadastro
    formProduto.reset(); //Limpa os campos do formulário após o envio
});
