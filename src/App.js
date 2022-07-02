import React from "react";
import { Route, Routes, useParams, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({
      //   currentUser: user,
      // });
      // console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const unsub = onSnapshot(userRef, (snapshot) => {
          // console.log("Current data: ", snapshot.data());
          this.setState(
            {
              currentUser: snapshot.id,
              ...snapshot.data(),
            },
            () => {
              // console.log(this.state);
            }
          );
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
