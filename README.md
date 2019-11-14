# Formulario de actualización de datos

1. Clonar el proyecto.
2. Entrar en la ruta del proyecto
3. Cambiar el nombre del archivo **config.js.example** (ubicado dentro del directorio **public**) a **config.js**.
4. Asignar el valor a las variables de configuración en el archivo de config.js
5. Instalar los paquetes necesarios ejecutando: `yarn` o `yarn install`
6. Para inicializar el servidor:
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
