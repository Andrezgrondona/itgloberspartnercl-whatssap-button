# Olimpica

Con este componente podemos utilizar el boton de whatsapp para  re dirigir al numero de la tienda.


![](https://github.com/Andrezgrondona/itgloberspartnercl-whatssap-button/blob/main/react/src/assets/whatsapp.png?raw=true)

### Configuracion

#### Paso 1- Inicio
Acceda a la guia basica de configuracion de VTEX IO y configure su entorno de trabajo antes de utilizar este componente


#### Paso 2 - Clonar el repositorio
Clona este repositorio en tu maquina local para poder trabajar y accede a el por tu terminal.


#### Paso 3 - Edita el manifest.json
Una vez clonado el repositorio hay que hacer unas cuantas modificaciones en el manifest.json del proyecto.

Tendras que modificar valores de la propiedad vendor por el nombre de la cuenta en la que estes trabajando. la propiedad name no es obligatoria modificarla para su uso pero puedes cambiarla por el nombre que quieras

`"vendor": "name-vendor"`, `"name": "my-test-theme"`

--------

#### Paso 4 -Gestor de paquetes

Se debe ejecutar el comando `yarn install` en la terminal de la carpeta `React` para instalar el gestor de paquetes

#### Paso 5 - Desinstalar el store-theme predeterminado
Al ejecutar vtex list, puede verificar si algún tema está instalado.

Es común tener ya instalado un vtex.store-theme cuando inicia el proceso de desarrollo frontal de la tienda.

Se debera ejecutar el siguiente comando para realizar la desinstalacion
`vtex uninstall vtex.store-theme@0.0.1`

#### Paso 6 - Entorno trabajo

Añade a tu manifest.json, la dependencia `itgloberspartnercl.whatsapp-button´

Se debe revisar en la version en la cual esta actualmente `"itgloberspartnercl.whatsapp-button": "0.x"`

Para usar el componente agregarlo asi: `"whatsapp-button"`

--------
