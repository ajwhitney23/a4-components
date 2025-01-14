import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [redirect, setRedirect] = useState("");

  const userlogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=87698aca25a1ca0690a6`;
  };

  useEffect(() => {
    fetch("/id", {
      method: "GET",
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (res) {
        if (res !== "") {
          setRedirect(true);
        }
      });
  });

  if (redirect) {
    return <Redirect to="/myresults" />;
  }

  return (
    <div
      className="
    flex
    h-screen
    font-body
    text-2xl
    bg-gray-800
    text-gray-300
    w-full
    h-full
  "
    >
      <div className="rounded-xl m-auto border border-gray-600 w-1/5">
        <header className="rounded-t-xl bg-gray-900 mx-auto text-center">
          <h1 id="title"> Connect Using: </h1>
        </header>
        <main className="flex flex-col justify-center m-auto text-center">
          <p className="text-3xl" onClick={userlogin}>
            <FontAwesomeIcon icon={faGithub} /> Github
          </p>
        </main>
      </div>
    </div>
  );
};

export default Login;
