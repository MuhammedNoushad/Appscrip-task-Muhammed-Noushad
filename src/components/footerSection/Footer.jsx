import Gpay from "../../icons/Gpay";
import Insta from "../../icons/Insta";
import LinkedIn from "../../icons/LinkedIn";
import MasterCard from "../../icons/MasterCard";
import UnitedStates from "../../icons/UnitedStates";
import Amex from "../../icons/Amex";
import Paypal from "../../icons/Paypal";
import ApplePay from "../../icons/ApplePay";
import Opay from "../../icons/OPay";
import styles from "./Footer.module.css";
import { useEffect, useState } from "react";
import DownArrow from "../../icons/DownArrow";
import UpArrow from "../../icons/UpArrow";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMuseOpen, setIsMuseOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <footer className={styles.footer}>
        <div className={styles.topSection}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <hr className={styles.divider} />

        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h4>CONTACT US</h4>
            <div className={styles.contactDetails}>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.currencyInfo}>
            <h4>CURRENCY</h4>
            <div className={styles.currencyIcon}>
              <UnitedStates />
              <p>+USD</p>
            </div>
          </div>

          <hr className={styles.divider} />

          <div>
            <div className={styles.dropdownSection}>
              <div
                className={styles.dropdownHeader}
                onClick={() => setIsMuseOpen(!isMuseOpen)}
              >
                <h4>mettā muse</h4>
                {isMuseOpen ? <UpArrow /> : <DownArrow />}
              </div>
              {isMuseOpen && (
                <div className={styles.dropdownContent}>
                  <p>About Us</p>
                  <p>Stories</p>
                  <p>Artisans</p>
                  <p>Boutiques</p>
                  <p>Contact Us</p>
                  <p>EU Compliances Docs</p>
                </div>
              )}
            </div>

            <div>
              <hr className={styles.divider} />
            </div>

            <div className={styles.dropdownSection}>
              <div
                className={styles.dropdownHeader}
                onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              >
                <h4>QUICK LINKS</h4>
                {isQuickLinksOpen ? <UpArrow /> : <DownArrow />}
              </div>
              {isQuickLinksOpen && (
                <div className={styles.dropdownContent}>
                  <p>Orders & Shipping</p>
                  <p>Join/Login as a Seller</p>
                  <p>Payment & Pricing</p>
                  <p>Return & Refunds</p>
                  <p>FAQ</p>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                </div>
              )}
            </div>

            <hr className={styles.divider} />

            <div className={styles.dropdownSection}>
              <div
                className={styles.dropdownHeader}
                onClick={() => setIsFollowOpen(!isFollowOpen)}
              >
                <h4>FOLLOW US</h4>
                {isFollowOpen ? <UpArrow /> : <DownArrow />}
              </div>
              {isFollowOpen && (
                <div className={styles.dropdownContent}>
                  <div className={styles.icons}>
                    <Insta />
                    <LinkedIn />
                  </div>
                </div>
              )}
            </div>

            <hr className={styles.divider} />

            <div className={styles.footerLinks}>
              <h4>mettā muse Accepts</h4>
              <div className={styles.icons}>
                <Gpay size={45} />
                <MasterCard size={45} />
                <Paypal size={45} />
                <Amex size={45} />
                <ApplePay size={45} />
                <Opay size={45} />
              </div>
            </div>
          </div>
        </div>

        <p className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </footer>
    );
  }

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

      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
