import Swal from "sweetalert2";

const Utils = {
  EstaVacio: campo => {
    if (
      campo === null ||
      campo === undefined ||
      campo === "" ||
      campo === "0"
    ) {
      return true;
    } else {
      return false;
    }
  },
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
      title: "Información incompleta",
      text: "Digite Campo vacio",
      icon: "error",
      confirmButtonText: "Ok"
    });
  },
  AlertaDatosIncorrectos: () => {
    Swal.fire({
      title: "Información incorrecta",
      text: "Digite datos válidos",
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
      icon: "success",
      text: "Datos actualizados correctamente",
      confirmButtonText: "Ok",
      confirmButtonColor: "#0C7DED"
    });
  }
};

export default Utils;
