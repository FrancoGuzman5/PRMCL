# PRMCL 

_PRMCL es una aplicación diseñada para que todas aquellas personas que les guste viajar y vivir una aventura a través de Chile, en donde podrás encontrar la red de parques disponibles que administra la Corporación Forestal Nacional(CONAF), y toda la información necesaria para tener una planificación y un viaje grato._

## Pruebas 🚀

_Para comenzar a realizar las pruebas en el proyecto primero es necesario realizar una copia local del proyecto, para esto es necesario tener previamente instalado y configurado git, luego en la carpeta donde se desea guardar el proyecto es necesario abrir una consola de git y poner el siguiente comando: git clone https://github.com/FrancoGuzman5/PRMCL.git_

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_Para el correcto funcionamiento del proyecto es necesario instalar Node js, se recomienda el uso de npm para poder instalar los archivos y dependencias correspondientes, la versión de node utilizada en este proyecto es la v14.18.0 . También, para el desarrollo y testeo de la aplicación se utilizó el framework Expo, el cual se instaló como aplicación tanto en un dispositivo móvil real, como en un simulador de Android (Android Studio)._ 


Ademas de node tambien es necesaria la instalacion de un emulador de Android para poder correr el proyecto una vez ya este en ejecucion, para esto:

1- Instale Visual Studio Code (o el editor de código que elija).

2- Instale Android Studio para Windows. Android Studio instala el último SDK de Android de forma predeterminada. Aquí un video de su instalación https://www.youtube.com/watch?v=WBZsj6NruGA.

3- Luego de instalar y vincular Android studio con el editor de código, 
ahora es necesario crear una maquina de android desde Android studio para luego utilizarla en el proyecto, para esto:

1- Abrir Android studio

2- En el apartado de configuracion seleccionamos AVD Manager

3- Seleccionamos Create Cirtual Device...

4- Ahora seleccionamos el modelo de movil que deseamos emular (Las pruebas han sido realizadas con el modelo Pixel 3a)

5- Seleccionamos la version de Android que tendra el dispositivo virtual (Las pruebas han sido realizadas en la version 9.0 de Android, API 28, Release name: Pie)

### Instalación 🔧

_Estos pasos son para tener un entorno de desarrollo ejecutandose_

_Una vez ya listos todos los pasos anteriores nos situamos en la carpeta del proyecto y abrimos una consola dentro de ella, ya sea powershell o consola de windows_

_Luego con la consola ya abierta en la carpeta del proyecto, es necesario instalar las dependencias del proyecto_

```
Ejecutar el siguiente comando:
npm install
```
_Ya con esto esta todo listo para empezar las pruebas de desarrollo del proyecto_


## Despliegue 📦

_Para ejecutar el proyecto es necesario tener el dispositivo virtual en ejecucion o tener instalada la aplicación de Expo en un telefono móvil_

_Ahora para comenzar a ejecutar el servidor y poder correr la aplicación hay que ejecutar el siguiente código en la consola/terminal:_

```
expo start
```
_Luego de esto se ejecutará y abrirá una pestaña de tu navegador favorito, mostrando la consola de METRO BUNDLER_

_Metro Bundler es una herramienta que toma la información y los archivos de React Native y los prepara para ser instalados en un dispositivo_

_Dentro del menú web de Metro Bundler, en el menú de la izquierda se presentarán varias opciones, de las cuales solo servirá la opción "run on Android device/emulator" o escanea el código QR desde la aplicación de Expo en tu dispositivo móvil personal._

Y listo, PRMCL estará listo para tu uso :)

## Construido con 🛠️

* [ReactNative](https://reactnative.dev/) - Framework de JavaScript utilizado
* [NPM](https://www.npmjs.com/) - Manejador de dependencias
* [Node.js](https://nodejs.org/es/) - Entorno de ejecución de JavaScript
* [Expo](https://expo.dev/) - Marco de trabajo para React Native

## Autor ✒️
**Franco Guzman** - [Francogz5](https://github.com/FrancoGuzman5)
