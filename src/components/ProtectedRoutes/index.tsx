import { Outlet, useNavigate } from "react-router-dom";

import React, { useContext, useEffect } from "react";

import { UserContext } from "../../providers/UserContext";

import {ImSpinner6} from "react-icons/im"
import { StyledLoading } from "../../styles/loading";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user, products } = useContext(UserContext);


  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!products && !token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {products  ? (
        <Outlet />
      ) : (
        <StyledLoading>
           <ImSpinner6 className="loading"/>
        </StyledLoading>
      )}

    </>
    );
};

export default ProtectedRoutes;
