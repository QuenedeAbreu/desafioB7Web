import axios from "axios";

export const BaseUrlApi = process.env.REACT_APP_API;
export const BaseUrlLocal = process.env.REACT_APP_HOST;


const apiAxiosPost = async (url, data) => {
  try {
    const response = await axios.post(BaseUrlApi + url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }

  return null;
}

const apiAxiosGet = async (url) => {
  try {
    const response = await axios.get(BaseUrlApi + url);
    return response.data;
  } catch (error) {
    console.log(error);
  }

  return null;
}

const apiAxiosPut = async (url, data) => {
  try {
    const response = await axios.put(BaseUrlApi + url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }

  return null;
}


const apiAxiosDelete = async (url) => {
  try {
    const response = await axios.delete(BaseUrlApi + url);
    return response.data;
  } catch (error) {
    console.log(error);
  }

  return null;
}


const ApiNoteControl = {
  getNotes: async function () {
    try {
      return await apiAxiosGet("/");
    } catch (error) {
      console.log(error);
    }

  },
  postNotes: async function (data) {
    try {
      return await apiAxiosPost("/", data);
    } catch (error) {
      console.log(error);
    }
  },
  updateNotes: async function (data, id) {
    try {
      return await apiAxiosPut(`/${id}`, data);
    } catch (error) {
      console.log(error);
    }
  },
  deleteNotes: async function (id) {
    try {
      return await apiAxiosDelete("/" + id);
    } catch (error) {
      console.log(error);
    }
  },

  getAllColor: async function () {
    try {
      return await apiAxiosGet("/colors");
    } catch (error) {
      console.log(error);
    }
  },

  postColor: async function (data) {
    try {
      return await apiAxiosPost("/colors", data);
    } catch (error) {
      console.log(error);
    }
  },
  updateColor: async function (data, id) {
    try {
      return await apiAxiosPut(`/colors/${id}`, data);
    } catch (error) {
      console.log(error);
    }
  },
  deleteColor: async function (id) {
    try {
      return await apiAxiosDelete(`/colors/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => ApiNoteControl;
