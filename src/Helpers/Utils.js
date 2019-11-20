import Swal from "sweetalert2";

const Utils = {
  AlertaUsuarioNoEncontrado: () => {
    Swal.fire({
      title: "No encontrado",
      text:
        "Tu número no esta registrado, por favor acércate al módulo de Atencion al Cliente",
      confirmButtonText: "Volver",
      confirmButtonColor: "#B4AFAE"
    });
  },
  AlertaDatosIncompletos: () => {
    Swal.fire({
      title: "Información incorrecta",
      text: "Digite Campo vacio",
      icon: "error",
      confirmButtonText: "Ok"
    });
  },
  AlertaOcurrioUnError: message => {
    Swal.fire({
      title: "Ocurrio un error",
      text: message,
      icon: "error",
      confirmButtonText: "Volver",
      confirmButtonColor: "#d33"
    });
  },
  AlertaUsuarioActualizado: () => {
    Swal.fire({
      icon: 'success',
      text: 'Datos actualizados correctamente',
      confirmButtonText: "Ok",
      confirmButtonColor: "#0C7DED"
    })
  }
};

export default Utils;
