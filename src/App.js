import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import FooterSignin from "./components/FooterSignin";
import Header from "./components/Header";
import HeaderBar from "./components/HeaderBar";
import Home from "./components/Home";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={[
            <Header />,
            <HeaderBar />,
            <Home />,
            <FooterSignin />,
            <Footer />,
          ]}
        />
      </Routes>
      <Routes>
        <Route
          path="/checkout"
          element={[
            <Header />,
            <HeaderBar />,
            <Checkout />,
            <FooterSignin />,
            <Footer />,
          ]}
        />
      </Routes>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
