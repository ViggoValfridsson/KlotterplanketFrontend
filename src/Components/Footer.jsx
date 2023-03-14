import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer_container} container`}>
        <h4 className={classes.footer_title}>Created by Viggo Valfridsson</h4>
      </div>
    </footer>
  )
}

export default Footer