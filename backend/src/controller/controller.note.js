const controles = {}
const note = require('../models/note');
const colors = require('../models/colors');


// Get All Notes
controles.note = async (req, res) => {
  try {
    const notes = await note.findAll();
    res.status(200).json({
      notes
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });

  }
}

// Create a Note
controles.noteCreate = async (req, res) => {
  try {
    const { title, content, color } = req.body;

    const colorId = await colors.findOne({
      where: {
        id: color
      }
    });
    if (!colorId) {
      res.status(400).json({
        message: 'Cor não existe'
      });
    } else {

      const newNote = await note.create({
        title,
        content,
        id_color: color
      });
      res.status(200).json({
        newNote
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });
  }
}

//Updade a Note
controles.noteUpdate = async (req, res) => {
  try {
    const { title, content, color } = req.body;
    const { id } = req.params;
    const colorId = await colors.findOne({
      where: {
        id: color
      }
    });
    if (!colorId) {
      res.status(400).json({
        message: 'Cor não existe'
      });
    } else {
      const updateNote = await note.update({
        title,
        content,
        id_color: color
      }, {
        where: {
          id
        }
      });
      res.status(200).json({
        updateNote
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });
  }
}

//Delete a Note
controles.noteDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await note.destroy({
      where: {
        id
      }
    });
    res.status(200).json({
      deleteNote
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });
  }
}



module.exports = controles;