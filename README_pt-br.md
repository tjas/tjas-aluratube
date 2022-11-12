# TJAS AluraTube

[![Status](https://img.shields.io/badge/status-ativo-brightgreen.svg)](./README_pt-br.md)
[![Licence](https://img.shields.io/github/license/tjas/tjas-aluratube?color=blue)](./LICENSE.md)
[![Node](https://img.shields.io/badge/node-v18.12.1-green)](https://nodejs.org/pt-br/)
[![Next](https://img.shields.io/badge/next-v13.0.2-yellow)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-v18.2.0-orange)](https://pt-br.reactjs.org/)

> 🇺🇸 [Inglês](./README.md) ⁘ 🇧🇷 Português

> ⚙️ [Acesse a demo e veja o projeto funcionando](https://tjas-aluratube.vercel.app/)

> ⭐ Marque o projeto com uma estrela

Este projeto é uma adaptação e evolução do projeto **[AluraTube](https://github.com/alura-challenges/aluratube)**, proposto no 5ª Imersão React da [Alura](https://www.alura.com.br/), que ocorreu em novembro de 2022. Inicialmente ele tinha como objetivo divulgar conhecimentos básicos sobre a tecnologia [React.JS](https://pt-br.reactjs.org/), mas tornou-se uma oportunidade de praticar e desenvolver habilidades pessoais nessa tecnologia e em outras relacionadas.

O **React** é uma biblioteca [JavaScript](https://www.javascript.com/) criada pelo Facebook para construir interfaaces de usuário modernas, conhecidas como aplicações _front-end_, as quais são conectadas a aplicações _back-end_, que servem conteúdo e gerenciam regras negociais em sistemas complexos. O React roda sobre o [Node.JS](https://nodejs.org/pt-br/), um ambiente de execução JavaScript multi plataforma de código aberto, e é potencializado por outras bibliotecas e _frameworks_, principalmente o [Next.JS](https://nextjs.org/), um _framework_ muito popular, que também é utilizado neste projeto.

O **AluraTube** é uma plataforma de vídeos inspirada no [YouTube](https://www.youtube.com/). Alura e AluraTube são marcas registradas da _AOVS Sistemas de Informática S.A._, todos os direitos reservados. YouTube é uma marca registrada da _Google LLC_, todos os direitos reservados.

## Utilização

Este é um exemplo de como você pode configurar o projeto localmente no seu computador. Para obter uma cópia local funcionando, siga estas etapas:

1. Certifique-se de que você tem o Node.JS 18.12.1+ com o npm 8.19.2+ instalado ou verifique como fazê-lo em [NodeJS.org](https://nodejs.org/pt-br/download/);
2. Certifique-se de que você tem o Git instalado ou verifique como fazê-lo em [Git-scm.com](https://git-scm.com/);
3. Acesse a pasta na qual você deseja salvar o projeto, então, clone o repositório nesta pasta
```sh
git clone https://github.com/tjas/tjas-aluratube
```
4. Acesse a pasta do projeto;
5. Instale as dependências do projeto (obtidas, por padrão, do arquivo `package.json`)
```sh
npm install
```
6. Execute a aplicação
```sh
npm run dev
```
7. Finalmente, acesse a aplicação no endereço http://localhost:3000

## Contribuição

> Adaptado do projeto [Flappy Bird: Dev Soutinho](https://github.com/omariosouto/flappy-bird-devsoutinho/blob/master/CONTRIBUTING.md).

1. Crie um fork!
2. Crie sua feature branch:
```
git checkout -b my-new-feature
```
3. Adicione os arquivos modificados:
```
git add .
```
4. Faça um Commit com suas alterações:
```
git commit -m "Add some feature"
```
5. Faça um push da sua branch:
```
git push origin my-new-feature
```
6. Envie um [Pull Request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) para esse repositório

    - Adicione um título e uma descrição que deixe claro sua sugestão.
    - Depois que seu pull request for mergeado, você pode apagar sua branch.

## Lista de tarefas a serem realizadas

- [ ] Obter uma lista de vídeos dinamicamente por meio da [Google API](https://www.npmjs.com/package/googleapis);
- [ ] Incluir efeito de _fade_ nas extremidades dos _scrolls_ horizontais;
- [ ] Criar, editar e excluir playlists;
- [ ] Adicionar e remover vídeos;
- [ ] Adicionar e remover favoritos;
- [ ] Editar as informações de usuário;
- [ ] Persistir informações em base de dados local;
- [ ] Traduzir para outros idiomas;
- [ ] Criar página de login;
- [ ] Separar páginas públicas e privadas.

## Referências

- [Versão LTS do Node.JS](https://nodejs.org/pt-br/);
- [Documentação do npm](https://docs.npmjs.com/);
- [Visual Studio Code](https://code.visualstudio.com/);
- [Componentes do Material Design](https://m3.material.io/components);
- [Documentação do React.JS](https://pt-br.reactjs.org/docs/getting-started.html);
- [Documentação do Next.JS](https://nextjs.org/docs/getting-started);
- [Documentação do Styled Components](https://styled-components.com/docs);
- [Conta da Vercel no GitHub](https://github.com/vercel);
- [Exemplo oficial de utilização do Styled Components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components);
- [Arquivo next.config.js dos exemplos de Styled Components](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/next.config.js).
- [Conta "Alura Challenges" da Alura no GitHub](https://github.com/alura-challenges).

## Contato

- **Thiago Jorge Almeida dos Santos** ⁘ [LinkedIn](https://www.linkedin.com/in/thiago-tjas) ⁘ [GitHub](https://github.com/tjas)
    
    Autor e mantenedor do projeto.

## Licença

- Distribuído sob a [Licença MIT](./LICENSE.md).

## Agradecimentos

- **Mario Souto** ⁘ [LinkedIn](https://www.linkedin.com/in/omariosouto/) ⁘ [YouTube](https://www.youtube.com/c/DevSoutinho) ⁘ [GitHub](https://github.com/omariosouto) ⁘ [Instagram](https://www.instagram.com/devsoutinho/)

    Instrutor da Imersão React da Alura, por compartilhar o seu conhecimento na Imersão React.

- **Nayanne Lopes** ⁘ [LinkedIn](https://www.linkedin.com/in/nayannebatista/) ⁘ [Instagram](https://www.instagram.com/nayanne.tech/)

    Instrutora na Alura, por contribuir na Imersão React com as comparações entre React e Angular.

- **Paulo Silveira** ⁘ [LinkedIn](https://www.linkedin.com/in/paulosilveira/) ⁘ [Instagram](https://www.instagram.com/paulo_hipster/)

    Co-fundador e CEO da Alura, por idealizar e conduzir a Imersão React.
