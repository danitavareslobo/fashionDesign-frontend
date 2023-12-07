<h1 align="center"> Sobre o projeto </h1>

Esse projeto faz parte do programa de formações de desenvolvedores Full Stack [**DEVinHouse** do lab 365](https://devinhouse.tech/) em parceria com a house [**Audaces**](https://audaces.com/pt-br)

<br>

# Fashion Design (FrontEnd)

É um software audacioso para gestão de coleções de moda no setor de vestuário. Nesse repositório está a aplicação FrontEnd do software, construída utilizando o framework Angular. Consumindo uma API no BackEnd
Nesta aplicação para gerenciamento de coleções de moda e dos modelos, sendo possivel adicionar, editar e excluir coleções, modelos e usuarios. Foram utilizados mecanismos para proteção de rotas por meio do JWT.

<br>

## Status do Projeto

> Em desenvolvimento, aguardando conclusão do BackEnd ⚙️⚙️
>
> Repositório do Projeto BackEnd: https://github.com/danitavareslobo/fashionDesign-backend



<br>

## Técnologias utilizadas

`Angular` `HTML` `SCSS` `TypeScript` ` JavaScript` `Bootstrap`

<br>

## :hammer: Funcionalidades da Aplicação


- `Tela de Login` - Página contendo um formulário com campos de email e senha. Os campos de email e senha são obrigatórios, ao clicar no botão de Entrar e passa pela validação, verifica se é email e se a senha possui 8 caracteres, redireciona para tela de Dashboard, a tela contém ainda um redirecionamento para "Redefinir Senha" e "Cadastro". Realiza um POST para a API para identificar se o usuário informou e-mail e senha válidos e com acesso.
- `Tela Redefinir Senha` - Página contendo um formulário com o campo de e-mail, esta tela possui um botão de voltar que redireciona o usuário para tela de login. O envio do formulário gera um POST para a API.
- `Tela de Cadastro` - Página contendo um formulário com os campos de nome da empresa, cnpj, nome do gerente, e-mail, senha e confirmação de senha. Esta tela possui um botão de voltar que redireciona o usuário para tela de login. O envio do formulário gera um POST para a API e cria automaticamente um usuário Admin vinculado ao e-mail principal da empresa.
- `Menu Lateral` - Componente contendo as opções Dashboard, Coleções, Modelos, Perfil, Obter Ajuda e Configurações, sendo Configurações um dropdown com um sub-menu contendo: Pessoas e Configurações Gerais. O menu de Configurações gera uma rota de Unauthorized, caso o Usuário tenha o Papel de `Ver Somente`. A rota Unauthorized possui um botão Voltar.
- `Header` - Componente contendo ícone de notificações (sem ação), Botão Avatar sendo um dropdown sub-menu contendo: Conta (direcionando a tela de Perfil para Alteração de Senha), Configurações e Sair.
- `Sub-menu` - Sub-menu do Navbar com Botão de Logout redireciona para tela de Login (Conta e Configurações sem ação).
- `Dashboard` - Página contendo o Componente Cards, uma tabela contendo os 5 maiores orçamentos dentre as coleções, e um gráfico de Comparação de Orçamento vs Custo Real. A tabela é ordenada do maior para o menor valor em orçamento.
- `Cards` - Componente Card 1 e 2 contendo uma Propriedade para mostrar o valor. Componente Card 3 contendo uma Propriedade para trazer a informação de valor com a média em moeda BR
- `Página de Coleções` - Página contendo uma tabela com as colunas nome da coleção, estação + lançamento (deve ser um dado combinado entre as propriedades), responsável e orçamento, além do botão Criar Coleção que redireciona o usuário para tela de cadastro de coleção. Além disso, as linhas da tabela são clicáveis e o clique na linha redireciona o usuário para Editar Coleção.
- `Página Cadastro de Coleção` - Página contendo um formulário com os campos nome, responsável, estação, marca, orçamento, cores da coleção, status (default: não iniciada) e ano de lançamento. contendo uma tabela com as colunas modelo ID, nome do modelo, coleção relacionada, custo e responsável, além do botão Criar Modelo que redireciona o usuário para tela de cadastro de modelo. coleções. Apenas usuários do tipo "Admin", “Gerente”, e “Time” têm permissão para Cadastro de Coleções.
- `Página Editar Coleção` - Página contendo um formulário. Essa tela recebe um parâmetro na rota para identificar que coleção o usuário deseja editar, e ainda mostra no formulário os dados da coleção ao carregar as informações sobre ela. Chama o evento onSubmit e cadastra unidade via PUT. Apenas usuários do tipo "Admin", “Gerente” e “Time” têm permissão para edição de coleções.
- `Página de Modelos` - Página contendo uma tabela com as colunas modelo ID, nome do modelo, coleção relacionada, custo e responsável, além do botão Criar Modelo que redireciona o usuário para tela de cadastro de modelo.
- `Página Criar Modelo` - Página contendo um formulário. Chama o  evento de onSubmit e cadastra a unidade via POST na rota /modelos da API. Apenas usuários do tipo "Admin", “Gerente”, e “Time” têm permissão para Cadastro de Modelos.
- `Página Editar Modelo` - Página contendo um formulário com os mesmos campos presentes no Cadastro de Modelos. Essa tela recebe um parâmetro na rota para identificar que modelo o usuário deseja editar, e ainda mostra no formulário os dados do modelo ao carregar as informações sobre ele. Possui o botão Exluir. Apenas usuários do tipo "Admin", “Gerente” e “Time” têm permissão para edição de modelos.
- `Tela de Perfil` - Página para modificação da senha de acesso, tendo um formulário simples com os campos em readonly e com preenchimento automático, estando disponíveis para preenchimento somente "Senha" e "Confirmação de Senha". 
- `Tela de Configurações` - Página com 2 rotas. `Usuários` e `Configurações Gerais`.
- Página com a Listagem de Usuários Cadastrados na Empresa, ao clicar em cada Usuário é possível editar suas informações ou excluí-lo. Somente "Admin" e "Gerente" tem permissão de acesso a essa página.
- Página de Configurações Gerais, usada para alteração de Tema, sendo "light theme" e "dark theme". Podendo ainda alterar a imagem.

<br>

## Autoria do Projeto

<div>

> 
> <a href="https://github.com/danitavareslobo"><img src="https://user-images.githubusercontent.com/107322230/230226213-2a6c2774-cace-453a-b78c-9bd57fe045a5.jpg" width= 120 target="_blank"></a>
<a href="https://github.com/danitavareslobo"> <p >  Daniele Tavares Lobo </p></a>

</div>

<div>

> 
> <a href="https://github.com/TrizCes"><img src="https://github.com/danitavareslobo/fashionDesign-backend/assets/107322230/3686f6ad-6625-4150-8a84-db72552c24e7" width= 120 target="_blank"> </a>
<a href="https://github.com/TrizCes"> <p>Beatriz Ceschini  </p></a>

</div>