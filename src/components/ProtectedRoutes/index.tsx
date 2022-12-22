import { Outlet, useNavigate } from "react-router-dom";

import React, { useContext, useEffect } from "react";

import { ImSpinner6 } from "react-icons/im";
import { StyledLoading } from "../../styles/loading";

import { UserContext } from "../../providers/UserContext";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {user && user ? (
        <Outlet />
      ) : (
        <StyledLoading>
          <ImSpinner6 className="loading" />
        </StyledLoading>
      )}
    </>
  );
};

export default ProtectedRoutes;
