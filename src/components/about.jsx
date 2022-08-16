export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/lekieshaHeadshot.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p> 
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="my-background">
              <h3>My Background</h3>
              <p>{props.data ? props.data.Background : "loading..."}</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
