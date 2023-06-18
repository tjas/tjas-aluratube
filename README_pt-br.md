# TJAS AluraTube

[![Status](https://img.shields.io/badge/status-ativo-brightgreen.svg?label=Status)](./README_pt-br.md)
[![Website](https://img.shields.io/website?down_color=brightred&down_message=offline&up_color=brightgreen&up_message=online&url=https%3A%2F%2Ftjas-aluratube.vercel.app%2F&label=Website)](https://tjas-aluratube.vercel.app/)
[![Acessos](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftjas%2Ftjas-aluratube&count_bg=%2379C83D&title_bg=%23555555&title=Acessos&edge_flat=false)](https://hits.seeyoufarm.com)
[![Licença](https://img.shields.io/github/license/tjas/tjas-aluratube?color=orange&label=Licença)](https://github.com/tjas/tjas-aluratube/blob/master/LICENCE)
[![Commits](https://img.shields.io/github/commit-activity/t/tjas/tjas-aluratube?label=Commits)](https://github.com/tjas/tjas-aluratube/graphs/commit-activity)
![Último commit](https://img.shields.io/github/last-commit/tjas/tjas-aluratube?color=blue&label=Último%20commit)
![Tamanho do repositório](https://img.shields.io/github/repo-size/tjas/tjas-aluratube?color=888888&label=Tam.%20repositório)
![Tamanho do código](https://img.shields.io/github/languages/code-size/tjas/tjas-aluratube?color=888888&label=Tam.%20código)
[![Stars](https://img.shields.io/github/stars/tjas/tjas-aluratube?color=blue&label=Stars)](https://github.com/tjas/tjas-aluratube/stargazers)
[![Watchers](https://img.shields.io/github/watchers/tjas/tjas-aluratube?color=blue&label=Watchers)](https://github.com/tjas/tjas-aluratube/watchers)
[![Forks](https://img.shields.io/github/forks/tjas/tjas-aluratube?color=blue&label=Forks)](https://github.com/tjas/tjas-aluratube/forks)

[![Node](https://img.shields.io/badge/Node-v18.12.1-green)](https://nodejs.org/pt-br/)
[![Next](https://img.shields.io/badge/Next-v13.0.2-yellow)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-v18.2.0-orange)](https://pt-br.reactjs.org/)

> ⭐ Marque o projeto com uma estrela. 👀 Acompanhe o projeto para receber novidades.
>
> ⚙️ [Acesse a demo e veja o projeto funcionando](https://tjas-aluratube.vercel.app/).
>
> 🇺🇸 Access the [US English](./README.md) version of this page.
<!-- >
> 🌐 Acesse meu site pessoal: [thiago-tjas.com](http://thiago-tjas.com/) -->


Este projeto é uma adaptação e evolução do projeto **[AluraTube](https://github.com/alura-challenges/aluratube)**, proposto no 5ª Imersão React da [Alura](https://www.alura.com.br/), que ocorreu em novembro de 2022. Inicialmente ele tinha como objetivo divulgar conhecimentos básicos sobre a tecnologia [React.JS](https://pt-br.reactjs.org/), mas tornou-se uma oportunidade de praticar e desenvolver habilidades pessoais nessa tecnologia e em outras relacionadas.

<br />
<p align="center">
    <img alt="Preview" src="./screenshots/preview light.png" width="800" />
</p>
<br />

O **React** é uma biblioteca [JavaScript](https://www.javascript.com/) criada pelo Facebook para construir interfaaces de usuário modernas, conhecidas como aplicações _front-end_, as quais são conectadas a aplicações _back-end_, que servem conteúdo e gerenciam regras negociais em sistemas complexos. O React roda sobre o [Node.JS](https://nodejs.org/pt-br/), um ambiente de execução JavaScript multi plataforma de código aberto, e é potencializado por outras bibliotecas e _frameworks_, principalmente o [Next.JS](https://nextjs.org/), um _framework_ muito popular, que também é utilizado neste projeto.

O TJAS AluraTube é uma plataforma de vídeos inspirada no [YouTube](https://www.youtube.com/). Entretanto, o **TJAS AluraTube** não pretende ser uma cópia do YouTube, mas ir além: tomando o projeto desenvolvido na Imersão React como ponto de partida, mas propondo alguns recursos inovadores que apenas fazem referência ao YouTube como principal provedor de vídeos e conteúdos. Alura e AluraTube são marcas registradas da _AOVS Sistemas de Informática S.A._, todos os direitos reservados. YouTube é uma marca registrada da _Google LLC_, todos os direitos reservados.

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

> Adaptado do projeto ["Flappy Bird: Dev Soutinho"](https://github.com/omariosouto/flappy-bird-devsoutinho/blob/master/CONTRIBUTING.md).

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
- [Documentação do React.JS](https://pt-br.reactjs.org/docs/getting-started.html);
- [Documentação do Next.JS](https://nextjs.org/docs/getting-started);
- [Documentação do Styled Components](https://styled-components.com/docs);
- [Arquivo next.config.js dos exemplos de Styled Components](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/next.config.js), para utilizar React com Next;
- [API do GitHub](https://api.github.com/users/tjas);
- [Documentação do Supabase](https://supabase.com/docs);
- [Supabase-JS](https://www.npmjs.com/package/@supabase/supabase-js);
- [Usando Effect Hook (Hook de Efeito)](https://pt-br.reactjs.org/docs/hooks-effect.html).

## Outros links interessantes

- [Figma](https://www.figma.com/);
- [Visual Studio Code](https://code.visualstudio.com/), interface de desenvolvimento;
- [Unsplash](https://unsplash.com/), para imagens grátis;
- [Componentes do Material Design](https://m3.material.io/components);
- [Conta da Vercel no GitHub](https://github.com/vercel);
- [Exemplo oficial de utilização do Styled Components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components);
- [Conta "Alura Challenges" da Alura no GitHub](https://github.com/alura-challenges), projetos legais para referência;
- [Projeto "Flappy Bird: Dev Soutinho"](https://github.com/omariosouto/flappy-bird-devsoutinho/blob/master/CONTRIBUTING.md);
- [Projeto "Awesome Design Systems"](https://github.com/alexpate/awesome-design-systems), referência para vários design systems;
- [Alura Verso](https://www.alura.com.br/aluraverso);
- [TechGuide.sh](https://techguide.sh/), um guia para a carreira em tecnologia;
- [Vitrine Dev](https://cursos.alura.com.br/vitrinedev);
- [Babel](https://babeljs.io/), um compilador JavaScript;
- [QUOKKA](https://quokkajs.com/), uma ferramenta de suporte para codificação em JavasCript;
- [Supabase](https://supabase.com/).

## Contato

**Thiago Jorge Almeida dos Santos**, autor e mantenedor do projeto.

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logoColor=white&link=https://www.linkedin.com/in/thiago-tjas)](https://www.linkedin.com/in/thiago-tjas) [![YouTube](https://img.shields.io/badge/-YouTube-FF0000?style=flat-square&logoColor=white&link=https://www.youtube.com/@thiago_tjas)](https://www.youtube.com/@thiago_tjas) [![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logoColor=white&link=https://www.instagram.com/thiago.tjas/)](https://www.instagram.com/thiago.tjas/) [![Website](https://img.shields.io/badge/-Website-888888?style=flat-square&logoColor=white&link=http://thiago-tjas.com/)](http://thiago-tjas.com/) [![GitHub](https://img.shields.io/badge/-GitHub-555555?style=flat-square&logoColor=white&link=https://github.com/tjas)](https://github.com/tjas)

## Licença

- Código distribuído sob a [Licença MIT](https://github.com/tjas/tjas-aluratube/blob/master/LICENCE).

<!-- ## Agradecimentos

- **Mario Souto** ⁘ [LinkedIn](https://www.linkedin.com/in/omariosouto/) ⁘ [YouTube](https://www.youtube.com/c/DevSoutinho) ⁘ [Twitter](https://twitter.com/omariosouto) ⁘ [Instagram](https://www.instagram.com/devsoutinho/) ⁘ [GitHub](https://github.com/omariosouto) ⁘ [GitHub Stars](https://stars.github.com/profiles/omariosouto/)

    Instrutor da Imersão React da Alura, por compartilhar o seu conhecimento na Imersão React.

- **Nayanne Lopes** ⁘ [LinkedIn](https://www.linkedin.com/in/nayannebatista/) ⁘ [Instagram](https://www.instagram.com/nayanne.tech/) ⁘ [GitHub](https://github.com/nayannebatista/)

    Instrutora na Alura, por contribuir na Imersão React com as comparações entre React e Angular.

- **Paulo Silveira** ⁘ [LinkedIn](https://www.linkedin.com/in/paulosilveira/) ⁘ [Instagram](https://www.instagram.com/paulo_hipster/) ⁘ [GitHub](https://github.com/peas)

    Co-fundador e CEO na Alura, por idealizar e conduzir a Imersão React. -->
