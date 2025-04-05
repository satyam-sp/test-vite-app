import { Navigate } from "react-router-dom";
import { getUser } from '../utils/helper';

const PrivateRoute = ({ children }: any) => {
    const user = getUser();
    return user ? children : <Navigate to="/signin" />;
};
  

export default PrivateRoute;