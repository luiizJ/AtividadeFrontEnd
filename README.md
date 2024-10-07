
# User Management System

Um sistema simples de gerenciamento de usuários construído com React, TypeScript e SCSS Modules. Este projeto permite adicionar, editar e excluir usuários de uma lista.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript que adiciona tipagem estática
- [SCSS](https://sass-lang.com/) - Pré-processador CSS que estende a linguagem CSS
- [Axios](https://axios-http.com/) - Cliente HTTP baseado em promessa para fazer requisições

## Funcionalidades

- Adicionar novos usuários
- Editar usuários existentes
- Excluir usuários
- Visualização em tempo real da lista de usuários
- Feedback de carregamento e erros

## Estrutura do Projeto

\`\`\`
src/
  ├─ Components/
  │   ├─ Layout/
  │   │   ├─ Layout.tsx
  │   │   ├─ Layout.module.scss
  │   ├─ Modal/
  │   │   ├─ Modal.tsx
  │   │   ├─ Modal.module.scss
  │   ├─ UserForm/
  │   │   ├─ UserForm.tsx
  │   │   ├─ UserForm.module.scss
  │   ├─ UserList/
  │   │   ├─ UserList.tsx
  │   │   ├─ UserList.module.scss
  ├─ Hooks/
  │   ├─ useUserApi.ts
  ├─ App.tsx
  ├─ index.tsx
  ├─ index.css
\`\`\`

## Instalação

1. Clone o repositório:
   \`\`\`
   git clone 
   \`\`\`
2. Instale as dependências:
   \`\`\`
   npm install
   \`\`\`
3. Inicie o servidor de desenvolvimento:
   \`\`\`
   npm start
   \`\`\`
4. Abra seu navegador e acesse \`http://localhost:3000\`.

## Como Usar

1. Ao abrir o aplicativo, você verá um formulário para adicionar um novo usuário.
2. Preencha os campos **Nome** e **Email** e clique em "Adicionar" para inserir um novo usuário na lista.
3. Para editar um usuário, clique no botão "Editar" ao lado do nome do usuário. Isso preencherá o formulário com os dados do usuário selecionado. Faça as alterações e clique em "Atualizar".
4. Para excluir um usuário, clique no botão "Excluir". Uma janela modal aparecerá pedindo confirmação. Clique em "Sim" para confirmar a exclusão.

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para enviar um pull request.

1. Fork o projeto
2. Crie uma nova branch (\`git checkout -b minha-feature\`)
3. Faça suas alterações e adicione-as (\`git add .\`)
4. Faça um commit das suas alterações (\`git commit -m 'Adicionando uma nova feature'\`)
5. Envie para o seu repositório (\`git push origin minha-feature\`)
6. Abra um Pull Request

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.
`;

