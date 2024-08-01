# Exportar Capas como PNG en Adobe Photoshop

Este script de Adobe Photoshop exporta cada capa del documento activo como un archivo PNG. Cada capa se guarda como un archivo PNG separado en una carpeta seleccionada por el usuario.

## Funcionalidad

- **Exportar Capas**: Exporta cada capa del documento activo como un archivo PNG.
- **Configuración de Archivo**: Reemplaza caracteres no válidos en los nombres de archivo para evitar errores.
- **Opciones de PNG**: Configura el nivel de compresión y desactiva el entrelazado para los archivos PNG exportados.
- **Selección de Carpeta**: Permite al usuario seleccionar la carpeta de destino para guardar los archivos PNG.
- **Restaurar Preferencias**: Restaura la unidad de medida original después de la exportación.

## Instrucciones de Uso

1. **Abrir Photoshop**

   Abre Adobe Photoshop y carga el documento que contiene las capas que deseas exportar.

2. **Ejecutar el Script**

   - Abre el panel de Scripts en Photoshop (`Archivo` > `Secuencias de comandos` > `Otro script...`).
   - Selecciona el archivo `.jsx` que contiene el código del script.

3. **Seleccionar Carpeta de Destino**

   - Al ejecutar el script, se abrirá un diálogo solicitando que selecciones la carpeta donde se guardarán los archivos PNG.
   - El script exportará cada capa del documento activo como un archivo PNG en la carpeta seleccionada.

4. **Verificar Archivos Exportados**

   - Revisa la carpeta seleccionada para asegurarte de que todos los archivos PNG se hayan guardado correctamente.

## Requisitos

- Adobe Photoshop

## Detalles del Script

- Verifica si hay un documento abierto en Photoshop.
- Cambia temporalmente la unidad de medida a píxeles para garantizar la precisión.
- Duplica el documento para cada capa y convierte las capas en objetos inteligentes.
- Exporta cada capa como un archivo PNG con opciones específicas.
- Restaura la unidad de medida original después de la exportación.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un `issue` o envía un `pull request`.

## Autor

Alvaro Alexander Simbaqueva
