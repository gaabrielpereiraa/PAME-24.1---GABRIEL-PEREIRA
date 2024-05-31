class Pedido{
    constructor(id, id_cliente, status, data, produto, quantidade, avaliado){
        this.id = id;
        this.id_cliente = id_cliente;
        this.status = status;
        this.data = data;
        this.produto = produto;
        this.quantidade = quantidade;
        this.avaliado = avaliado;
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
        //Mostrar a tela inicial do programa, dando 3 opcões para o usuário
        console.log("Bem Vindo(a) ao Mercado Bom Preço!")
        console.log("1.Fazer Login");
        console.log("2.Fazer Cadastro");
        console.log("3.Sair do Programa");
        var requisicao = require('readline-sync');
        var entrada = requisicao.question("Escolha uma opcao: ")
        switch(entrada){
            case "0":
                console.log(sep);
                console.log("Essa opção não é válida!");
                console.log(sep);
                new Sistema();
                break;
            case "1":
                console.clear();
                this.login();
                break;
            case "2":
                console.clear();
                this.cadastro();
                break;
            case "3":
                return;
            default:
                console.log(sep);
                console.log("Essa opção não é válida!");
                console.log(sep);
                new Sistema();
                break;
        }
    }
    //Funcão para checar se o email é válido
    ask_email(){
        var requisicao = require('readline-sync');
        let e_mail = requisicao.question("Entre o seu email: ");
        for (let i = 0; i < clientes.length; i++){
            if (clientes[i].email == e_mail){
                console.log("Email já cadastrado!");
                console.log(sep);
                return this.ask_email();
            }
        }
        if (e_mail.includes('@') && e_mail.includes('.')){
            return e_mail;
        }
        else{
            console.log("Email inválido!");
            console.log(sep);
            return this.ask_email();
        }
    }
    //Funcão para checar se a data de nascimento é válida
    ask_date(){
        var requisicao = require('readline-sync');
        let date = requisicao.question("Entre a sua data de nascimento (YYYY-MM-DD): ");
        let separated = date.split('-');
        if (separated.length != 3){
            console.log("Data inválida!");
            console.log(sep);
            return this.ask_date();
        }
        for (let i = 0; i < 3; i++){
            if (isNaN(separated[i])){
                console.log("Data inválida!");
                console.log(sep);
                return this.ask_date();
            }
        }
        if (separated[0].length != 4 || separated[1].length != 2 || separated[2].length != 2 || Number(separated[0]) > 2024 || Number(separated[0]) <= 1910 || Number(separated[1]) > 12 || Number(separated[1]) < 1 || Number(separated[2]) > 31 || Number(separated[2]) < 1){
            console.log("Data inválida!");
            console.log(sep);
            return this.ask_date();
        }
        const date_n = new Date(date);
        if (isNaN(date_n.getTime())){
            console.log("Data inválida!");
            console.log(sep);
            return this.ask_date();
        }
        return date;
    }
    //Função para checar se o CPF é válido
    ask_cpf() {
        var requisicao = require('readline-sync');
        let cpf = requisicao.question("Entre o seu CPF (somente números): ");
        if (cpf == "00000000000" || cpf.length != 11 || isNaN(cpf) || cpf.split('').every(char => char === cpf[0])) {
            console.log("CPF inválido!");
            console.log(sep);
            return this.ask_cpf();
        }
        let soma = 0;
        let resto;

        // Verifica o primeiro dígito verificador
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }

        if (resto !== parseInt(cpf.substring(9, 10))) {
            console.log("CPF inválido!");
            console.log(sep);
            return this.ask_cpf();
        }

        soma = 0;

        // Verifica o segundo dígito verificador
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }

        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }

        if (resto !== parseInt(cpf.substring(10, 11))) {
            console.log("CPF inválido!");
            console.log(sep);
            return this.ask_cpf();
        }
        return cpf;
    }
    //Função para checar se o preço é válido
    ask_price(){
        var requisicao = require('readline-sync');
        let price = requisicao.question("Digite o preco do produto: ");
        if (isNaN(price)){
            console.log("Preço Inválido!");
            console.log(sep);
            return this.ask_price();
        }
        else{
            return price;
        }
    }
    //Função para checar se o estoque é válido
    ask_stock(){
        var requisicao = require('readline-sync');
        let stock = (requisicao.question("Digite a quantidade do produto no estoque: "));
        if (isNaN(stock) || !Number.isInteger(Number(stock))){
            console.log("Estoque inválido!");
            console.log(sep);
            return this.ask_stock();
        }
        else{
            return Number(stock);
        }
    }   
    //Função para checar se a validade é válida
    ask_validity(){
        var requisicao = require('readline-sync');
        let validity = requisicao.question("Entre a data de validade (YYYY-MM-DD): ");
        if (isNaN(new Date(validity))){
            console.log("Data inválida!");
            console.log(sep);
            return this.ask_validity();
        }
        else{
            return validity;
        }
    }

    login(){
        //Pedir os dados do usuário para tentar fazer o login
        var requisicao = require('readline-sync');
        var email = requisicao.question("Entre o seu email: ");
        var senha = requisicao.question("Entre a sua senha: ");
        console.log(sep);

        //Checar se os dados do usuário são encontrados no banco de dados de funcionário do mercado
        for (let i = 0; i < funcionarios.length; i++){
            if (funcionarios[i].email == email){
                //Checando se a senha é igual à senha criptografada;
                if (funcionarios[i].senha == senha){
                    console.clear();
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
        //Checar se os dados do usuário são encontrados no banco de dados de cliente do mercado
        for (let i = 0; i < clientes.length; i++){
            if (clientes[i].email == email){
                if (clientes[i].senha == senha){
                    console.clear();
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

        //Pedir ao usuário os dados necessários para o cadastro e checar se eles são válidos
        const bcrypt = require('bcrypt');   
        var requisicao = require('readline-sync');
        var nome = requisicao.question("Entre o seu nome: ");
        var email = this.ask_email();
        var senha = requisicao.question("Entre a sua senha: ");
        var data = this.ask_date();
        var cPf = this.ask_cpf();
        let cliente_novo = new Cliente(Math.floor(Math.random() * 100000), nome, data, cPf, email, senha);
        clientes.push(cliente_novo);
        clientes.sort((a, b) => a.nome.localeCompare(b.nome));
        new Sistema();
    }

    //Ações que podem ser tomadas por um funcionário logado
    funcionario_logado(funcionario){
        var requisicao = require('readline-sync');
        console.log(`Bem vindo(a) ${funcionario.username}!`)
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
                //Mostrando os dados do funcionário
                console.clear();
                console.log("ID: " + funcionario.id);
                console.log("Usuário: " + funcionario.username);
                console.log("Email: " + funcionario.email)
                console.log("Senha: " + funcionario.senha);
                console.log("CPF: " + funcionario.cpf);
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "2":
                //Dando as opções para o funcionário alterar seus dados
                console.clear();
                console.log("1.Usuário");
                console.log("2.Email");
                console.log("3.Senha");
                console.log("4.CPF");
                let change = requisicao.question("Escolha qual dado deseja alterar: ");
                console.log(sep);
                //Alterando os dados do funcionário mas checando se eles são válidos
                switch (change){
                    case "1":
                        funcionario.username = requisicao.question("Digite o seu novo usuário: ");;
                        break;
                    case "2":
                        funcionario.email = this.ask_email();
                        break;
                    case "3":
                        funcionario.senha = requisicao.question("Digite a sua nova senha: ");;
                        break;
                    case "4":
                        funcionario.cpf = this.ask_cpf();
                        break;
                    default:
                        console.log("Entrada inválida!");
                        this.funcionario_logado(funcionario);
                        break;
                }
                console.log("Dados alterados com sucesso!");
                console.log(sep);
                funcionarios.sort((a, b) => a.nome.localeCompare(b.nome));
                this.funcionario_logado(funcionario);
                break;
            case "3":
                //Checando se já foi realizado algum pedido e, em caso positivo, mostrando todos esses pedidos e seus dados.
                console.clear();
                if (pedidos.length == 0){
                    console.log("Não houveram pedidos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    console.log(`ID: ${p.id} | Cliente: ${p.id_cliente} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                }
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "4":
                //Checando se já foi adicionado algum produto e, em caso positivo, mostrando todos esses produtos e seus dados.
                console.clear();
                if (produtos.length == 0){
                    console.log("Não existem produtos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                produtos.sort((a, b) => a.nome.localeCompare(b.nome));
                for (let i = 0; i < produtos.length; i++){
                    let p = produtos[i];
                    console.log(`Nome: ${p.nome} | Descricao: ${p.descricao} | Preco: ${p.preco} | Estoque: ${p.estoque} | Validade: ${p.validade}`);
                }
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "5":
                //Checando se já foi adicionado algum cliente e, em caso positivo, mostrando todos esses clientes e seus dados, menos a senha, que deve ser algo privado.
                console.clear();
                if (clientes.length == 0){
                    console.log("Não existem clientes!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                clientes.sort((a, b) => a.nome.localeCompare(b.nome));
                for (let i = 0; i < clientes.length; i++){
                    let c = clientes[i];
                    console.log(`ID: ${c.id} | Nome: ${c.nome} | Data de Nascimento ${c.data} | CPF: ${c.cpf} | Email: ${c.email}`);
                }
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "6":
                //Checa se existem pedidos, mostra todos eles com um número na frente e da a opção ao funcionário de qual pedido alterar e do novo status.
                console.clear();
                if (pedidos.length == 0){
                    console.log("Não houveram pedidos!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    console.log(`${i+1} -> ID: ${p.id} | Cliente: ${p.id_cliente} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                }
                let x = Number(requisicao.question("Escolha um pedido para alterar o status: "))-1
                if (!pedidos.includes(pedidos[x]) || x >= pedidos.length){
                    console.log("Essa entrada não é válida!");
                    console.log(sep);
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
                        pedidos[x].status = "Pendente";
                        break;
                    case "2": 
                        pedidos[x].status = "Adiado";
                        break;
                    case "3": 
                        pedidos[x].status = "Realizado";
                        break;
                    case "4": 
                        pedidos[x].status = "Cancelado";
                        break;
                    default:
                        console.log("Essa entrada não é válida!");
                        console.log(sep);
                        this.funcionario_logado(funcionario);
                        break;
                }
                console.log("Pedido alterado com sucesso!")
                pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "7":
                //Pede as informações do produto, checa se elas são válidas e adiciona ao banco de dados.
                console.clear();
                let nome = requisicao.question("Digite o nome do produto: ");
                let descricao = requisicao.question("Digite a descricao do produto: ");
                let preco = this.ask_price();
                let estoque = this.ask_stock();
                let validade = this.ask_validity();
                let novo_produto = new Produtos(validade, preco, estoque, nome, descricao);
                produtos.push(novo_produto);
                produtos.sort((a, b) => a.nome.localeCompare(b.nome));
                this.funcionario_logado(funcionario);
                break;
            case "8":
                //Checa se existe produtos no banco de dados e apresenta a sua lista para o funcionário escolher qual deseja editar.
                console.clear();
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
                let p_to_change = Number(requisicao.question("Digite o produto que deseja editar: "))-1
                if (!produtos.includes(produtos[p_to_change]) || p_to_change >= produtos.length){
                    console.log("Essa entrada não é válida!");
                    console.log(sep);
                    this.funcionario_logado(funcionario);
                    break;
                }
                //Da ao funcionário a opção de escolher qual dado do produto dejeja alterar.
                console.log("1.Nome");
                console.log("2.Descricao");
                console.log("3.Preco");
                console.log("4.Estoque");
                console.log("5.Validade");
                let a_to_change = requisicao.question("Digite a característica que deseja editar: ");
                switch (a_to_change){
                    case "1":
                        produtos[p_to_change].nome = requisicao.question("Digite o novo nome para o produto: "); ;
                        break;
                    case "2":
                        produtos[p_to_change].descricao = requisicao.question("Digite a nova descrição do produto: "); ;
                        break;
                    case "3":
                        produtos[p_to_change].preco = this.ask_price();
                        break;
                    case "4":
                        produtos[p_to_change].estoque = this.ask_stock();
                        break;
                    case "5":
                        produtos[p_to_change].validade = this.ask_validity();
                        break;
                    default:
                        console.log("Essa entrada não é válida!");
                        console.log(sep);
                        this.funcionario_logado(funcionario);
                        break;
                }
                console.log("Produto editado com sucesso!");
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
            case "9":
                //Checa se existe produtos e da ao funcionário a opção de escolher qual deseja remover
                console.clear();
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
                if (!produtos.includes(produtos[p_to_remove]) || p_to_remove >= produtos.length){
                    console.log("Essa entrada não é válida!");
                    console.log(sep);
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
                //Desloga o funcionário
                console.clear();
                new Sistema();
                break;
            default:
                console.log("Essa entrada não é válida!");
                console.log(sep);
                this.funcionario_logado(funcionario);
                break;
        }
        //Organiza a lista de pedidos, funcionários e produtos nas ordens cronológica, alfabética e alfabética, respectivamente
        pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
        funcionarios.sort((a, b) => a.username.localeCompare(b.username));
        produtos.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    cliente_logado(cliente){
        //Mostra a tela principal do cliente logado e da as opções de ações a se tomar
        var requisicao = require('readline-sync');
        console.log(`Bem Vindo(a) ${cliente.nome}!`);
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
                //Mostra os dados do cliente que está logado
                console.clear();
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
                //Da a opção ao usuário de qual dado alterar e o muda de acordo
                console.clear();
                console.log("1.Nome");
                console.log("2.Email");
                console.log("3.Senha");
                console.log("4.Data de Nascimento");
                console.log("5.CPF");
                let change = requisicao.question("Escolha qual dado deseja alterar: ");
                console.log(sep);
                switch (change){
                    case "1":
                        cliente.nome = requisicao.question("Digite o seu novo nome: ");
                        break;
                    case "2":
                        cliente.email = this.ask_email();
                        break;
                    case "3":
                        cliente.senha = requisicao.question("Digite a sua nova senha: ");
                        break;
                    case "4":
                        cliente.data = this.ask_date();
                        break;
                    case "5":
                        cliente.cpf = this.ask_cpf();
                        break;
                    default:
                        console.log("Entrada inválida!");
                        this.cliente_logado(cliente);
                        break;
                }
                console.log("Dados alterados com sucesso!");
                console.log(sep);
                clientes.sort((a, b) => a.nome.localeCompare(b.nome));
                this.cliente_logado(cliente);
                break;
            case "3":
                //Checa se existem produtos no banco de dados e os mostra
                console.clear();
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
                //Checa se existem produtos no banco de dados, os mostra e computa o pedido que o cliente desejar
                console.clear();
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
                if (!produtos.includes(produtos[p_prod]) || p_prod >= produtos.length){
                    console.log("Essa entrada não é válida!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let p_q = Number(requisicao.question("Digite a quantidade de produto do pedido: "));
                if (!Number.isInteger(p_q) || p_q <= 0 || p_q > Number(produtos[p_prod].estoque)){
                    console.log("Não há estoque suficiente!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let new_p = new Pedido(Math.floor(Math.random() * 10000000), cliente.id, "Pendente", new Date().toJSON().slice(0,10).replace(/-/g,'-'), produtos[p_prod].nome, p_q, false);
                pedidos.push(new_p);
                produtos[p_prod].estoque -= p_q;
                console.log("Pedido realizado com sucesso!");
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "5":
                //Checa se o cliente já fez algum pedido e mostra-os.
                console.clear();
                pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
                let c_pedidos = [];
                var is_pedido = false;
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    if (p.id_cliente == cliente.id){
                        c_pedidos.push(pedidos[i]);
                        console.log(`${i+1} -> ID: ${p.id} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                        is_pedido = true;
                    }
                }
                if (pedidos.length == 0 || is_pedido == false){
                    console.log("Você não fez nenhum pedido!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }

                //Da a opção ao cliente de escolher qual pedido cancelar, mas só pode cancelá-lo se ele ainda não foi realizado.
                let p_to_cancel = Number(requisicao.question("Digite o número do pedido para cancelar: "))-1; 
                if (p_to_cancel == -1 || p_to_cancel >= pedidos.length || !Number.isInteger(p_to_cancel) || !c_pedidos.includes(pedidos[p_to_cancel])){
                    console.log("Essa entrada não é válida!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                else if (pedidos[p_to_cancel].status == "Realizado"){
                    console.log("Esse pedido já foi concluído!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                else if (pedidos[p_to_cancel].status == "Cancelado"){
                    console.log("Esse pedido já foi cancelado!");
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
                //Mostra os pedidos realizados pelo cliente em ordem cronológica.
                console.clear();
                is_pedido = false;
                pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
                for (let i = 0; i < pedidos.length; i++){
                    let p = pedidos[i];
                    if (p.id_cliente == cliente.id){
                        console.log(`ID: ${p.id} | Produto: ${p.produto} | Quantidade: ${p.quantidade} | Data: ${p.data} | Status: ${p.status}`);
                        is_pedido = true;
                    }
                }
                if (pedidos.length == 0 || is_pedido == false){
                    console.log("Você não fez nenhum pedido!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "7":
                //Checa se o cliente fez algum pedido e o mostra todos os pedidos que fez e deixa-o escolher qual avaliar.
                console.clear();
                is_pedido = false;
                let pedidos_cliente = []
                pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
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
                if (!pedidos_cliente.includes(pedidos[pedido_a])){
                    console.log("Pedido inválido!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                //Caso o pedido já tenha sido avaliado, o programa bloqueia uma nova avaliação
                else if (pedidos[pedido_a].avaliado){
                    console.log("Você já avaliou esse pedido!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                //Deixa o cliente escolher a nota e o texto da avaliação, bloqueando a nota caso ela não seja um número ou esteja fora das restrições
                let nota = Number(requisicao.question("Qual nota voce daria para o pedido? (0-10): "))
                if (nota < 0 || nota > 10 || nota == NaN){
                    console.log("Nota inválida!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                let texto = requisicao.question("Qual a sua avaliação sobre o pedido?: ")
                console.log(sep);
                let aval = new Avaliacao(nota, texto, pedidos[pedido_a].id, pedidos[pedido_a].produto);
                pedidos[pedido_a].avaliado = true;
                avaliacoes.push(aval);
                console.log("Avaliação enviada com sucesso!");
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "8":
                //Checa se já houveram avaliações e as mostra
                console.clear();
                if (avaliacoes.length == 0){
                    console.log("Não há avaliações!");
                    console.log(sep);
                    this.cliente_logado(cliente);
                    break;
                }
                for (let i = 0; i < avaliacoes.length; i++){
                    let a = avaliacoes[i];
                    console.log(`Produto: ${a.produto} | Nota: ${a.nota} | Texto: ${a.texto}`);
                }
                console.log(sep);
                this.cliente_logado(cliente);
                break;
            case "9":
                //Desloga o cliente.
                console.clear();
                new Sistema();
                break;
            default:
                console.log("Essa entrada não é válida!");
                console.log(sep);
                this.cliente_logado(cliente);
                break;
        }
        //Organiza a lista de pedidos, clientes e produtos nas ordens cronológica, alfabética e alfabética, respectivamente
        pedidos.sort((a, b) => new Date(a.data) - new Date(b.data));
        clientes.sort((a, b) => a.nome.localeCompare(b.nome));
        produtos.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    
    
}

//Inicializando variáveis globais que serão usadas em todo o código.
var sep = "--------------------------------------";
var funcionarios = [];
var clientes = [];
var pedidos = [];
var produtos = [];
var avaliacoes = [];
const fs = require('fs').promises;
async function main(){

    // Função para salvar as listas em um arquivo
    async function saveLists() {
        const data = { funcionarios, clientes, pedidos, produtos, avaliacoes};
        const jsonString = JSON.stringify(data, null, 2);
        try {
        await fs.writeFile('listas.json', jsonString);
        } catch (err) {
        console.error('Erro ao salvar o arquivo:', err);
        }
    }
    
    // Função para carregar as listas de um arquivo
    async function loadLists() {
        try {
        const data = await fs.readFile('listas.json', 'utf8');
        const parsedData = JSON.parse(data);
        if (data.length == 0){
            await fs.writeFile('listas.json', JSON.stringify('{"funcionarios":[],"clientes":[],"pedidos":[],"produtos":[],"avaliacoes":[]}', null, 2));
        }

        // Populando as listas com os dados do arquivo
        funcionarios = parsedData.funcionarios;
        clientes = parsedData.clientes;
        pedidos = parsedData.pedidos;
        produtos = parsedData.produtos;
        avaliacoes = parsedData.avaliacoes;
        } catch (err) {
        await fs.writeFile('listas.json', JSON.stringify('{"funcionarios":[],"clientes":[],"pedidos":[],"produtos":[],"avaliacoes":[]}', null, 2));
        }
    }
    //É impossível um funcionário se registrar como se fosse cliente, então as credenciais dos funcionários devem ser definidas previamente. Coloquei um de exemplo para testar as funcionalidades do funcionário.
    var funcionario1 = new Funcionario("1000", "gabs", "39880529812", "ga@gmail.com", "12345");
    funcionarios.push(funcionario1);
    await loadLists();
    console.clear();
    new Sistema();
    await saveLists();
}
main();
