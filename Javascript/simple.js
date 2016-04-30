//
// Simple utility library.
//

WebLibSimple = {};

//
// Basic HTML creation.
//

WebLibSimple.createAnyAppend = function(type, parent)
{
    var div = document.createElement(type);
    parent.appendChild(div);

    return div;
}

WebLibSimple.createAny = function(type, left, top, right, bottom, id, parent)
{
    var div = document.createElement(type);
    div.style.position = "absolute";

    //
    // If value is null the property is not set at all, which
    // makes the element fit its content on that axis.
    //

    if (left   !== null) div.style.left   = WebLibSimple.addPixel(left);
    if (top    !== null) div.style.top    = WebLibSimple.addPixel(top);
    if (right  !== null) div.style.right  = WebLibSimple.addPixel(right);
    if (bottom !== null) div.style.bottom = WebLibSimple.addPixel(bottom);

    if (id) div.id = id;

    if (parent) parent.appendChild(div);

    return div;
}

WebLibSimple.createAnyWidth = function(type, leftorright, top, width, bottom, id, parent)
{
    var div = document.createElement(type);
    div.style.position = "absolute";

    //
    // If value is null the property is not set at all, which
    // makes the element fit its content on that axis.
    //

    if (top    !== null) div.style.top    = WebLibSimple.addPixel(top);
    if (bottom !== null) div.style.bottom = WebLibSimple.addPixel(bottom);

    if (width !== null)
    {
        if (WebLibSimple.isNumber(width))
        {
            if (width < 0)
            {
                div.style.right = WebLibSimple.addPixel(leftorright);
                div.style.width = WebLibSimple.addPixel(-width);
            }
            else
            {
                div.style.left = WebLibSimple.addPixel(leftorright);
                div.style.width = WebLibSimple.addPixel(width);
            }
        }
        else
        {
            //
            // Height could be "auto" on images.
            //

            div.style.left = WebLibSimple.addPixel(leftorright);
            div.style.width = WebLibSimple.addPixel(width);
        }
    }

    if (id) div.id = id;

    if (parent) parent.appendChild(div);

    return div;
}

WebLibSimple.createAnyHeight = function(type, left, toporbottom, right, height, id, parent)
{
    var div = document.createElement(type);
    div.style.position = "absolute";

    //
    // If value is null the property is not set at all, which
    // makes the element fit its content on that axis.
    //

    if (left  !== null) div.style.left  = WebLibSimple.addPixel(left);
    if (right !== null) div.style.right = WebLibSimple.addPixel(right);

    if (height !== null)
    {
        if (WebLibSimple.isNumber(height))
        {
            if (height < 0)
            {
                div.style.bottom = WebLibSimple.addPixel(toporbottom);
                div.style.height = WebLibSimple.addPixel(-height);
            }
            else
            {
                div.style.top = WebLibSimple.addPixel(toporbottom);
                div.style.height = WebLibSimple.addPixel(height);
            }
        }
        else
        {
            //
            // Height could be "auto" on images.
            //

            div.style.top = WebLibSimple.addPixel(toporbottom);
            div.style.height = WebLibSimple.addPixel(height);
        }
    }

    if (id) div.id = id;

    if (parent) parent.appendChild(div);

    return div;
}

WebLibSimple.createAnyWidHei = function(type, leftorright, toporbottom, width, height, id, parent)
{
    var div = document.createElement(type);
    div.style.position = "absolute";

    if (width !== null)
    {
        if (WebLibSimple.isNumber(width))
        {
            if (width < 0)
            {
                div.style.right = WebLibSimple.addPixel(leftorright);
                div.style.width = WebLibSimple.addPixel(-width);
            }
            else
            {
                div.style.left = WebLibSimple.addPixel(leftorright);
                div.style.width = WebLibSimple.addPixel(width);
            }
        }
        else
        {
            //
            // Height could be "auto" on images.
            //

            div.style.left = WebLibSimple.addPixel(leftorright);
            div.style.width = WebLibSimple.addPixel(width);
        }
    }

    if (height !== null)
    {
        if (WebLibSimple.isNumber(height))
        {
            if (height < 0)
            {
                div.style.bottom = WebLibSimple.addPixel(toporbottom);
                div.style.height = WebLibSimple.addPixel(-height);
            }
            else
            {
                div.style.top = WebLibSimple.addPixel(toporbottom);
                div.style.height = WebLibSimple.addPixel(height);
            }
        }
        else
        {
            //
            // Height could be "auto" on images.
            //

            div.style.top = WebLibSimple.addPixel(toporbottom);
            div.style.height = WebLibSimple.addPixel(height);
        }
    }

    if (id) div.id = id;

    if (parent) parent.appendChild(div);

    return div;
}

//
// Basic DIV creation.
//

WebLibSimple.createDiv = function(left, top, right, bottom, id, parent)
{
    return WebLibSimple.createAny("div", left, top, right, bottom, id, parent);
}

