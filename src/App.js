import React from "react";
import { Route, Routes, useParams, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
// const HatsPAge = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

// const HomePage = () => {
//   let navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate("/topic")}>TOPICS</button>
//       {/* <Link to="/topic">TOPICS</Link> */}
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// };

// const TopicsList = () => {
//   const params = useParams();

//   console.log(params);

//   return (
//     <div>
//       <h1>LIST OF TOPICS</h1>
//       <Link to="/topic/13">To Topic 13</Link>
//       <Link to="/topic/14">To Topic 14</Link>
//       <Link to="/topic/15">To Topic 15</Link>
//     </div>
//   );
// };

// const TopicsDetails = () => {
//   const params = useParams();

//   console.log(params);

//   return (
//     <div>
//       <h1>TOPIC: {params.topicId}</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/hats" element={<HatsPAge />} /> */}
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
