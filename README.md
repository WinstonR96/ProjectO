# Formulario de actualización de datos

1. Clonar el proyecto.
2. Entrar en la ruta del proyecto
3. Cambiar el nombre del archivo **config.js.example** (ubicado dentro del directorio **public**) a **config.js**.
4. Asignar el valor a las variables de configuración en el archivo de config.js
5. El texto de Aviso de privacidad se parametriza en el archivo **avisotexto.js** y el texto de Politica de privacidad se parametriza en el archivo **politicatexto.js**. Ambos ubicados en el directorio **public**
6. Instalar los paquetes necesarios ejecutando: `yarn` o `yarn install`
7. Para inicializar el servidor:
   `yarn start`

---

## Configuración

```js
var config = {
  // Nombre de la tienda olimpica donde se despliega el formulario
  REACT_APP_TIENDA: "",
  // Corresponde al identificador de la app desarrollada por redsis para azure insight
  REACT_APP_CODAPP: "1",
  // Corresponde a la URL base
  REACT_APP_ENDPOINT: "",
  // ENDPOINT de consulta
  REACT_APP_URL_CONSULTAR: "",
  // ENDPOINT de actualizar
  REACT_APP_URL_ACTUALIZAR: "",
  // ENDPOINT de registrar
  REACT_APP_URL_REGISTRAR: "",
  // ENDPOINT del ws auxiliar donde se envia los datos de telemetria. Este es un desarrollo realizado en .net core con el proposito de recibir los datos del formulario y reenviar a azure, todo esto siempre y cuando haya restricciones de salida para el formulario
  REACT_APP_URL_TELEMETRIA: "",
  // Tiempo estimado para llenar el formulario *Entero
  REACT_APP_TIMEOUT: 10,
  // Tiempo de timeout para las consultas http
  REACT_APP_TIMEOUT_AXIOS: 15000,
  // Tiempo estimado en que se enviaran los datos de metricas a la API *Entero
  REACT_APP_TIME_ENVIOMETRICAS: 540000,
  // Dato proporcionado por el cliente, necesario para la autorizacion
  REACT_APP_TOKEN: "",
  // Dato proporcionado por el cliente
  REACT_APP_FUNCIONARIO: "",
  // Necesario para visualizar un formulario implementando el concepto 'Testing A/B', los posibles escenarios son 'a | b'
  REACT_APP_TIPOFORM: "",
  // Identificador de la pos donde se despliega el form
  REACT_APP_IDPOS: "",
  // Key proporcionada por azure, esto es necesario para enviar datos de telemetria directamente a azure
  REACT_APP_INSTRUMENTATIONKEY: ""
};
```

---

## Realizar compilación

1. Ejecutar dentro de la raiz del proyecto

```
yard build
```

2. Copiar los archivos generados dentro de la carpeta **build** a la POS

---

## Gestion de paquetes

Para instalar paquete siempre usar la herramienta yarn.

```
yard add nombre_paquete
```

---
## Biblioteca de terceros

1. HTTP Client: 
> [Axios](https://github.com/axios/axios)

2. Framework CSS:
> [ReactStrap](https://reactstrap.github.io/)

3. Alertas y Modal:
> [sweetalert2](https://sweetalert2.github.io/)

4. Routing:
> [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

> [prop-types](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

5. Teclado:
> [react-simple-keyboard](https://franciscohodge.com/projects/simple-keyboard/demo-showcase/)

> [simple-keyboard-layouts](https://franciscohodge.com/projects/simple-keyboard/getting-started/)

6. Pad Firma:
> [react-signature-pad-wrapper](https://github.com/szimek/signature_pad)

7. Iconos:
> ["react-icons"](https://react-icons.netlify.com/)

8. Validación Numeros:
> ["React Numeric Input"](https://github.com/vlad-ignatov/react-numeric-input)

