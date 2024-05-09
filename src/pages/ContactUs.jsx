import styles from "./Contact.module.scss";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import link from "../assets/images/linkedin.png";
import send from "../assets/images/send.png";
import insta from "../assets/images/instagram.png";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7000/contact",
        formData
      );
      console.log(response.data); // Log the response from the server
      toast.success(response.data.message);
    } catch (error) {
      console.log("Error sending message:", error.message);
      toast.error(error.message);
      // You can add logic here to handle errors, such as displaying an error message to the user
    }
  };
  return (
    <>
      <ToastContainer />

      <section className={styles.main}>
        <div className={styles.header}>
        </div>
        <div className={styles.main_content}>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Please fill use the informtion below
            to get in touch with our team
          </p>
        </div>
        <div className={styles.contact_body}>
          <div className={styles.contact_info}>
            <h2>Contact Information</h2>
            <div className="">
              <h3>General Enquiring</h3>
              <p>info@workshopapp.com</p>
            </div>
            <div className="">
              <h3>Visit Us</h3>
              <p>8 Jubilee-CMD Road, Magodo, Lagos State, Nigeria</p>
            </div>
            <div className="">
              <h3>Follow Us</h3>
              <div className={styles.socials}>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={link} alt="link" />
                <img src={insta} alt="insta" />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <h2>Send us a message</h2>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Mark Essien"
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="markessien@gmail.com"
              />
            </label>
            <label htmlFor="phone">
              Phone
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="09079179545"
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                placeholder="Hi, do you have a moment to talk about ..."
                rows={9}
              />
            </label>
            <button>
              Send
              <img src={send} alt="send" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
