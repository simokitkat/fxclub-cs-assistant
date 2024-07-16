import classes from "./home-content.module.scss";

export default function HomeContent() {
  return (
    <div className={classes["home-content"]}>
      <div className={classes.container}>
        <h1>Welcome to FXclub CS Assistant!</h1>
        <p>Please press on one of the above links to proceed.</p>
      </div>
    </div>
  );
}
