document.getElementById('entrar').addEventListener('click', function () {

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagem');

    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuariosCadastrados.find(user => user.usuario === login && user.senha === senha);

    if (usuarioEncontrado) {

        sessionStorage.setItem('usuarioLogado', usuarioEncontrado.usuario);
        window.location.href = 'dashboard.html';
    } else {

        mensagemErro.textContent = 'Usuário ou senha inválidos!';
    }
});