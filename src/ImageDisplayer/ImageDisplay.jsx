import s from "./style.module.css";
//import dog from "../images/pexels-charles-1851164.jpg"
export function ImageDisplay(props) {
  const imageHander = () => {
    if (props.form === "Kakarot SSJ2")
      return <img src={require("../images/ssj2 Small.jpeg")} />;
    if (props.form === "Goku")
      return <img src={require("../images/state1 Small.jpeg")} />;
    if (props.form === "Kakarot SSJ1")
      return <img src={require("../images/ssj1 Small.jpeg")} />;
    if (props.form === "Kakarot SSJ3")
      return <img src={require("../images/ssj3 Small.jpeg")} />;
    if (props.form === "Kakarot SSGod")
      return <img src={require("../images/SSGod Small.jpeg")} />;
    if (props.form === "Kakarot SSBlue")
      return <img src={require("../images/SSBlue Small.jpeg")} />;
    if (props.form === "Kakarot AUI")
      return <img src={require("../images/ssUI Small.jpeg")} />;
    if (props.form === "Kakarot PUI")
      return <img src={require("../images/ssPUI Small.jpeg")} />;
    return "No form set";
  };
  return <div className={s.container}>{imageHander()}</div>;
}
