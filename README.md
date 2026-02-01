# React-Hooks

# ⚛️ React Hooks Practice Project

This repository is a **React Hooks learning project** where I practiced and implemented some of the most commonly used React hooks along with a **custom hook**.

The main goal of this project is to understand **how hooks work**, **why they are used**, and **when to use which hook** in real applications.

---

## 🚀 Hooks Used in This Project

### 🔹 useState
- Used to manage component state.
- Helps in storing and updating values like input data, counters, toggles, etc.

**Example use case:**
- Handling input values
- Updating UI based on state changes

---

### 🔹 useEffect
- Used to handle side effects in functional components.
- Runs code when the component mounts, updates, or unmounts.

**Example use case:**
- Fetching data
- Running logic when state changes
- Console logging on render

---

### 🔹 useRef
- Used to directly access and manipulate DOM elements.
- Does not cause re-render when its value changes.

**Example use case:**
- Focusing an input field
- Storing previous values
- Accessing DOM nodes

---

### 🔹 useCallback
- Used to memoize functions.
- Prevents unnecessary re-creation of functions on every render.

**Example use case:**
- Optimizing performance
- Passing functions as props to child components

---

### 🔹 useMemo
- Used to memoize computed values.
- Recalculates the value only when dependencies change.

**Example use case:**
- Optimizing expensive calculations
- Avoiding unnecessary recalculations

---

## 🛠️ Custom Hook – `useToggle`

### 🔸 What is `useToggle`?
`useToggle` is a **custom hook** created to manage a boolean state.

### 🔸 What does it do?
- Toggles between `true` and `false`
- Used to **hide and show input elements**

### 🔸 Why use a custom hook?
- Reusable logic
- Cleaner code
- Better readability



#### 🧑‍💻 Author

Waris

If you find this repo helpful, don’t forget to ⭐ star it!
{value && <input type="text" />}
<button onClick={toggleValue}>Hide / Show</button>
