function pickerUpdaete() { 
    x = picker.position().left;
        y = picker.position().top;

        let posX = lerp(x, 0, gradientWidth, 0, 100)
        posX = posX.toFixed(0)

        let posY = lerp(y, 0, gradientHeight, 0, 100)
        posY = posY.toFixed(0)

        let start = getColor(posX, [rgb[0], rgb[1]])
        let end = getColor(posX, [rgb[2], rgb[3]])
        let mix = getColor(posY, [start, end])

        let str = "rgb(" + mix.join(",") + ")";
        inner.css("background", str);
        rgbEl.text('rgb: ' + mix);
 }