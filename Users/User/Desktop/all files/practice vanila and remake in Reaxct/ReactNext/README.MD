What is Next.js?

Next.js is React Framework for building web applications.

- React is not enough alone to build a full stack web app ready for production
- React is a library for building user interfaces
  
Next.js
-
It uses React for building user interfaces and provides additional features that enable you to build production-ready applications.

Features like:
- Routing
- Optimized rendering
- Data fetching
- Bundling
- Compiling... and more

Next.js provides everything you need so you don't need to install additional packages.

It has Opinions and Conventions that should be followed to implement these features.

Summary
-
Next.js is a React framework for building production-ready web applications.

Why learn Next.js?
-
Next.js simplifies the process of building a web applications for production.

* Routing - eliminates the need of 3rd party routing packages.
* API routes - allows creating APIs
* Rendering - supports Server and Client side rendering, when used correctly it can result in better performance and SEO (Search Engine Optimization)
* Data fetching - next.js offers simplified data fetching using await support in react.
* Styling -
* Optimization - next.js provides optimal version for images, fonts and scripts to improve applications core web vitals and user experience.
* Dev and production build system - allows focusing on coding rather than configuration.



React Server Components (RSC)
-
RSC is a new architecture introduced by the React team in version 18 witch was quickly embraced by Next.js

The architecture introduces a new way of creating React components, splitting them into two types:

* Server components
* Client components

React Server Components contd.
-
Server Components
* In Next.js, all components are Server components by default.
* They have the ability to run tasks like reading files or fetching data from a database
* However, they don;t have the ability to use hooks or handle user interactions.
  
Client Components
* To create a Client component, it's necessary to add "use client" at the top of the component file.
* Unlike Server components, client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions.
* Client Components are the traditional React components that we are familiar with and have used in all prior versions of React.
  

Routing
-
Next.js has file-system based routing mechanism where URL paths that users can access in the browser are defined by files and folders in your codebase.

Routing Conventions
* All routes must be places inside the app folder
* Every file that corresponds to a route must be named page.js or page.tsx
* Every folder corresponds to a path segment in the browser URL.

