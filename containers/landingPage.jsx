import NavBar from "../components/navbar"
import classes from "./landingPage.module.css";

const LandingPage = () =>{
    return(
        <div className={classes.outerBox}>
        <div className={classes.header}>
          <NavBar />
        </div>
        {/* <main className={classes.main}>
        <p>We are the main block</p>
        </main> */}
        </div>
    )
}
export default LandingPage;