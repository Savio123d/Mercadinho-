const entrar = document.getElementById('entrar');
entrar.addEventListener('click',
    function () {

        let login = document.getElementById('login').value;
        let senha = document.getElementById('senha').value;

        const usuarioCadastrados = JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];

        let usuarioEncontrado = usuarioCadastrados.find(
            u => u.usuario === login && u.senha === senha
        );
        if (usuarioEncontrado) {
            localStorage.setItem("userLogado",login);
            window.location.href = "dashboard.html";
        }else{
            document.getElementById('mensagem').textContent = "Login ou senha incorretos";
        }
    }
);