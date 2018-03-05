#!/bin/bash

# Obtenemos el directorio del script
WORKING_PATH="$( cd "$(dirname "$0")" ; pwd -P )"

# Establecer el directorio de trabajo
cd $WORKING_PATH

# Combinar las APIs
npm start --silent > $WORKING_PATH/swagger.json

# Damos permisos al JSON resultante
chmod 644 $WORKING_PATH/swagger.json

# Hacemos una copia del JSON al root de nginx para que sea accesible desde fuera
cp $WORKING_PATH/swagger.json /usr/share/nginx/html/
