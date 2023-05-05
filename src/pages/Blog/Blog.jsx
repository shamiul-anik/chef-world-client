import React, { useEffect } from 'react';
import ReactBanner from '../../assets/images/react-banner.png';
import { useLocation } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { toast } from 'react-toastify';

const Blog = () => {
  const checkLocation = useLocation();

  useEffect(() => {
    if (checkLocation.pathname === '/blog') {
      document.title = 'Chef World | Blog';
    }
  }, [checkLocation]);

  const ref = React.createRef();
  const options = {
    orientation: 'portrait',
    unit: 'in'
  };

  return (
    <div>
      
      <div className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4">
        
        <header>
          <h2 className="content-title text-center">React Q&A Blog</h2>
        </header>

        <div className="text-center md:text-right mt-4">
          <Pdf targetRef={ref} filename="blog.pdf" options={options} x={.2} y={.2} scale={0.6} onComplete={ () => toast.success("PDF successfully created!") }>
            {({ toPdf }) => <button className='primary-button-md' onClick={toPdf}>Generate PDF</button>}
          </Pdf>
        </div>

        <div className="p-4 lg:p-8 rounded-lg box-shadow-custom mt-6" ref={ref}>
          {/* React Banner */}
          <div className="question-img">
            <img src={ReactBanner} alt="Q&amp;A Banner" />
          </div>

          {/* Question-1 */}
          <div>
            <header className="question-text">
              <h3>1. Tell us the differences between uncontrolled and controlled components.</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold">Uncontrolled components</span> are components that manage their own state internally and do not require any direct input or control from the parent component. <br /><br />
              <span className="font-bold">Controlled components</span>, on the other hand, rely on the parent component to manage and control their state through props.
            </div>
          </div>
          
          {/* Question-2 */}
          <div>
            <header className="question-text">
              <h3>2. How to validate React props using PropTypes?</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold">PropTypes</span> is a built-in library in React that helps developers to validate the type and shape of props passed to a component. By defining propTypes for a component, we can ensure that the props we receive from the parent component are of the expected type and format. <br /><br />
              To use <span className="font-bold">PropTypes</span>, we need to import the library from the <span className="font-bold">'prop-types'</span> package, and then define the propTypes object in the component. We can specify the type of props using the PropTypes module, such as PropTypes.string, PropTypes.number, PropTypes.bool, etc. We can also define the shape of an object using PropTypes.shape(). <br /><br />
              When a component is rendered, <span className="font-bold">PropTypes</span> will check the props passed to the component and throw a warning in the console if the props don't match the expected type or shape. This helps us to catch errors early and ensure that our components receive the correct props.
            </div>
          </div>
          
          {/* Question-3 */}
          <div>
            <header className="question-text">
              <h3>3. Tell us the difference between nodejs and express js.</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold">Node.js</span> is a runtime environment that allows user to run JavaScript on the server side. It provides features to interact with the file system, network, and other system resources. <br /><br />
              <span className="font-bold">Express.js</span> is a web framework built on top of <span className="font-bold">Node.js</span> that provides a set of features for building web applications and APIs. It simplifies the process of handling HTTP requests, managing routes, and working with middleware. <br /><br />
              In simple terms, <span className="font-bold">Node.js</span> is the platform while <span className="font-bold">Express.js</span> is a tool that helps user to build web applications using <span className="font-bold">Node.js</span>.
            </div>
          </div>
          
          {/* Question-4 */}
          <div>
            <header className="question-text">
              <h3>4. What is a custom hook, and why will you create a custom hook?</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold">A custom hook</span> is a function in React that allows user to reuse logic across multiple components. <span className="font-bold">Custom hooks</span> are created when user wants to share some functionality between different components, but don't want to repeat the same code in each component. Users can create custom hooks for any kind of logic that he/she wants to reuse, such as handling form data or managing state. <br /><br />
              Using <span className="font-bold">a custom hook</span> can make code more reusable and easier to maintain. By creating <span className="font-bold">a custom hook</span>, users can abstract away the details of the logic from the components that use it, making the code cleaner and easier to understand. <span className="font-bold">Custom hooks</span> can also help users to avoid code duplication and keep the code more organized.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Blog;