WebLibSimple.createDivWidth = function(left, top, width, bottom, id, parent)
{
    return WebLibSimple.createAnyWidth("div", left, top, width, bottom, id, parent);
}

WebLibSimple.createDivHeight = function(left, top, right, height, id, parent)
{
    return WebLibSimple.createAnyHeight("div", left, top, right, height, id, parent);
}

WebLibSimple.createDivWidHei = function(left, top, width, height, id, parent)
{
    return WebLibSimple.createAnyWidHei("div", left, top, width, height, id, parent);
}

//
// Basic IMG creation.
//

WebLibSimple.createImg = function(left, top, right, bottom, id, parent)
{
    return WebLibSimple.createAny("img", left, top, right, bottom, id, parent);
}

WebLibSimple.createImgWidth = function(left, top, width, bottom, id, parent)
{
    return WebLibSimple.createAnyWidth("img", left, top, width, bottom, id, parent);
}

WebLibSimple.createImgHeight = function(left, top, right, height, id, parent)
{
    return WebLibSimple.createAnyHeight("img", left, top, right, height, id, parent);
}

WebLibSimple.createImgWidHei = function(left, top, width, height, id, parent)
{
    return WebLibSimple.createAnyWidHei("img", left, top, width, height, id, parent);
}

//
// Image stuff.
//

WebLibSimple.setImageSource = function(img, source)
{
    if (img)
    {
        if (source)
        {
            //
            // Avoid reloading of image.
            //

            if (! (img.src && img.src.endsWith(source))) img.src = source;
        }
        else
        {
            img.src = WebLibSimple.getNixPixImg();
        }
    }
}

WebLibSimple.getNixPixImg = function()
{
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
}

//
// Basic SPAN creation.
//

WebLibSimple.createSpanPadded = function(left, top, right, bottom, id, parent)
{
    var span = document.createElement("span");

    if (left   !== null) span.style.paddingLeft   = WebLibSimple.addPixel(left);
    if (top    !== null) span.style.paddingTop    = WebLibSimple.addPixel(top);
    if (right  !== null) span.style.paddingRight  = WebLibSimple.addPixel(right);
    if (bottom !== null) span.style.paddingBottom = WebLibSimple.addPixel(bottom);

    if (id) span.id = id;

    if (parent) parent.appendChild(span);

    return span;
}

//
// Simplyfied style setters.
//

WebLibSimple.setDefaultBGColor = function(elem)
{
    WebLibSimple.setBGColor(elem, "#ffffffee");
}

WebLibSimple.getRGBColor = function(color)
{
    if ((color.length == 9) && (color.charAt(0) == "#"))
    {
        //
        // Hex color with alpha like android.
        //

        var a = parseInt(color.substring(1,3), 16) / 256.0;
        var r = parseInt(color.substring(3,5), 16);
        var g = parseInt(color.substring(5,7), 16);
        var b = parseInt(color.substring(7,9), 16);

        var rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")";

        return rgba;
    }

    return color;
}

WebLibSimple.setBGColor = function(elem, color)
{
    elem.style.backgroundColor = WebLibSimple.getRGBColor(color);
}

WebLibSimple.setFontSpecs = function(elem, size, weight, color)
{
    if (size) elem.style.fontSize = WebLibSimple.addPixel(size);
    if (weight) elem.style.fontWeight = weight;
    if (color) elem.style.color = WebLibSimple.getRGBColor(color);
}

//
// Number testers.
//

WebLibSimple.addPixel = function(value)
{
    return value + ((Number(value) === value) ? "px" : "");
}

WebLibSimple.isNumber = function(value)
{
    return (Number(value) === value);
}

WebLibSimple.isFloat = function(value)
{
    return (value === +value) && (value !== (value | 0));
}

WebLibSimple.isInteger = function(value)
{
    return (value === +value) && (value === (value | 0));
}

WebLibSimple.findTarget = function(target, targetid)
{
    while (target && (target.id != targetid))
    {
        target = target.parentElement;
    }

    return target;
}

WebLibSimple.substring = function(str, start, ende)
{
    if (start !== null && (ende === null))
    {
        if (start < 0) return str.substring(0, str.length + start);

        return str.substring(start);
    }

    if (ende < 0) return str.substring(start, str.length + ende);

    return str.substring(start, ende);
}

// WebLibSimple.createAnyTextNode = function(parent, type)
// {
//     var div = document.createTextNode(type);
//     parent.appendChild(div);
//
//     return div;
// }

WebLibSimple.createOption = function(select, value)
{
    // var option = WebLibSimple.createAnyAppend("option", select);
    // option.value = value;
    // var textNode = WebLibSimple.createAnyTextNode(option, node);
    //
    // return option;
    var option = document.createElement("option");
    option.text = value;
    select.add(option);

    return option;
}
