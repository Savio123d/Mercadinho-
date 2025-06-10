# Mercadinho 🛒✨

Bem-vindo ao **Mercadinho**, sua solução online para uma experiência de compra e gestão de produtos simplificada e eficiente! Este projeto oferece uma plataforma intuitiva para usuários visualizarem produtos, gerenciarem seus carrinhos de compra e finalizarem pedidos, tudo isso com um sistema de autenticação seguro e fácil de usar.

## O que o Mercadinho Oferece? 🚀

Explore as funcionalidades que tornam o Mercadinho uma ferramenta prática e completa:

* **Autenticação de Usuários Segura**: Registre-se facilmente e faça login para acessar todas as funcionalidades do Mercadinho. Seu acesso é protegido para garantir uma experiência de compra personalizada e segura.
* **Gestão de Usuários Simplificada**: Para administradores, há uma interface dedicada no painel de cadastro onde é possível visualizar, editar e até mesmo remover usuários do sistema, garantindo total controle sobre quem acessa a plataforma.
* **Catálogo de Produtos Dinâmico**: Navegue por um catálogo de produtos rico e variado, que é carregado dinamicamente de uma API externa. Cada item é apresentado com informações claras e imagens de alta qualidade.
* **Detalhes Aprofundados do Produto**: Curioso sobre um produto? Basta um clique para ver informações detalhadas como descrição, preço e imagens, ajudando você a tomar a melhor decisão de compra.
* **Carrinho de Compras Inteligente**: Adicione produtos ao seu carrinho com facilidade! O carrinho de compras permite ajustar a quantidade de itens ou remover produtos, proporcionando total flexibilidade antes de finalizar a compra. O ícone do carrinho no canto superior direito mostra a quantidade de itens, e o total é sempre atualizado.
* **Finalização de Compra Intuitiva**: Quando estiver pronto para concluir sua compra, o processo de checkout é direto. Escolha seu método de pagamento preferido (Cartão de Crédito, PIX, Boleto Bancário) e insira seu endereço de entrega para finalizar o pedido com confiança.

## Tecnologias que Impulsionam o Mercadinho 🛠️

Este projeto foi construído com tecnologias modernas e eficientes para garantir performance e uma ótima experiência de usuário:

* **HTML5**: A espinha dorsal das nossas páginas, garantindo uma estrutura semântica e acessível.
* **CSS3**: Com um toque de `style.css` para personalizações e o poder do **Bootstrap 5.3.3** para um design responsivo e componentes de interface elegantes, o Mercadinho tem uma aparência moderna e se adapta a qualquer tela.
* **JavaScript**: A inteligência por trás do Mercadinho! Nossos scripts (`login.js`, `cadastro.js`, `api.js`) gerenciam a autenticação, a manipulação de usuários, a interação com a API de produtos e toda a lógica do carrinho de compras.
* **Font Awesome 6.5.2**: Adiciona ícones visuais atraentes, como o ícone do carrinho de compras, para melhorar a usabilidade.
* **Fake Store API**: Utilizamos esta API para simular um catálogo de produtos real, permitindo uma demonstração completa das funcionalidades de listagem e detalhes de produtos.

## Como Colocar o Mercadinho Para Rodar? 🚀

É super fácil configurar e experimentar o Mercadinho localmente:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_REPOSITÓRIO>
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd Mercadinho
    ```
3.  **Abra no seu navegador:**
    Simplesmente abra o arquivo `index.html` no seu navegador web preferido (Google Chrome, Firefox, etc.). Não é necessário servidor web ou configurações complexas!

## Guia Rápido de Uso 💡

Siga estes passos para uma navegação tranquila pelo Mercadinho:

1.  **Boas-Vindas**: Ao iniciar, você verá a página de boas-vindas (`index.html`) com opções claras para `Login` ou `Cadastro`.
2.  **Crie sua Conta (Cadastro)**: Se for sua primeira vez, clique em "Cadastro". Preencha os campos de usuário e senha. Nesta mesma página, você pode gerenciar outros usuários cadastrados, editando ou excluindo-os.
3.  **Acesse sua Conta (Login)**: Utilize a página de "Login" para entrar no sistema com suas credenciais. Se os dados estiverem corretos, você será direcionado ao `Dashboard`.
4.  **Explore o Catálogo (Dashboard)**: No `Dashboard`, divirta-se navegando pelos produtos disponíveis. Você verá detalhes como título e preço.
5.  **Veja os Detalhes do Produto**: Clique em "Ver Detalhes" para obter uma descrição mais completa e outras informações sobre o produto.
6.  **Adicione ao Carrinho**: Quando encontrar algo que goste, clique em "Adicionar ao Carrinho". O contador no ícone do carrinho será atualizado, mostrando o número de itens.
7.  **Visualize seu Carrinho**: Clique no ícone do carrinho (canto superior direito) para abrir o modal do seu carrinho de compras. Aqui, você pode revisar os itens, ajustar as quantidades ou remover produtos.
8.  **Finalize sua Compra**: Clique em "Finalizar Compra" no modal do carrinho. Preencha seu endereço de entrega e escolha o método de pagamento. Por fim, clique em "Confirmar Pedido" e pronto! Seu pedido será "realizado" (simulado para este projeto).

## Considerações Técnicas 💻

* **Persistência de Dados**: Os dados de usuários e do carrinho de compras são armazenados no `localStorage` do navegador, o que significa que eles persistem mesmo se você fechar e reabrir o navegador.
* **Sessão do Usuário**: A informação do usuário logado é mantida no `sessionStorage`, garantindo que a sessão seja válida enquanto a aba do navegador estiver aberta.
* **Integração com API Externa**: O projeto se conecta à `Fake Store API` para popular dinamicamente o catálogo de produtos, demonstrando a capacidade de integração com serviços externos.
