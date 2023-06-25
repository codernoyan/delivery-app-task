/* eslint-disable react/prop-types */
import Navbar from "../components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}