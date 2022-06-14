import React, { useEffect, useState } from "react";
import { HomeContainer, ItemNoteColor } from "./style";
import { useParams, Link } from "react-router-dom";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";


import Api, { BaseUrlLocal } from "../../helpers/ApiNoteControl";

function Page() {
  const useApi = Api();
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");

  const [allColor, setAllColor] = useState("");

  //get all colors
  useEffect(() => {
    const getAllColor = async () => {
      const allColor = await useApi.getAllColor();
      setAllColor(allColor.colors);
    }
    getAllColor();
  }, [useApi]);

  //Create Color
  async function createColorForm(e) {
    e.preventDefault();
    const creatColor = async () => await useApi.postColor({
      description: description,
      colorHexadecimal: color
    });

    creatColor();
    window.location.href = "/cores";
  }

  //updade color
  async function updateColorForm(e) {
    e.preventDefault();
    const updateColors = async () => {
      return await useApi.updateColor({
        description: description,
        colorHexadecimal: color
      }, id);
    }
    updateColors();
    window.location.href = "/cores";
  }

  //delete color
  async function deleteColorForm(idcolor) {
    // deleteColors(idcolor);
    const deleteColors = async (idcolor) => {
      console.log(idcolor);
      return await useApi.deleteColor(idcolor);
    }
    deleteColors(idcolor);

    window.location.reload();
  }

  //Function auxiliar 
  function getColorbyId(id) {
    if (allColor) {
      return allColor.find(color => color.id === id);
    } else {
      return "";
    }


  }
  const colorOne = getColorbyId(parseInt(id));

  useEffect(() => {
    if (colorOne) {
      setColor(colorOne.colorHexadecimal);
      setDescription(colorOne.description);
    }
  }, [colorOne]);

  function handleChange(e) {
    e.preventDefault();
    if (id) {
      updateColorForm(e);
    }
    else {
      createColorForm(e);
    }

  }



  return (

    < HomeContainer >
      <div className="container">
        <Link to="/" className="buttons">Home</Link>
        <div className="container-title">
          <h1>Cores</h1>
        </div>
        <div className="container-body">
          <form onSubmit={handleChange}>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição da Cor.." />
            <input type="color" placeholder="Código Hexadecimal.." value={color} onChange={(e) => setColor(e.target.value)} />
            <button type="submit" >Salvar</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Cor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {allColor && allColor.map((color, index) => (
                <tr key={index}>
                  <td>{color.description}</td>
                  <td> <ItemNoteColor key={index} colorbg={color.colorHexadecimal} />{color.colorHexadecimal}</td>
                  <td>
                    <a href={`${BaseUrlLocal}cores/${color.id}`} >
                      <TiEdit className="buttons-icons" />
                    </a>
                    {color.id &&
                      <TiDeleteOutline className="buttons-icons" onClick={() => { deleteColorForm(color.id) }} />
                    }
                  </td>
                </tr>
              ))}
              {!allColor && <tr><td colSpan="3">Nenhuma cor cadastrada</td></tr>}


            </tbody>
          </table>


        </div>
      </div>
    </HomeContainer >
  );
}

export default Page;