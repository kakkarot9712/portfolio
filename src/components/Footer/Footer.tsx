import LinkedInSVG from "@/UI/SVGs/Social/LinkedIn";
import GithubSVG from "@/UI/SVGs/Social/Github";
import TelegramSVG from "@/UI/SVGs/Social/Telegram";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Developed by Vikalp Gandha</p>
      <p>Copyright &copy; 2022-{new Date().getFullYear()} VG</p>
      <div className={classes["social-links"]}>
        <a
          href="https://www.linkedin.com/in/vikalp-gandha/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <LinkedInSVG />
          </span>
        </a>
        <a href="https://github.com/kakkarot9712">
          <span>
            <GithubSVG />
          </span>
        </a>
        <a href="https://t.me/Kakkarto9712" target="_blank" rel="noreferrer">
          <span>
            <TelegramSVG />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
