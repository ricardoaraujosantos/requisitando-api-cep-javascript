// recebe o input cep do html
const cep = document.getElementById('cep');
 
// criando um evento, nesse caso o blur sera acionado quando o foco do input mudar para o outro
cep.addEventListener('blur', (e) => {

    let seachCep = cep.value.replace("-", ""); // recebe o valor do cep e o replace procura o traço e substuitui por nada""

    // Função para manipular o resultado do json().then(data)
    function showDataApi(resultado) {
        for (const campo in resultado) {  // for in cria const campo e joga o resultado dentro dele
            if(document.querySelector('#'+campo)){ // selecione só os id que temos e descarta os demais extraidos na API
                let addressUser = document.querySelector('#'+campo).value = resultado[campo]; // a variavel recebe o valor do resultado e sera tratado como um array que preenchera os input com o valor extraido da API  
            }
        }
    };

    // Criando um objeto que indica os parametros de acesso
    const options = {

        method: 'GET', // Metodo de acesso 
        mode: 'cors', // cors indica a origin do servidor utilizada, nesse caso uma origin diferente
        cache: 'default'
    };

    // Requisição fetch
    fetch(`https://viacep.com.br/ws/${seachCep}/json/`, options) // substitue o valor /numero/ da url da API e inserirmos no lugar placeholders: ${valor da variavel que recebe o cep}, options indica os parametros utilizados na requiseção
    .then(Response => {
        Response.json() // o json sempre retorna uma promisse então usamos o then para tratar os dados
            .then(data => showDataApi(data)) // função recebe os dados
    })
        .catch(e => console.log('Erro: '+ e, message)); // Se deu erro exibir mensagem no console
});