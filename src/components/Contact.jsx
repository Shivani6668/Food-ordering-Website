import contact from "../Images/Contact-Us.png";

const Contact = () => {
  
  return (
    <div className="contact-container">
      <div className="contact-left">
      <img src={contact} alt="Contact us" />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form  method="POST" action="https://formspree.io/f/xwkdgnrq">
                <input type="text" placeholder="Name" required name="username"/>
                    <input type="email" placeholder="Email" name="email" required/>
                    <textarea placeholder="Type your Message here..." name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
      </div>
    </div>

    
  );
};

export default Contact;