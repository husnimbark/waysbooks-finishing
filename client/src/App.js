import { useContext, useEffect } from "react";
import { Routes, Route , useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import BookDetail from "./pages/BookDetail"
import BookList from "./pages/BookList"
import Cart from "./pages/Cart"
import Complain from "./pages/Complain"
import ComplainAdmin from "./pages/ComplainAdmin"
import Profile from "./pages/Profile"
import Transaction from "./pages/Transaction"

import { API } from "./config/api";

function App() {
  let api = API();
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      navigate("/");
    } else {
      if (state.user.status == "admin") {
        navigate("/book-list");
        // navigate.push("/complain-admin");
      } else if (state.user.status == "customer") {
        navigate("/homepage");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await api.get("/check-auth", config);

      // If the token incorrect
      if (response.status === "failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // // Get user data
      let payload = response.data.user;
      // // Get token from local storage
      payload.token = localStorage.token;

      // // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/homepage" exact element={<HomePage/>} />
    <Route path="/book-detail/:id" element={<BookDetail/>} />
    <Route path="/complain" element={<Complain/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/complain-admin" element={<ComplainAdmin/>} />
    <Route path="/book-list" element={<BookList/>} />
    <Route path="/transaction" element={<Transaction/>} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>
  );
}

export default App;
