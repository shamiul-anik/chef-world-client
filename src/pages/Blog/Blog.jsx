import React from 'react';
import ReactBanner from '../../assets/images/react-banner.png';
import Header from '../Shared/Header/Header';

const Blog = () => {
  return (
    <div className="min-h-[calc(100dvh-611px)]">

      {/* <Header></Header> */}
      
      <div className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4">
        
        <header>
          <h2 className="content-title text-center">React Q&A Blog</h2>
        </header>

        <div className="p-4 lg:p-8 rounded-lg box-shadow-custom mt-6">
          {/* React Banner */}
          <div className="question-img">
            <img src={ReactBanner} alt="Q&amp;A Banner" />
          </div>

          {/* Question-1 */}
          <div>
            <header className="question-text">
              <h3>1. Tell us the differences between uncontrolled and controlled components.</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              <span className="font-bold"></span>
            </p>
          </div>
          
          {/* Question-2 */}
          <div>
            <header className="question-text">
              <h3>2. How to validate React props using PropTypes?</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              <span className="font-bold"></span>
            </p>
          </div>
          
          {/* Question-3 */}
          <div>
            <header className="question-text">
              <h3>3. Tell us the difference between nodejs and express js.</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              <span className="font-bold"></span>
            </p>
          </div>
          
          {/* Question-4 */}
          <div>
            <header className="question-text">
              <h3>4. What is a custom hook, and why will you create a custom hook?</h3>
            </header>
            <p className="answer-container">
              <span className="answer">Answer:</span><br />
              <span className="font-bold"></span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Blog;