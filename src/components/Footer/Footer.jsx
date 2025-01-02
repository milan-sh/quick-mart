import React from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer grid grid-cols-2 md:grid-cols-4 gap-x-0 bg-secondaryBgColor text-white  p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join flex flex-col md:flex-row w-fit">
              <input
                type="email"
                placeholder="yourname@gmail.com"
                className="input md:input-bordered border border-white join-item px-2 "
                required
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className=" bg-secondaryBgColor text-white justify-center gap-y-4 flex md:flex-row flex-col text-center md:justify-between items-center p-4">
        <aside className="grid-flow-col items-center">
          <Logo />
        </aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <div className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/milan-sh" target="_blank">
            <FontAwesomeIcon size="xl" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/milan-singh-81ms33/"
            target="_blank"
          >
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </a>
          <a href="https://discord.com/users/mil_8133" target="_blank">
            <FontAwesomeIcon size="xl" icon={faDiscord} />
          </a>
          <a href="https://x.com/dev_81milan" target="_blank">
          <FontAwesomeIcon size="xl" icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
