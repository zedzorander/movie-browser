import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-log-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mauris pharetra et ultrices neque ornare. Eget arcu dictum varius duis. Pellentesque nec nam aliquam sem et tortor consequat id porta. Neque volutpat ac tincidunt vitae semper quis lectus nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
