import React from "react";
import { Item, ItemNoteColor } from "./style";
import { BaseUrlLocal } from "../../helpers/ApiNoteControl";
import { IoIosCloseCircleOutline } from "react-icons/io";
function ItemNote(props) {
  function deleteNote() {
    props.delete(props.note.id);
  }

  return (
    <Item>
      <div className="item-note">
        <a href={`${BaseUrlLocal}${props.note.id}`}>
          <ItemNoteColor colorbg={props.note.color.colorHexadecimal}></ItemNoteColor>
          <h1>{props.note.title}</h1>
        </a>

        <IoIosCloseCircleOutline className="iconDelete" onClick={deleteNote} />
      </div>
    </Item>

  );
}

export default ItemNote;

