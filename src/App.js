import React from "react";
import {
  Route,
  Routes,
  useParams,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";

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
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // } // we do not need constructor anymore after redux
  unsubscribeFromAuth = null;

  componentDidMount() {
    // console.log(this.props);
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({
      //   currentUser: user,
      // });
      // console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapshot) => {
          // console.log("Current data: ", snapshot.data());
          // this.setState(
          //   {
          //     currentUser: { id: snapshot.id, ...snapshot.data() },
          //   },
          //   () => {
          //     // console.log(this.state);
          //   }
          // );
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      // this.setState({
      //   currentUser: userAuth,
      // });
      setCurrentUser(userAuth);
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
          <Route
            path="signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)), //dispatch is whatever you are passing me, I am going to pass that object to every reducers
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
