//Ainda está faltando o check do input dos dados do usuário e a parte de guardar os dados em arquivos. Esses retoques serão feitos até a versão final.

class Pedido{
    constructor(id, id_cliente, status, data, produto, quantidade){
        this.id = id;
        this.id_cliente = id_cliente;
        this.status = status;
        this.data = data;
        this.produto = produto;
        this.quantidade = quantidade;
    }
}

class Funcionario{
    constructor(id, username, cpf, email, senha){
        this.id = id;
        this.username = username;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}

class Cliente{
    constructor(id, nome, data, cpf, email, senha){
        this.id = id;
        this.nome = nome
        this.data = data;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}

class Produtos{
    constructor(validade, preco, estoque, nome, descricao) {
        this.validade = validade;
        this.preco = preco;
        this.estoque = estoque;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Avaliacao{
    constructor(nota, texto, id, produto){
        this.nota = nota;
        this.texto = texto;
        this.id = id;
        this.produto = produto;
    }
}
class Sistema{
    constructor(){
        console.log("1.Fazer Login");
        console.log("2.Fazer Cadastro");
        console.log("3.Sair do Programa");
        var requisicao = require('readline-sync');
        var entrada = requisicao.question("Escolha uma opcao: ")
        switch(entrada){
            case "1":
                this.login();
                break;
            case "2":
                this.cadastro();
                break;
            case "3":
                return;
            default:
                console.log("Essa opção não é válida!");
                break;
        }
    }

    login(){
        var requisicao = require('readline-sync');
        var email = requisicao.question("Entre o seu email: ");
        var senha = requisicao.question("Entre a sua senha: ");
        console.log(sep);
        for (let i = 0; i < funcionarios.length; i++){
            if (funcionarios[i].email == email){
                if (funcionarios[i].senha == senha){
                    this.funcionario_logado(funcionarios[i]);
                    return;
                }
                else{
                    console.log("Senha incorreta!");
                    this.login();
                    return;
                }
            }
        }
        
        for (let i = 0; i < clientes.length; i++){
            if (clientes[i].email == email){
                if (clientes[i].senha == senha){
                    this.cliente_logado(clientes[i]);
                    return;
                }
                else{
                    console.log("Senha incorreta!");
                    this.login();
                    return;
                }
            }
        }
        console.log("Esse usuário não existe! Faça o cadastro primeiro!")
        new Sistema();
    }

    cadastro(){
        var requisicao = require('readline-sync');
        var nome = requisicao.question("Entre o seu nome: ");
        var email = requisicao.question("Entre o seu email: ");
        var senha = requisicao.question("Entre a sua senha: ");
        var data = requisicao.question("Entre a sua data de nascimento (YYYY-MM-DD): ");
        var cpf = requisicao.question("Entre o seu CPF (somente números): ");
        let cliente_novo = new Cliente(Math.floor(Math.random() * 100000), nome, data, cpf, email, senha);
        clientes.push(cliente_novo);
        clientes.sort((a, b) => a.nome.localeCompare(b.nome));
        new Sistema();
    }

    funcionario_logado(funcionario){
        var requisicao = require('readline-sync');
        console.log("1.Ver Meus Dados");
        console.log("2.Modificar Meus Dados");
        console.log("3.Ver Lista de Pedidos (Ordem Cronológica)");
        console.log("4.Ver Lista de Produtos (Ordem Alfabética)");
        console.log("5.Ver Lista de Clientes (Ordem Alfabética)");
        console.log("6.Mudar status do pedido (Pedido pendente, adiado, realizado, cancelado)");
        console.log("7.Adicionar Produto");
        console.log("8.Editar Produto");
        console.log("9.Excluir Produto");
        console.log("10.Sair");
        var opcao = requisicao.question("Escolha uma opcao: ");
        console.log(sep);
        switch(opcao){
            case "1":
                console.log("ID: " + funcionario.id);
                console.log("Usuário: " + funcionario.username);
                console.log("Email: " + funcionario.email)
                console.log("Senha: " + funcionario.senha);
                console.log("CPF: " + funcionario.cpf);
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "2":
                console.log("1.Usuário");
                console.log("2.Email");
                console.log("3.Senha");
                console.log("4.Data de Nascimento");
                console.log("5.CPF");
                let change = requisicao.question("Escolha qual dado deseja alterar: ");
                let changed = requisicao.question("Digite o novo valor para esse dado: ");
                console.log(sep);
                switch (change){
                    case "1":
                        funcionario.username = changed;
                        break;
                    case "2":
                        funcionario.email = changed;
                        break;
                    case "3":
                        funcionario.senha = changed;
                        break;
                    case "4":
                        funcionario.data = changed;
                        break;
                    case "5":
                        funcionario.cpf = changed;
                        break;
                    default:
                        console.log("Entrada inválida!");
                        this.funcionario_logado(funcionario);
                        break;
                }
                console.log("Funcionário alterado com sucesso!");
                console.log(sep);
                funcionarios.sort((a, b) => a.nome.localeCompare(b.nome));
                this.funcionario_logado(funcionario);
                break;
            case "3":
                if (pedidos.length == 0){
                    console.log("Não houveram pedidos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    console.log(`ID: ${p.id} | Cliente: ${p.id_cliente} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                }
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "4":
                if (produtos.length == 0){
                    console.log("Não existem produtos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                for (let i = 0; i < produtos.length; i++){
                    let p = produtos[i];
                    console.log(`Nome: ${p.nome} | Descricao: ${p.descricao} | Preco: ${p.preco} | Estoque: ${p.estoque} | Validade: ${p.validade}`);
                }
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "5":
                if (clientes.length == 0){
                    console.log("Não existem clientes!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                for (let i = 0; i < clientes.length; i++){
                    let c = clientes[i];
                    console.log(`ID: ${c.id} | Nome: ${c.nome} | Data de Nascimento ${c.data} | CPF: ${c.cpf} | Email: ${c.email}`);
                }
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "6":
                if (pedidos.length == 0){
                    console.log("Não houveram pedidos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    console.log(`${i+1} -> ID: ${p.id} | Cliente: ${p.id_cliente} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                }
                let x = requisicao.question("Escolha um pedido para alterar o status: ")
                if (x >= pedidos.length){
                    console.log("Essa entrada não é válida!");
                    this.funcionario_logado(funcionario);
                    break;
                }
                console.log(sep);
                console.log("1.Pendente");
                console.log("2.Adiado");
                console.log("3.Realizado");
                console.log("4.Cancelado");
                let new_status = requisicao.question("Escolha o novo status do pedido: ");
                switch(new_status){
                    case "1": 
                        pedidos[x-1].status = "Pendente";
                        break;
                    case "2": 
                        pedidos[x-1].status = "Adiado";
                        break;
                    case "3": 
                        pedidos[x-1].status = "Realizado";
                        break;
                    case "4": 
                        pedidos[x-1].status = "Cancelado";
                        break;
                    default:
                        console.log("Essa entrada não é válida!");
                        this.funcionario_logado(funcionario);
                        break;
                }
                console.log("Pedido alterado com sucesso!")
                pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "7":
                let nome = requisicao.question("Digite o nome do produto: ");
                let descricao = requisicao.question("Digite a descricao do produto: ");
                let preco = requisicao.question("Digite o preco do produto: ");
                let estoque = Number(requisicao.question("Digite a quantidade do produto no estoque: "));
                let validade = requisicao.question("Digite a data de validade do produto: ");
                let novo_produto = new Produtos(validade, preco, estoque, nome, descricao);
                produtos.push(novo_produto);
                this.funcionario_logado(funcionario);
                break;
            case "8":
                if (produtos.length == 0){
                    console.log("Não existem produtos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                for (let i = 0; i < produtos.length; i++){
                    let p = produtos[i];
                    console.log(`${i+1} -> Nome: ${p.nome} | Descricao: ${p.descricao} | Preco: ${p.preco} | Estoque: ${p.estoque} | Validade: ${p.validade}`);
                }
                let p_to_change = Number(requisicao.question("Digite o produto que deseja editar: "))
                if (p_to_change >= produtos.length){
                    console.log("Essa entrada não é válida!");
                    this.funcionario_logado(funcionario);
                    break;
                }
                console.log("1.Nome");
                console.log("2.Descricao");
                console.log("3.Preco");
                console.log("4.Estoque");
                console.log("5.Validade");
                let a_to_change = requisicao.question("Digite a característica que deseja editar: ") 
                let new_a = requisicao.question("Digite o novo valor para tal característica: ") 
                switch (a_to_change){
                    case "1":
                        produtos[p_to_change-1].nome = new_a;
                        break;
                    case "2":
                        produtos[p_to_change-1].descricao = new_a;
                        break;
                    case "3":
                        produtos[p_to_change-1].preco = new_a;
                        break;
                    case "4":
                        produtos[p_to_change-1].estoque = new_a;
                        break;
                    case "5":
                        produtos[p_to_change-1].validade = new_a;
                        break;
                    default:
                        console.log("Essa entrada não é válida!");
                        break;
                }
                console.log("Produto editado com sucesso!");
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "9":
                if (produtos.length == 0){
                    console.log("Não existem produtos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                for (let i = 0; i < produtos.length; i++){
                    let p = produtos[i];
                    console.log(`${i+1} -> Nome: ${p.nome} | Descricao: ${p.descricao} | Preco: ${p.preco} | Estoque: ${p.estoque} | Validade: ${p.validade}`);
                }
                let p_to_remove = Number(requisicao.question("Digite o produto que deseja excluir: "))-1;
                if (p_to_remove >= produtos.length){
                    console.log("Essa entrada não é válida!");
                    this.funcionario_logado(funcionario);
                    break;
                }
                delete produtos[p_to_remove];
                produtos.splice(p_to_remove, 1);
                console.log("Produto excluído com sucesso!");
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "10":
                new Sistema();
                break;
            default:
                console.log("Essa entrada não é válida!");
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
        }
        pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
        funcionarios.sort((a, b) => a.username.localeCompare(b.username));
        produtos.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    cliente_logado(cliente){
        var requisicao = require('readline-sync');
        console.log("1.Ver Meus Dados");
        console.log("2.Modificar Meus Dados");
        console.log("3.Ver Lista de Produtos (Ordem Alfabética)");
        console.log("4.Fazer pedido");
        console.log("5.Cancelar pedido");
        console.log("6.Ver meus pedidos (Ordem Cronológica)");
        console.log("7.Avaliar pedido");
        console.log("8.Visualizar avaliações");
        console.log("9.Sair");
        var opcao = requisicao.question("Escolha uma opcao: ");
        console.log(sep);
        switch(opcao){
            case "1":
                console.log("ID: " + cliente.id);
                console.log("Nome: " + cliente.nome);
                console.log("Email: " + cliente.email)
                console.log("Senha: " + cliente.senha);
                console.log("Data de Nascimento: " + cliente.data);
                console.log("CPF: " + cliente.cpf);
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "2":
                console.log("1.Nome");
                console.log("2.Email");
                console.log("3.Senha");
                console.log("4.Data de Nascimento");
                console.log("5.CPF");
                let change = requisicao.question("Escolha qual dado deseja alterar: ");
                let changed = requisicao.question("Digite o novo valor para esse dado: ");
                console.log(sep);
                switch (change){
                    case "1":
                        cliente.nome = changed;
                        break;
                    case "2":
                        cliente.email = changed;
                        break;
                    case "3":
                        cliente.senha = changed;
                        break;
                    case "4":
                        cliente.data = changed;
                        break;
                    case "5":
                        cliente.cpf = changed;
                        break;
                    default:
                        console.log("Entrada inválida!");
                        this.cliente_logado(cliente);
                        break;
                }
                console.log("Cliente alterado com sucesso!");
                console.log(sep);
                clientes.sort((a, b) => a.nome.localeCompare(b.nome));
                this.cliente_logado(cliente);
                break;
            case "3":
                if (produtos.length == 0){
                    console.log("Não existem produtos!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                for (let i = 0; i < produtos.length; i++){
                    let p = produtos[i];
                    console.log(`Nome: ${p.nome} | Descricao: ${p.descricao} | Preco: ${p.preco} | Estoque: ${p.estoque} | Validade: ${p.validade}`);
                }
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "4":
                if (produtos.length == 0){
                    console.log("Não existem produtos!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                for (let i = 0; i < produtos.length; i++){
                    let p = produtos[i];
                    console.log(`${i+1} -> Nome: ${p.nome} | Descricao: ${p.descricao} | Preco: ${p.preco} | Estoque: ${p.estoque} | Validade: ${p.validade}`);
                }
                let p_prod = Number(requisicao.question("Digite o produto do pedido: "))-1;
                console.log(sep);
                if (p_prod >= produtos.length){
                    console.log("Essa entrada não é válida!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let p_q = Number(requisicao.question("Digite a quantidade de produto do pedido: "));
                if (p_q > Number(produtos[p_prod].estoque)){
                    console.log("Não há estoque suficiente!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let new_p = new Pedido(Math.floor(Math.random() * 10000000), cliente.id, "Pendente", new Date().toJSON().slice(0,10).replace(/-/g,'-'), produtos[p_prod].nome, p_q);
                pedidos.push(new_p);
                produtos[p_prod].estoque -= p_q;
                console.log("Pedido realizado com sucesso!");
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "5":
                if (pedidos.length == 0){
                    console.log("Não houveram pedidos!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    console.log(`${i+1} -> ID: ${p.id} | Cliente: ${p.id_cliente} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                }
                let p_to_cancel = Number(requisicao.question("Digite o número do pedido para cancelar: "))-1;
                if (p_to_cancel >= pedidos.length){
                    console.log("Essa entrada não é válida!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                pedidos[p_to_cancel].status = "Cancelado";
                console.log("Pedido cancelado com sucesso!");
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "6":
                let is_pedido = false;
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    if (p.id_cliente == cliente.id){
                        console.log(`${i+1} -> ID: ${p.id} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                        is_pedido = true;
                    }
                }
                if (pedidos.length == 0 || is_pedido == false){
                    console.log("Não houveram pedidos!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "7":
                is_pedido = false;
                let pedidos_cliente = []
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    if (p.id_cliente == cliente.id){
                        pedidos_cliente.push(p);
                        console.log(`${i+1} -> ID: ${p.id} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                        is_pedido = true;
                    }
                }
                if (pedidos.length == 0 || is_pedido == false){
                    console.log("Não houveram pedidos!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let pedido_a = Number(requisicao.question("Digite o número do pedido a ser avaliado: "))-1;
                if (!pedidos_cliente.includes(pedido_a)){
                    console.log("Pedido inválido!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let nota = requisicao.question("Qual nota voce daria para o pedido? (0-10): ")
                if (nota < 0 || nota > 10){
                    console.log("Nota inválida!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let texto = requisicao.question("Qual a sua avaliação sobre o pedido?: ")
                console.log(sep);
                let aval = new Avaliacao(nota, texto, pedidos[pedido_a].id, pedidos[pedido_a].produto);
                avaliacoes.push(aval);
                console.log("Avaliação enviada com sucesso!");
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "8":
                if (avaliacoes.length == 0){
                    console.log("Não há avaliações!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                for (let i = 0; i < avaliacoes.length; i++){
                    let a = avaliacoes[i];
                    console.log(`Nota: ${a.nota} | Texto: ${a.texto}`);
                }
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "9":
                new Sistema();
                break;
            default:
                console.log("Essa entrada não é válida!");
                console.log(sep);
                this.cliente_logado(cliente);
                break;
        }
    }
    
    
}
//Inicializando variáveis globais que serão usadas em todo o código.
var sep = "--------------------------------------";
var funcionarios = [];
var clientes = [];
var pedidos = [];
var produtos = [];

//Funcionarios nao podem se cadastrar que nem clientes, entao eles devem ser inicializados anteriormente pelo administrador, futuramente isso será feito no arquivo .json.
var funcionario1 = new Funcionario("1000", "gabs", "39880529812", "ga@gmail.com", "12345");
funcionarios.push(funcionario1);
new Sistema();

