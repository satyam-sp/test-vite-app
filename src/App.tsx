
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PrivateRoute from "./common/PrivateRoutes";
import Events from "./components/Events";


function App() {

  return (<Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
  )
}

export default App
