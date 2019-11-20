import API from "./Config";

//capa de servicio
/**
 * @class Capa de servicio
 */
const Service = {
  //funcion para hacer la peticion a la api
  /**
   * @description Realiza la peticion a la API
   * @params {string} params controlador de consulta
   * @data {Array} data array de datos
   * @returns {Promise} Promesa de la peticion realizada
   */
  post: (params, data) =>
    new Promise((resolve, reject) => {
      API.post(params, data, {timeout: window.config.REACT_APP_TIMEOUT_AXIOS})
        .then(response => response.data)
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
};

export default Service;
