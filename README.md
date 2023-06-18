# TJAS AluraTube

[![Status](https://img.shields.io/badge/status-active-brightgreen.svg?label=Status)](./README.md)
[![Website](https://img.shields.io/website?down_color=brightred&down_message=offline&up_color=brightgreen&up_message=online&url=https%3A%2F%2Ftjas-aluratube.vercel.app%2F&label=Website)](https://tjas-aluratube.vercel.app/)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Ftjas%2Ftjas-aluratube&count_bg=%2379C83D&title_bg=%23555555&title=Hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Licence](https://img.shields.io/github/license/tjas/tjas-aluratube?color=orange&label=Licence)](https://github.com/tjas/tjas-aluratube/blob/master/LICENCE)
[![Commits](https://img.shields.io/github/commit-activity/t/tjas/tjas-aluratube?label=Commits)](https://github.com/tjas/tjas-aluratube/graphs/commit-activity)
![Last commit](https://img.shields.io/github/last-commit/tjas/tjas-aluratube?color=blue&label=Last%20commit)
![Repo size](https://img.shields.io/github/repo-size/tjas/tjas-aluratube?color=888888&label=Repo%20size)
![Code size](https://img.shields.io/github/languages/code-size/tjas/tjas-aluratube?color=888888&label=Code%20size)
[![Stars](https://img.shields.io/github/stars/tjas/tjas-aluratube?color=blue&label=Stars)](https://github.com/tjas/tjas-aluratube/stargazers)
[![Watchers](https://img.shields.io/github/watchers/tjas/tjas-aluratube?color=blue&label=Watchers)](https://github.com/tjas/tjas-aluratube/watchers)
[![Forks](https://img.shields.io/github/forks/tjas/tjas-aluratube?color=blue&label=Forks)](https://github.com/tjas/tjas-aluratube/forks)

[![Node](https://img.shields.io/badge/Node-v18.12.1-green)](https://nodejs.org/en/)
[![Next](https://img.shields.io/badge/Next-v13.0.2-yellow)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-v18.2.0-orange)](https://reactjs.org/)

> ⭐ Mark the project with a star. 👀 Watch the project for receive news.
>
> ⚙️ [Access the demo and see the project working](https://tjas-aluratube.vercel.app/).
>
> 🇧🇷 Acesse a versão em [Portuguese do Brasil](./README_pt-br.md) desta página.
<!-- >
> 🌐 Access my personal website: [thiago-tjas.com](http://thiago-tjas.com/) -->

This project is an adaptation and evolution of the **[AluraTube](https://github.com/alura-challenges/aluratube)** project, proposed at [Alura](https://www.alura.com.br/)'s 5th React Immersion, that occured in november 2022. It initially intended to spread basic knowledgements about [ReactJS](https://reactjs.org/) technology, but became an opportunity do practice and evolve personal skills in such technology and other related ones.

<br />
<p align="center">
    <img alt="Preview" src="./screenshots/preview light.png" width="800" />
</p>
<br />

The **React** is a [JavaScript](https://www.javascript.com/) library created by Facebook for building modern user interfaces, known as front-end applications, which are connected to back-end applications, that serves content and manage negocial rules in complex systems. The React runs over the [NodeJS](https://nodejs.org/en/), an open-source, cross-platform JavaScript runtime environment, and is potencialyzed by other libraries and frameworks, mainly the [NextJS](https://nextjs.org/), a very popular framework, wich is even used in this project.

The TJAS AluraTube is a video platform inspired by [YouTube](https://www.youtube.com/). However, the **TJAS AluraTube** does not intend to be an YouTube's copy, but even go beyond: taking the project developed at React Immersion as starting point, but proposing some innovative features that just refer to YouTube as the main videos and contents provider. Alura and AluraTube are trademarks of _AOVS Sistemas de Informática S.A._, all rights reserved. YouTube is a trademark of _Google LLC_, all rights reserved.

## Getting Started

This is an example of how you may set up the project locally in your computer. To get a local copy up and running follow these steps:

1. Make sure you have Node.JS 18.12.1+ with npm 8.19.2+ installed or do it from [NodeJS.org](https://nodejs.org/en/download/);
2. Make sure you have Git installed or do it from [Git-scm.com](https://git-scm.com/);
3. Access the folder you want to save the project, then clone the repo there
    ```sh
    git clone https://github.com/tjas/tjas-aluratube
    ```
4. Access the project folder;
5. Install the project dependencies (obtained by default from `package.json` file)
    ```sh
    npm install
    ```
6. Run the application
    ```sh
    npm run dev
    ```
7. Finally, access the aplication at http://localhost:3000

## Contributing
<!-- > Adapted from the ["Flappy Bird: Dev Soutinho"](https://github.com/omariosouto/flappy-bird-devsoutinho/blob/master/CONTRIBUTING.md) project. -->

1. Fork it!
2. Create your feature branch:
    ```sh
    git checkout -b my-new-feature
    ```
3. Add files changed:
    ```sh
    git add .
    ```
4. Commit your changes:
    ```sh
    git commit -m "Add some useful comment here"
    ```
5. Push to the branch:
    ```sh
    git push origin my-new-feature
    ```
6. Submit a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
    * Add a title and description that let clear your suggestion;
    * Use the English language for comments and branch names;
    * After your pull request is merged, you can safely delete your branch.

## Todo List

* [ ] Obtain a list of videos dinamically from [Google API](https://www.npmjs.com/package/googleapis);
* [ ] Add fade efect in horizontal scrolls extremities;
* [ ] Create, edit and remove playlists;
* [ ] Add and remove videos;
* [ ] Add and remove favorites;
* [ ] Edit user profile informations;
* [ ] Persist informations in local data base;
* [ ] Translate to other languages;
* [ ] Create login page;
* [ ] Separate public and private pages.

## References

* [Node.JS LTS version](https://nodejs.org/en/);
* [npm documentation](https://docs.npmjs.com/);
* [React.JS documentation](https://reactjs.org/docs/getting-started.html);
* [Next.JS documentation](https://nextjs.org/docs/getting-started);
* [Styled Components documentation](https://styled-components.com/docs);
* [next.config.js file of Styled Components examples](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/next.config.js), for using React with Next;
* [GitHub's API](https://api.github.com/users/tjas);
* [Supabase documentation](https://supabase.com/docs);
* [Supabase-JS](https://www.npmjs.com/package/@supabase/supabase-js);
* [Using the Effect Hook](https://en.reactjs.org/docs/hooks-effect.html).

## Other interesting links

* [Figma](https://www.figma.com/);
* [Visual Studio Code](https://code.visualstudio.com/), development interface;
* [Unsplash](https://unsplash.com/), for free images;
* [Material Design components](https://m3.material.io/components);
* [Vercel's GitHub profile](https://github.com/vercel);
* [Styled Components official using examples](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components);
* [Alura's Github "Alura Challenges" profile](https://github.com/alura-challenges), cool projects for reference;
* [Project "Flappy Bird: Dev Soutinho"](https://github.com/omariosouto/flappy-bird-devsoutinho/blob/master/CONTRIBUTING.md);
* [Project "Awesome Design Systems"](https://github.com/alexpate/awesome-design-systems), for design systems reference;
* [Alura Verso](https://www.alura.com.br/aluraverso);
* [TechGuide.sh](https://techguide.sh/), a roadmap for technology career;
* [Vitrine Dev](https://cursos.alura.com.br/vitrinedev);
* [Babel](https://babeljs.io/), a JavaScript compiler;
* [QUOKKA](https://quokkajs.com/), a JavasCript coding support tool;
* [Supabase](https://supabase.com/).

## Contact

**Thiago Jorge Almeida dos Santos**, project author and maintainer.

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logoColor=white&link=https://www.linkedin.com/in/thiago-tjas)](https://www.linkedin.com/in/thiago-tjas) [![YouTube](https://img.shields.io/badge/-YouTube-FF0000?style=flat-square&logoColor=white&link=https://www.youtube.com/@thiago_tjas)](https://www.youtube.com/@thiago_tjas) [![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=flat-square&logoColor=white&link=https://www.instagram.com/thiago.tjas/)](https://www.instagram.com/thiago.tjas/) [![Website](https://img.shields.io/badge/-Website-888888?style=flat-square&logoColor=white&link=http://thiago-tjas.com/)](http://thiago-tjas.com/) [![GitHub](https://img.shields.io/badge/-GitHub-555555?style=flat-square&logoColor=white&link=https://github.com/tjas)](https://github.com/tjas)

## Licence

* Code distributed under [MIT License](https://github.com/tjas/tjas-aluratube/blob/master/LICENCE).

<!-- ## Acknowledgements

- **Mario Souto** ⁘ [LinkedIn](https://www.linkedin.com/in/omariosouto/) ⁘ [YouTube](https://www.youtube.com/c/DevSoutinho) ⁘ [Twitter](https://twitter.com/omariosouto) ⁘ [Instagram](https://www.instagram.com/devsoutinho/) ⁘ [GitHub](https://github.com/omariosouto) ⁘ [GitHub Stars](https://stars.github.com/profiles/omariosouto/)

    Instructor at Alura's React Immersion, for sharing his knowledge at React Immersion.

- **Nayanne Lopes** ⁘ [LinkedIn](https://www.linkedin.com/in/nayannebatista/) ⁘ [Instagram](https://www.instagram.com/nayanne.tech/) ⁘ [GitHub](https://github.com/nayannebatista/)

    Instructor at Alura, for contributing at React Immersion comparing React to Angular.

- **Paulo Silveira** ⁘ [LinkedIn](https://www.linkedin.com/in/paulosilveira/) ⁘ [Instagram](https://www.instagram.com/paulo_hipster/) ⁘ [GitHub](https://github.com/peas)

    Co-founder and CEO at Alura, for idealizing and creating the React Immersion. -->
