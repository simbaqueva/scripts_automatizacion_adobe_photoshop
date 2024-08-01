// Este script recorre todas las capas del documento y verifica si hay capas de texto editables.

#target photoshop

// Función principal
function checkTextLayers(doc) {
    // Contador para las capas de texto editables
    var editableTextLayerCount = 0;

    // Recorrer todas las capas del documento
    for (var i = 0; i < doc.layers.length; i++) {
        processLayer(doc.layers[i]);
    }

    // Función para procesar cada capa o grupo de capas
    function processLayer(layer) {
        if (layer.typename === "ArtLayer") {
            if (layer.kind === LayerKind.TEXT) {
                editableTextLayerCount++;
                $.writeln("Capa de texto editable encontrada: " + layer.name);
            }
        } else if (layer.typename === "LayerSet") {
            // Recursión para procesar las capas dentro de un grupo
            for (var j = 0; j < layer.layers.length; j++) {
                processLayer(layer.layers[j]);
            }
        }
    }

    // Mostrar el resultado en una alerta
    if (editableTextLayerCount === 0) {
        alert("Todas las capas de texto están rasterizadas o no hay capas de texto en el documento.");
    } else {
        alert("Número total de capas de texto editables: " + editableTextLayerCount + ".\nPor favor, rasteriza todas las capas de texto antes de crear el PDF para impresión.");
    }
}

// Ejecutar el script en el documento activo
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    checkTextLayers(doc);
} else {
    alert("No hay ningún documento abierto.");
}
