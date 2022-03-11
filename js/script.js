let login = document.getElementById("login");
let loading = document.getElementById("loading")
let auth = document.getElementById("auth")
let userContent = document.getElementById("userContent")

function funcCadastrar(){
    login.innerHTML = `
    <div><label for="email">Login: </label>
    <input type="email" id="email"></div>

    <div><label for="password">Senha: </label>
    <input type="password" id="password"></div>

    <div><label for="name">Nome: </label>
    <input type="name" id="name"></div>

    <div><label for="office">Cargo: </label>
    <input type="text" id="office"></div>

    <div><label for="facebook">Facebook: </label>
    <input type="text" id="fb"></div>

    <div><label for="instagram">Instagram: </label>
    <input type="text" id="ig"></div>

    <div><label for="github">Github: </label>
    <input type="text" id="gh"></div>

    <div><label for="twiter">Twiter: </label>
    <input type="text" id="tt"></div>

    <div><label for="description">Descrição: </label>
    <input type="text" id="desc"></div>

    <div><label for="image" id="imageBox">Imagem: </label>
    <input type="file" id="image" accept="image/png, image/jpeg"></div>

    <div><button onclick="funcVoltar()" id="btn_bk">Voltar</button>
    <button id="btn_rg">Register</button></div>
     `;
}

function funcVoltar(){
    login.innerHTML = `
    <label for="email">Login: </label>
    <input type="email" id="email">

    <label for="password">Senha: </label>
    <input type="password" id="password">

    <button id="btn_lg">Login</button>
    <button onclick="funcCadastrar()" id="btn_nac">New account</button>
    `;
}

function hideItem(element){
    element.style.display ="none"
}

function showItem(element){
    element.style.display = "block"
}

function showUser(user){
    hideItem(auth)
    showItem(userContent)
}

function showAuth(){
    login.email.value = ""
    login.password.value = ""
    hideItem(userContent)
    showItem(auth)
}