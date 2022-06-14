const controles = {}
const color = require('../models/colors');


// Function validation color
const ValidateColor = (color) => {
  const regexValidateColor = "^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$";
  if (color.match(regexValidateColor)) {
    return true;
  } else {
    return false;
  }
}

//Get All Colors
controles.color = async (req, res) => {
  try {
    const colors = await color.findAll();
    res.status(200).json({
      colors
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });

  }
}

//get a Color by Id
controles.colorById = async (req, res) => {
  const { id } = req.params;
  try {
    const colorOne = await color.findOne({
      where: {
        id
      }
    });
    res.status(200).json({
      colorOne
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });
  }
}


//Create Color
controles.colorCreate = async (req, res) => {
  try {
    const { colorHexadecimal, description } = req.body;
    if (ValidateColor(colorHexadecimal)) {
      const findColor = await color.findOne({ where: { colorHexadecimal } });

      console.log(findColor);
      if (findColor) {
        res.status(400).json({
          message: 'Essa cor já existe'
        });
      } else {

        const colorOne = await color.create({
          colorHexadecimal,
          description
        });
        res.status(201).json({
          colorOne
        });
      }
    } else {
      res.status(400).json({
        message: 'A cor não é valida'
      });

    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });
  }
}


//Update Color
controles.colorUpdate = async (req, res) => {
  try {
    const { colorHexadecimal, description } = req.body;
    const { id } = req.params;

    const findColor = await color.findOne({ where: { id } });

    if (ValidateColor(colorHexadecimal || findColor.colorHexadecimal)) {

      const colorOne = await color.update({
        colorHexadecimal: colorHexadecimal || findColor.colorHexadecimal,
        description
      }, {
        where: {
          id
        }
      });
      res.status(200).json({
        colorOne
      });

    } else {
      res.status(400).json({
        message: 'A cor não é valida'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });
  }
}

//Delete Color
controles.colorDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const colorOne = await color.destroy({
      where: {
        id
      }
    });
    res.status(200).json({
      colorOne
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error'
    });
  }
}

module.exports = controles;