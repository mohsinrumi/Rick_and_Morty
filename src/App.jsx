import { Routes, Route } from "react-router";
    import HomePage from "./container/homepage";
    import Profile from "./container/profile";

    function App() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      );
    }

    export default App;