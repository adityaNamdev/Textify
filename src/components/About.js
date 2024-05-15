import Feedback from './Feedback';
import Navbar from './Navbar';

const AboutPage = () => {
  return (
    <>
    <div className="container my-3">
      <h1 className='text-center'>About Us - TextiFy<sub>/</sub></h1>
      <p>Welcome to our TextiFy website upgrade your words as you want! Our platform provides a simple and intuitive interface to perform various text transformations.</p>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header ">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne " aria-expanded="true" aria-controls="collapseOne">
      Here are some key features:
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
        <ul>
        <li>Convert text to uppercase</li>
        <li>Convert text to lowercase</li>
        <li>Count the number of words in the text</li>
        <li>Count the number of characters in the text</li>
        <li>Format text with bold, italic, and underline styles</li>
      </ul><hr />
         </div>
    </div>
  </div>
    </div>

      

      <p className='my-3'>Whether you're looking to modify the case of your text or add styling effects, our website makes it easy and convenient. Feel free to use our tools to enhance your text as needed.</p>

      <p>If you have any feedback or suggestions, please don't hesitate to reach out. We appreciate your support!</p>
      <hr /> </div> 
   
    <div className='container'>
    <Feedback/>

    </div>
    <div className="bottom-0 bg-dark text-center ">COPYRIGHT © TextiFy 2023 </div>
   
    </>
  );
};

export default AboutPage;
