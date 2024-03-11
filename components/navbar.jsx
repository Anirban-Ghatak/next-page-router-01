import Link from "next/link";
import classes from "./navbar.module.css";

const NavBar = () =>{
    return(
        <nav className={classes.navbar}>
        <p><span>E</span>-<span>commerce</span></p>
        <ul className={classes.navlinks}>
          <li className={classes.navitem}><Link href="/about" className={classes.links}>Curriculum</Link></li>
          <li className={classes.navitem}><Link href="/about"className={classes.links}>Forum</Link></li>
          <li className={classes.navitem}><Link href="/about" className={classes.links}>About Us</Link></li>
          <li className={classes.navitem}><Link href="/about" className={classes.links}>Sign In</Link></li>
        </ul>
      </nav>
    )
}
export default NavBar;