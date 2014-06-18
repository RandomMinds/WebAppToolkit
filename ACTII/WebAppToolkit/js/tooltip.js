/*
Tooltip - Tooltip help pop-up.
Copyright (C) 2005 by Gregory J Lamoree

This file is part of the Web Application Toolkit. 

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

// position of the tooltip relative to the mouse in pixel //
//var offsetx = 8;
//var offsety = 12;
var RMTTtoolTipTimmer = 0;

function RMTTaddLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
} 


function RMTTfindPos(obj) {
    var curleft = curtop = 0;

    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);

    }
    return [curleft, curtop];
}


function RMTTnewelement(newid) {
    if (document.createElement) {
        var el = document.createElement('div');
        el.id = newid;
        with (el.style) {
            display = 'none';
            position = 'absolute';
        }
        el.innerHTML = '&nbsp;';
        el.style.zIndex = "100001";
        document.body.appendChild(el);
    }
}

function RMTTmakeWarningIcon() {

    var icon = document.createElement('canvas');
    document.body.appendChild(icon);


    icon.id = 'warningicon';
    icon.setAttribute("class", "tooltipicon");
    icon.setAttribute("classname", "tooltipicon");
    var iconCanvas = icon;
    if (typeof G_vmlCanvasManager !== 'undefined') {
        iconCanvas = G_vmlCanvasManager.initElement(icon);
    }

    var context = iconCanvas.getContext("2d");


    // Dimensions of the triangle
    var width = 43;
    var height = 35;
    var padding = 10;
    var lineWidth = 2;

    // Create a triangluar path
    context.beginPath();
    context.moveTo(padding + width / 2, padding);
    context.lineTo(padding + width, height + padding);
    context.lineTo(padding, height + padding);
    context.closePath();

    // Create fill gradient
    var primaryColor = "#ffc821";
    var secondaryColor = "#faf100";

    var gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, secondaryColor);

    // Add a shadow around the object
    context.shadowBlur = 10;
    context.shadowColor = "black";

    // Stroke the outer outline
    context.lineWidth = lineWidth * 2;
    context.lineJoin = "round";
    context.strokeStyle = gradient;
    context.stroke();

    // Turn off the shadow, or all future fills will have shadows
    context.shadowColor = "transparent";

    // Fill the path
    context.fillStyle = gradient;
    context.fill();


    // Stroke the inner outline
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.strokeStyle = "#333";
    context.stroke();

    // Draw the text exclamation point
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold " + (width / 1.6) + "px 'Times New Roman', Times, serif";
    context.fillStyle = "#333";
    try {
        context.fillText("!", padding + width / 2, (padding + height / 2) + 4);
    } catch (ex) { }

    return icon;
}

function RMTTmakeHelpIcon() {

    var icon = document.createElement('canvas');
    document.body.appendChild(icon);


    icon.id = 'helpicon';
    icon.setAttribute("class", "tooltipicon");
    icon.setAttribute("classname", "tooltipicon");
    var iconCanvas = icon;
    if (typeof G_vmlCanvasManager !== 'undefined') {
        iconCanvas = G_vmlCanvasManager.initElement(icon);
    }

    var context = iconCanvas.getContext("2d");


    // Dimensions of the circle
    var width = 43;
    var height = 43;
    var padding = 10;
    var lineWidth = 2;

    // Create a Circle
    context.beginPath();

    context.arc((width / 2) + padding, (height / 2) + padding, height / 2, 0, Math.PI * 2, true);

    context.closePath();

    // Create fill gradient
    var primaryColor = "#4169E1";
    var secondaryColor = "#002288";

    var gradient = context.createRadialGradient((width / 2) + padding, (height / 2) + padding, height / 10, (width / 2) + padding, (height / 2) + padding, (height / 2) + padding);
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, secondaryColor);

    // Add a shadow around the object
    context.shadowBlur = 10;
    context.shadowColor = "black";

    // Stroke the outer outline
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.strokeStyle = gradient;
    context.stroke();

    // Turn off the shadow, or all future fills will have shadows
    context.shadowColor = "transparent";

    // Fill the path
    context.fillStyle = gradient;
    context.fill();


    // Stroke the inner outline
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.strokeStyle = "#fff";
    context.stroke();

    // Draw the text exclamation point
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold " + (width / 1.3) + "px 'Arial', 'sans-serif', sans-serif";
    context.fillStyle = "#fff";
    try {
        context.fillText("?", padding + width / 2, (padding + height / 2));
    } catch (ex) { }

    return icon;
}

function RMTTmakeInformationIcon() {

    var icon = document.createElement('canvas');
    document.body.appendChild(icon);


    icon.id = 'helpicon';
    icon.setAttribute("class", "tooltipicon");
    icon.setAttribute("classname", "tooltipicon");
    var iconCanvas = icon;
    if (typeof G_vmlCanvasManager !== 'undefined') {
        iconCanvas = G_vmlCanvasManager.initElement(icon);
    }

    var context = iconCanvas.getContext("2d");


    // Dimensions of the circle
    var width = 43;
    var height = 43;
    var padding = 10;
    var lineWidth = 2;

    // Create a Circle
    context.beginPath();

    context.arc((width / 2) + padding, (height / 2) + padding, height / 2, 0, Math.PI * 2, true);

    context.closePath();

    // Create fill gradient
    var primaryColor = "#176117";
    var secondaryColor = "#228B22";

    var gradient = context.createRadialGradient((width / 2) + padding, (height / 2) + padding, height / 10, (width / 2) + padding, (height / 2) + padding, (height / 2) + padding);
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, secondaryColor);

    // Add a shadow around the object
    context.shadowBlur = 10;
    context.shadowColor = "black";

    // Stroke the outer outline
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.strokeStyle = gradient;
    context.stroke();

    // Turn off the shadow, or all future fills will have shadows
    context.shadowColor = "transparent";

    // Fill the path
    context.fillStyle = gradient;
    context.fill();


    // Stroke the inner outline
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.strokeStyle = "#fff";
    context.stroke();

    // Draw the text exclamation point
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold " + (width / 1.3) + "px 'Arial', 'sans-serif', sans-serif";
    context.fillStyle = "#fff";
    try {
        context.fillText("i", padding + width / 2, (padding + height / 2));
    } catch (ex) { }

    return icon;
}

function RMTTmakeCriticalIcon() {

    var icon = document.createElement('canvas');
    document.body.appendChild(icon);


    icon.id = 'helpicon';
    icon.setAttribute("class", "tooltipicon");
    icon.setAttribute("classname", "tooltipicon");
    var iconCanvas = icon;
    if (typeof G_vmlCanvasManager !== 'undefined') {
        iconCanvas = G_vmlCanvasManager.initElement(icon);
    }

    var context = iconCanvas.getContext("2d");

    // Dimensions of the Octigon
    var width = 43;
    var height = 43;
    var padding = 10;
    var lineWidth = 2;

    // Create an Octigon
    var numberOfSides = 8,
    size = 24,
    Xcenter = size + 5,
    Ycenter = size + 5;

    context.translate(Xcenter, Ycenter);
    context.rotate((360 / (numberOfSides * 2)) * (Math.PI / 180));
    context.translate(-Xcenter, -Ycenter);

    context.beginPath();
    context.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (var i = 1; i <= numberOfSides; i += 1) {
        context.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    context.strokeStyle = "#000000";
    context.lineWidth = 1;
    context.stroke();

    
    // Create fill gradient
    var primaryColor = "#800000";
    var secondaryColor = "#FF0000";

    var gradient = context.createRadialGradient((width / 2) + padding, (height / 2) + padding, height / 10, (width / 2) + padding, (height / 2) + padding, (height / 2) + padding);
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(1, secondaryColor);

    // Add a shadow around the object
    context.shadowBlur = 10;
    context.shadowColor = "black";

    // Stroke the outer outline
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.strokeStyle = gradient;
    context.stroke();

    // Turn off the shadow, or all future fills will have shadows
    context.shadowColor = "transparent";

    // Fill the path
    context.fillStyle = gradient;
    context.fill();


    // Stroke the inner outline
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.strokeStyle = "#fff";
    context.stroke();

    // Draw the text exclamation point
    //context.textAlign = "center";
    //context.textBaseline = "middle";
    //context.font = "bold " + (width / 1.3) + "px 'Arial', 'sans-serif', sans-serif";
    //context.fillStyle = "#fff";
    //try {
    //    context.fillText("?", padding + width / 2, (padding + height / 2));
    //} catch (ex) { }

    

    return icon;
}




function RMTTgetmouseposition(e) {
    // position of the tooltip relative to the mouse in pixel //
    var offsetx = 8;
    var offsety = 12;

    var ie5 = (document.getElementById && document.all);
    var ns6 = (document.getElementById && !document.all);
    var ua = navigator.userAgent.toLowerCase();
    var isapple = (ua.indexOf('applewebkit') != -1 ? 1 : 0);

    if (document.getElementById) {
        var iebody = (document.compatMode &&
                        document.compatMode != 'BackCompat') ?
                            document.documentElement : document.body;
        pagex = (isapple == 1 ? 0 : (ie5) ? iebody.scrollLeft : window.pageXOffset);
        pagey = (isapple == 1 ? 0 : (ie5) ? iebody.scrollTop : window.pageYOffset);
        mousex = (ie5) ? event.x : (ns6) ? clientX = e.clientX : false;
        mousey = (ie5) ? event.y : (ns6) ? clientY = e.clientY : false;

        var winWidth, winHeight;
        if (self.innerHeight) // all except Explorer
        {
            winWidth = self.innerWidth;
            winHeight = self.innerHeight;
        }
        else if (document.documentElement && document.documentElement.clientHeight)
        // Explorer 6 Strict Mode
        {
            winWidth = document.documentElement.clientWidth;
            winHeight = document.documentElement.clientHeight;
        }
        else if (document.body) // other Explorers
        {
            winWidth = document.body.clientWidth;
            winHeight = document.body.clientHeight;
        }

        var lixlpixel_tooltip = document.getElementById('tooltip');
        if (mousex > (winWidth / 2)) {
            lixlpixel_tooltip.style.left = (mousex - pagex - (offsetx / 2) - lixlpixel_tooltip.offsetWidth) + 'px';
        } else {
            lixlpixel_tooltip.style.left = (mousex + pagex + offsetx) + 'px';
        }
        if (mousey > (winHeight / 2)) {
            lixlpixel_tooltip.style.top = (mousey - pagey - (offsety / 2) - lixlpixel_tooltip.offsetHeight) + 'px';
        } else {
            lixlpixel_tooltip.style.top = (mousey + pagey + offsety) + 'px';
        }
    }
}
function RMTTtooltip(tipObject) {
    var tip = tipObject.getAttribute('tooltip');
    var tipType = tipObject.getAttribute('tooltiptype');
    if (!document.getElementById('tooltip')) RMTTnewelement('tooltip');
    var lixlpixel_tooltip = document.getElementById('tooltip');

    var tooltipHeading = null;
    var tooltipIcon = null;
    switch (tipType) {
        case "warning":
            lixlpixel_tooltip.setAttribute("class", "ttwarning");
            lixlpixel_tooltip.setAttribute("className", "ttwarning");
            tooltipIcon = RMTTmakeWarningIcon();
            tooltipHeading = document.createElement("em");
            tooltipHeading.innerText = "Warning";
            break;
        case "critical":
            lixlpixel_tooltip.setAttribute("class", "ttcritical");
            lixlpixel_tooltip.setAttribute("className", "ttcritical");
            tooltipIcon = RMTTmakeCriticalIcon();
            tooltipHeading = document.createElement("em");
            tooltipHeading.innerText = "Error";
            break;
        case "help":
            lixlpixel_tooltip.setAttribute("class", "tthelp");
            lixlpixel_tooltip.setAttribute("className", "tthelp");
            tooltipIcon = RMTTmakeHelpIcon();
            tooltipHeading = document.createElement("em");
            tooltipHeading.innerText = "Help";
            break;
        case "information":
            lixlpixel_tooltip.setAttribute("class", "ttinfo");
            lixlpixel_tooltip.setAttribute("className", "ttinfo");
            tooltipIcon = RMTTmakeInformationIcon();
            tooltipHeading = document.createElement("em");
            tooltipHeading.innerText = "Information";
            break;
        case "classic":
        default:
            lixlpixel_tooltip.setAttribute("class", "ttclassic");
            lixlpixel_tooltip.setAttribute("className", "ttclassic");
            
    }


    //tipObject.appendChild(lixlpixel_tooltip.parentNode.removeChild(lixlpixel_tooltip));

    lixlpixel_tooltip.innerHTML = tip;
    var tipText = lixlpixel_tooltip.firstChild;
    if (tooltipIcon) lixlpixel_tooltip.insertBefore(tooltipIcon, tipText);
    if(tooltipHeading) lixlpixel_tooltip.insertBefore(tooltipHeading, tipText);

    //tooltipIcon.style.display = "block";
    lixlpixel_tooltip.style.display = 'block';

    var winWidth, winHeight;
    if (self.innerHeight) // all except Explorer
    {
        winWidth = self.innerWidth;
        winHeight = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight)
    // Explorer 6 Strict Mode
    {
        winWidth = document.documentElement.clientWidth;
        winHeight = document.documentElement.clientHeight;
    }
    else if (document.body) // other Explorers
    {
        winWidth = document.body.clientWidth;
        winHeight = document.body.clientHeight;
    }

    var objPos = RMTTfindPos(tipObject);

    var lixlpixel_tooltip = document.getElementById('tooltip');
    if (tipObject.offsetLeft > (winWidth / 2)) {
        lixlpixel_tooltip.style.left = ((lixlpixel_tooltip.offsetWidth * -1) + objPos[0] + tipObject.offsetWidth) + 'px';
    } else {
        lixlpixel_tooltip.style.left = objPos[0] + 'px';
    }
    if (tipObject.offsetTop > (winHeight / 2)) {
        lixlpixel_tooltip.style.top = ((lixlpixel_tooltip.offsetHeight + 8) * -1) + objPos[1] + 'px';
    } else {
        lixlpixel_tooltip.style.top = objPos[1] + (tipObject.offsetHeight + 8) + 'px';
    }

    /*
    RMTTgetmouseposition();
    document.onmousemove = RMTTgetmouseposition;
    */
}
function RMTTexit() {
    try {
        document.getElementById('tooltip').style.display = 'none';
    } catch (e) { }
}

function RMTTsetTooltipTimer(tipObject) {
    RMTTtoolTipTimmer = setTimeout(function () { RMTTtooltip(tipObject) }, 500);
}

function RMTTexitTooltipTimer() {
    clearTimeout(RMTTtoolTipTimmer);
    RMTTexit();
}


function RMTTsetTooltips(theElement) {
    for (var i = 0; i < theElement.childNodes.length; i++) {
        RMTTsetTooltips(theElement.childNodes[i]);
    }
    try {
        if (theElement.getAttribute('tooltip')) {
            //theElement.style.borderBottom = '1px solid #eee';
            /*
            theElement.onmouseover = tooltip;
            theElement.onmouseout = exit;
            */
            theElement.onmouseover = function () { RMTTsetTooltipTimer(theElement) };
            theElement.onmouseout = RMTTexitTooltipTimer;
            //alert(theElement.getAttribute('tooltip'));
        }
    } catch (e) { }
}

RMTTaddLoadEvent(function () { RMTTsetTooltips(document.body) });