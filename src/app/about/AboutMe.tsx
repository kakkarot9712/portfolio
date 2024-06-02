import Android from "@/UI/SVGs/Hobbies/Android";
import Book from "@/UI/SVGs/Hobbies/Book";
import Movies from "@/UI/SVGs/Hobbies/Movies";
import Research from "@/UI/SVGs/Hobbies/Research";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={classes["who-am-i"]}>
      <div className={classes["who-am-i__info"]}>
        <h1>
          Know Who <span className="color-text">I&apos;M</span>
        </h1>
        <p className={classes["who-am-i__info-text"]}>
          Hi Everyone, I am <span className="color-text">Vikalp Gandha</span>{" "}
          from <span className="color-text">Ahmedabad, India</span>. I am an
          engineer learning Web Development from various portals like Udemy and
          Youtube.
        </p>
        <br />
        <p>Apart from coding, some other activities that I love to do!</p>
        <ul className={classes["who-am-i__activities"]}>
          <li className={classes["who-am-i__activity"]}>
            <span className={classes["svg-span"]}>
              <Movies />
            </span>
            Watching Movie
          </li>
          <li className={classes["who-am-i__activity"]}>
            <span className={classes["svg-span"]}>
              <Book />
            </span>
            Reading Scientific Books
          </li>
          <li className={classes["who-am-i__activity"]}>
            <span className={classes["svg-span"]}>
              <Research />
            </span>
            Research about latest Tech
          </li>
          <li className={classes["who-am-i__activity"]}>
            <span className={classes["svg-span"]}>
              <Android />
            </span>
            Learning about How Android OS works and tinkering with Android
            Devices
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
