# Portfolio

This repository contains the source code for my personal portfolio website. It showcases my projects, skills, and experience in web development. The portfolio is built using Angular, with various components organized in a modular structure for easy maintainability and scalability.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project follows a standard Angular project structure with some custom folders for better organization:

```plaintext
portfolio/
├── .angular/
├── .vscode/
├── dist/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── pdfs/
│   │   └── svgs/
│   ├── components/
│   │   ├── about/
│   │   ├── projects/
│   │   └── resume/
│   ├── db/
│   ├── enums/
│   ├── interfaces/
│   └── shared/services/
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
└── tsconfig.json
```


### Key Folders

- **app**: Contains the main application files and configurations.
- **assets**: Houses all static files like images, fonts, PDFs, and SVG icons.
- **components**: Contains modular Angular components for different sections of the portfolio (About, Projects, Resume).
- **db**: Contains JSON files that are used to store data for projects and resumes.
- **shared/services**: Common services used across components.
- **interfaces**: Contains TypeScript interfaces for type safety.
- **enums**: Contains enumerations used throughout the application.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your local machine.
- Angular CLI installed globally.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Features

- **Responsive Design**: The portfolio is fully responsive and works seamlessly on all devices.
- **Modular Architecture**: Easy to maintain and extend due to a modular structure.
- **Dynamic Content**: Projects and resume data are fetched from JSON files, making it easy to update content.
- **SVG Icons and Images**: Uses SVG icons for fast loading and better scalability.

## Technologies Used

- **Angular**: Front-end framework for building web applications.
- **SCSS**: For styling components.
- **TypeScript**: Superset of JavaScript for adding static types.
- **Node.js**: Server environment for development.
- **PrimeNG**: UI components for Angular.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README further to suit your specific needs!
