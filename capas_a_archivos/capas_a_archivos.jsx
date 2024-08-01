#target photoshop

// Verifica si hay un documento abierto
if (app.documents.length > 0) {
    var doc = app.activeDocument; // Obtiene el documento activo
    var originalRulerUnits = app.preferences.rulerUnits; // Guarda la unidad de medida actual
    app.preferences.rulerUnits = Units.PIXELS; // Cambia la unidad de medida a píxeles

    var outputFolder = Folder.selectDialog("Selecciona la carpeta donde quieres guardar los archivos");

    if (outputFolder) {
        // Itera sobre todas las capas
        for (var i = 0; i < doc.layers.length; i++) {
            var layer = doc.layers[i];
            if (layer.typename == "ArtLayer" || layer.typename == "LayerSet") {
                // Duplica el documento y convierte las capas a objetos inteligentes para preservar las transformaciones
                var tempDoc = app.documents.add(doc.width, doc.height, doc.resolution, layer.name, NewDocumentMode.RGB, DocumentFill.TRANSPARENT);
                doc.activeLayer.copy();
                tempDoc.paste();

                // Convierte a objetos inteligentes
                tempDoc.activeLayer.rasterize(RasterizeType.ENTIRELAYER);

                var fileName = layer.name.replace(/[:\/\\*\?\"\<\>\|]/g, ""); // Reemplaza caracteres no válidos
                var saveFile = new File(outputFolder + "/" + fileName + ".png");

                // Configuración para guardar como PNG
                var pngOptions = new PNGSaveOptions();
                pngOptions.compression = 9; // Nivel de compresión (0-9)
                pngOptions.interlaced = false; // Sin entrelazado

                // Guarda la capa como archivo PNG
                tempDoc.saveAs(saveFile, pngOptions, true, Extension.LOWERCASE);
                tempDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        }
        alert("Las capas han sido exportadas correctamente.");
    } else {
        alert("No se ha seleccionado ninguna carpeta de destino.");
    }

    // Restaura la unidad de medida original
    app.preferences.rulerUnits = originalRulerUnits;
} else {
    alert("No hay ningún documento abierto.");
}
