<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />

<div align="center">
  <a href="https://github.com/coreyhellwege/personal_website">
    <img src="./frontend_react/src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Personal Website</h1>

  <a href="https://corey-dev.netlify.app/">
    <h3>corey-dev.netlify.app</h3>
  </a>

  <br />

  <p align="center">
    Full-stack responsive personal website built with React using Sanity.io as a CMS, Framer Motion Animations & custom SCSS.
    <br />
    <br />
    <a href="https://github.com/coreyhellwege/personal_website/issues">Report Bug</a>
    ·
    <a href="https://github.com/coreyhellwege/personal_website/issues">Request Feature</a>
  </p>
</div>

<br />

<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<br />

<!-- ABOUT THE PROJECT -->
## About The Project

<h4 align="center">Light mode ☀️</h4>

![Screenshot 1][screenshot-1]

<h4 align="center">Dark mode 🌙</h4>

![Screenshot 2][screenshot-2]

<p align="right"><a href="#top">back to top</a></p>

### Built With

* [React.js](https://reactjs.org/)
* [Sanity.io](https://www.sanity.io/)
* [Framer Motion](https://www.framer.com/motion/)

<p align="right"><a href="#top">back to top</a></p>

## Getting Started

To run this project locally follow these steps.

### Prerequisites

* [Node package manager](https://www.npmjs.com/)

  ```sh
  npm install npm@latest -g
  ```

### Setup

1. Clone the repo

   ```sh
   git clone https://github.com/coreyhellwege/personal_website.git
   ```
2. Install backend dependencies

   ```sh
   cd backend_sanity
   npm install
   ```
3. Install frontend dependencies

   ```sh
   cd frontend_react
   npm install
   ```
4. Create a `.env` file in the `frontend_react` directory 

    ```sh
    touch .env
    ```

    Add default values for the following keys:

    ```sh
    REACT_APP_SANITY_TOKEN = *your token*
    ```
    To dynamically load content from Sanity you will need to create a Project and obtain an API token. [Learn more here](https://www.sanity.io/docs/getting-started)

5. Run the frontend server

   ```sh
   npm start
   ```

6. Run the Sanity client

   ```sh
   cd backend_sanity
   sanity start
   ```

<p align="right"><a href="#top">back to top</a></p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project

2. Create your Feature Branch <br />
`git checkout -b feature/AmazingFeature`

3. Commit your Changes <br />
`git commit -m 'Add some AmazingFeature'`

4. Push to the Branch <br />
`git push origin feature/AmazingFeature`

5. Open a Pull Request

<p align="right"><a href="#top">back to top</a></p>

<br />

## Acknowledgments

* [JavaScript Mastery](https://www.youtube.com/c/JavaScriptMastery/)

<p align="right"><a href="#top">back to top</a></p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/coreyhellwege/personal_website.svg?style=for-the-badge
[contributors-url]: https://github.com/coreyhellwege/personal_website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/coreyhellwege/personal_website.svg?style=for-the-badge
[forks-url]: https://github.com/coreyhellwege/personal_website/network/members
[stars-shield]: https://img.shields.io/github/stars/coreyhellwege/personal_website.svg?style=for-the-badge
[stars-url]: https://github.com/coreyhellwege/personal_website/stargazers
[issues-shield]: https://img.shields.io/github/issues/coreyhellwege/personal_website.svg?style=for-the-badge
[issues-url]: https://github.com/coreyhellwege/personal_website/issues
[license-shield]: https://img.shields.io/github/license/coreyhellwege/personal_website.svg?style=for-the-badge
[license-url]: /LICENSE.txt
[screenshot-1]: ./frontend_react/src/assets/day-screenshot.png
[screenshot-2]: ./frontend_react/src/assets/night-screenshot.png