import AddressSVG from "@/UI/SVGs/Address";
import EmailSVG from "@/UI/SVGs/Email";
import PhoneSVG from "@/UI/SVGs/Phone";
import classes from "./Contact.module.css";

const ContactUs = () => {
  return (
    <section id={classes.contacts}>
      <h1>
        Feel free to <span className="color-text">connect</span> with me
      </h1>
      <div>
        <div className={`${classes.contactNo} ${classes.contact}`}>
          <span className="svg-back">
            <PhoneSVG />
          </span>
          <a href="tel:+918000863064">+91 8000863064</a>
        </div>
        <div className={`${classes.emailAddr} ${classes.contact}`}>
          <span className="svg-back">
            <EmailSVG />
          </span>
          <a href="mailto:vikalpgandha9712@gmail.com">
            vikalpgandha9712@gmail.com
          </a>
        </div>
        <div className={`${classes.location} ${classes.contact}`}>
          <span className="svg-back">
            <AddressSVG />
          </span>
          <p>Ahmedabad, Gujarat</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
