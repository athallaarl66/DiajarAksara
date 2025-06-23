import { useState, useEffect } from "react";
import Header from "../components/headerFitur"; // Import the Header component
import Footer from "../components/footerFitur"; // Import the Footer component
import Image from "next/image"; // Import Image from Next.js
import styles from "../styles/AboutUs.module.css"; // Import CSS for About Us page

const AboutUs = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Set fadeIn to true when the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`${styles.container} ${fadeIn ? styles.fadeIn : ""}`}>
      {/* Header Component */}
      <Header />

      {/* About Us Section */}
      <section className={styles.Atas}>
        <h1>About Us</h1>
        <p>
          Discover more about our mission, vision, and the team behind the web
          app.
        </p>
      </section>

      {/* Image Section */}
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          {/* Replace <img> with <Image> */}
          <Image
            src="/images/team.jpg" // Path to the image
            alt="Our Team" // Alt text for the image
            className={styles.image}
            width={800} // Set the width for the image
            height={500} // Set the height for the image
            layout="responsive" // Ensures the image is responsive
          />
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <h2>What We Do</h2>
        <p>
          We aim to revolutionize learning by providing an interactive platform
          that helps you improve your skills in writing, reading, and more. Our
          application is designed with you in mind, offering personalized
          experiences to help you succeed.
        </p>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.member}>
            {/* Replace <img> with <Image> */}
            <Image
              src="/images/member1.jpg"
              alt="Team Member 1"
              width={120}
              height={120}
              className={styles.memberImage}
            />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className={styles.member}>
            {/* Replace <img> with <Image> */}
            <Image
              src="/images/member2.jpg"
              alt="Team Member 2"
              width={120}
              height={120}
              className={styles.memberImage}
            />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className={styles.member}>
            {/* Replace <img> with <Image> */}
            <Image
              src="/images/member3.jpg"
              alt="Team Member 3"
              width={120}
              height={120}
              className={styles.memberImage}
            />
            <h3>Mike Johnson</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutUs;
