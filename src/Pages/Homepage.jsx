import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Banner from "../assets/Images/banner.mp4";
import CodeBlock from "../Components/Home/CodeBlock";

const Homepage = () => {
  return (
    // section - 1

    
      <div className="section1">
        <div className="s1intro">
            <Link className="s1button" to={'/signUp'}>Become an Instructor <FaArrowRight /></Link>
          
          <div className="s1head">
            <h1>Empower Your Future With{" "}
            <span className="highlightedText">Coding Skills </span>
            </h1>
          </div>
          <div className="s1paragraph">
            <p className="s1para">With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.</p>
          </div>
          <div className="s1buttons">
            <button className="yellowbutton">Learn More</button>
            <button className="blackbutton">Book a Demo</button>
          </div>
          <div className="video">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
        </div>
        <CodeBlock 
        head={<div>Unlock your <span className="highlightedText">coding potential </span> with our online courses.</div>}
        para={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
        btn1={"Try it Yourself"}
        btn2={"Learn More"}
        code={`<!DOCTYPE html>\n<html>\n<head>\n<title>This is my Page</title>\n</head>\n<body>\n<h1><a href="/" > Header</a></h1>\n<nav><a href="/one"> One </a>\n</nav>\n</body>\n</html>`}
        rev={false}
        />
        <CodeBlock 
        head={<div>Start  <span className="highlightedText">coding in seconds </span></div>}
        para={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
        btn1={"Continue Lesson"}
        btn2={"Learn More"}
        code={`<!DOCTYPE html>\n<html>\n<head>\n<title>This is my Page</title>\n</head>\n<body>\n<h1><a href="/" > Header</a></h1>\n<nav><a href="/one"> One </a>\n</nav>\n</body>\n</html>`}
        rev={true}
        />
        <div className="spacer"></div>
        
      </div>
  );
};

export default Homepage;
