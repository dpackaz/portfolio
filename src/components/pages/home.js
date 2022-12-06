import React from "react";

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container mainBackground">
        <h1 className="display-4 greeting">Hi, I'm Daniel!</h1>
        <img
          className="rounded mx-auto d-block"
          alt="Daniel Packer"
          src="./public/daniel-packer.jpg"
        ></img>
        <p className="lead basicText">
          My name is Daniel Packer, and I am a full-stack web developer and
          digital marketing professional. I can build the site you want and then
          bring people to it.
        </p>
        <br></br>
        <p className="lead basicText">
          I love to make things and see how people react to them, so outside of
          my career I love things like cooking, wood working, and design. I am
          an Arizona native, and I currently live in Gilbert, AZ with my wife,
          our two daughters and our dog.
        </p>
      </div>
    </div>
  );
}

export default Home;
