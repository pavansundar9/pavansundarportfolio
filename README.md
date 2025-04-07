# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# 🌟 Pavan Sundar's Portfolio

This project is a personal portfolio website built using **React**. It showcases my skills, projects, and contact information in a visually appealing and responsive design. It was created as part of my journey to learn React and its ecosystem, incorporating several key concepts and features.

---

## 🚀 Features

- ✅ **Responsive Design**: Adapts seamlessly to various screen sizes.
- 🎯 **Smooth Scrolling**: Enables intuitive navigation across sections.
- ⚙️ **Dynamic Components**: Reusable components like `Navbar`, `Hero`, `Skills`, and `Projects`.
- 🧠 **State Management**: Utilizes `useState` and `useEffect` hooks.
- 🔗 **Forwarding Refs**: Enables section-based navigation with `forwardRef`.
- 🎨 **Custom Styling**: Styled using CSS Modules for scoped and maintainable styles.

---

## 📚 Learning React Concepts

### 1. **Components**

Each section (e.g., `Navbar`, `Hero`, `Projects`) is a reusable component, making the structure clean and maintainable.

✅ **Example: Enhanced `Navbar.jsx`**

```jsx
import React from 'react';

function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-name">Pavan Sundar</h1>
      <ul className="navbar-links">
        <li><button onClick={() => scrollToSection(refs.heroRef)}>Home</button></li>
        <li><button onClick={() => scrollToSection(refs.skillsRef)}>Skills</button></li>
        <li><button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button></li>
        <li><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

---

### 2. **Props**

Props are passed to components to allow communication between them.

```jsx
<Navbar scrollToSection={scrollToSection} refs={{ heroRef, skillsRef, projectsRef, contactRef }} />
```

---

### 3. **State Management**

React's `useState` and `useEffect` are used for managing component state and side effects.

```jsx
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

### 4. **Side Effects**

Handling DOM changes and cleanup using `useEffect`.

```jsx
useEffect(() => {
  const navbarName = document.querySelector('.navbar-name');
  if (scrollY > 150) {
    navbarName.classList.add('visible');
  } else {
    navbarName.classList.remove('visible');
  }
}, [scrollY]);
```

---

### 5. **Refs & Forward Refs**

Smooth scrolling to sections using `useRef` and `forwardRef`.

```jsx
const heroRef = useRef(null);

const scrollToSection = (ref) => {
  if (ref?.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};
```

---

### 6. **Dynamic Rendering**

Using `map` to dynamically render project components.

```jsx
{projects.map((project, index) => (
  <Project
    key={index}
    title={project.name}
    description={project.description}
    desktopImg={project.desktopImg}
    mobileImg={project.mobileImg}
    codeLink={project.codeLink}
    liveLink={project.liveLink}
  />
))}
```

---

## 🛠️ How to Run the Project

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/portfolio-pavan-sundar.git
cd portfolio-pavan-sundar
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

4. **Visit in browser:**

```
http://localhost:3000
```

---

## 🌱 Future Improvements

- ✨ Add animations using Framer Motion or GSAP.
- 📩 Add backend support for the contact form.
- ⚡ Optimize performance and accessibility (Lighthouse improvements).
- 📱 PWA support for offline usage.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## Contact
For any questions or support, please reach out:
- **Email:** pendempavansundar8955@gmail.com

Thanks for checking out my portfolio! 😊
