import Gpay from "../../icons/Gpay";
import Insta from "../../icons/Insta";
import LinkedIn from "../../icons/LinkedIn";
import MasterCard from "../../icons/MasterCard";
import UnitedStates from "../../icons/UnitedStates";
import Amex from "../../icons/Amex";
import Paypal from "../../icons/Paypal";
import ApplePay from "../../icons/ApplePay";
import Opay from "../../icons/Opay";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.subscribeSection}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencyInfo}>
            <h4>CURRENCY</h4>
            <div className={styles.currencyIcon}>
              <UnitedStates />
              <p>+USD</p>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        <div className={styles.footerLinks}>
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>

        <div className={styles.footerLinks}>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className={styles.bottomRightSection}>
          <div className={styles.footerLinks}>
            <h4>FOLLOW US</h4>
            <div className={styles.icons}>
              <Insta />
              <LinkedIn />
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4>mettā muse Accepts</h4>
            <div className={styles.icons}>
              <Gpay />
              <MasterCard />
              <Paypal />
              <Amex />
              <ApplePay />
              <Opay />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
