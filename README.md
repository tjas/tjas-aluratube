# TJAS AluraTube

<div class="language">
    <style>
        .options {
            display: flex;
            align-items: center;
            flex-flow: row-reverse;
            text-align: center;
            gap: 16px;
            color: #555555;
        }
        .option {
            color: inherit;
            width: 50px;
            padding: 8px;
            border: 1px solid rgba(255, 255, 255, 0);
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            opacity: 1;
            transition: .3s;
        }
        .option:hover,
        .option:focus {
            opacity: .5;
            border: 1px solid #cccccc;
            color: inherit;
            text-decoration: none;
        }
        .option.active {
            border: 1px solid #cccccc;
        }
    </style>
    <div class="options" align="right">
        <a class="option" href="./README.md">🇧🇷 PT</a>
        <div class="option active">🇺🇸 EN</div>
    </div>
</div>

[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](./README.md)
[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](./LICENSE.md)

[![Node](https://img.shields.io/badge/node-v18.12.1-green)](https://nodejs.org/en/)
[![Next](https://img.shields.io/badge/next-v13.0.2-yellow)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-v18.2.0-orange)](https://reactjs.org/)

> ⚙️ [Access the demo and see the project working](https://tjas-aluratube.vercel.app/)

> ⭐ Mark the project with a star

<br />

This project is an adaptation and evolution of the **[AluraTube](https://github.com/alura-challenges/aluratube)** project, proposed at [Alura](https://www.alura.com.br/)'s 5th React Immersion, that occured in november 2022. It initially intended to spread basic knowledgements about [ReactJS](https://reactjs.org/) technology, but became an opportunity do practice and evolve personal skills in such technology and other related ones.

The **React** is a [JavaScript](https://www.javascript.com/) library created by Facebook for building modern user interfaces, known as front-end applications, which are connected to back-end applications, that serves content and manage negocial rules in complex systems. The React runs over the [NodeJS](https://nodejs.org/en/), an open-source, cross-platform JavaScript runtime environment, and is potencialyzed by other libraries and frameworks, mainly the [NextJS](https://nextjs.org/), a very popular framework, wich is even used in this project.

The **AluraTube** is a video platform inspired by [YouTube](https://www.youtube.com/). Alura and AluraTube are trademarks of _AOVS Sistemas de Informática S.A._, all rights reserved. YouTube is a trademark of _Google LLC_, all rights reserved.

<br />

<div align="center" style="display: flex; align-items: center; justify-content: center; width: 100%;">
    <!-- Adapted from Yoren Chang's work in https://codepen.io/yoren/pen/Ozboeq -->
    <style>
        .item {
            margin: 0 auto;
            padding: 1em;
            position: relative;
            width: 900px;
            overflow: hidden;
        }
        .item .img-wrap:before {
            content: '';
            background-image: linear-gradient(to top, rgba(255,255,255,255), rgba(239,239,239,0));
            position: absolute;
            height: 100px;
            right: 0;
            bottom: 0;
            left: 0;
        }
        .item .img-wrap:after {
            content: '';
            display: block;
            height: -9999px;
        }
        .img-wrap img {
            width: auto;
            height: auto;
            max-width: 100%;
            vertical-align: middle;
            border: 0;
            margin: 0 auto -135% auto;
            box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.2);
            -ms-interpolation-mode: bicubic;
        }
    </style>
    <div class="item">
        <div class="crop img-wrap">
            <img alt="Project Header" src="./screenshots/webpage.png" />
        </div>
    </div>
</div>

<br />

## Main Resources

- (Static) Home Page;
- (Static) Timeline;
- (Static) Favorites;

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

> Obtained and adapted from the "Contributing" section of Mario Souto's [Flappy Bird: Dev Soutinho](https://github.com/omariosouto/flappy-bird-devsoutinho/blob/master/CONTRIBUTING.md) project.

1. Fork it!
2. Create your feature branch:
```
git checkout -b my-new-feature
```
3. Add files changed:
```
git add .
```
4. Commit your changes:
```
git commit -m "Add some feature"
```
5. Push to the branch:
```
git push origin my-new-feature
```
6. Submit a pull request

> Add a title and description that let clear your suggestion.

> After your pull request is merged, you can safely delete your branch.

## Todo List

- To obtain a list of videos dinamically from [Google API](https://www.npmjs.com/package/googleapis);
- To implement fade efect in horizontal scrolls extremities, similar to this Pavon Vora's work: [Horizontal Scroll Fade](https://codepen.io/pawanvora/pen/MXVNgj);
- To implement user profile informations edition;
- To persist informations in local data base;
- To implement multi language translation.

## References

- [Node.JS LTS version](https://nodejs.org/en/);
- [npm documentation](https://docs.npmjs.com/);
- [Visual Studio Code](https://code.visualstudio.com/);
- [Material Design components](https://m3.material.io/components);
- [React.JS documentation](https://reactjs.org/docs/getting-started.html);
- [Next.JS documentation](https://nextjs.org/docs/getting-started);
- [Styled Components documentation](https://styled-components.com/docs);
- [Vercel's GitHub profile](https://github.com/vercel);
- [Styled Components official using examples](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components);
- [next.config.js file of Styled Components examples](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/next.config.js);
- [Alura's Github "Alura Challenges" profile](https://github.com/alura-challenges).

## Contact

- **Thiago Jorge Almeida dos Santos**, project author and maintainer
    - [LinkedIn](https://www.linkedin.com/in/thiago-tjas) - [GitHub](https://github.com/tjas) .

## Licence

- Distributed under [MIT License](./LICENSE.md).

## Acknowledgements

- **Mario Souto**, Instructor at Alura's React Immersion, for sharing his knowledge at React Immersion
    - [LinkedIn](https://www.linkedin.com/in/omariosouto/) | [YouTube](https://www.youtube.com/c/DevSoutinho) | [GitHub](https://github.com/omariosouto) | [Instagram](https://www.instagram.com/devsoutinho/)
- **Nayanne Lopes**, Instructor at Alura, for contributing at React Immersion comparing React to Angular
    - [LinkedIn](https://www.linkedin.com/in/nayannebatista/) | [Instagram](https://www.instagram.com/nayanne.tech/)
- **Paulo Silveira**, Co-founder and CEO of Alura, for idealizing and creating the React Immersion
    - [LinkedIn](https://www.linkedin.com/in/paulosilveira/) | [Instagram](https://www.instagram.com/paulo_hipster/)
