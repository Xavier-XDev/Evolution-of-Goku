import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "../MenuListItem/style.module.css";

export function MenuList(props) {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={props.form === "Goku"}
        onClick={props.onItemClick}
        form="Goku"
      />
      <MenuListItem
        isSelected={props.form === "Kakarot SSJ1"}
        onClick={props.onItemClick}
        form="Kakarot SSJ1"
      />
      <MenuListItem
        isSelected={props.form === "Kakarot SSJ2"}
        onClick={props.onItemClick}
        form="Kakarot SSJ2"
      />
      <MenuListItem
        isSelected={props.form === "Kakarot SSJ3"}
        onClick={props.onItemClick}
        form="Kakarot SSJ3"
      />
       <MenuListItem
        isSelected={props.form === "Kakarot SSGod"}
        onClick={props.onItemClick}
        form="Kakarot SSGod"
      />
        <MenuListItem
        isSelected={props.form === "Kakarot SSBlue"}
        onClick={props.onItemClick}
        form="Kakarot SSBlue"
      /> 
        <MenuListItem
        isSelected={props.form === "Kakarot AUI"}
        onClick={props.onItemClick}
        form="Kakarot AUI"
      />
        <MenuListItem
        isSelected={props.form === "Kakarot PUI"}
        onClick={props.onItemClick}
        form="Kakarot PUI"
      />
      {console.log(props.form)}
    </div>
  );
}


