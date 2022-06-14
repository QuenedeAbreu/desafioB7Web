import React, { useEffect, useState } from "react";
import { HomeContainer, ItemNoteColor } from "./style";
import { useParams, Link } from "react-router-dom";

import ItemNote from "../../components/ItemNote";
import Api from "../../helpers/ApiNoteControl";

function Page() {
  const { id } = useParams();
  const [titleNote, setTitleNote] = useState("");
  const [textNote, setTextNote] = useState("");
  const [colorNoteId
    , setColorNoteId
  ] = useState("");

  const [allColor, setAllColor] = useState([]);

  const [notes, setNotes] = useState([]);
  const useApi = Api();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getNotes = async () => {
      const notesAll = await useApi.getNotes();
      setNotes(notesAll.notes);

    }
    getNotes();

  }, [useApi]);

  useEffect(() => {
    const getAllColor = async () => {
      const allColor = await useApi.getAllColor();
      setAllColor(allColor.colors);
    }
    getAllColor();
  }, [useApi]);


  function createNoteForm(e) {
    e.preventDefault();
    const postNotes = async () => {
      await useApi.postNotes({
        title: titleNote,
        content: textNote,
        color: colorNoteId

      });
    }
    postNotes();
    window.location.reload();
  }

  function updateNote(e) {
    e.preventDefault();
    const updateNotes = async () => {
      await useApi.updateNotes({
        title: titleNote,
        content: textNote,
        color: colorNoteId

      }, id);
    }
    updateNotes();
    window.location.href = "/";

  }


  function deleteNote(id) {
    const deleteNote = async () => {
      await useApi.deleteNotes(id);
    }
    deleteNote();
    window.location.reload();
  }


  const hendleChange = (e) => {
    e.preventDefault();
    if (id) {
      updateNote(e);
    } else {
      createNoteForm(e);

    }
  }


  //Funcitions auxiliary
  function getColorbyId(id) {

    const color = allColor.find(color => color.id === id);
    if (color) {
      return color.colorHexadecimal;
    }
    return "";
  }
  function getNoteById(id) {
    const note = notes.find(note => note.id === id);
    if (note) {
      return note;
    }
    return "";
  }
  const note = getNoteById(parseInt(id));

  useEffect(() => {
    if (note) {
      setTitleNote(note.title);
      setTextNote(note.content);
      setColorNoteId
        (note.color.id);
    }

  }, [note]);

  return (

    < HomeContainer >
      <div className="container">
        <div className="container-title">
          <div className="container-title-left">
            <h1>BLOCO DE NOTAS</h1>
          </div>
          <div className="container-title-right">
            <Link to="/cores" >Cores das Notas</Link>
          </div>

        </div>
        <div className="container-body">
          <div className="container-body-left">
            <div className="title-notes">

              <h1>NOTAS</h1>

            </div>
            <div className="list-notes">
              <ul>
                {notes.map((note, index) => (
                  <li key={index}> < ItemNote key={index} note={note} delete={deleteNote} /> </li>
                ))
                }
              </ul>
            </div>
          </div>
          <div className="container-body-righ">
            <form onSubmit={hendleChange}>
              <div className="input-title">
                <input type="text" value={titleNote} onChange={(e) => setTitleNote(e.target.value)} placeholder={`Titulo da Nota`} />
              </div>

              <textarea value={textNote} onChange={(e) => setTextNote(e.target.value)} placeholder={`Digite sua nota`} />

              <div className="input-color">
                <h1>Tipo de Nota :  </h1>
                <ItemNoteColor colorbg={getColorbyId(parseInt(colorNoteId))} />

                <select value={colorNoteId} onChange={(e) => setColorNoteId(e.target.value)} defaultValue={colorNoteId}>
                  {allColor.map((color, index) => (
                    <option key={index} value={color.id} >{color.description}</option>
                  ))}
                </select>

              </div>
              <div className="button-submit">
                <button type="submit">Salvar</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </HomeContainer >
  );
}

export default Page;