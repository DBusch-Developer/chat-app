import { Outlet } from "react-router";
import SideNav from "../components/SideNav";

const DashboardLayout = ({ isLoggedIn, setIsLoggedIn, users }) => {
  return (
    <>
      <SideNav
        users={users}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        // loggedInUser={loggedInUser} 
        // setLoggedInUser={setLoggedInUser}
      />
      <div className="body">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
