<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Contact][contact-shield]][contact-url]





<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/it-sd-capstone/huebrush">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HueBrush</h3>

  <p align="center">
    HueBrush is a browser-based color-combining puzzle game. Players navigate through different levels using their arrow keys, collecting different color keys until their RGB combination matches the level's RGB target value. The game saves player progress on their local machine. 
    <br />
    <a href="https://github.com/it-sd-capstone/huebrush"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/it-sd-capstone/huebrush">View Demo</a>
    ·
    <a href="https://github.com/it-sd-capstone/huebrush/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/it-sd-capstone/huebrush/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-setup">Project Setup</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


### Built With

* [![Html][HTML.org]][Html-url]
* [![NodeJS][Nodejs.org]][Nodejs-url]
* [![CSS][CSS.org]][CSS-url]
* [![JavaScript][JavaScript.org]][JavaScript-url]
* [![Three.js][Threejs.org]][Threejs-url]
* [![Vite][Vitejs.org]][Vite-url]
* [![Vitest][Vitest.dev]][Vitest-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Project Setup -->
## Project Setup

To get a local copy up and running follow these simple example steps.

### Prerequisites

Install npm by running these commands in the VSCode terminal.
* npm
  ```sh
  npm install npm@latest -g
  ```

* Node.js: https://nodejs.org/

* Vitest
  ```sh
  npm i -D vitest
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/it-sd-capstone/huebrush.git
   ```
2. Install NPM packages
   ```sh
   npm install npm@latest -g
   ```
3. Install Node.js: https://nodejs.org/
  - ensure you check the box to install chocolaty.
3. Install Vitest
   ```sh
   npm i -D vitest
   ```
4. Confirm tests run (We should see both www.huebrush.com and huebrush.com resolve.):
   ```sh
   npm t
   ```
5. Confirm you can manually get to huebrush.com through a web browser. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Create a game engine allowing players to move through space and collect objects to solve color-based puzzles. At least three levels/scenes/etc. will be built manually.
- [ ] Automatically save and restore the game state using local storage.
- [ ] Alter the game world based on a player interaction with an object (such as a switch that moves a boulder) and incorporate this into at least two levels (pre-existing or new).


See the [open issues](https://github.com/it-sd-capstone/huebrush/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/it-sd-capstone/huebrush/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=it-sd-capstone/huebrush" alt="contrib.rocks image" />
</a>

<!-- CONTACT -->
## Contact
<p>Skyler Godfrey - sgodfrey@cvtc.edu</p> 

[![LinkedIn][linkedin-shield]][linkedin-url-skyler]
<p>Nick Cline - ncline1@student.cvtc.edu</p>

[![LinkedIn][linkedin-shield]][linkedin-url-nick]
<p>David Granger - dgranger4@cvtc.edu</p>

[![LinkedIn][linkedin-shield]][linkedin-url-david]



Project Link: [https://github.com/it-sd-capstone/huebrush](https://github.com/it-sd-capstone/huebrush)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/it-sd-capstone/huebrush.svg?style=for-the-badge
[contributors-url]: https://github.com/it-sd-capstone/huebrush/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/it-sd-capstone/huebrush.svg?style=for-the-badge
[forks-url]: https://github.com/it-sd-capstone/huebrush/network/members
[stars-shield]: https://img.shields.io/github/stars/it-sd-capstone/huebrush.svg?style=for-the-badge
[stars-url]: https://github.com/it-sd-capstone/huebrush/stargazers
[issues-shield]: https://img.shields.io/github/issues/it-sd-capstone/huebrush.svg?style=for-the-badge
[issues-url]: https://github.com/it-sd-capstone/huebrush/issues
[contact-shield]: https://img.shields.io/badge/Contact-Open%20for%20Inquiries-blue.svg?style=for-the-badge
[contact-url]: #contact
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-david]: https://www.linkedin.com/in/david-d-granger/
[linkedin-url-nick]: https://www.linkedin.com/in/nicholas-c-32a08313b/
[linkedin-url-skyler]: https://www.linkedin.com/in/skyler-godfrey-4861682a0/
[product-screenshot]: images/screenshot.png
[Nodejs.org]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/en
[HTML.org]: https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://html.spec.whatwg.org/
[CSS.org]: https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[JavaScript.org]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com/
[Threejs.org]: https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white
[Threejs-url]: https://threejs.org/
[Vitejs.org]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Vitest.dev]: https://img.shields.io/badge/Vitest-4FC08D?style=for-the-badge&logo=vitest&logoColor=white
[Vitest-url]: https://vitest.dev/
