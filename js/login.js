const botao = document.getElementById('btnCadastrar');
const tabelaUsuarios = document.getElementById('tabelaUsuarios');

// Função para listar/renderizar usuários na tabela
function listar() {
    const listaUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];
    tabelaUsuarios.innerHTML = ''; // Limpa a tabela antes de preencher

    if (listaUsuario.length === 0) {
        tabelaUsuarios.innerHTML = '<tr><td colspan="2" class="text-center">Nenhum usuário cadastrado.</td></tr>';
        return;
    }

    listaUsuario.forEach((usuario, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.usuario}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editarUsuario(${index})">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="excluirUsuario(${index})">Excluir</button>
            </td>
        `;
        tabelaUsuarios.appendChild(tr);
    });
}

// Evento de clique para cadastrar ou editar
botao.addEventListener('click', function () {
    let listaUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = {
        usuario: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    };
    const indexEditar = document.getElementById("indexEditado").value;

    if (usuario.usuario === '' || usuario.senha === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (indexEditar !== "") { // Edição
        listaUsuario[indexEditar] = usuario;
        document.getElementById("indexEditado").value = "";
    } else { // Novo cadastro
        listaUsuario.push(usuario);
    }
    
    localStorage.setItem("usuarios", JSON.stringify(listaUsuario));
    
    // Limpar campos e atualizar lista
    document.getElementById('login').value = '';
    document.getElementById('senha').value = '';
    listar();
});

function editarUsuario(index) {
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const objUsuario = usuariosCadastrados[index];
    document.getElementById("login").value = objUsuario.usuario;
    document.getElementById("senha").value = objUsuario.senha;
    document.getElementById('indexEditado').value = index;
}

function excluirUsuario(index) {
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (confirm("Você realmente quer excluir este usuário?")) {
        usuariosCadastrados.splice(index, 1);
        localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));
        listar();
    }
}

// Inicia a página listando os usuários já existentes
listar();