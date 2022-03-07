let login = document.getElementById("login");

function funcCadastrar(){
    login.innerHTML = `<form id="login">
    <label for="email">Login: </label>
    <input type="email" id="email">

    <label for="password">Senha: </label>
    <input type="password" id="password">

    <label for="name">Nome: </label>
    <input type="name" id="name">

    <label for="office">Cargo: </label>
    <input type="text" id="office">

    <label for="facebook">Facebook: </label>
    <input type="text" id="fb">

    <label for="instagram">Instagram: </label>
    <input type="text" id="ig">

    <label for="github">Github: </label>
    <input type="text" id="gh">

    <label for="twiter">Twiter: </label>
    <input type="text" id="tt">

    <label for="description">Descrição: </label>
    <input type="text" id="desc">

    <label for="image">Imagem: </label>
    <input type="image" id="image">

    <button onclick="funcVoltar()" id="btn_lg">Voltar</button>
    <button id="btn_rg">Register</button>
    </form> `;
}

function funcVoltar(){
    login.innerHTML = `<form id="login">
    <label for="email">Login: </label>
    <input type="email" id="email">

    <label for="password">Senha: </label>
    <input type="password" id="password">

    <button id="btn_lg">Login</button>
    <button onclick="funcCadastrar()" id="btn_nac">New account</button>
    </form>`;
}