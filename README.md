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
