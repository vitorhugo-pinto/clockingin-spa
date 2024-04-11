# 📋 Clocking in SPA

  

<p align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />

<img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" />

<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />

<img src="https://img.shields.io/badge/vite-purple?style=for-the-badge&logo=vite&logoColor=white" />

</p>

  
  

Welcome to the Clocking in project! 🚀 This is the SPA project for a clock in system.

The backend code can be seem in the following [repository](https://github.com/vitorhugo-pinto/clockingin-api).


## ⚙️ Project Setup


Before running the project, it is necessary to have [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en) installed on your machine.

  
> [!note]

> ℹ️ **System Information:**

> - npm ~> v10.5.0

> - node ~> v20.12.1

After checking or installing node and npm on your machine it is necessary to clone the git repository of the frontend with the following command:

  

```bash

$ git clone git@github.com:vitorhugo-pinto/clockingin-spa.git

```

  
  

After all, ensure to rename the .env.sample to .env.local
This file should contain all necessary environment variables for the application to function properly.
At this point, only the API_URL is needed

In the .env.local file to run locally:

VITE_API_URL=http://localhost:8080

Which is the default for the API to run


<br />

  

## 🚀 How to Run the Frontend

  

Firstly, it's necessary to install all project dependencies using npm:

  

```bash

$ npm i

```

  

To run the project in development mode, use the following command:

  

```bash

$ npm run dev

```

  
  

## 🛠️ How to Build the Project

  

To build the project, execute the following command:

  

```bash

$ npm run build

```

  

## Folder Structure

  

- `src/components`: This directory may contain reusable components that can be used in various parts of the application.

  

- `src/pages`: Specific page components will be placed here. Each page may have its own directory with components, styles, etc.

  

- `src/pages/layouts`: Folder designated for page layouts.

  

- `src/services`: Shared services will be placed here. Services are used for business logic, communication with APIs, etc.

  

- `src/lib`: This directory may contain shared resources.

  

- `src/hooks`: Files related to React hooks will be maintained here.

  

- `src/types`: Specific types for this application will be kept here.

  

- `src/providers`: This folder will contain all custom context providers for global contexts.


![[Screenshot 2024-04-10 at 22.45.30.png]]

  

## 📦 Tools

  

- [React](https://react.dev/)

- [React Query](https://tanstack.com/query/latest).

- [Axios](https://axios-http.com/).

- [Shadcn/ui](https://ui.shadcn.com/).

- [React Hook Form](https://react-hook-form.com/).

- [Zod](https://zod.dev/).

- [Vite](https://vitejs.dev/).

- [Lucide-react](https://lucide.dev/guide/packages/lucide-react).


## 🚀Further features and functionalities
- Allow employee to choose a date then lists the summary for the day.
- Allow admin to see all users in the system as well to check they summary in a given date.
- Build a more robust token system with cookies, zustand, refresh token (axios interceptors to check token and renew it with the refresh)
-  And tip is welcome
