/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */
import React from "react"
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"
export default function App() {
  return (
    <>
      <Navbar/>
      <Main />
      </>
  )
}