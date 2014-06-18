/*
Baseline - Baseline code for HTML applications.
Copyright (C) 2009 by Gregory J Lamoree

This file is part of the Web Application Toolkit. 

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULARP URPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
var RMBLCache = new Object();

window.onerror = function (err, file, line) {
    alert('The following error occured: ' + err + '\n' +
'In file: ' + file + '\n' +
'At line: ' + line);
    return true;
}


function RMBClone(theObject) {
    var newObj = (theObject instanceof Array) ? [] : {};
    for (i in theObject) {
        //if (i == 'clone') continue;
        if (theObject[i] && typeof theObject[i] == "object") {
            newObj[i] = RMBClone(theObject);
        } else newObj[i] = theObject[i]
    } return newObj;
}

// Development Drag Drop Functions

var RMDevMode = false;

document.onkeydown = function (e) {
    // ctrl-d
    if (e.ctrlKey && e.keyCode === 68) {
        //alert(e.keyCode);
        RMDevMode = !RMDevMode;
        return false;
    }
};

function RMBLGUID() {
    return UUID.create();

    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
         return v.toString(16);
    });     
    return guid;
};

function RMBLgetMousePos(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
    }
    // posx and posy contain the mouse position relative to the document
    // Do something with this information}
    return { x: posx, y: posy };
}

function RMBLdragDefine(ev) {
    if (!RMDevMode) { return false; }
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("text/plain", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
}

function RMBLdragOver(ev) {
    // Turn off the default behaviour i.e. allow the drop
    if (RMDevMode) {
        ev.preventDefault();
    }
}

function RMBLdragDrop(ev) {
    if (!RMDevMode) { return false; }
    //alert(ev.target.nextSibling.getAttribute("class"));
    // Get the id of the item being dragged
    var idDrag = ev.dataTransfer.getData("Text");
    var theSource = document.getElementById(idDrag);
    var theTarget = ev.target;
    try {
        while (theTarget.getAttribute("droptype") != theSource.getAttribute("droptype")) {
            theTarget = theTarget.parentNode;
        }
    }
    catch (e) {
        // Figure out what to do when the drop is on an inelegable area.
        return;
    }

    // Put the dragged item after the item it is currently over
    if (theTarget.nextSibling === null) {
        theTarget.parentNode.appendChild(document.getElementById(idDrag));
    } else {
        theTarget.parentNode.insertBefore(document.getElementById(idDrag), theTarget.nextSibling);
    }
    //ev.target.appendChild(document.getElementById(idDrag));
    // Turn off the default behaviour 
    ev.preventDefault();
    
}

function RMBLsetDevOptions(target, type) {
    target.setAttribute("droptype", type);
    target.setAttribute("draggable", "true");
    target.setAttribute("ondragstart", "return RMBLdragDefine(event)");
    target.setAttribute("ondragOver", "RMBLdragOver(event)");
    target.setAttribute("ondrop", "RMBLdragDrop(event,\"" + type + "\")");
}


//////////////////////////////////


/* 
* Create HTML5 elements for IE's sake
*/

document.createElement("article");
document.createElement("footer");
document.createElement("header");
document.createElement("hgroup");
document.createElement("nav");

var RMBLCurrentWorkflow = new Array();
var RMBLAppData = new Object();

function RMBLaddLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
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

function RMBLaddScrollEvent(func) {
    var oldonscroll = window.onscroll;
    if (typeof window.onscroll !== 'function') {
        window.onscroll = func;
    } else {
        window.onscroll = function () {
            if (oldonscroll) {
                oldonscroll();
            }
            func();
        }
    }
}

// Not for generic use
function RMBLaddResizeEvent(func, labelSpan, firstField) {
    var oldonresize = window.onresize;
    if (typeof window.onresize !== 'function') {
        window.onresize = func;
    } else {
        window.onresize = function () {
            if (oldonresize) {
                oldonresize(labelSpan, firstField);
            }
            func(labelSpan, firstField);
        }
    }
}

function RMBLaddResizeObjectEvent(func) {
    var oldonresize = window.onresize;
    if (typeof window.onresize !== 'function') {
        window.onresize = func;
    } else {
        window.onresize = function () {
            if (oldonresize) {
                oldonresize();
            }
            func();
        }
    }
}

function RMBLaddBasicOnClick(theElement, func) {
    var oldonclick = theElement.onclick;
    if (typeof theElement.onclick !== 'function') {
        theElement.onclick = func;
    } else {
        theElement.onclick = function () {
            if (oldonclick) {
                return oldonclick();
            }
            return func();
        }
    }
}

function RMBLparseAttributes(theElement) {
    try {
        for (var i = 0; i < theElement.childNodes.length; i++) {
            RMBLparseAttributes(theElement.childNodes[i]);
        }
    } catch (e) { }

    try {
        if (theElement.getAttribute('search') != '' && theElement.getAttribute('search') != null) {
            if (theElement.getAttribute('searchresultstree') != '' && theElement.getAttribute('searchresultstree') != null) {
                RMBLaddBasicOnClick(theElement, function () { return searchRecordsTree(theElement.form, theElement.getAttribute('searchresultstree'), theElement.getAttribute('action')); });
            } else {
                if (theElement.getAttribute('auto') == "true") { // this must be an auto search
                    //searchRecordsList(theElement.form, theElement.getAttribute('searchresults'), "", theElement.getAttribute('action'));
                } // else {
                RMBLaddBasicOnClick(theElement, function () { return searchRecordsList(theElement.form, theElement.getAttribute('searchresults'), "", theElement.getAttribute('action')); });
                //}
            }
        }
        if (theElement.getAttribute('loadform') != '' && theElement.getAttribute('loadform') != null) {
            RMBLaddBasicOnClick(theElement, function () { RMBLCurrentWorkflow.push(RMBLfindPanel(theElement)); return LoadForm(theElement.getAttribute('loadform'), theElement.getAttribute('dataurl'), theElement.getAttribute('datakey'), ""); });
        }
        if (theElement.getAttribute('removedetails') != '' && theElement.getAttribute('removedetails') != null) {
            RMBLaddBasicOnClick(theElement, function () { removeDetails(document.getElementById(theElement.getAttribute('removedetails')), ""); return true; });
        }
        if (theElement.getAttribute('moveelementsfrom') != '' && theElement.getAttribute('moveelementsfrom') != null) {
            RMBLaddBasicOnClick(theElement, function () { RMBLCurrentWorkflow.pop(); addFormDetails(document.getElementById(theElement.getAttribute('moveelementsfrom')), "", document.getElementById(theElement.getAttribute('addelementsto')), RMBLfindPanel(document.getElementById(theElement.getAttribute('addelementsto')))); return true; });
        }
        if (theElement.getAttribute('cancelto') != '' && theElement.getAttribute('cancelto') != null) {
            RMBLaddBasicOnClick(theElement, function () { RMBLCurrentWorkflow.pop(); return LoadForm(theElement.getAttribute('cancelto'), "", "cancel", ""); });
        }
        /*
        if (theElement.getAttribute('submitto') != '' && theElement.getAttribute('submitto') != null) {
        theElement.form.onsubmit = "return false;";
        RMBLaddBasicOnClick(theElement, function () { return SubmitForm(theElement.form, theElement.getAttribute('submitto'), theElement.getAttribute('value')); });
        }
        */
        if (theElement.getAttribute('type') == 'button' && theElement.getAttribute('class') == "field-button" && theElement.getAttribute('elementbutton') != "true" && !theElement.getAttribute('nextpath')) {
            //alert(theElement.value + ": " + theElement.getAttribute('nextpath') + ", " + theElement.getAttribute('elementbutton'));
            if (theElement.getAttribute('action').toUpperCase() == "SAVE") {
                theElement.form.setAttribute('submitto', theElement.getAttribute('submitto'));
                theElement.form.setAttribute('submitvalue', theElement.getAttribute('action'));
            }
            theElement.form.onsubmit = "return false;";

            RMBLaddBasicOnClick(theElement, function () {
                //alert("Hello");
                //RMBLCurrentWorkflow.push(RMBLfindPanel(theElement)); 
                return SubmitForm(theElement.form, theElement.getAttribute('submitto'), theElement.getAttribute('action'));
            });
        }
        if (theElement.getAttribute('type') == 'button' && theElement.getAttribute('class') == "field-button" && theElement.getAttribute('elementbutton') != "true" && theElement.getAttribute('nextpath')) {
            //alert(theElement.value + ": " + theElement.getAttribute('nextpath') + ", " + theElement.getAttribute('elementbutton'));
            if (theElement.getAttribute('action').toUpperCase() == "SAVE") {
                theElement.form.setAttribute('submitto', theElement.getAttribute('submitto'));
                theElement.form.setAttribute('submitvalue', theElement.getAttribute('action'));
            }
            theElement.form.onsubmit = "return false;";
            RMBLaddBasicOnClick(theElement, function () {
                var nextpath = JSON.parse(theElement.getAttribute("nextpath"));
                for (panel in nextpath) {
                    if (eval((nextpath[panel]).test)) {
                        var nextKey = "";
                        if ((nextpath[panel]).key != "") {


                            if (Object.prototype.toString.apply((nextpath[panel]).key) === '[object Array]') {
                                nextKey = new Array();
                                for (keyElement in (nextpath[panel]).key) {
                                    nextKey.push(document.getElementById((nextpath[panel]).key[keyElement]).value);
                                }
                            } else {
                                nextKey = document.getElementById((nextpath[panel]).key).value;
                            }
                        }
                        var keepGoing = true;
                        if ((nextpath[panel]).save == "panel") {
                            keepGoing = SubmitForm(theElement.form, theElement.getAttribute('submitto'), theElement.getAttribute('action'));
                        }
                        if ((nextpath[panel]).save == "workflow") {
                            RMBLCurrentWorkflow.push(RMBLfindPanel(theElement));
                            var holdRMBLCurrentWorkflow = RMBLCurrentWorkflow.slice(0);
                            for (worflowPanel in RMBLCurrentWorkflow) {
                                var workflowForm = document.getElementById(RMBLCurrentWorkflow[worflowPanel] + "Form");
                                if (workflowForm != null && workflowForm.getAttribute("submitvalue") != null) {
                                    keepGoing = SubmitForm(workflowForm, workflowForm.getAttribute('submitto'), workflowForm.getAttribute('submitvalue'));
                                    holdRMBLCurrentWorkflow.splice(worflowPanel, 1);
                                    if (!keepGoing) {
                                        RMMChangePage(RMBLCurrentWorkflow[worflowPanel]);
                                        RMBLCurrentWorkflow = holdRMBLCurrentWorkflow;
                                        break;
                                    }
                                }
                            }
                            RMBLCurrentWorkflow.pop();
                        }
                        if (keepGoing) {
                            if ((nextpath[panel]).end == "true") {
                                RMBLCurrentWorkflow = new Array();
                            } else {
                                RMBLCurrentWorkflow.push(RMBLfindPanel(theElement));
                            }
                            LoadForm((nextpath[panel]).panel, "", nextKey, "");

                            return true;
                        } else {
                            return false;
                        }
                    }
                }
                return false;
            });
        }
        if (theElement.getAttribute('menuid') != '' && theElement.getAttribute('menuid') != null) {
            RMBbuildMenu(theElement);
        }
        
    } catch (e) {
        //alert(e.line + "\n\n" + e.description);
        //var trace = printStackTrace();
        //Output however you want!
        //alert(e.description + "\n\n" + trace.join('\n\n'));

    }
    
}

function RMBLfindPanel(theElement) {
    var thePanel = "";

    try {
        var theClass;

        if (theElement.getAttribute('className')) {
            theClass = theElement.getAttribute("className");
        } else {
            theClass = theElement.getAttribute("class");
        }

        if (theClass.indexOf("panel") != -1) {
            thePanel = theElement.id;
        }
    } catch (e) { }

    if (thePanel == "") {
        try {
            thePanel = RMBLfindPanel(theElement.parentNode);
        } catch (e) { }
    }

    return thePanel;
}

function RMBLloadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        //var script = loadFile("/" + filename);
        var script = loadFile(filename);
        window.eval(script);
        /*
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
        */
        alert(appDef);
    }
    else if (filetype == "css") { //if filename is an external CSS file
        if (document.createStyleSheet) {
            //document.createStyleSheet("/" + filename);
            document.createStyleSheet(filename);
            /*
            var theStyle = loadFile("/" + filename);

            var head = document.getElementsByTagName('head')[0];
            var style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
            style.styleSheet.cssText = theStyle;
            } else {
            style.appendChild(document.createTextNode(theStyle));
            }
            head.appendChild(style);
            */
        }
        else {
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            //fileref.setAttribute("href", "/" + filename)
            fileref.setAttribute("href", filename)

        }

    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}


function RMBcreateBase() {
    //alert(RMBLfindPanel.toString());
    //alert(JSON.stringify(mainMenu));

    var appData;
    appData = loadJSON("", "appDef", "definition", "").data;
    // just here to allow dummy test data
    //var dataString = eval("appDef");
    //appData = jsonParse(dataString);

    var theHead = document.getElementsByTagName('head')[0];
    var title = document.createElement('title');
    title.innerText = appData.Name;
    theHead.appendChild(title);

    var theBody = document.getElementsByTagName("body")[0];

    setTimeout(function () {
        var theBody = document.getElementsByTagName("body")[0];
        var theProgress = document.createElement("div");
        theProgress.id = "RMBLprogress";
        theProgress.style.display = "block";
        theProgress.style.position = "fixed";
        var progressText = document.createTextNode("Loading...");
        theProgress.appendChild(progressText);

        theBody.appendChild(theProgress);

    }, 1);


    var theBody = document.getElementsByTagName("body")[0];
    var theSaveSuccess = document.createElement("div");
    theSaveSuccess.id = "RMBLSaveSuccess";
    theSaveSuccess.style.display = "none";
    theSaveSuccess.style.position = "fixed";
    var saveSuccessText = document.createTextNode("Save Successfull");
    theSaveSuccess.appendChild(saveSuccessText);
    theBody.appendChild(theSaveSuccess);

    var theAccessDenied = document.createElement("div");
    theAccessDenied.id = "RMBLAccessDenied";
    theAccessDenied.style.display = "none";
    theAccessDenied.style.position = "fixed";
    var accessDeniedText = document.createTextNode("Access Denied");
    theAccessDenied.appendChild(accessDeniedText);
    theBody.appendChild(theAccessDenied);


    var theHeader = document.createElement("header");
    var theHeaderGraphicDiv = document.createElement("div");
    theHeaderGraphicDiv.id = "headerGraphic";

    var theHeaderGraphic = document.createElement("img");
    theHeaderGraphic.src = "custom/images/logosmall.png"
    theHeaderGraphic.style.float = "right";
    theHeaderGraphic.style.styleFloat = "right";
    theHeaderGraphic.style.cssFloat = "right";
    theHeaderGraphic.style.margin = "10px";
    theHeaderGraphicDiv.appendChild(theHeaderGraphic);

    var pageTitle = document.createElement("h1");
    pageTitle.innerHTML = appData.Name;
    theHeaderGraphicDiv.appendChild(pageTitle);

    theHeader.appendChild(theHeaderGraphicDiv);

    var resizeFunc = function () {

        if (RMMwindowWidth <= RMM5Height && !RMM5Sized) {
            RMMchangecss(".field-text", "-webkit-border-radius", "10px");
            RMMchangecss(".field-text", "font-size", "105%");
            //RMMchangecss(".panel", "font-size", "110%");
            RMMchangecss(".field-textarea", "-webkit-border-radius", "10px");
            RMMchangecss(".field-select", "-webkit-border-radius", "10px");
            RMMchangecss(".field-select", "font-size", "110%");
            RMMchangecss(".panel div", "font-size", "130%");
            RMMchangecss(".panel div > div", "font-size", "100%");
            RMMchangecss(".panel span > div", "font-size", "100%");
            RMMchangecss(".panel", "padding-left", "0px");
            //RMMchangecss("input", "max-width", (RMMwindowWidth) + "px");


            //RMMchangecss(".infoBox", "width", "250px");
            RMMchangecss(".infoBox", "height", "50px");
            RMMchangecss(".infoBox", "border-style", "none");
            RMMchangecss(".infoBox", "display", "inline");
            RMMchangecss(".infoBox", "*display", "inline");
            //RMMchangecss(".infoBox", "position", "relative");
            RMMchangecss(".infoBoxHeading", "margin-bottom", "10px");
            RMMchangecss(".infoBoxHeading", "font-size", "180%");

            RMMchangecss("#home", "text-align", "center");

            RMMchangecss(".infoBoxDetail", "display", "none");

            RMMchangecss(".infoBoxHeading", "webkit-border-radius", "24px");
            RMMchangecss(".infoBoxHeading", "moz-border-radius", "24px");
            RMMchangecss(".infoBoxHeading", "border-radius", "24px");

            RMMchangecss(".infoBoxHeading", "moz-box-shadow", "0px -2px 2px #222");
            RMMchangecss(".infoBoxHeading", "webkit-box-shadow", "0px -2px 2px #222");
            RMMchangecss(".infoBoxHeading", "box-shadow", "0px -2px 2px #222");


            RMMchangecss(".paneltitle", "display", "none");

            RMMchangecss(".field-button", "-webkit-border-radius", "10px");
            RMMchangecss(".field-button", "font-size", "130%");

            RMMchangecss(".fieldGroup", "margin-left", "0px");
            RMMchangecss(".fieldGroup", "margin-right", "0px");
            RMMchangecss(".fieldGroup", "margin-bottom", "0px");
            RMMchangecss(".fieldGroup", "white-space", "wrap");


            RMM5Sized = true;
            // Minus 20 is to account for IE's disappearing scroll bar.
        } else if ((RMMwindowWidth - 20) > RMM5Height && RMM5Sized) {
            RMMchangecss(".field-text", "-webkit-border-radius", "0px");
            RMMchangecss(".field-text", "font-size", "100%");
            //RMMchangecss(".panel", "font-size", "110%");
            RMMchangecss(".field-textarea", "-webkit-border-radius", "0px");
            RMMchangecss(".field-select", "-webkit-border-radius", "0px");
            RMMchangecss(".field-select", "font-size", "100%");
            RMMchangecss(".panel div", "font-size", "100%");
            RMMchangecss(".panel", "padding-left", "220px");
            //RMMchangecss("input", "max-width", (RMMwindowWidth) + "px");


            //RMMchangecss(".infoBox", "width", "250px");
            RMMchangecss(".infoBox", "height", "200px");
            RMMchangecss(".infoBox", "border-style", "solid");
            RMMchangecss(".infoBox", "display", "inline-block");
            RMMchangecss(".infoBox", "*display", "inline-block");
            //RMMchangecss(".infoBox", "position", "relative");
            RMMchangecss(".infoBoxHeading", "margin-bottom", "0px");

            RMMchangecss("#home", "text-align", "center");

            RMMchangecss(".infoBoxDetail", "display", "inline-block");

            RMMchangecss(".infoBoxHeading", " webkit-border-radius", "0px");
            RMMchangecss(".infoBoxHeading", "moz-border-radius", "0px");
            RMMchangecss(".infoBoxHeading", "border-radius", "0px");

            RMMchangecss(".infoBoxHeading", "moz-box-shadow", "0px");
            RMMchangecss(".infoBoxHeading", "webkit-box-shadow", "0px");
            RMMchangecss(".infoBoxHeading", "box-shadow", "0px");


            RMMchangecss(".paneltitle", "display", "inline-block");

            RMMchangecss(".infoBoxHeading", "font-size", "25px");

            RMMchangecss("h3 input", "font-size", "14px");

            RMMchangecss(".field-button", "-webkit-border-radius", "0px");
            RMMchangecss(".field-button", "font-size", "100%");


            RMMchangecss(".fieldGroup", "margin-left", "10px");
            RMMchangecss(".fieldGroup", "margin-right", "10px");
            RMMchangecss(".fieldGroup", "margin-bottom", "5px");
            RMMchangecss(".fieldGroup", "white-space", "nowrap");



            RMM5Sized = false;
        }


        var theHeader = document.getElementsByTagName("header")[0];
        if (RMMwindowHeight <= RMM10Height && !RMM10Sized) {
            theHeader.style.display = "none";
            //document.getElementsByTagName("body")[0].style.zoom = "80%";
            //document.getElementsByTagName("body")[0].style.width = "130%";
            RMM10Sized = true;
        } else if (RMMwindowHeight > RMM10Height && RMM10Sized) {
            theHeader.style.display = "block";
            //document.getElementsByTagName("body")[0].style.zoom = "100%";
            RMM10Sized = false;
        }



    };

    RMBLaddResizeObjectEvent(resizeFunc);
    //RMBLaddLoadEvent(resizeFunc);
    //resizeFunc(theHeader);

    theBody.appendChild(theHeader);
    window.onresize();
    //resizeFunc();

    if (typeof appData.access != "undefined" && !RMBLallowAccess(appData.access)) {
        setTimeout(function () {
            document.getElementById("RMBLprogress").style.display = "none";
        }, 2);
        RMBLhideMessage();
        theAccessDenied.style.display = "block";
        return;
    }


    var theMainPage = document.createElement("div");
    theMainPage.id = "mainPage";

    var navigation = document.createElement("nav");
    navigation.setAttribute("url", "");
    navigation.setAttribute("menuid", "mainMenu");
    theMainPage.appendChild(navigation);
    var theHomePage = document.createElement("div");
    theHomePage.id = "home";
    theHomePage.setAttribute("class", "panel");
    theHomePage.setAttribute("className", "panel");

    //alert("Baseline B " + RMIMgetcssvalue(".field-text","font-size")); 
    RMBSetMenuSpacer(theHomePage, appData.Name, theHomePage);
    /*
    if(RMMismobile()) {
    RMBSetMenuSpacer(theHomePage, appData.Name, theHomePage);
    RMMchangecss(".field-text","-webkit-border-radius","10px");
    RMMchangecss(".field-text","font-size","22px");
    //alert("Font Size A " + parseInt(RMIMgetcssvalue(".field-text","font-size")));
    //RMMchangecss("input[type=\"text\"]{","height","42px");
    RMMchangecss(".field-textarea","-webkit-border-radius","10px");
    //RMMchangecss(".field-textarea","font-size","24px");
    RMMchangecss(".field-select","-webkit-border-radius","10px");
    RMMchangecss(".field-select","font-size","22px");
    RMMchangecss(".field-button","-webkit-border-radius","10px");
    RMMchangecss(".field-button","font-size","14px");
                    
    RMMchangecss(".panel div, .panel fieldset","font-size","22px");
    //RMMchangecss(".infoBox","font-size","98%");
    }
    */
    //alert("Baseline C " + RMIMgetcssvalue(".field-text","font-size")); 

    var homePageDescription = document.createElement("div");
    homePageDescription.style.textAlign = "center";
    //homePageDescription.style.fontSize = "105%";
    homePageDescription.style.fontWeight = "bold";
    homePageDescription.style.paddingTop = "1em";
    homePageDescription.style.paddingBottom = "1em";
    homePageDescription.innerHTML = appData.Description;
    theHomePage.appendChild(homePageDescription);
    theMainPage.appendChild(theHomePage);
    theBody.appendChild(theMainPage);

    RMBLparseAttributes(document.body);
    //RMMsetMenus(document.body);
    setTimeout(function () {
        try {
            document.getElementById("RMBLprogress").style.display = "none";
        } catch (e) { }

    }, 300);
    //alert("Baseline A " + RMIMgetcssvalue(".field-text","font-size"));           
}

function RMBbuildPanel(panelID, url) {
    var panelData;
    //alert(typeof url);
    //if(url != '') {
    panelData = loadJSON(url, panelID + "Panel", "definition", "").data;
    //} else {
    // just here to allow dummy test data
    //    var dataString = eval(panelID+"Panel");
    //panelData = jsonParse(dataString);

    //if ((typeof dataString).toString().toLowerCase() == "object") {
    //alert(dataString);
    //    panelData = dataString;
    //} else {
    //alert(dataString);
    //          panelData = jsonParse(dataString);
    //}

    // }

    try {
        if (!RMBLallowAccess(panelData.security.view)) {
            document.getElementById("RMBLprogress").style.display = "none";
            RMBLhideMessage();
            RMBLshowAccessDenied();
            return false;
        }
    } catch (e) { }

    switch (panelData.type) {
        case "emailList":

            //panelID = panelID + "." + panelData.xref + "Search";
            RMBbuildSearchPanel(panelID, panelData, "email", panelID);

            //RMBbuildSearchPanel(panelID, panelData, "email", "");
            break;
        case "searchList":
            RMBbuildSearchPanel(panelID, panelData, "list", "");
            break;
        case "searchTree":
            RMBbuildSearchPanel(panelID, panelData, "tree", "");
            break;
        case "autoSearchList":
            RMBbuildSearchPanel(panelID, panelData, "autolist", "");
            break;
        case "detail":
            RMBbuildDetailPanel(panelID, panelData);
            break;
    }

    RMBLInitPanel(document.getElementById(panelID));
    return true;
}

function RMBLInitPanel(thePanel) {
    RMBLparseAttributes(thePanel);
    RMMsetMenus(thePanel);
    RMIMsetMasks(thePanel);
    RMTTsetTooltips(thePanel);
    //RMIMsetMasks(thePanel);
    document.QRCode.RMqrSetQRCodes(thePanel)
    if (document.height < window.outerHeight) {
        document.body.style.height = (window.outerHeight + 50) + 'px';
    }
}

function RMBSetMenuSpacer(spacerParent, panelTitle, thePanel) {
    thePanel.setAttribute("panelTitle", panelTitle);

    var spacer = document.createElement("div");
    // This needs to be dynamically determined by the height of the closed menu bar.
    spacer.style.height = "60px";
    spacer.setAttribute("class", "titlespacer");
    spacer.setAttribute("classname", "titlespacer");
    var spacerText = document.createTextNode(" ");
    spacerParent.appendChild(spacer);
    spacer.appendChild(spacerText);
}

function RMBbuildDetailPanel(panelID, panelData) {
    var panelElement = document.createElement("div");
    panelElement.setAttribute("class", "panel");
    panelElement.setAttribute("className", "panel");
    panelElement.id = panelID;
    document.getElementById("mainPage").appendChild(panelElement);
    var detailFieldset = document.createElement("fieldset");
    panelElement.appendChild(detailFieldset);
    var detailForm = document.createElement("form");
    detailForm.id = panelID + "Form";
    detailForm.setAttribute("dataSource", panelData.dataSource);
    if (typeof panelData.connection != "undefined") {
        detailForm.setAttribute("connection", panelData.connection);
    } else {
        detailForm.setAttribute("connection", "DATABASE");
    }
    if (typeof panelData.connectionType != "undefined") {
        detailForm.setAttribute("connectiontype", panelData.connectionType);
    } else {
        detailForm.setAttribute("connectiontype", "DATABASE");
    }
    if (typeof panelData.actionDetail != "undefined") {
        detailForm.setAttribute("actionDetail", JSON.stringify(panelData.actionDetail));
    } else {
        detailForm.setAttribute("actionDetail", "{}");
    }
    detailFieldset.appendChild(detailForm);
    var titleElement;
    RMBSetMenuSpacer(detailForm, panelData.title, panelElement);
    titleElement = document.createElement("h3");
    var actualTitle = document.createElement("span");
    actualTitle.innerHTML = panelData.title;
    actualTitle.setAttribute("class", "paneltitle");
    actualTitle.setAttribute("classname", "paneltitle");
    titleElement.appendChild(actualTitle);
    /*if (RMMismobile()) {
    RMBSetMenuSpacer(detailForm, panelData.title, panelElement);
    titleElement = document.createElement("div");
    } else {
    titleElement = document.createElement("h3");
    titleElement.innerHTML = panelData.title;
    }
    */
    detailForm.appendChild(titleElement);
    titleElement = document.createElement("span");
    detailForm.appendChild(titleElement);

    var theInput = document.createElement("input");
    theInput.setAttribute("type", "button");
    if (typeof panelData.backText !== 'undefined') {
        theInput.value = panelData.backText;
    } else {
        theInput.value = "Back";
    }
    theInput.id = panelID + ".RMBBack";
    theInput.setAttribute("class", "field-button");
    theInput.setAttribute("className", "field-button");
    theInput.setAttribute("elementbutton", "true");
    theInput.onclick = function () { RMMChangePage(RMBLCurrentWorkflow.pop()); return true; }
    theInput.style.marginLeft = "10px";
    theInput.style.display = "none";
    titleElement.appendChild(theInput);



    if (typeof panelData.security == "undefined" || typeof panelData.security.edit == "undefined" || RMBLallowAccess(panelData.security.edit)) {
        theInput = document.createElement("input");
        theInput.id = panelID + ".RMBSave";
        theInput.setAttribute("type", "button");
        theInput.setAttribute("class", "field-button");
        theInput.setAttribute("className", "field-button");
        //theInput.setAttribute("search",panelID+"SearchString"); // Commented out until the service is there. Use the following line instead.
        theInput.setAttribute("submitto", panelData.submitto);
        if (typeof panelData.action != 'undefined' && typeof panelData.action.update != 'undefined') {
            theInput.setAttribute("action", panelData.action.update);
        } else {
            theInput.setAttribute("action", "Save");
        }
        if (typeof panelData.saveText !== 'undefined') {
            theInput.value = panelData.saveText;
        } else {
            theInput.value = "Save";
        }
        if (typeof panelData.next != "undefined") {
            theInput.setAttribute("nextpath", JSON.stringify(panelData.next));
        }
        theInput.style.marginLeft = "10px";
        titleElement.appendChild(theInput);
        if (typeof panelData.deleteButton === 'undefined' || panelData.deleteButton != false) {
            theInput = document.createElement("input");
            theInput.setAttribute("type", "button");
            theInput.setAttribute("class", "field-button");
            theInput.setAttribute("className", "field-button");
            //theInput.setAttribute("search",panelID+"SearchString"); // Commented out until the service is there. Use the following line instead.
            theInput.setAttribute("submitto", panelData.submitto);
            if (typeof panelData.action != 'undefined' && typeof panelData.action.remove != 'undefined') {
                theInput.setAttribute("action", panelData.action.remove);
            } else {
                theInput.setAttribute("action", "Delete");
            }

            theInput.value = "Delete";
            theInput.style.marginLeft = "10px";
            titleElement.appendChild(theInput);
        }
    }

    var miscTag = document.createElement("div");
    miscTag.setAttribute("class", "pageMessage");
    miscTag.setAttribute("className", "pageMessage");
    detailForm.appendChild(miscTag);


    if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
        var theId = "";
        var theIdDelimeter = "";
        for (keyElement in panelData.key) {
            theId += theIdDelimeter + "\"[exact " + convertKeyId(panelData, "search", "response", keyElement) + "]\"";
            theIdDelimeter = ",";
        }
        searchData.setAttribute("datakey", "[" + theId + "]");
    } else {
        searchData.setAttribute("datakey", "[exact " + convertKeyId(panelData, "search", "response") + "]");
    }




    if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
        for (keyElement in panelData.key) {
            theInput = document.createElement("input");
            theInput.setAttribute("type", "hidden");
            theInput.setAttribute("key", "yes");
            theInput.setAttribute("keygen", panelData.keygen[keyElement]);
            theInput.id = panelID + "." + panelData.key[keyElement];
            if (typeof panelData.actionDetail[keyElement] != "undefined") {
                theInput.setAttribute("actionDetail", JSON.stringify(panelData.actionDetail[keyElement]).replace(/\"key\"/g, "\"id\""));
            } else {
                theInput.setAttribute("actionDetail", "{}");
            }
            detailForm.appendChild(theInput);

        }
    } else {
        theInput = document.createElement("input");
        theInput.setAttribute("type", "hidden");
        theInput.setAttribute("key", "yes");
        theInput.setAttribute("keygen", panelData.keygen);
        theInput.id = panelID + "." + panelData.key;
        if (typeof panelData.actionDetail != "undefined") {
            theInput.setAttribute("actionDetail", JSON.stringify(panelData.actionDetail).replace(/\"key\"/g, "\"id\""));
        } else {
            theInput.setAttribute("actionDetail", "{}");
        }
        detailForm.appendChild(theInput);
    }



    for (section in panelData.sections) {
        var sectionData = panelData.sections[section];
        miscTag = document.createElement("div");
        miscTag.setAttribute("class", "oneLine sectionHeader");
        miscTag.setAttribute("className", "oneLine sectionHeader");
        miscTag.innerHTML = sectionData.title;
        detailForm.appendChild(miscTag);
        RMBcreateLines(sectionData, detailForm, panelID)
    }

}

function RMBcreateLines(sectionData, detailForm, originalPanelID) {
    var isMobile = RMMismobile();
    for (line in sectionData.lines) {
        var lineData = sectionData.lines[line];
        var theLine = document.createElement("div");
        if (lineData.id === null || typeof lineData.id == "undefined") {
            theLine.id = originalPanelID + "." + RMBLGUID();
        } else {
            theLine.id = originalPanelID + "." + lineData.id;
        }
        RMBLsetDevOptions(theLine, "fieldline");
        theLine.setAttribute("class", "oneLine");
        theLine.setAttribute("className", "oneLine");
        detailForm.appendChild(theLine);
        var firstField = null;
        for (field in lineData.fields) {
            var fieldData = lineData.fields[field];
            var theFieldGroup = document.createElement("div");
            theFieldGroup.id = "fieldgroup." + originalPanelID + "." + fieldData.id;
            if (fieldData.type == "hidden") {
                theFieldGroup.style.display = "none";
            } else {
                
                RMBLsetDevOptions(theFieldGroup, "fieldgroup");
            }

            theFieldGroup.setAttribute("class", "fieldGroup");
            theFieldGroup.setAttribute("className", "fieldGroup");
            theLine.appendChild(theFieldGroup);
            if ((fieldData.labelLocation == "top" || fieldData.labelLocation == "left" || (isMobile && fieldData.type != "checkbox")) && fieldData.type != "hidden") {
                var labelSpan = document.createElement("div");

                var theLabel = fieldData.label + "&nbsp;";
                if (fieldData.labelLocation == "top" || isMobile) {
                    //theLabel += "<br />";
                } else {
                    labelSpan.style.textAlign = "right";
                    labelSpan.setAttribute("class", "customInline");
                    labelSpan.setAttribute("className", "customInline");
                }
                if (typeof fieldData.labelWidth != "undefined") {
                    labelSpan.style.width = fieldData.labelWidth;
                }
                labelSpan.innerHTML = theLabel;
                theFieldGroup.appendChild(labelSpan);

                // dynamic field group wrap allignment
                if (fieldData.labelLocation != "top" && (!isMobile && fieldData.type != "checkbox") && fieldData.labelLocation != "bottom") {
                    labelSpan.setAttribute("oldwidth", labelSpan.style.width);
                    if (firstField == null) {
                        firstField = labelSpan;
                    } else {
                        RMBLaddResizeEvent(function (labelSpan, firstField) {
                            var myPosition = RMBLfindPos(labelSpan);
                            var basePosition = RMBLfindPos(firstField);
                            //alert(firstField.innerText);
                            if (myPosition.left == basePosition.left && firstField.style.width != "") {
                                labelSpan.style.width = firstField.style.width;
                            } else {
                                labelSpan.style.width = labelSpan.getAttribute("oldwidth");
                            }
                        }
                                        , labelSpan, firstField);
                    }
                }


                //theFieldGroup.innerHTML = labelSpan + theLabel + "</span>";
            }
            if (fieldData.type == "qrcode") {
                //<div id='theDiv' btaddr='1LMTaaNB81XVxtmaHYgQyqoYgsXuuy2c5P' label="Nino's Pizza" qrCode='bitcoin:[uri btaddr]?amount=[uri amount]X8&label=[uri label]' size='300' />
                theInput = document.createElement("div");
                //theInput.setAttribute("class","field-text");
                //theInput.setAttribute("className","field-text");
                theInput.id = originalPanelID + "." + fieldData.id;
                if (typeof fieldData.actionDetail != "undefined") {
                    theInput.setAttribute("actionDetail", JSON.stringify(fieldData.actionDetail));
                } else {
                    theInput.setAttribute("actionDetail", "{}");
                }
                theInput.setAttribute("qrData", fieldData.qrdata);
                theInput.setAttribute("size", fieldData.size);
                theFieldGroup.appendChild(theInput);
            }
            if (fieldData.type == "static") {
                theInput = document.createElement("input");
                theInput.setAttribute("type", "text");
                theInput.setAttribute("tabindex", "-1");
                theInput.setAttribute("class", "field-text");
                theInput.setAttribute("className", "field-text");
                theInput.id = originalPanelID + "." + fieldData.id;
                if (typeof fieldData.actionDetail != "undefined") {
                    theInput.setAttribute("actionDetail", JSON.stringify(fieldData.actionDetail));
                } else {
                    theInput.setAttribute("actionDetail", "{}");
                }
                theInput.value = "";
                if (typeof fieldData.mask != "undefined") {
                    theInput.setAttribute("mask", fieldData.mask);
                    theInput.setAttribute("maskname", fieldData.label);
                    if (typeof fieldData.maskerror != "undefined") {
                        theInput.setAttribute("maskerror", fieldData.maskerror);
                    }
                }
                theInput.setAttribute("readonly", "readonly");
                theInput.style.borderStyle = "none";
                theInput.style.background = "transparent";
                theInput.style.backgroundColor = "transparent";
                theInput.style.color = RMIMgetElementStyle(theFieldGroup, "color");
                theFieldGroup.appendChild(theInput);
            }
            if (fieldData.type == "button") {
                var textDiv = document.createElement("div");
                textDiv.setAttribute("class", "customInline");
                textDiv.setAttribute("className", "customInline");

                var theInput = document.createElement("input");
                theInput.setAttribute("type", "button");
                theInput.value = fieldData.value;
                theInput.setAttribute("class", "field-button");
                theInput.setAttribute("className", "field-button");
                theInput.setAttribute("elementbutton", "true");
                theInput.id = originalPanelID + "." + fieldData.id;
                theInput.setAttribute("onclick", fieldData.action);
                theFieldGroup.appendChild(textDiv);
                textDiv.appendChild(theInput);
            }

            if (fieldData.type == "text" || fieldData.type == "hidden") {
                var textDiv = document.createElement("div");
                textDiv.setAttribute("class", "customInline");
                textDiv.setAttribute("className", "customInline");

                theInput = document.createElement("input");
                theInput.setAttribute("type", fieldData.type);
                if (fieldData.type == "text") {
                    theInput.setAttribute("class", "field-text");
                    theInput.setAttribute("className", "field-text");
                }
                theInput.id = originalPanelID + "." + fieldData.id;
                if (typeof fieldData.actionDetail != "undefined") {
                    theInput.setAttribute("actionDetail", JSON.stringify(fieldData.actionDetail));
                } else {
                    theInput.setAttribute("actionDetail", "{}");
                }
                theInput.value = "";
                if (typeof fieldData.mask != "undefined") {
                    theInput.setAttribute("mask", fieldData.mask);
                    theInput.setAttribute("maskname", fieldData.label);
                    if (typeof fieldData.maskerror != "undefined") {
                        theInput.setAttribute("maskerror", fieldData.maskerror);
                    }
                }
                if (typeof fieldData.readonly != "undefined") {
                    if (fieldData.readonly == true) {
                        theInput.setAttribute("readonly", "readonly");
                    }
                }
                theFieldGroup.appendChild(textDiv);
                textDiv.appendChild(theInput);
            }
            if (fieldData.type == "textarea") {
                theInput = document.createElement("textarea");
                theInput.setAttribute("class", "field-textarea");
                theInput.setAttribute("className", "field-textarea");
                if (typeof fieldData.mask != "undefined") {
                    theInput.setAttribute("mask", fieldData.mask);
                    theInput.setAttribute("maskname", fieldData.label);
                    if (typeof fieldData.maskerror != "undefined") {
                        theInput.setAttribute("maskerror", fieldData.maskerror);
                    }
                }
                theInput.id = originalPanelID + "." + fieldData.id;
                if (typeof fieldData.actionDetail != "undefined") {
                    theInput.setAttribute("actionDetail", JSON.stringify(fieldData.actionDetail));
                } else {
                    theInput.setAttribute("actionDetail", "{}");
                }
                /*if (isMobile) {
                var tmpSize = (window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight);
                tmpSize = 480 < tmpSize ? 480 : tmpSize;
            
                var tmpFontSize = parseInt(RMIMgetcssvalue(".field-textarea","font-size"));
                if(isNaN(tmpFontSize)) {
                tmpFontSize = parseInt(RMIMgetcssvalue("body","font-size"));
                }
            
                var sizeValue = tmpSize  / tmpFontSize * 1.5;
            
                if (isNaN(sizeValue)) {
                theInput.setAttribute("cols",37);
                } else if (fieldData.cols > sizeValue) {
                theInput.setAttribute("cols",sizeValue);
                }
                } else {*/
                if (typeof fieldData.cols != "undefined") {
                    theInput.setAttribute("cols", fieldData.cols);
                }
                if (typeof fieldData.rows != "undefined") {
                    theInput.setAttribute("rows", fieldData.rows);
                }

                if (typeof fieldData.width != "undefined") {
                    theInput.style.width = fieldData.width;
                }

                if (typeof fieldData.height != "undefined") {
                    theInput.style.height = fieldData.height;
                }

                if (typeof fieldData.readonly != "undefined") {
                    if (fieldData.readonly == true) {
                        theInput.setAttribute("readonly", "readonly");
                    }
                }
                theFieldGroup.appendChild(theInput);
            }
            if (fieldData.type == "select") {
                theInput = document.createElement("select");
                theInput.setAttribute("class", "field-select");
                theInput.setAttribute("className", "field-select");
                if (typeof fieldData.mask != "undefined") {
                    theInput.setAttribute("mask", fieldData.mask);
                    theInput.setAttribute("maskname", fieldData.label);
                    if (typeof fieldData.maskerror != "undefined") {
                        theInput.setAttribute("maskerror", fieldData.maskerror);
                    }
                }
                if (typeof fieldData.options != "undefined") {
                    var theOption = document.createElement("option");
                    theOption.value = "";
                    theInput.appendChild(theOption);
                    for (option in fieldData.options) {
                        var optionData = fieldData.options[option];
                        theOption = document.createElement("option");
                        theOption.value = optionData.KEY;
                        theOption.innerHTML = optionData.VALUE;
                        theInput.appendChild(theOption);
                    }
                } else {
                    theInput.setAttribute("listurl", typeof fieldData.url == "undefined" ? "" : fieldData.url);
                    theInput.setAttribute("listparameters", typeof fieldData.parameter == "undefined" ? "" : fieldData.parameter);
                    theInput.setAttribute("listkey", typeof fieldData.key == "undefined" ? "" : fieldData.key);
                    theInput.setAttribute("listvalue", typeof fieldData.value == "undefined" ? "" : fieldData.value);
                    theInput.setAttribute("listfilter", typeof fieldData.filter == "undefined" ? "" : fieldData.filter);
                    if (typeof fieldData.connection != "undefined") {
                        theInput.setAttribute("connection", fieldData.connection);
                    } else {
                        theInput.setAttribute("connection", detailForm.getAttribute("connection"));
                    }
                    if (typeof fieldData.connectionType != "undefined") {
                        theInput.setAttribute("connectiontype", fieldData.connectionType);
                    } else {
                        theInput.setAttribute("connectiontype", detailForm.getAttribute("connectiontype"));
                    }
                }
                theInput.id = originalPanelID + "." + fieldData.id;
                if (typeof fieldData.actionDetail != "undefined") {
                    theInput.setAttribute("actionDetail", JSON.stringify(fieldData.actionDetail));
                } else {
                    theInput.setAttribute("actionDetail", "{}");
                }
                if (typeof fieldData.readonly != "undefined") {
                    if (fieldData.readonly == true) {
                        theInput.setAttribute("readonly", "readonly");
                    }
                }
                theFieldGroup.appendChild(theInput);
            }
            if (fieldData.type == "checkbox") {
                var checkboxDiv = document.createElement("div");
                checkboxDiv.setAttribute("class", "customInline");
                checkboxDiv.setAttribute("className", "customInline");
                if (typeof fieldData.mask != "undefined") {
                    theInput.setAttribute("mask", fieldData.mask);
                    theInput.setAttribute("maskname", fieldData.label);
                    if (typeof fieldData.maskerror != "undefined") {
                        theInput.setAttribute("maskerror", fieldData.maskerror);
                    }
                }
                theInput = document.createElement("input");
                theInput.setAttribute("type", "checkbox");
                theInput.id = originalPanelID + "." + fieldData.id;
                if (typeof fieldData.actionDetail != "undefined") {
                    theInput.setAttribute("actionDetail", JSON.stringify(fieldData.actionDetail));
                } else {
                    theInput.setAttribute("actionDetail", "{}");
                }
                if (typeof fieldData.value != "undefined") {
                    theInput.value = fieldData.value;
                } else {
                    theInput.value = "1";
                }

                theFieldGroup.appendChild(checkboxDiv);
                checkboxDiv.appendChild(theInput);
            }
            if (fieldData.type == "group") {
                var theGroup = document.createElement("div");
                var groupClass = "fieldGroup";
                if (typeof fieldData.align != "undefined") {
                    //groupClass += " subGroup"+fieldData.align;
                }
                if (typeof fieldData.border != "undefined") {
                    theGroup.style.border = fieldData.border;
                }
                theGroup.setAttribute("class", groupClass);
                theGroup.setAttribute("className", groupClass);

                theFieldGroup.appendChild(theGroup);
                RMBcreateLines(fieldData, theGroup, originalPanelID);
            }
            if (fieldData.type == "list" || fieldData.type == "staticList" || fieldData.type == "emailList") {
                //theFieldGroup.parentNode.setAttribute("class","customInline");
                //theFieldGroup.parentNode.setAttribute("className","customInline");

                theFieldGroup.setAttribute("class", "fieldGroupList");
                theFieldGroup.setAttribute("className", "fieldGroupList");
                if (fieldData.type == "list" || fieldData.type == "emailList") {
                    var buttonDiv = document.createElement("div");
                    buttonDiv.setAttribute("class", "oneLine");
                    buttonDiv.setAttribute("className", "oneLine");
                    theFieldGroup.appendChild(buttonDiv);
                    var removeButton = document.createElement("input");
                    removeButton.setAttribute("type", "button");
                    removeButton.setAttribute("class", "field-button");
                    removeButton.setAttribute("className", "field-button");
                    removeButton.setAttribute("removedetails", originalPanelID + "." + fieldData.id);
                    removeButton.setAttribute("elementbutton", "true");
                    removeButton.style.marginRight = "10px";
                    removeButton.value = "Remove Selected";
                    buttonDiv.appendChild(removeButton);

                    if (fieldData.type == "list") {
                        var addButton = document.createElement("input");
                        addButton.setAttribute("type", "button");
                        addButton.setAttribute("class", "field-button");
                        addButton.setAttribute("className", "field-button");
                        addButton.setAttribute("openPanel", originalPanelID + "." + fieldData.id + "Search");
                        addButton.setAttribute("elementbutton", "true");
                        addButton.value = "Add";
                        buttonDiv.appendChild(addButton);
                    }
                } else {/* Need to move this to the sub search screen.
                                    if ((typeof fieldData.addNew == "undefined" || fieldData.addNew) && (typeof fieldData.security == "undefined" || typeof fieldData.security.edit == "undefined" || RMBLallowAccess(fieldData.security.edit))) {
                                        var buttonDiv = document.createElement("div");
                                        buttonDiv.setAttribute("class", "oneLine");
                                        buttonDiv.setAttribute("className", "oneLine");
                                        theFieldGroup.appendChild(buttonDiv);

                                        var addButton = document.createElement("input");
                                        addButton.setAttribute("type", "button");
                                        addButton.setAttribute("class", "field-button");
                                        addButton.setAttribute("className", "field-button");
                                        //addButton.setAttribute("openPanel", originalPanelID + "." + fieldData.id + "Search");
                                        addButton.setAttribute("elementbutton", "true");
                                        addButton.value = "Add New";
                                        addButton.setAttribute("loadform", fieldData.detailPanel);
                                        addButton.setAttribute("dataurl", "");
                                        //searchData.setAttribute("dataurl",panelID+"DetailResultString");
                                        addButton.setAttribute("datakey", "");
                                        buttonDiv.appendChild(addButton);
                                    }
                                    */
                }





                theGroup = document.createElement("div");
                groupClass = "";
                if (typeof fieldData.align != "undefined") {
                    //groupClass += "subGroup"+fieldData.align;
                }
                //theGroup.setAttribute("hereiam", "righthere");
                theGroup.setAttribute("class", groupClass);
                theGroup.setAttribute("className", groupClass);
                theGroup.id = originalPanelID + "." + fieldData.id;
                if (typeof fieldData.actionDetail != "undefined") {
                    theGroup.setAttribute("actionDetail", JSON.stringify(fieldData.actionDetail));
                } else {
                    theGroup.setAttribute("actionDetail", "{}");
                }
                if (typeof fieldData.connection != "undefined") {
                    theGroup.setAttribute("connection", fieldData.connection);
                } else {
                    theGroup.setAttribute("connection", detailForm.getAttribute("connection"));
                }
                if (typeof fieldData.connectionType != "undefined") {
                    theGroup.setAttribute("connectiontype", fieldData.connectionType);
                } else {
                    theGroup.setAttribute("connectiontype", detailForm.getAttribute("connectiontype"));
                }
                theGroup.setAttribute("searchurl", "");
                // Only this way until we get a service
                // might be wrong... "parentKey" nolonger exists... now it's "parentReference"
                theGroup.setAttribute("searchstring", fieldData.parentKey);

                theFieldGroup.appendChild(theGroup);
                //RMBcreateLines(fieldData, theGroup);
                var theList;
                if (fieldData.type == "list" || fieldData.type == "emailList") {
                    theList = RMBbuildList(originalPanelID + "." + fieldData.id, fieldData, true, false);
                } else {
                    theList = RMBbuildList(originalPanelID + "." + fieldData.id, fieldData, false, false);
                }
                theGroup.appendChild(theList);
                if (fieldData.type == "list" || fieldData.type == "emailList") {
                    var addItemPanel = {};
                    addItemPanel["type"] = "searchList";
                    if (sectionData.title > "") {
                        addItemPanel["title"] = "Add " + sectionData.title;
                    } else {
                        addItemPanel["title"] = "Add " + fieldData.label.replace(":", "");
                    }

                    addItemPanel["key"] = fieldData.key;
                    //addItemPanel["key"] = convertKeyId(fieldData, "subsearch", "response", fieldData.key);
                    if (typeof fieldData.searchFields.detailLine != "undefined") {
                        addItemPanel["detailLine"] = fieldData.searchFields.detailLine;
                    } else {
                        addItemPanel["detailLine"] = fieldData.detailLine;
                    }
                    addItemPanel["searchFields"] = fieldData.searchFields;
                    addItemPanel["sections"] = fieldData.searchFields.sections;
                    addItemPanel["dataSource"] = fieldData.dataSource;
                    if (typeof fieldData.searchFields.connection != "undefined") {
                        addItemPanel["connection"] = fieldData.searchFields.connection;
                    } else if (typeof fieldData.connection != "undefined") {
                        addItemPanel["connection"] = fieldData.connection;
                    }
                    if (typeof fieldData.searchFields.connectionType != "undefined") {
                        addItemPanel["connectionType"] = fieldData.searchFields.connectionType;
                    } else if (typeof fieldData.connectionType != "undefined") {
                        addItemPanel["connectionType"] = fieldData.connectionType;
                    }
                    if (typeof fieldData.searchFields.key != "undefined") {
                        addItemPanel["key"] = fieldData.searchFields.key;
                    } else if (typeof fieldData.key != "undefined") {
                        addItemPanel["key"] = fieldData.key;
                    }
                    if (typeof fieldData.searchFields.actionDetail != "undefined") {
                        addItemPanel["actionDetail"] = fieldData.searchFields.actionDetail;
                    }

                    //RMBbuildSearchPanel(originalPanelID + "." + fieldData.id + "Search", addItemPanel, "addlist", originalPanelID);
                    if (fieldData.type == "emailList") {
                        RMBbuildSearchPanel(originalPanelID + "." + fieldData.id + "Search", addItemPanel, "addemaillist", originalPanelID);
                    } else {
                        RMBbuildSearchPanel(originalPanelID + "." + fieldData.id + "Search", addItemPanel, "addlist", originalPanelID);
                    }
                    RMBLInitPanel(document.getElementById(originalPanelID + "." + fieldData.id + "Search"));
                    
                }

            }
            if (typeof fieldData.helptext !== 'undefined') {
                var helpSpan = document.createElement("span");
                helpSpan.style.verticalAlign = "super";
                helpSpan.style.fontSize = "smaller";
                helpSpan.style.borderBottom = "none";
                helpSpan.setAttribute("tooltip", '<div>' + fieldData.helptext + '</div>');
                helpSpan.setAttribute("tooltiptype", 'help');
                helpSpan.setAttribute("class", "tooltipprompt");
                helpSpan.setAttribute("className", "tooltipprompt");

                helpSpan.innerText = "  ?";
                theFieldGroup.appendChild(helpSpan);
            }
            if ((fieldData.labelLocation == "bottom" || fieldData.labelLocation == "right") && (!isMobile || (isMobile && fieldData.type == "checkbox")) && fieldData.type != "hidden") {
                var labelSpan = document.createElement("div");

                theLabel = "&nbsp;" + fieldData.label;
                if (fieldData.labelLocation == "bottom") {
                    //theLabel = "<br />" + theLabel;
                } else {
                    labelSpan.style.textAlign = "left";
                    labelSpan.setAttribute("class", "customInline");
                    labelSpan.setAttribute("className", "customInline");
                }
                if (typeof fieldData.labelWidth != "undefined") {
                    labelSpan.style.width = fieldData.labelWidth;
                }
                labelSpan.innerHTML = theLabel;
                theFieldGroup.appendChild(labelSpan);
            }
            if (typeof fieldData.defaultValue !== 'undefined' && fieldData.defaultValue != 'null') {
                theInput.setAttribute("default", fieldData.defaultValue);
            } else {
                if (typeof theInput != "undefined") {
                    theInput.setAttribute("default", "");
                }
            }
            if (typeof fieldData.placeholder !== 'undefined') {
                theInput.setAttribute("placeholder", fieldData.placeholder);
            }

        }
    }

}

function RMBbuildSearchPanel(panelID, panelData, panelSubType, originalPanelID) {
    
    var panelElement = document.createElement("div");
    panelElement.setAttribute("class", "panel");
    panelElement.setAttribute("className", "panel");
    panelElement.id = panelID;
    document.getElementById("mainPage").appendChild(panelElement);
    var titleElement;
    RMBSetMenuSpacer(panelElement, panelData.title, panelElement);
    titleElement = document.createElement("h3");
    titleElement.innerHTML = panelData.title;
    titleElement.setAttribute("class", "paneltitle");
    titleElement.setAttribute("classname", "paneltitle");
    titleElement.style.paddingBottom = "0px";
    titleElement.style.borderBottom = "none";

    /*
    if (RMMismobile()) {
    RMBSetMenuSpacer(panelElement, panelData.title, panelElement);
    titleElement = document.createElement("div");
    } else {
    titleElement = document.createElement("h3");
    titleElement.innerHTML = panelData.title;
    titleElement.style.paddingBottom = "0px";
    titleElement.style.borderBottom = "none";
    }
    */
    panelElement.appendChild(titleElement);
    titleElement = document.createElement("span");
    panelElement.appendChild(titleElement);


    if (panelSubType != "email") {

        var searchFieldset = document.createElement("fieldset");
        searchFieldset.style.borderTop = "none";

        var searchForm = document.createElement("form");
        searchForm.id = panelID + "Search";
        searchForm.setAttribute("dataSource", panelData.dataSource);
        if (typeof panelData.connection != "undefined") {
            searchForm.setAttribute("connection", panelData.connection);
        } else {
            searchForm.setAttribute("connection", "DATABASE");
        }
        if (typeof panelData.connectionType != "undefined") {
            searchForm.setAttribute("connectiontype", panelData.connectionType);
        } else {
            searchForm.setAttribute("connectiontype", "DATABASE");
        }
        if (typeof panelData.actionDetail != "undefined") {
            searchForm.setAttribute("actionDetail", JSON.stringify(panelData.actionDetail));
        } else {
            searchForm.setAttribute("actionDetail", "{}");
        }
        //searchForm.setAttribute("detail", panelData.detailPanel);
        searchForm.style.paddingTop = "0px";
        searchFieldset.appendChild(searchForm);
        if (typeof panelData.sections != "undefined") {
            for (section in panelData.sections) {
                var sectionData = panelData.sections[section];
                var miscTag = document.createElement("div");
                miscTag.setAttribute("class", "oneLine sectionHeader");
                miscTag.setAttribute("className", "oneLine sectionHeader");
                miscTag.innerHTML = sectionData.title;
                searchForm.appendChild(miscTag);
                RMBcreateLines(sectionData, searchForm, panelID)
            }
        }
        /*
        var theInput = document.createElement("input");
        if(panelSubType == "autolist") {
        theInput.setAttribute("type","hidden");
        theInput.setAttribute("value","*");
        } else {
        theInput.setAttribute("type","text");
        }
        theInput.setAttribute("class","field-text");
        theInput.setAttribute("className","field-text");
        theInput.id = panelID+"SearchString";
        theInput.style.width = "290px";
        theInput.style.marginRight = "10px";
        theInput.style.marginBottom = "5px";
        searchForm.appendChild(theInput);
        */
        if (panelSubType == "autolist" || panelSubType == "list" || panelSubType == "tree") {
            theInput = document.createElement("input");
            theInput.setAttribute("type", "button");
            if (typeof panelData.backText !== 'undefined') {
                theInput.value = panelData.backText;
            } else {
                theInput.value = "Back";
            }
            theInput.id = panelID + ".RMBBack";
            theInput.setAttribute("class", "field-button");
            theInput.setAttribute("className", "field-button");
            theInput.setAttribute("elementbutton", "true");
            theInput.onclick = function () {
                RMMChangePage(RMBLCurrentWorkflow.pop());
                return true;
            }
            theInput.style.marginRight = "10px";
            theInput.style.display = "none";
            searchForm.appendChild(theInput);

            theInput = document.createElement("input");
            if (panelSubType == "autolist") {
                //theInput.style.display = "none";
                theInput.setAttribute("auto", "true");
            }
            theInput.setAttribute("type", "button");
            theInput.setAttribute("class", "field-button");
            theInput.setAttribute("className", "field-button");
            //theInput.setAttribute("search",panelID+"SearchString"); // Commented out until the service is there. Use the following line instead.
            theInput.setAttribute("search", panelID + "SearchResultString");
            if (panelSubType == "list" || panelSubType == "autolist") {
                theInput.setAttribute("searchresults", panelID + "SearchResults");
            } else if (panelSubType == "tree") {
                theInput.setAttribute("searchresultstree", panelID + "SearchResults");
            }
            theInput.value = "Search";
            if (typeof panelData.action != 'undefined' && typeof panelData.action.search != 'undefined') {
                theInput.setAttribute("action", panelData.action.search);
            } else {
                theInput.setAttribute("action", "Search");
            }
            theInput.style.marginRight = "10px";
            searchForm.appendChild(theInput);

            var tmpInput = theInput.cloneNode(true);
            tmpInput.value = "Export";
            tmpInput.setAttribute("action", "Export");
            searchForm.appendChild(tmpInput);

            if ((typeof panelData.addNew == "undefined" || panelData.addNew) && (typeof panelData.security == "undefined" || typeof panelData.security.edit == "undefined" || RMBLallowAccess(panelData.security.edit))) {
                theInput = document.createElement("input");
                theInput.setAttribute("type", "button");
                theInput.setAttribute("class", "field-button");
                theInput.setAttribute("className", "field-button");
                //theInput.setAttribute("search",panelID+"SearchString"); // Commented out until the service is there. Use the following line instead.
                theInput.setAttribute("openPanel", panelData.detailPanel);
                theInput.setAttribute("action", "addnew");
                theInput.value = "Add New";
                searchForm.appendChild(theInput);
            }

        } else if (panelSubType == "addlist" || panelSubType == "addemaillist" || panelSubType == "email") {
            theInput = document.createElement("input");
            theInput.setAttribute("type", "button");
            theInput.setAttribute("class", "field-button");
            theInput.setAttribute("className", "field-button");
            theInput.setAttribute("search", panelID + "SearchResultString");
            theInput.setAttribute("searchresults", panelID + "SearchResults");
            theInput.value = "Search";
            if (typeof panelData.action != 'undefined' && typeof panelData.action.search != 'undefined') {
                theInput.setAttribute("action", panelData.action.search);
            } else {
                theInput.setAttribute("action", "Search");
            }
            theInput.style.marginRight = "10px";
            searchForm.appendChild(theInput);
            theInput = document.createElement("input");
            theInput.setAttribute("type", "button");
            theInput.setAttribute("class", "field-button");
            theInput.setAttribute("className", "field-button");
            theInput.setAttribute("moveelementsfrom", panelID + "SearchResults");
            theInput.setAttribute("addelementsto", panelID + "Results");
            theInput.value = "Add Selected";
            theInput.style.marginRight = "10px";
            searchForm.appendChild(theInput);

            if (panelSubType == "addlist") {
                theInput = document.createElement("input");
                theInput.setAttribute("type", "button");
                theInput.setAttribute("class", "field-button");
                theInput.setAttribute("className", "field-button");
                theInput.setAttribute("cancelto", originalPanelID);
                theInput.value = "Cancel";
                searchForm.appendChild(theInput);
            }

        }
        var miscTag = document.createElement("div");
        miscTag.setAttribute("class", "pageMessage");
        miscTag.setAttribute("className", "pageMessage");
        searchForm.appendChild(miscTag);
        panelElement.appendChild(searchFieldset);

        var searchResults;
        if (panelSubType == "list" || panelSubType == "autolist") {
            searchResults = RMBbuildList(panelID, panelData, false, false);
        } else if (panelSubType == "addlist" || panelSubType == "addemaillist" || panelSubType == "email") {
            searchResults = RMBbuildList(panelID, panelData, true, true);
        } else if (panelSubType == "tree") {
            searchResults = document.createElement("div");
            searchResults.id = panelID + "SearchResults";
            searchResults.setAttribute("key", panelData.key);
            searchResults.setAttribute("parentKey", panelData.parentKey);
            searchResults.innerHTML = "<p>&nbsp;</p><p>&nbsp;</p>";
            var searchTemplate = document.createElement("span");
            //searchTemplate.id = panelID+"SearchResultsLine";
            searchTemplate.setAttribute("class", "template");
            searchTemplate.setAttribute("className", "template");
            var resultLine = document.createElement("span");
            if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
                var theId = "";
                var theIdDelimeter = "";
                for (keyElement in panelData.key) {
                    theId += theIdDelimeter + "[exact " + convertKeyId(panelData, "search", "response", keyElement) + "]";
                    theIdDelimeter = ".";
                }
                resultLine.id = panelID + theId;
            } else {
                resultLine.id = panelID + "[exact " + convertKeyId(panelData, "search", "response") + "]";
            }
            var searchData = document.createElement("span");
            searchData.setAttribute("loadform", panelData.detailPanel);
            searchData.setAttribute("dataurl", "");
            //searchData.setAttribute("dataurl",panelID+"DetailResultString");
            if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
                var theId = "";
                var theIdDelimeter = "";
                for (keyElement in panelData.key) {
                    theId += theIdDelimeter + "\"[exact " + convertKeyId(panelData, "search", "response", keyElement) + "]\"";
                    theIdDelimeter = ",";
                }
                searchData.setAttribute("datakey", "[" + theId + "]");
            } else {
                searchData.setAttribute("datakey", "[exact " + convertKeyId(panelData, "search", "response") + "]");
            }
            searchData.innerHTML = RMBLEnhanceTemplate(panelData, panelData.template);
            if (typeof panelData.translations != "undefined") {
                searchData.setAttribute("translation", JSON.stringify(panelData.translations));
            }
            resultLine.appendChild(searchData);
            searchTemplate.appendChild(resultLine);
            searchResults.appendChild(searchTemplate);
        }
        panelElement.appendChild(searchResults);
    } 

    if (panelSubType == "email") {
        var sectionData = new Array();
        sectionData["title"] = "";
        sectionData["lines"] = new Array();
        (sectionData["lines"])[0] = new Object();
        ((sectionData["lines"])[0])["fields"] = new Array();

        (((sectionData["lines"])[0])["fields"])[0] = new Object();
        var theGroup = (((sectionData["lines"])[0])["fields"])[0];
        //theField["label"] = "To:";
        //theField["labelLocation"] = "top";
        //theField["id"] = panelData.xref;
        theGroup["type"] = "group";
        theGroup["lines"] = new Array();
        (theGroup["lines"])[0] = new Object();
        ((theGroup["lines"])[0])["fields"] = new Array();


        (((theGroup["lines"])[0])["fields"])[0] = new Object();
        var theField = (((theGroup["lines"])[0])["fields"])[0];
        theField["label"] = "To:";
        theField["labelLocation"] = "top";
        // This mapping is all F****d up and needs to be fixed.  It works.. but still... ugh.
        //theField["id"] = panelData.xref;
        theField["id"] = panelData.childDataSource;
        theField["type"] = "emailList";
        theField["parentReference"] = panelData.key;
        theField["childReference"] = panelData.childKey;
        theField["childKey"] = panelData.parentReference;
        theField["dataSource"] = panelData.dataSource;
        theField["key"] = panelData.childReference;
        theField["detailLine"] = panelData.detailLine;
        theField["searchFields"] = new Object();
        (theField["searchFields"])["sections"] = panelData.sections;
        theField["addNew"] = false;
        //theField[""] = ;

        (theGroup["lines"])[1] = new Object();
        ((theGroup["lines"])[1])["fields"] = new Array();


        (((theGroup["lines"])[1])["fields"])[0] = new Object();
        var theSubjectField = (((theGroup["lines"])[1])["fields"])[0];
        //theSubjectField["id"] = panelData.xref + "Subject";
        theSubjectField["id"] = "Subject";
        theSubjectField["type"] = "text";
        theSubjectField["label"] = "Subject:";
        theSubjectField["labelLocation"] = "top";
        theSubjectField["mask"] = "[word 0 255]";


        (theGroup["lines"])[2] = new Object();
        ((theGroup["lines"])[2])["fields"] = new Array();


        (((theGroup["lines"])[2])["fields"])[0] = new Object();
        var theSubjectField = (((theGroup["lines"])[2])["fields"])[0];
        //theSubjectField["id"] = panelData.xref + "Body";
        theSubjectField["id"] = "Body";
        theSubjectField["type"] = "textarea";
        theSubjectField["label"] = "Body:";
        theSubjectField["labelLocation"] = "top";
        theSubjectField["rows"] = "10";
        theSubjectField["cols"] = "90";

        (((theGroup["lines"])[2])["fields"])[1] = new Object();
        var theHiddenField = (((theGroup["lines"])[2])["fields"])[1];
        theHiddenField["id"] = "fromEmailSource";
        theHiddenField["type"] = "hidden";
        theHiddenField["mask"] = "[character][default {\"" + panelData.fromEmailSource + "\"}]";

        (((theGroup["lines"])[2])["fields"])[2] = new Object();
        var theHiddenField = (((theGroup["lines"])[2])["fields"])[2];
        theHiddenField["id"] = "emailID";
        theHiddenField["type"] = "hidden";
        theHiddenField["mask"] = "[character][default {\"" + panelData.emailID + "\"}]";

        (((theGroup["lines"])[2])["fields"])[3] = new Object();
        var theHiddenField = (((theGroup["lines"])[2])["fields"])[3];
        theHiddenField["id"] = "fromEmailID";
        theHiddenField["type"] = "hidden";
        theHiddenField["mask"] = "[character][default {\"" + panelData.fromEmailID + "\"}]";

        (((theGroup["lines"])[2])["fields"])[4] = new Object();
        var theHiddenField = (((theGroup["lines"])[2])["fields"])[4];
        theHiddenField["id"] = "fromEmailUserID";
        theHiddenField["type"] = "hidden";
        theHiddenField["mask"] = "[character][default {\"" + panelData.fromEmailUserID + "\"}]";

        (((theGroup["lines"])[2])["fields"])[5] = new Object();
        var theHiddenField = (((theGroup["lines"])[2])["fields"])[5];
        theHiddenField["id"] = "xref";
        theHiddenField["type"] = "hidden";
        theHiddenField["mask"] = "[character][default {\"" + panelData.xref + "\"}]";


        var searchHolder = document.createElement("span");
        searchHolder.style.marginBottom = "30px";
        panelElement.appendChild(searchHolder);

        RMBcreateLines(sectionData, panelElement, panelElement.id);

        
        var theSearch = document.getElementById(panelElement.id + "." + theField.id + "Search");
        var theSearchPanel = theSearch.parentNode.removeChild(theSearch);
        searchHolder.innerHTML = theSearchPanel.innerHTML;

        //searchHolder.nextSibling.setAttribute("class", "fieldGroup");
        //searchHolder.nextSibling.setAttribute("classname", "fieldGroup");

        searchHolder.nextSibling.style.border = "1px solid grey";
        searchHolder.nextSibling.style.marginTop = "20px";
        searchHolder.nextSibling.style.width = "99%";


        var theButtonsB = document.createElement("div");
        theButtonsB.setAttribute("class", "oneLine");
        theButtonsB.setAttribute("className", "oneLine");
        searchHolder.nextSibling.appendChild(theButtonsB);

        var theSend = document.createElement("input");
        theSend.setAttribute("type", "button");
        theSend.setAttribute("class", "field-button");
        theSend.setAttribute("className", "field-button");
        theSend.setAttribute("submitto", panelData.submitto);
        if (typeof panelData.action != 'undefined' && typeof panelData.action.update != 'undefined') {
            theSend.setAttribute("action", panelData.action.update);
        } else {
            theSend.setAttribute("action", "Email");
        }
        if (typeof panelData.saveText !== 'undefined') {
            theSend.value = panelData.saveText;
        } else {
            theSend.value = "Send";
        }
        if (typeof panelData.next != "undefined") {
            theSend.setAttribute("nextpath", JSON.stringify(panelData.next));
        }
        theSend.style.marginLeft = "10px";
        theButtonsB.appendChild(theSend);

        var emailForm = document.createElement("form");
        emailForm.id = panelID + "Email";
        emailForm.setAttribute("dataSource", panelData.dataSource);
        if (typeof panelData.connection != "undefined") {
            emailForm.setAttribute("connection", panelData.connection);
        } else {
            emailForm.setAttribute("connection", "DATABASE");
        }
        if (typeof panelData.connectionType != "undefined") {
            emailForm.setAttribute("connectiontype", panelData.connectionType);
        } else {
            emailForm.setAttribute("connectiontype", "DATABASE");
        }
        if (typeof panelData.actionDetail != "undefined") {
            emailForm.setAttribute("actionDetail", JSON.stringify(panelData.actionDetail));
        } else {
            emailForm.setAttribute("actionDetail", "{}");
        }

        while (typeof searchHolder.nextSibling.childNodes[0] != "undefined") {
            var theChild = searchHolder.nextSibling.removeChild(searchHolder.nextSibling.childNodes[0]);
            emailForm.appendChild(theChild);
        }
        searchHolder.nextSibling.appendChild(emailForm);

    }

    //document.getElementById("mainPage").appendChild(panelElement);
}

function RMBLCreateEmailPanel(panelData) {
    var sectionData = new Array();
    sectionData["title"] = "";
    sectionData["lines"] = new Array();
    (sectionData["lines"])[0] = new Object();
    ((sectionData["lines"])[0])["fields"] = new Array();
    (((sectionData["lines"])[0])["fields"])[0] = new Object();
    var theField = (((sectionData["lines"])[0])["fields"])[0];
    theField["label"] = "Recipent Groups:";
    theField["labelLocation"] = "top";
    // This mapping is all F****d up and needs to be fixed.  It works.. but still... ugh.
    theField["id"] = panelData.xref;
    theField["type"] = "list";
    theField["parentReference"] = panelData.key;
    theField["childReference"] = panelData.childKey;
    theField["childKey"] = panelData.parentReference;
    theField["dataSource"] = panelData.dataSource;
    theField["key"] = panelData.childReference;
    theField["detailLine"] = panelData.detailLine;
    theField["searchFields"] = new Object();
    (theField["searchFields"])["sections"] =  panelData.sections;
    theField["addNew"] = false;
    //theField[""] = ;


    RMBcreateLines(sectionData, panelElement, panelElement.id);
 
    document.getElementById("mainPage").appendChild(panelElement);

}

function RMBLEnhanceTemplate(panelData, template) {

    var returns = template.match(/\[.*?\]/g);
    for (var i = 0; i < returns.length; i++) {
        returns[i] = returns[i].replace(/\[.* /, "[");
        returns[i] = returns[i].replace(/[\[\]]/g, "");
    }

    returns = removeDuplicateElements(returns);
    var parameters = "";

    for (var i = 0; i < returns.length; i++) {
        if (returns[i].indexOf("@") > -1) {
            if (typeof panelData.translations != "undefined" && typeof panelData.translations[valueRequest] != "undefined") {
                var valueRequest = returns[i].substr((returns[i].indexOf("@") + 1));
                parameters += typeof panelData.translations[valueRequest].url == "undefined" ? ":" : ":" + panelData.translations[valueRequest].url;
                parameters += typeof panelData.translations[valueRequest].key == "undefined" ? "," : panelData.translations[valueRequest].key + ",";
                parameters += typeof panelData.translations[valueRequest].value == "undefined" ? "," : panelData.translations[valueRequest].value + ",";
                parameters += typeof panelData.translations[valueRequest].filter == "undefined" ? "," : panelData.translations[valueRequest].filter;
            }
        }
        template = template.replace("]", parameters + "]");
    }

    return template;
}


function RMBbuildList(panelID, panelData, checkbox, addpanel) {

    var searchResults = document.createElement("div");
    /*
    if (typeof panelData["width"] != "undefined") {
    searchResults.style.width = panelData["width"];
    } else {
    searchResults.style.width = "100%";
    }
    */
    //searchResults.setAttribute("class", "resultbox");
    //searchResults.setAttribute("classname", "resultbox");
    searchResults.style.width = "100%";
    /*
    RMBLaddResizeObjectEvent(function (searchResults) {
    searchResults.style.width = window.innerWidth + "px";
    }, searchResults);
    */
    searchResults.id = panelID + "SearchResults";
    var theAction = "search";
    if (typeof panelData["parentReference"] != "undefined") {
        theAction = "subsearch";
        var xrefInfo = document.createElement("input");
        xrefInfo.setAttribute("type", "hidden");
        xrefInfo.setAttribute("value", panelData["dataSource"] + "," +
                                           panelID.substr(panelID.indexOf(".") + 1) + "," +
                                           panelData["parentReference"] + "," +
                                           panelData["childKey"] + "," +
                                           panelData["childReference"] + "," +
                                           panelData["key"] + "," +
                                           (typeof panelData.connection == "undefined" ? "DATABASE" : panelData.connection) + "," +
                                           (typeof panelData.connectionType == "undefined" ? "DATABASE" : panelData.connectionType) + "," +
                                           (typeof panelData.actionDetail == "undefined" ? "" : JSON.stringify(panelData.actionDetail).replace(/,/g, "|")));
        xrefInfo.id = panelID + "xrefSubform";
        searchResults.appendChild(xrefInfo);

        //searchResults.setAttribute("datatable",panelData["datatable"]);
        //searchResults.setAttribute("parentReference",panelData["parentReference"]);
        //searchResults.setAttribute("childKey",panelData["childKey"]);
    }

    //searchResults.innerHTML = "<p>&nbsp;</p><p>&nbsp;</p>";
    var searchTemplate = document.createElement("span");
    searchTemplate.id = panelID + "SearchResultsLine";
    searchTemplate.setAttribute("class", "template");
    searchTemplate.setAttribute("className", "template");
    if (typeof panelData.detailLine.translations != "undefined") {
        searchTemplate.setAttribute("translation", JSON.stringify(panelData.detailLine.translations));
    }
    var resultLine = document.createElement("div");
    if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
        var theId = "";
        var theIdDelimeter = "";
        for (keyElement in panelData.key) {
            theId += theIdDelimeter + "[exact " + convertKeyId(panelData, theAction, "response", keyElement) + "]";
            theIdDelimeter = ".";
        }
        resultLine.id = panelID + "Item" + theId;
    } else {
        resultLine.id = panelID + "Item[exact " + convertKeyId(panelData, theAction, "response") + "]";
    }
    //resultLine.id = panelID + "Item[exact " + convertKeyId(panelData, "search", "response") + "]";
    resultLine.setAttribute("class", "resultLine");
    resultLine.setAttribute("className", "resultLine");
    var searchData = document.createElement("span");
    if (checkbox) {
        var theCheckboxArea = document.createElement("div");
        theCheckboxArea.setAttribute("class", "detail");
        theCheckboxArea.setAttribute("className", "detail");
        searchData.appendChild(theCheckboxArea);
        var theCheckbox = document.createElement("input");
        theCheckbox.setAttribute("type", "checkbox");
        if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
            var theId = "";
            var theIdDelimeter = "";
            for (keyElement in panelData.key) {
                theId += theIdDelimeter + "[exact " + convertKeyId(panelData, theAction, "response", keyElement) + "]";
                theIdDelimeter = ".";
            }
            theCheckbox.setAttribute("value", "[" + theId + "]");
        } else {
            theCheckbox.setAttribute("value", "[exact " + convertKeyId(panelData, theAction, "response") + "]");
        }

        theCheckbox.style.marginRight = "5px";
        theCheckboxArea.appendChild(theCheckbox);
        var theHiddenKey = document.createElement("input");
        theHiddenKey.setAttribute("type", "hidden");
        // prevent this field from being used for anything automatically but display. (except save)
        //theHiddenKey.setAttribute("actiondetail", '{"load":{"request":{"id":""},"response":{"id":""}},"save":{"request":{"id":""},"response":{"id":""}}}');
        theHiddenKey.setAttribute("actiondetail", '{"load":{"request":{"id":""},"response":{"id":""}},"save":{"response":{"id":""}}}');
        if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
            var theId = "";
            var theIdDelimeter = "";
            for (keyElement in panelData.key) {
                theId += theIdDelimeter + "\"[exact " + convertKeyId(panelData, theAction, "response", keyElement) + "]\"";
                theIdDelimeter = ",";
            }
            theHiddenKey.setAttribute("value", "[" + theId + "]");
        } else {
            theHiddenKey.setAttribute("value", "[exact " + convertKeyId(panelData, theAction, "response") + "]");

        }
        //theHiddenKey.setAttribute("value", "[exact " + panelData.key + "]");
        if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
            var theId = "";
            var theIdDelimeter = "";
            for (keyElement in panelData.key) {
                theId += theIdDelimeter + "[exact " + convertKeyId(panelData, theAction, "response", keyElement) + "]";
                theIdDelimeter = ".";
            }
            theHiddenKey.id = panelID + "|" + theId;
        } else {
            theHiddenKey.id = panelID + "|[exact " + convertKeyId(panelData, theAction, "response") + "]";

        }
        //theHiddenKey.id = panelID + "|[exact " + panelData.key + "]";
        theCheckboxArea.appendChild(theHiddenKey);
    } else {
        // This will allow the clicking of a list item to go to the detail.
        searchData.setAttribute("loadform", panelData.detailPanel);
        searchData.setAttribute("dataurl", "");
        //searchData.setAttribute("dataurl",panelID+"DetailResultString");
        if (Object.prototype.toString.apply(panelData.key) === '[object Array]') {
            var theId = "";
            var theIdDelimeter = "";
            for (keyElement in panelData.key) {
                theId += theIdDelimeter + "\"[exact " + convertKeyId(panelData, theAction, "response", keyElement) + "]\"";
                theIdDelimeter = ",";
            }
            searchData.setAttribute("datakey", "[" + theId + "]");
        } else {
            searchData.setAttribute("datakey", "[exact " + convertKeyId(panelData, theAction, "response") + "]");
        }
        //searchData.setAttribute("datakey", "[exact " + convertKeyId(panelData, "search", "response") + "]");
    }

    //searchData.setAttribute("loadform", panelData.detailPanel);
    //searchData.setAttribute("dataurl", "");

    var firstDataElement = true;
    for (dataElement in panelData.detailLine.data) {
        var theDataElement = document.createElement("div");
        if (firstDataElement) {
            firstDataElement = false;
            theDataElement.setAttribute("class", "key");
            theDataElement.setAttribute("className", "key");
        } else {
            theDataElement.setAttribute("class", "detail");
            theDataElement.setAttribute("className", "detail");
        }
        theDataElement.style.width = panelData.detailLine.data[dataElement].width;
        theDataElement.setAttribute("origWidth", theDataElement.style.width);
        //theDataElement.innerHTML = panelData.detailLine.data[dataElement].template;
        theDataElement.innerHTML = RMBLEnhanceTemplate(panelData.detailLine, panelData.detailLine.data[dataElement].template);
        searchData.appendChild(theDataElement);
    }
    resultLine.appendChild(searchData);
    if (typeof panelData.detailLine.buttons != "undefined") {
        var dataButtons = document.createElement("div");
        dataButtons.setAttribute("class", "detail");
        dataButtons.setAttribute("className", "detail");
        for (dataButton in panelData.detailLine.buttons) {
            var theDataButton = document.createElement("a");
            theDataButton.setAttribute("href", panelData.detailLine.buttons[dataButton].href);
            theDataButton.setAttribute("target", "_new");
            theDataButton.innerHTML = panelData.detailLine.buttons[dataButton].content;
            theDataButton.style.marginLeft = "10px";
            dataButtons.appendChild(theDataButton);
        }
        resultLine.appendChild(dataButtons);
    }
    searchTemplate.appendChild(resultLine);
    searchResults.appendChild(searchTemplate);
    return searchResults;
}

function RMBbuildMenu(theElement) {
    var menuData;
    var mainPage = document.getElementById("mainPage");

    var homePanel = document.getElementById("home");
    mainPage.appendChild(homePanel);

    var navBlocks = document.createElement("div");

    //navBlocks.id='navBlocks';
    navBlocks.style.textAlign = "center";
    /*
    if(RMMismobile()) {
    homePanel.style.textAlign = "center";
    navBlocks.setAttribute("class","customInline infoBox");
    navBlocks.setAttribute("className","customInline infoBox");
    navBlocks.style.background = "transparent";
    navBlocks.style.backgroundColor = "transparent";
    navBlocks.style.border = "none";
    } else {
    navBlocks.style.width = "100%";
    }
    */
    homePanel.appendChild(navBlocks);


    //if(theElement.getAttribute("url") != '' && theElement.getAttribute("url") != null) {
    menuData = loadJSON(theElement.getAttribute("url"), theElement.getAttribute("menuid"), "definition", "").data;
    //} else {
    // just here to allow dummy test data
    //    var dataString = eval(theElement.getAttribute("menuid"));
    //    menuData = jsonParse(dataString);
    //}
    var menuElement = document.createElement("ul");
    menuElement.setAttribute("class", "NavigationMenu");
    menuElement.setAttribute("className", "NavigationMenu");
    menuElement.setAttribute("Orientation", menuData.Orientation);
    var MenuStyle = "";
    for (styleName in menuData.MenuStyle) {
        MenuStyle += styleName + ": " + menuData.MenuStyle[styleName] + "; ";
    }
    menuElement.setAttribute("MenuStyle", MenuStyle);
    var MenuItemStyle = "";
    for (styleName in menuData.MenuItemStyle) {
        MenuItemStyle += styleName + ": " + menuData.MenuItemStyle[styleName] + "; ";
    }
    menuElement.setAttribute("MenuItemStyle", MenuItemStyle);
    var MenuItemHoverStyle = "";
    for (styleName in menuData.MenuItemHoverStyle) {
        MenuItemHoverStyle += styleName + ": " + menuData.MenuItemHoverStyle[styleName] + "; ";
    }
    menuElement.setAttribute("MenuItemHoverStyle", MenuItemHoverStyle);
    theElement.appendChild(menuElement);


    var thePanel = document.createElement("li");
    thePanel.setAttribute("openPanel", "home");
    thePanel.innerHTML = "&nbsp;&nbsp;Home";
    menuElement.appendChild(thePanel);



    RMBcreateMenuElements(menuElement, menuData.panels, 0, "", "", navBlocks);


}

function RMBstripHTML(theHTML) {
    var tmpElement = document.createElement("DIV");
    tmpElement.innerHTML = theHTML;
    var tmpText = (tmpElement.textContent || tmpElement.innerText).trim();
    return tmpText;
}

function RMBcreateMenuElements(oldMenuElement, panels, zIndex, pageID, pageDescription, navBlocks) {
    var theBody = document.getElementsByTagName("body")[0];
    var menuElement = oldMenuElement;

    if (zIndex != 0) {

        var theMainPage = document.getElementById("mainPage");
        var theHomePage = document.createElement("div");
        theHomePage.id = pageID;
        theHomePage.setAttribute("class", "panel");
        theHomePage.setAttribute("className", "panel");

        //RMBSetMenuSpacer(theHomePage, appData.Name, theHomePage);

        var homePageDescription = document.createElement("div");
        homePageDescription.style.textAlign = "center";
        //homePageDescription.style.fontSize = "105%";
        homePageDescription.style.fontWeight = "bold";
        homePageDescription.style.paddingTop = "1em";
        homePageDescription.style.paddingBottom = "1em";
        homePageDescription.innerHTML = pageDescription;
        theHomePage.appendChild(homePageDescription);
        theMainPage.appendChild(theHomePage);
        theBody.appendChild(theMainPage);


        navBlocks = document.createElement("div");

        //navBlocks.id='navBlocks';
        navBlocks.style.textAlign = "center";
        /*
        if (RMMismobile()) {
        homePageDescription.style.textAlign = "center";
        navBlocks.setAttribute("class", "customInline infoBox");
        navBlocks.setAttribute("className", "customInline infoBox");
        navBlocks.style.background = "transparent";
        navBlocks.style.backgroundColor = "transparent";
        navBlocks.style.border = "none";
        } else {
        navBlocks.style.width = "100%";
        }
        */
        theHomePage.appendChild(navBlocks);


    } else {
        //menuElement = oldMenuElement;
    }

    zIndex += 10;

    for (panel in panels) {
        thePanel = document.createElement("li");

        thePanel.setAttribute("tooltip", '<div>' + RMBstripHTML(panels[panel].Description) + '</div>');
        thePanel.setAttribute("tooltiptype", 'classic');
        //var theLink = document.createElement("a");
        //theLink.setAttribute("onclick","return false;");
        //var textNode = document.createTextNode(panels[panel].Text);
        thePanel.innerHTML = panels[panel].Text;
        //theLink.appendChild(textNode);
        //thePanel.appendChild(theLink);
        menuElement.appendChild(thePanel);

        //if (pageID == "") {

        if (typeof panels[panel].panels == "undefined") {
            thePanel.setAttribute("openPanel", panels[panel].ID);
        }

        var navBlock = document.createElement("div");
        navBlock.id = "infoBox." + panels[panel].ID;
        navBlock.setAttribute("class", "customInline infoBox");
        navBlock.setAttribute("className", "customInline infoBox");
        navBlock.setAttribute("openPanel", panels[panel].ID);

        // Development Options
        RMBLsetDevOptions(navBlock, "navBlock");



        //////////////////////


        var blockHeader = document.createElement("div");
        blockHeader.setAttribute("class", "customInline infoBoxHeading");
        blockHeader.setAttribute("className", "customInline infoBoxHeading");
        blockHeader.innerHTML = panels[panel].Text.trim();
        navBlock.appendChild(blockHeader);
        navBlock.style.zIndex = zIndex++;
        /*
        if (RMMismobile()) {
        navBlock.style.zIndex = zIndex++;
        navBlock.style.position = "relative";

        navBlock.style.top = "-12px"; // Fix this
        //alert(getStyleValue(navBlock, "margin"));
        navBlock.style.left = "-7px";
        // the following line sometimes returns "auto" as the style value.
        //navBlock.style.left = ((parseInt(getStyleValue(navBlock, "margin-left")) + parseInt(getStyleValue(navBlock, "border-left"))) * -1) + "px";
        navBlock.style.webkitBorderTopRightRadius = "24px";
        navBlock.style.webkitBorderTopLeftRadius = "24px";
        navBlock.style.mozBorderRadiusTopright = "24px";
        navBlock.style.mozBorderRadiusTopleft = "24px";

        blockHeader.style.webkitBorderTopRightRadius = "24px";
        blockHeader.style.webkitBorderTopLeftRadius = "24px";
        blockHeader.style.mozBorderRadiusTopright = "24px";
        blockHeader.style.mozBorderRadiusTopleft = "24px";

        navBlock.style.mozBoxShadow = "0px -2px 2px #222";
        navBlock.style.webkitBoxShadow = "0px -2px 2px #222";
        navBlock.style.boxShadow = "0px -2px 2px #222";

        } else {
        var blockDescription = document.createElement("div");
        blockDescription.setAttribute("class", "customInline infoBoxDetail");
        blockDescription.setAttribute("className", "customInline infoBoxDetail");
        blockDescription.innerHTML = panels[panel].Description;
        navBlock.appendChild(blockDescription);
        }
        */
        var blockDescription = document.createElement("div");
        blockDescription.setAttribute("class", "customInline infoBoxDetail");
        blockDescription.setAttribute("className", "customInline infoBoxDetail");
        blockDescription.innerHTML = panels[panel].Description;
        navBlock.appendChild(blockDescription);

        navBlocks.appendChild(navBlock);
        //if (RMMismobile()) {
        //navBlocks = navBlock;
        //}
        //}
        if (typeof panels[panel].panels != "undefined") {
            var newMenuElement = document.createElement("ul");
            thePanel.appendChild(newMenuElement);

            RMBcreateMenuElements(newMenuElement, panels[panel].panels, zIndex, panels[panel].ID, panels[panel].Description, navBlocks);
        } //else {
        //thePanel.setAttribute("openPanel", panels[panel].ID);
        //}
    }

}

function convertId(formElement, action, direction) {
    // need to fix this so that return fields can be obtained.
    if (formElement == null) return "";
    var actionDetail = formElement.getAttribute("actionDetail");
    if (action != "" && typeof (actionDetail) != "undefined" && actionDetail != "" && actionDetail != null && typeof (JSON.parse(actionDetail))[action] != "undefined") {
        var tmpActions = JSON.parse(actionDetail)[action];
        if (typeof tmpActions[direction] != "undefined" && typeof tmpActions[direction].id != "undefined") {
            var tmpActionId = tmpActions[direction].id;
            if (tmpActionId == "") {
                // We don't want this field.
                return "";
            }
            return tmpActionId;
        }
    }
    return formElement.id;
}

function convertKeyId(formDetail, action, direction, element) {
    // need to fix this so that return fields can be obtained.
    //if (formDetail == null) return "";
    var actionDetail = formDetail.actionDetail;
    if (typeof actionDetail != "undefined" && typeof actionDetail[action] != "undefined" && typeof actionDetail[action][direction] != "undefined") {
        var tmpActions = actionDetail.undefined;
        if (Object.prototype.toString.apply(actionDetail[action][direction].key) === '[object Array]') {
            tmpActions = actionDetail[action][direction].key[element];
        } else {
            tmpActions = actionDetail[action][direction].key;
        }
        if (typeof tmpActions != "undefined") {
            var tmpActionId = tmpActions;
            if (tmpActionId == "") {
                // We don't want this field.
                return "";
            }
            return tmpActionId;
        }
    }
    return formDetail.key;
}

function getFieldSequence(formElement, action, direction) {
    // need to fix this so that return fields can be obtained.
    if (formElement == null) return "";
    var actionDetail = formElement.getAttribute("actionDetail");
    if (action != "" && typeof (actionDetail) != "undefined" && actionDetail != "" && actionDetail != null && typeof (JSON.parse(actionDetail))[action] != "undefined") {
        var tmpActions = JSON.parse(actionDetail)[action];
        if (typeof tmpActions[direction] != "undefined" && typeof tmpActions[direction].sequence != "undefined") {
            var tmpActionSeq = tmpActions[direction].sequence;
            if (tmpActionSeq == "") {
                // We don't want this field.
                return 999999;
            }
            return tmpActionSeq;
        }
    }
    return 999999;
}

function gatherForm(theForm, doValidation, action, direction) {
    doValidation = (typeof doValidation == "undefined") ? true : doValidation;
    action = (typeof action == "undefined" || !action) ? "" : action.toLocaleLowerCase();
    direction = (typeof direction == "undefined") ? "request" : direction;
    var formKey = null;
    var formKeyId = "";
    var formKeyGen = "";
    var forKeyDelimeter = "";
    var panelId = "";

    //alert(theForm.id);

    if ((theForm.id).substr((theForm.id).length - 4, (theForm.id).length) == "Form") {
        panelId = (theForm.id).substr(0, (theForm.id).length - 4); // Remove the word "Form"  from the end and you have the panel id.
    } else if ((theForm.id).substr((theForm.id).length - 6, (theForm.id).length) == "Search") {
        panelId = (theForm.id).substr(0, (theForm.id).length - 6); // Remove the word "Search" from the end and you have the panel id.
    } else if ((theForm.id).substr((theForm.id).length - 5, (theForm.id).length) == "Email") {
        panelId = (theForm.id).substr(0, (theForm.id).length - 5); // Remove the word "Email" from the end and you have the panel id.
    }

    var validForm = true;

    if (typeof RMIMcheckForm == 'function' && doValidation) {
        validForm = RMIMcheckForm(theForm);
        //validForm = true;
    }
    var jsonForm = new Object();
    //jsonForm["theForm"] = theForm.id;
    //jsonForm["formAction"] = theAction;
    if (validForm) {
        // Order the fields if necessary
        var orderedFields = new Array();
        orderedFields.sort(function (a, b) {

            // assuming seq is always a valid integer
            return parseInt(a.seq, 10) - parseInt(b.seq, 10);

        });
        for (var i = 0; i < theForm.length; i++) {
            if (theForm[i].id != "" && theForm[i].id != "undefined" && theForm[i].id != null && theForm[i].id.indexOf("[") == -1) {
                var j = orderedFields.push(new Object()) - 1;
                orderedFields[j]["field"] = theForm[i];
                orderedFields[j]["id"] = convertId(theForm[i], action, direction);
                orderedFields[j]["seq"] = getFieldSequence(theForm[i], action, direction);

            }
        }
        orderedFields.sort();
        if (direction == "response") {
            jsonForm["return:fields"] = new Array();
        }
        for (var i = 0; i < orderedFields.length; i++) {
            //if (theForm[i].id != "" && theForm[i].id != "undefined" && theForm[i].id != null && theForm[i].id.indexOf("[") == -1) {
            var theField = orderedFields[i].field;
            var resolvedFieldId = convertId(theField, action, direction);
            if (resolvedFieldId == "") continue;
            if (theField.getAttribute("key") == "yes") {
                formKey = theField;
                //formKeyId += forKeyDelimeter + (formKey.id).replace(panelId + ".", "");
                formKeyId += forKeyDelimeter + (resolvedFieldId).replace(panelId + ".", "");
                formKeyGen += forKeyDelimeter + theField.getAttribute("keygen");
                forKeyDelimeter = ":";
            }
            switch (theField.type) {
                case "button":
                    break;
                case "radio":
                case "checkbox":

                    if (direction == "response") {
                        jsonForm["return:fields"][jsonForm["return:fields"].length] = resolvedFieldId;
                    } else {
                        if (theField.checked == true) {
                            jsonForm[(resolvedFieldId).replace(panelId + ".", "")] = theField.value;
                        }
                    }
                    break;
                default:
                    if (direction == "response") {
                        jsonForm["return:fields"][jsonForm["return:fields"].length] = resolvedFieldId;
                    } else {
                        jsonForm[(resolvedFieldId).replace(panelId + ".", "")] = theField.value;
                    }
                    break;
            }
            //}
        }
        jsonForm["form:dataSource"] = theForm.getAttribute("dataSource");
        jsonForm["form:connection"] = theForm.getAttribute("connection");
        jsonForm["form:connectionType"] = theForm.getAttribute("connectiontype");
        jsonForm["form:actionDetail"] = jsonParse(theForm.getAttribute("actionDetail"));
        jsonForm["form:key"] = formKeyId;
        jsonForm["form:keygen"] = formKeyGen;
        //alert(JSON.stringify({ "table": theForm.getAttribute("table"), "key": formKeyId, "data": jsonForm }));
        return ({ "dataSource": theForm.getAttribute("dataSource"), "key": formKeyId, "data": jsonForm });
    } else {
        return null;
    }
}

function SubmitForm(theForm, theURL, theAction) {
    //RMBLshowMessage(theAction+"ing...");
    var formInfo = gatherForm(theForm, true, theAction);

    if (formInfo != null) {
        var theResponse = loadJSON(theURL, theForm.id, theAction, JSON.stringify(formInfo.data)).data;

        if (theResponse) {
            if (typeof theResponse.openpanel != "undefined") {
                LoadForm(theResponse.openpanel, theResponse.dataurl, theResponse.datakey, theResponse.message);
            }
            //alert(theAction);
            if (typeof theResponse.success != "undefined") {
                var theMessage = "";
                if (theResponse.success == "true") {
                    formInfo.key.value = theResponse.datakey;
                    if (theAction == "Save") {
                        theMessage = "Save Successfull";
                    } else if (theAction == "Email") {
                        theMessage = "Email Sent Successfully";
                    } else if (theAction == "Delete") {
                        LoadForm(theForm.id.replace('Form', ''), "", "", "");
                        theMessage = "Delete Successfull";
                        //LoadForm(theForm.id.replace('Form', '').replace('Detail', ''), theURL, theResponse.datakey, theResponse.message);
                    }
                    RMBLshowMessage(theMessage);
                    setTimeout(function () { RMBLhideMessage(); }, 1500);
                    return true;

                } else {
                    LoadForm(theForm.id.replace('Form', ''), theURL, theResponse.datakey, theResponse.message);
                }
            }
            //RMBLhideMessage();
            return true;
        } else {
            //RMBLhideMessage();
            return false;
        }
    } else {
        //RMBLhideMessage();
        return false;
    }
}

function RMBLshowMessage(theMessage) {
    var messageBlock = document.getElementById("RMBLSaveSuccess");
    messageBlock.innerText = theMessage;
    messageBlock.style.display = "block";
}

function RMBLhideMessage() {
    document.getElementById("RMBLSaveSuccess").style.display = "none";
}

function RMBLshowAccessDenied() {
    var messageBlock = document.getElementById("RMBLAccessDenied");
    messageBlock.style.display = "block";
    setTimeout(function () { RMBLhideAccessDenied(); }, 3000);
}

function RMBLhideAccessDenied() {
    document.getElementById("RMBLAccessDenied").style.display = "none";
}



function addFormDetails(theElement, originalElement, newContainer, currentPage) {
    if (originalElement == '') {
        originalElement = theElement;
    }
    for (var i = 0; i < theElement.childNodes.length; i++) {
        addFormDetails(theElement.childNodes[i], originalElement, newContainer, "");
    }
    try {
        if (theElement.getAttribute('type') == "checkbox") {
            if (theElement.checked == true) {
                theElement.checked = false;
                var realID = originalElement.id.substr(0, originalElement.id.lastIndexOf("SearchSearch"));
                if (document.getElementById(realID + "Item" + theElement.value) == null) {
                    var searchID = realID + "SearchItem" + theElement.value;
                    var searchCheckboxID = realID + "Search|" + theElement.value;
                    var newID = realID + "Item" + theElement.value;
                    var newCheckboxID = realID + "|" + theElement.value;

                    document.getElementById(searchID).id = newID;
                    document.getElementById(searchCheckboxID).id = newCheckboxID;
                    var elementToMove = document.getElementById(newID).parentNode;
                    elementToMove.parentNode.removeChild(elementToMove);
                    newContainer.appendChild(elementToMove);
                }
                addFormDetails(originalElement, originalElement, newContainer, "");
            }
        }
    } catch (e) {
        try {
            if (theElement.getAttribute('type') == "checkbox") {
                alert(e);
            }
        } catch (ee) { }
    }


    if (currentPage != "") {
        RMMChangePage(currentPage);
    }
}

function removeDetails(theElement, originalElement) {
    if (originalElement == '') {
        originalElement = theElement;
    }
    for (var i = 0; i < theElement.childNodes.length; i++) {
        removeDetails(theElement.childNodes[i], originalElement);
    }
    try {
        if (theElement.getAttribute('type') == "checkbox") {
            if (theElement.checked == true) {
                var elementToRemove = document.getElementById(originalElement.id + "Item" + theElement.value).parentNode;
                elementToRemove.parentNode.removeChild(elementToRemove);
                removeDetails(originalElement, originalElement);
            }
        }
    } catch (e) { }
}

function expandTree(theNode) {
    // .innerHTML is cheating... I'm tired.. I'll fix it later ;)

    if (theNode.childNodes[2].style.display == "none") {
        theNode.childNodes[2].style.display = "block";
        //theNode.listStyleImage="url('../images/plus.gif')";
        theNode.childNodes[0].innerHTML = "- ";
    } else {
        theNode.childNodes[2].style.display = "none";
        //theNode.listStyleImage="url('../images/minus.gif')";
        theNode.childNodes[0].innerHTML = "+ ";
    }
}


function HTMLEncode(str) {
    var div = document.createElement("div");
    var text = document.createTextNode(str);
    div.appendChild(text);
    return div.innerHTML;
}

function clearList(listContainer, resultLine) {
    // Clear List
    var holdResultLine;
    var holdxref = null;
    while (listContainer.hasChildNodes()) {
        if (listContainer.firstChild.id.indexOf("xrefSubform") > -1) {
            holdxref = listContainer.removeChild(listContainer.firstChild);
        } else if (listContainer.firstChild == resultLine) {
            holdResultLine = listContainer.removeChild(listContainer.firstChild);
        } else {
            listContainer.removeChild(listContainer.firstChild);
        }
    }
    if (holdxref != null) {
        listContainer.appendChild(holdxref);
    }
    listContainer.appendChild(holdResultLine);
    return holdResultLine;
}

function populateList(listContainer, resultLine, searchResultObject, translations) {

    var holdResultLine = clearList(listContainer, resultLine);

    // Populate New List
    //if ((typeof searchResultObject.data) == "undefined") return;
    if (Array.isArray(searchResultObject)) {
        for (var detail in searchResultObject) {
            if (typeof (searchResultObject[detail]) == "undefined") break;

            populateTemplate(holdResultLine, searchResultObject[detail], listContainer, translations);

        }
    } else {
    if (Object.getOwnPropertyNames(searchResultObject).length !== 0) {
        populateTemplate(holdResultLine, searchResultObject, listContainer, translations);
    }
    }
}

function RMBLReplaceTemplateVariables(resultString, searchResultItem, translations) {

    /*if (!Array.isArray(searchResultItem)) {
        var tmpHold = searchResultItem;
        searchResultItem = new Array();
        searchResultItem[0] = tmpHold;
    }*/
    
    for (var detailElement in searchResultItem) {
        // Encode URIs
        var theValue = searchResultItem[detailElement];
        if (detailElement in translations) {
            theValue = translations[detailElement][theValue];
        }

        var re = new RegExp("\\[uri " + detailElement + "@?.*?\\]", "g");
        resultString = resultString.replace(re, encodeURI(theValue));

        // Encode without translation (exact)
        re = new RegExp("\\[exact " + detailElement + "@?.*?\\]", "g");
        resultString = resultString.replace(re, encodeURI(theValue));

        // Remove all non numeric characters (ex. phone number)
        re = new RegExp("\\[num " + detailElement + "@?.*?\\]", "g");
        resultString = resultString.replace(re, theValue.replace(/[^0-9]/g, ''));

        // Encode Normal (HTML Escaped)
        re = new RegExp("\\[" + detailElement + "@?.*?\\]", "g");
        var safeValue = HTMLEncode(theValue);
        if (safeValue.length < 1) {
            safeValue = "&nbsp;";
        }
        resultString = resultString.replace(re, safeValue);
    }
    return resultString;
}

function populateTemplate(holdResultLine, searchResultItem, listContainer, translations) {
    var resultString = holdResultLine.innerHTML;
    var newresultLine = holdResultLine.cloneNode(true);

    resultString = RMBLReplaceTemplateVariables(resultString, searchResultItem, translations);

    newresultLine.innerHTML = resultString;
    var theClass;

    if (newresultLine.getAttribute('className')) {
        theClass = newresultLine.getAttribute("className");
    } else {
        theClass = newresultLine.getAttribute("class");
    }
    theClass = theClass.replace("template", "");
    newresultLine.setAttribute("class", theClass);
    newresultLine.setAttribute("className", theClass);
    newresultLine.removeAttribute("id");
    RMBLparseAttributes(newresultLine);
    var placedResultLine = listContainer.appendChild(newresultLine);
    /*
    RMBLaddResizeObjectEvent(function (placedResultLine) {
    var maxWidth = window.innerWidth - 10;
    if (placedResultLine.width() > maxWidth) {
    placedResultLine.style.width = maxWidth + "px";
    } else {
    placedResultLine.style.width = placedResultLine.getAttribute("origwidth");
    }
    }, placedResultLine);
    */
}

function populateForm(theFormElements, theRecord, thePage) {
    for (var i = 0; i < theFormElements.length; i++) {
        if (theFormElements[i].id != "" && theFormElements[i].id.indexOf("xrefSubform") == -1 && theFormElements[i].id.indexOf("|") == -1) {
            try {
                var responseId = convertId(theFormElements[i], "load", "response").replace(thePage + ".", "");
                switch (theFormElements[i].type) {
                    case "button":
                        break;
                    case "radio":
                    case "checkbox":
                        if (theRecord != "" && (responseId in theRecord)) {
                            if (theFormElements[i].value == theRecord[responseId]) {
                                theFormElements[i].checked = true;
                            } else {
                                theFormElements[i].checked = false;
                            }
                        } else {
                            theFormElements[i].checked = false;
                        }
                        break;
                    default:
                        if (theRecord != "" && (responseId in theRecord)) {
                            theFormElements[i].value = theRecord[responseId];
                        } else {
                            //theFormElements[i].value = "";
                            //theFormElements[i].value = theFormElements[i].getAttribute("default");
                            /*if (theFormElements[i].getAttribute("key") == "yes") {
                            theFormElements[i].value = eval(theFormElements[i].getAttribute("keygen"));
                            } else */
                            if (theFormElements[i].type == "select") { // this doesn't work right now
                                theFormElements[i].value = theFormElements[i].getAttribute("default");
                            } else {
                                RMIMsetDefault(theFormElements[i]);
                                RMIMsetCalc(theFormElements[i]);
                            }
                        }
                        break;
                }
            } catch (e) { }
        }
        if (theFormElements[i].type == "button" && theFormElements[i].getAttribute('auto') == "true") { // this must be an auto search
            searchRecordsList(theFormElements[i].form, theFormElements[i].getAttribute('searchresults'), "", theFormElements[i].getAttribute('action'));
        }

    }
}

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.ltrim = function () {
    return this.replace(/^\s+/, "");
}
String.prototype.rtrim = function () {
    return this.replace(/\s+$/, "");
}

String.prototype.right = function (theLength) {
    return this.slice(theLength * -1);
    //return this.substr(this.length - theLength);
}

String.prototype.repeat = function (times) {
    if (times > 0) {
        return (new Array(times + 1)).join(this);
    } else {
        return ("");
    }
}

function encode64(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }

    return output;
}

function decode64(input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
    }

    return output;
}


// Cross Browser Ajax Implementation
if (typeof window.XMLHttpRequest !== 'function' &&
    typeof window.ActiveXObject === 'function') {
    window.XMLHttpRequest = function () {
        try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) { }
        try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (e) { }
        try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch (e) { }
        try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch (e) { }
        throw new Error('failed to create an ActiveX XMLHTTP object');
    };
}

function secureXMLHttpRequest(userID, password, url) {
    var req = new XMLHttpRequest;
    if (!req)
        return null;

    var tok = userID + ':' + password;
    var hash = encode64(tok);

    req.open('GET', url)
    req.setRequestHeader('Authorization', "Basic " + hash);
    req.send(null);

    return req.responseText;

}

function RMBLgetSelectData(requestData) {
    var templateInfo = RMBLgetTemplateInfo(requestData);

    var returns = templateInfo.returns;
    var translations = templateInfo.translations;

    var localRequestData = null;
    try {
        localRequestData = jsonParse(JSON.stringify(requestData.actionDetail.loadselect.request.data));
    } catch (e) {
        localRequestData = new Object();
    }
    localRequestData["key"] = requestData.key;
    localRequestData["return:fields"] = returns;
    localRequestData["return:fields"].push(requestData.key);
    localRequestData["form:dataSource"] = requestData.parameter;
    localRequestData["form:connection"] = requestData.connection;
    localRequestData["form:connectionType"] = requestData.connectionType;
    if (typeof requestData.actionDetail != "undefined") {
        localRequestData["form:actionDetail"] = requestData.actionDetail;
    }

    return loadJSON("", requestData.parameter, "LoadSelect", JSON.stringify(localRequestData)).data;

}

function loadSelect(selectField, url, request, listKey, listValue, listFilter) {

    var req = "";
    // Clear List
    while (selectField.hasChildNodes()) {
        selectField.removeChild(selectField.firstChild);
    }

    var requestData = new Object();
    requestData["parameter"] = request;
    requestData["connection"] = selectField.getAttribute("connection");
    requestData["connectionType"] = selectField.getAttribute("connectiontype");
    requestData["key"] = listKey;
    requestData["value"] = listValue;
    if (selectField.getAttribute("actionDetail") != "") {
        requestData["actionDetail"] = jsonParse(selectField.getAttribute("actionDetail"));
    }
    var theResponse = RMBLgetSelectData(requestData);

    /*

    var templateInfo = RMBLgetTemplateInfo(listValue);

    var returns = templateInfo.returns;
    var translations = templateInfo.translations;

    var requestData = null;
    try {
    requestData = jsonParse(selectField.getAttribute("actionDetail")).loadselect.request.data;
    } catch (e) {
    requestData = new Object();
    }
    requestData["key"] = listKey;
    requestData["return:fields"] = returns;
    requestData["return:fields"].push(listKey);
    requestData["form:dataSource"] = request;
    requestData["form:connection"] = selectField.getAttribute("connection");
    requestData["form:connectionType"] = selectField.getAttribute("connectiontype");
    if (selectField.getAttribute("actionDetail") != "") {
    requestData["form:actionDetail"] = jsonParse(selectField.getAttribute("actionDetail"));
    }
    //requestData["form:key"] = formKeyId;
    //requestData["form:keygen"] = formKeyGen;
    //return ({ "dataSource": theForm.getAttribute("dataSource"), "key": formKeyId, "data": jsonForm });



    //    requestData["key"] = listKey;
    //    requestData["value"] = listValue;
    //    requestData["filter"] = listFilter;


    //     requestData["form:connection"] = selectField.getAttribute("connection");
    //     requestData["form:connectionType"] = selectField.getAttribute("connectiontype");
    //     if (selectField.getAttribute("actionDetail") != "") {
    //         requestData["form:actionDetail"] = jsonParse(selectField.getAttribute("actionDetail"));
    //     }

   

    theResponse = loadJSON(url, request, "LoadSelect", JSON.stringify(requestData));
    //alert(JSON.stringify(theResponse));

    //req = new XMLHttpRequest();
    //req.open("POST", url, false);
    //req.send(request);

    */

    if (theResponse) {
        //req.onload = function(){
        //var theResponse = jsonParse(req.responseText);

        dataElement = document.createElement("option");
        dataElement.setAttribute("value", "")
        selectField.appendChild(dataElement)

        for (var group in theResponse) {
            //if(typeof(theResponse[group].KEY) == "undefined") break;

            dataElement = document.createElement("option");
            dataElement.setAttribute("value", (theResponse[group])[listKey])
            selectField.appendChild(dataElement)
            //dataValue = document.createTextNode(RMBLReplaceTemplateVariables(listValue, theResponse[group], translations));
            dataValue = document.createTextNode(RMBLReplaceTemplateVariables(listValue, theResponse[group], new Object()));
            dataElement.appendChild(dataValue);
        }
        //};
    }
    //req.send(request);
    //}
}

function removeDuplicateElements(arrayName) {
    var newArray = new Array();
    label: for (var i = 0; i < arrayName.length; i++) {
        for (var j = 0; j < newArray.length; j++) {
            if (newArray[j] == arrayName[i])
                continue label;
        }
        newArray[newArray.length] = arrayName[i];
    }
    return newArray;
}

function RMBLgetTemplateInfo(templateData) {

    var templateString = templateData.value;
    var translations = new Object();

    //var returns = document.getElementById(listContainer).innerHTML.match(/\[.*?\]/g);

    var returns = templateString.match(/\[.*?\]/g);
    for (var i = 0; i < returns.length; i++) {
        returns[i] = returns[i].replace(/\[.* /, "[");
        returns[i] = returns[i].replace(/[\[\]]/g, "");
    }

    returns = removeDuplicateElements(returns);

    for (var i = 0; i < returns.length; i++) {
        if (returns[i].indexOf("@") > -1) {
            var valueRequest = returns[i].substr((returns[i].indexOf("@") + 1));
            var theValues = RMBLgetSelectData(templateData.translations[valueRequest]);

            /*
            var valueURL = "";
            if (valueRequest.indexOf(":") > -1) {
            valueURL = valueRequest.substr(valueRequest.indexOf(":") + 1);
            valueRequest = valueRequest.substr(0, valueRequest.indexOf(":"));
            }
            var requestData = new Object();
            var lookupInfo = valueRequest.split(",");
            requestData["key"] = lookupInfo[1];
            requestData["value"] = lookupInfo[2];
            requestData["filter"] = lookupInfo[3];

            dsrgerte4534536346ergsggdg54!@@@@@@!!!!!!!!
            requestData["form:dataSource"] = request;
            requestData["form:connection"] = selectField.getAttribute("connection");
            requestData["form:connectionType"] = selectField.getAttribute("connectiontype");
            if (selectField.getAttribute("actionDetail") != "") {
            requestData["form:actionDetail"] = jsonParse(selectField.getAttribute("actionDetail"));
            }



            var theValues = loadJSON(valueURL, lookupInfo[0], "LoadSelect", JSON.stringify(requestData));
            */
            returns[i] = returns[i].substr(0, returns[i].indexOf("@"));

            //returns[i] = convertId(document.getElementById(RMBLfindPanel(document.getElementById(listContainer)) + "." + returns[i]), "search", "response");

            var translationItems = new Object();
            translationItems[""] = "";

            for (var theItem in theValues) {
                translationItems[theValues[theItem][templateData.translations[valueRequest]["key"]]] = RMBLReplaceTemplateVariables(templateData.translations[valueRequest].value, theValues[theItem], new Object());
            }
            translations[returns[i]] = translationItems;
            //translations[returns[i]] = theValues;
        } else {
            //returns[i] = convertId(document.getElementById(RMBLfindPanel(document.getElementById(listContainer)) + "." + returns[i]), "search", "response");
        }
    }

    return { "returns": returns, "translations": translations };

}

function searchRecordsList(theForm, listContainer, xrefSubformInfo, action) {
    // swap the following two lines when we have the web service
    //var searchStringValue = document.getElementById(searchString).value;
    xrefSubformInfo = (typeof xrefSubformInfo == "undefined") ? "" : xrefSubformInfo;

    try {
        document.getElementById("RMBLprogress").style.display = "block";
    } catch (e) {
    }

    setTimeout(function () {
        var listContainerObject = document.getElementById(listContainer);
        var resultLineObject = null;
        for (var i = 0; i < listContainerObject.childNodes.length; i++) {
            var classTest = "";
            try {
                if (listContainerObject.childNodes[i].getAttribute('className')) {
                    classTest = listContainerObject.childNodes[i].getAttribute('className');
                } else if (listContainerObject.childNodes[i].getAttribute('class')) {
                    classTest = listContainerObject.childNodes[i].getAttribute('class');
                }
                if (classTest.indexOf("template") != -1) {
                    resultLineObject = listContainerObject.childNodes[i];
                    break;
                }
            }
            catch (e) { }
        }

        /////////////////
        var requestData = new Object();
        requestData["value"] = resultLineObject.innerHTML;
        var translationString = resultLineObject.getAttribute("translation");
        if (translationString !== null && translationString != "") {
            requestData["translations"] = JSON.parse(translationString);
        } else {
            requestData["translations"] = "";
        }

        var templateInfo = RMBLgetTemplateInfo(requestData);

        /////////////////

        var returns = templateInfo.returns;
        var translations = templateInfo.translations;



        if (xrefSubformInfo[0] == "" && action != "Export") {
            var tmpHoldResultLine = clearList(listContainerObject, resultLineObject);
        } else {
            var formInfo = "";
            if (xrefSubformInfo == "") {
                formInfo = gatherForm(theForm, true, action);
            } else {
                theForm = new Object;
                theForm.id = xrefSubformInfo[2] + "Search";
                formInfo = new Object;
                formInfo.data = new Object;
                formInfo.data["sub:Key"] = xrefSubformInfo[0];
                /*
                formInfo.data["sub:secondaryDataSource"] = xrefSubformInfo[1];
                formInfo.data["sub:primaryDataSource"] = xrefSubformInfo[2];
                formInfo.data["sub:primaryKey"] = xrefSubformInfo[3];
                formInfo.data["sub:secondaryKey"] = xrefSubformInfo[4];
                */
                formInfo.data["sub:dataSource"] = xrefSubformInfo[1];
                formInfo.data["sub:parentDataSource"] = xrefSubformInfo[2];
                formInfo.data["sub:parentReference"] = xrefSubformInfo[3];
                formInfo.data["sub:childKey"] = xrefSubformInfo[4];

                formInfo.data["sub:childReference"] = xrefSubformInfo[5];
                //formInfo.data["key"] = xrefSubformInfo[6];

                // Need to add logic to be able to have multiple keys.
                formInfo.data["key"] = convertKeyId({ "key": xrefSubformInfo[6], "actionDetail": (xrefSubformInfo[9] == "") ? "" : jsonParse(xrefSubformInfo[9].replace(/\|/g, ",")) }, "subsearch", "response", xrefSubformInfo[6]);



                formInfo.data["form:connection"] = xrefSubformInfo[7];
                formInfo.data["form:connectionType"] = xrefSubformInfo[8];
                formInfo.data["form:actionDetail"] = (xrefSubformInfo[9] == "") ? "" : jsonParse(xrefSubformInfo[9].replace(/\|/g, ","));



            }

            // Create Detail Page if it doesn't exist.
            //var thePage = theForm.getAttribute("detail");
            //if (document.getElementById(thePage) == null) {
            //    RMBbuildPanel(thePage, "");
            //}

            //formInfo["return"] = gatherForm(document.getElementById(thePage).getElementsByTagName("input")[0].form);

            ///////
            if (formInfo != null) {
                var theResponse = null;
                formInfo.data["return:fields"] = returns;
                if (xrefSubformInfo == "") {
                    theResponse = loadJSON("", theForm.id, action, JSON.stringify(formInfo.data));
                } else {
                    theResponse = loadJSON("", theForm.id, "subsearch", JSON.stringify(formInfo.data));
                }
            }


            if (typeof theResponse != "undefined") {
                //LoadForm(theForm.id.replace('Form', ''), "", theResponse.datakey, theResponse.message);
                if (typeof theResponse.status.result != "undefined" && theResponse.status.result != "true") { // I don't know why I need "undefined" all of the sudden!
                    alert(theResponse.status.message);
                    try {
                        document.getElementById("RMBLprogress").style.display = "none";
                    } catch (e) {
                    }
                    return true;
                }
            }
            theResponse = theResponse.data;

            //try {
            populateList(listContainerObject, resultLineObject, theResponse, translations);
            //} catch(e){}
        }
        try {
            document.getElementById("RMBLprogress").style.display = "none";
        } catch (e) {
        }
    }, 1000);
    return true;
}

function searchRecordsTree(theForm, listContainer, action) {
    // uncomment the following line when we have the web service
    //var searchStringValue = document.getElementById(searchString).value;

    try {
        document.getElementById("RMBLprogress").style.display = "block";
    } catch (e) {
    }

    setTimeout(function () {

        var formInfo = gatherForm(theForm, true, action);
        var theKey = document.getElementById(theForm.id + "Results").getAttribute("key");
        var theparentKey = document.getElementById(theForm.id + "Results").getAttribute("parentKey");

        // Create Detail Page if it doesn't exist.
        //var thePage = theForm.getAttribute("detail");
        //if (document.getElementById(thePage) == null) {
        //    RMBbuildPanel(thePage, "");
        //}

        //formInfo["return"] = gatherForm(document.getElementById(thePage).getElementsByTagName("input")[0].form);
        var translations = new Object();

        var returns = document.getElementById(theForm.id + "Results").innerHTML.match(/\[.*?\]/g);
        for (var i = 0; i < returns.length; i++) {
            returns[i] = returns[i].replace(/\[.* /, "[");
            returns[i] = returns[i].replace(/[\[\]]/g, "");
        }
        returns[i] = document.getElementById(theForm.id + "Results").getAttribute("parentKey");
        returns = removeDuplicateElements(returns);

        for (var i = 0; i < returns.length; i++) {
            if (returns[i].indexOf("@") > -1) {
                var valueRequest = returns[i].substr((returns[i].indexOf("@") + 1));
                var valueURL = "";
                if (valueRequest.indexOf("$") > -1) {
                    valueURL = valueRequest.substr(valueRequest.indexOf(":") + 1);
                    valueRequest = valueRequest.substr(0, valueRequest.indexOf(":"));
                }
                var requestData = new Object();
                var lookupInfo = valueRequest.split(",");
                requestData["key"] = lookupInfo[1];
                requestData["value"] = lookupInfo[2];
                requestData["filter"] = lookupInfo[3];

                var theValues = loadJSON(valueURL, lookupInfo[0], "LoadSelect", JSON.stringify(requestData)).data;
                returns[i] = returns[i].substr(0, returns[i].indexOf("@"));
                var translationItems = new Object();
                translationItems[""] = "";
                for (var theItem in theValues) {
                    translationItems[theValues[theItem]["KEY"]] = theValues[theItem]["VALUE"];
                }
                translations[returns[i]] = translationItems;
                //translations[returns[i]] = theValues;
            }
        }


        if (formInfo != null) {
            formInfo.data["return:fields"] = returns;
            var theResponse = loadJSON("", theForm.id, action, JSON.stringify(formInfo.data)).data;
        }

        var listContainerObject = document.getElementById(listContainer);
        var resultLineObject = null;
        for (var i = 0; i < listContainerObject.childNodes.length; i++) {
            var classTest = "";
            try {
                if (listContainerObject.childNodes[i].getAttribute('className')) {
                    classTest = listContainerObject.childNodes[i].getAttribute('className');
                } else if (listContainerObject.childNodes[i].getAttribute('class')) {
                    classTest = listContainerObject.childNodes[i].getAttribute('class');
                }
                if (classTest.indexOf("template") != -1) {
                    resultLineObject = listContainerObject.childNodes[i];
                    break;
                }
            }
            catch (e) { }
        }
        // Clear List
        var holdResultLine;
        while (listContainerObject.hasChildNodes()) {
            if (listContainerObject.firstChild == resultLineObject) {
                holdResultLine = listContainerObject.removeChild(listContainerObject.firstChild);
            } else {
                listContainerObject.removeChild(listContainerObject.firstChild);
            }
        }
        listContainerObject.appendChild(holdResultLine);
        // Populate New List
        var lastParentID = "";
        // Create Top List Item
        var topElement = document.createElement("ul");
        topElement.setAttribute("id", listContainer + "Top");
        topElement.setAttribute("class", "collapseTree");
        topElement.setAttribute("className", "collapseTree");
        listContainerObject.appendChild(topElement);
        var lineContainer = document.getElementById(listContainer + "Top");

        for (var group in theResponse) {
            var clickArea = null;
            var dataElement = null;
            var dataValue = null;
            var buttonArea = null;
            var buttonImage = null;

            var linkElement = null;

            //if (typeof (theResponse[group].ID) == "undefined") break;

            var parentID = theResponse[group][theparentKey];

            if (parentID != lastParentID) {
                if (parentID == "") {
                    lineContainer = topElement;
                } else {
                    lineContainer = document.getElementById(listContainer + parentID);
                    if (lineContainer == null) {
                        lineContainer = topElement;
                    }
                    if (lineContainer.tagName.toUpperCase() == "LI") {
                        lineContainer.setAttribute("id", ""); // Should I use removeAttribute("id")?
                        dataElement = document.createElement("a");
                        dataElement.setAttribute("href", "#");
                        dataElement.setAttribute("onclick", "expandTree(this.parentNode); return false;");
                        lineContainer.insertBefore(dataElement, lineContainer.childNodes[0]);
                        dataValue = document.createTextNode("+ ");
                        dataElement.appendChild(dataValue);
                        dataElement = document.createElement("ul");
                        dataElement.setAttribute("id", listContainer + parentID);
                        dataElement.style.display = "none";
                        lineContainer.appendChild(dataElement);
                        lineContainer = document.getElementById(listContainer + parentID);
                    }
                    lastParentID = parentID;
                }
            }

            dataElement = document.createElement("li");
            dataElement.setAttribute("id", listContainer + theResponse[group][theKey]);
            lineContainer.appendChild(dataElement);

            populateTemplate(holdResultLine, theResponse[group], dataElement, translations);

            /*
            linkElement = document.createElement("a");
            linkElement.setAttribute("href","#");
            linkElement.setAttribute("onclick",'groupDetails("'+searchResultObject[group].ID+'","'+searchResultObject[group].parentID+'","'+searchResultObject[group].name+'","'+searchResultObject[group].description+'");return false;');
            dataElement.appendChild(linkElement);
            dataValue = document.createTextNode(searchResultObject[group].name);    
            linkElement.appendChild(dataValue);
            */
        }

        try {
            document.getElementById("RMBLprogress").style.display = "none";
        } catch (e) {
        }
    }, 1);

    return true;
}


function LoadForm(thePage, theURL, theKey, theMessage) {
    //alert("thePage: " + thePage);
    //alert(theKey);
    //alert("thepage: " + thePage + "\ntheURL: " + theURL + "\ntheKey: " + theKey + "\ntheMessage: " + theMessage);
    try {
        document.getElementById("RMBLprogress").style.display = "block";
        //document.getElementById("RMBLprogress").style.display = "block";
    } catch (e) {
    }

    setTimeout(function () {
        try {
            if (document.getElementById(thePage) == null) {
                if (!RMBbuildPanel(thePage, "")) {
                    return false;
                }
            }
        } catch (e) {
            try {
                document.getElementById("RMBLprogress").style.display = "none";
            } catch (ne) {
            }
        }

        thePageObject = document.getElementById(thePage);


        if (theKey != "cancel" && thePageObject.getElementsByTagName("input")[0] != 'undefined') {
            var selects = thePageObject.getElementsByTagName("select");
            for (var i = 0; i < selects.length; i++) {
                var listURL = "";
                var listParameters = "";
                var listKey = "";
                var listValue = "";
                var listFilter = "";

                try {
                    listURL = selects[i].getAttribute("listurl");
                }
                catch (e) { }
                try {
                    listParameters = selects[i].getAttribute("listparameters");
                }
                catch (e) { }
                try {
                    listKey = selects[i].getAttribute("listkey");
                }
                catch (e) { }
                try {
                    listValue = selects[i].getAttribute("listvalue");
                }
                catch (e) { }
                try {
                    listFilter = selects[i].getAttribute("listfilter");
                }
                catch (e) { }

                //if ((listURL + listParameters + listConnectionType).length > 0) {
                loadSelect(selects[i], listURL, listParameters, listKey, listValue, listFilter);
                //}
            }

            // Retrieve JSON Info
            //  .
            //  .
            //  .
            //var theRecord = loadJSON(theURL, '{"request":"'+thePage+'","searchstring":"'+theKey+'"}');

            var theRecord = "";

            try {
                var theForm = thePageObject.getElementsByTagName("input")[0].form;

                var formInfo = gatherForm(theForm, false, "load", "request");
                var formInfoResponse = gatherForm(theForm, false, "load", "response");
                formInfo.data["return:fields"] = formInfoResponse.data["return:fields"];
                formInfo.data[formInfo.data["form:key"]] = theKey;
                //formInfo.data[formInfo.data["form:key"]] = convertKeyId(panelData, "load", "response");
            } catch (e) { }

            if (theKey != "") {
                //alert(JSON.stringify(formInfo.data));
                theRecord = loadJSON(theURL, thePage + "Form", "Load", JSON.stringify(formInfo.data)).data;
                //alert(JSON.stringify(theRecord));
            }
            if (thePageObject.getElementsByTagName("form").length > 0) {
                populateForm(thePageObject.getElementsByTagName("form")[0].elements, theRecord, thePage);
            }

            // I think this is to process list field types.
            var theDivs = thePageObject.getElementsByTagName("div");
            var theSpans = thePageObject.getElementsByTagName("span");
            for (var i = 0; i < theDivs.length + theSpans.length; i++) {
                var element = (i < theDivs.length) ? theDivs[i] : theSpans[i - theDivs.length];
                var searchURL = "";
                var searchString = "";
                try {
                    searchURL = element.getAttribute("searchurl");
                }
                catch (e) { }
                try {
                    searchString = element.getAttribute("searchstring");
                }
                catch (e) { }

                if ((searchURL + searchString).length > 0) {
                    try {
                        // Only this way until we get the web services going
                        searchRecordsList("", element.id + "SearchResults", (theKey + "," + document.getElementById(element.id + "xrefSubform").value).split(","));

                    } catch (e) { }
                    //loadSelect(element, searchURL, searchString);
                }
                var classTest = "";
                if (element.getAttribute('className')) {
                    classTest = element.getAttribute('className');
                } else if (element.getAttribute('class')) {
                    classTest = element.getAttribute('class');
                }
                if (classTest.indexOf("pageMessage") != -1) {
                    if (theMessage.trim() == "") {
                        element.innerText = "";
                        element.style.display = "none";
                    } else {
                        element.innerText = theMessage;
                        if (element.tagName.toLowerCase() == "div") {
                            element.style.display = "block";
                        } else {
                            element.style.display = "inline";
                        }
                    }
                }

            }

        }
        RMMChangePage(thePage);
        try {
            document.getElementById("RMBLprogress").style.display = "none";
        } catch (e) {
        }
    }, 100);
    return true;
}

function RMBLgetSystem() {

    var queryParms = ((document.location.toString()).toLowerCase().substr((document.location.toString()).indexOf("?") + 1)).split("&");

    var theSystem = "";

    for (parm in queryParms) {
        var key = queryParms[parm].split("=")[0];
        var value = queryParms[parm].split("=")[1];
        if (key == "sys") {
            theSystem = value.replace("#", "");
            break;
        }
    }

    return theSystem;
}


function loadFile(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send();
    if (req) {
        //alert(req.responseText);
        return (req.responseText);
    }
}

function loadJSON(url, request, action, requestData) {

    var theSystem = RMBLgetSystem();
    if (theSystem != "") {
        theSystem = "/" + theSystem;
    }

    if (requestData.substr(0, 1) != "{") {
        requestData = "{\"value\":\"" + requestData + "\"}";
    }
    //alert(url);

    var req = null;

    try {
        //alert(url);
        var dataString = eval(request);
        //if ((typeof dataString).toString().toLowerCase() == "object") {
        //alert(dataString);
        //    return (dataString);
        //} else {
        //alert(dataString);
            return (jsonParse(dataString));
        //}

    } catch (e) {
        var postString = '{"request":"' + request + '","action":"' + action + '","requestData":' + requestData + '}';

        try {
            if (url == "") {
                url = "custom" + theSystem + "/services/" + request;
            }
            //alert(url);
            //alert(req.responseText);
            //Test to see if this url is ok
            req = new XMLHttpRequest();
            req.open("POST", url, false);
            req.send();

            if(req.status == 200)
            if (action == "Export") {
                var theBody = document.getElementsByTagName("body")[0];
                var theForm = document.createElement("form");
                theForm.setAttribute("method", "POST");
                theForm.setAttribute("action", url);
                theBody.appendChild(theForm);
                var theField = document.createElement("input");
                theField.setAttribute("name", "attachmentRequest");
                theField.setAttribute("value", postString);
                theForm.appendChild(theField);
                theForm.submit();
                theForm.parentNode.removeChild(theForm);
                return ("");
            } else {
                req = new XMLHttpRequest();
                req.open("POST", url, false);
                req.send(postString);
                if (req) {
                    //alert(req.responseText);
                    return (jsonParse(req.responseText));
                }
            }
        } catch (e) { }
        //Needed for Microsoft Visual Studio.
        //Comment out this try/catch when on a server.
        try {
            //if (window.location.toString().indexOf("localhost") > -1) {
            //if (url == "") {
            url += "/default.aspx";
            //}
            //Test to see if this url is ok
            req = new XMLHttpRequest();
            req.open("POST", url, false);
            req.send();

            if (req.status == 200)
            if (action == "Export") {
                var theBody = document.getElementsByTagName("body")[0];
                var theForm = document.createElement("form");
                theForm.setAttribute("method", "POST");
                theForm.setAttribute("action", url);
                theBody.appendChild(theForm);
                var theField = document.createElement("input");
                theField.setAttribute("name", "attachmentRequest");
                theField.setAttribute("value", postString);
                theForm.appendChild(theField);
                theForm.submit();
                theForm.parentNode.removeChild(theForm);
                return ("");
            } else {
                req = new XMLHttpRequest();
                req.open("POST", url, false);
                req.send(postString);
                if (req) {
                    //alert(req.responseText);
                    return (jsonParse(req.responseText));
                }
            }
        } catch (e) { }
        try {
            //if (url == "") {
            url = "custom" + theSystem + "/services/catchAll"
            //}
            //Test to see if this url is ok
            req = new XMLHttpRequest();
            req.open("POST", url, false);
            req.send();

            if (req.status == 200)
            if (action == "Export") {
                var theBody = document.getElementsByTagName("body")[0];
                var theForm = document.createElement("form");
                theForm.setAttribute("method", "POST");
                theForm.setAttribute("action", url);
                theBody.appendChild(theForm);
                var theField = document.createElement("input");
                theField.setAttribute("name", "attachmentRequest");
                theField.setAttribute("value", postString);
                theForm.appendChild(theField);
                theForm.submit();
                theForm.parentNode.removeChild(theForm);
                return ("");
            } else {
                req = new XMLHttpRequest();
                req.open("POST", url, false);
                req.send(postString);
                if (req) {
                    //alert(req.responseText);
                    return (jsonParse(req.responseText));
                }
            }
        } catch (e) { }
        //Needed for Microsoft Visual Studio.
        //Comment out this try/catch when on a server.
        try {
            //if (window.location.toString().indexOf("localhost") > -1) {
            //if (url == "") {
            url += "/default.aspx";
            //}
            //Test to see if this url is ok
            req = new XMLHttpRequest();
            req.open("POST", url, false);
            req.send();

            if (req.status == 200)
            if (action == "Export") {
                var theBody = document.getElementsByTagName("body")[0];
                var theForm = document.createElement("form");
                theForm.setAttribute("method", "POST");
                theForm.setAttribute("action", url);
                theBody.appendChild(theForm);
                var theField = document.createElement("input");
                theField.setAttribute("name", "attachmentRequest");
                theField.setAttribute("value", postString);
                theForm.appendChild(theField);
                theForm.submit();
                theForm.parentNode.removeChild(theForm);
                return ("");
            } else {
                req = new XMLHttpRequest();
                req.open("POST", url, false);
                req.send(postString);
                if (req) {
                    //alert(req.responseText);
                    return (jsonParse(req.responseText));
                }
            }
            //}
        } catch (e) { }
        try {
            //if (url == "") {
            url = "WebAppToolkit/services/catchAll"
            //}
            //Test to see if this url is ok
            req = new XMLHttpRequest();
            req.open("POST", url, false);
            req.send();

            if (req.status == 200)
            if (action == "Export") {
                var theBody = document.getElementsByTagName("body")[0];
                var theForm = document.createElement("form");
                theForm.setAttribute("method", "POST");
                theForm.setAttribute("action", url);
                theBody.appendChild(theForm);
                var theField = document.createElement("input");
                theField.setAttribute("name", "attachmentRequest");
                theField.setAttribute("value", postString);
                theForm.appendChild(theField);
                theForm.submit();
                theForm.parentNode.removeChild(theForm);
                return ("");
            } else {
                req = new XMLHttpRequest();
                req.open("POST", url, false);
                req.send(postString);
                if (req) {
                    //alert(req.responseText);
                    return (jsonParse(req.responseText));
                }
            }
        } catch (e) { }
        //Needed for Microsoft Visual Studio.
        //Comment out this try/catch when on a server.
        try {
            //if (window.location.toString().indexOf("localhost") > -1) {
            //if (url == "") {
            url += "/default.aspx";
            //}
            //Test to see if this url is ok
            req = new XMLHttpRequest();
            req.open("POST", url, false);
            req.send();

            if (req.status == 200)
            if (action == "Export") {
                var theBody = document.getElementsByTagName("body")[0];
                var theForm = document.createElement("form");
                theForm.setAttribute("method", "POST");
                theForm.setAttribute("action", url);
                theBody.appendChild(theForm);
                var theField = document.createElement("input");
                theField.setAttribute("name", "attachmentRequest");
                theField.setAttribute("value", postString);
                theForm.appendChild(theField);
                theForm.submit();
                theForm.parentNode.removeChild(theForm);
                return ("");
            } else {
                req = new XMLHttpRequest();
                req.open("POST", url, false);
                req.send(postString);
                if (req) {
                    //alert(req.responseText);
                    return (jsonParse(req.responseText));
                }
            }
            //}
        } catch (e) {
            var responseText = "";
            if (typeof req.responseText != "undefined") {
                responseText = req.responseText;
            }
            alert("We were unable to process your request at this time.\r\nPlease try again later.\r\n \r\n" + postString + "\r\n \r\n" + e + "\r\n \r\n" + responseText);
        }

    }

}

function getMouseX(evt) {
    if (evt.pageX) return evt.pageX;
    else if (evt.clientX)
        return evt.clientX + (document.documentElement.scrollLeft ?
       document.documentElement.scrollLeft :
       document.body.scrollLeft);
    else return null;
}
function getMouseY(evt) {
    if (evt.pageY) return evt.pageY;
    else if (evt.clientY)
        return evt.clientY + (document.documentElement.scrollTop ?
       document.documentElement.scrollTop :
       document.body.scrollTop);
    else return null;
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        //alert(url);
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    if (xhr) {
        xhr.send();
    }
    return xhr;
}

var jsonParse = (function () {
    var number
      = '(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)';
    var oneChar = '(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]'
      + '|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';
    var string = '(?:\"' + oneChar + '*\")';

    // Will match a value in a well-formed JSON file.
    // If the input is not well-formed, may match strangely, but not in an unsafe
    // way.
    // Since this only matches value tokens, it does not match whitespace, colons,
    // or commas.
    var jsonToken = new RegExp(
      '(?:false|true|null|[\\{\\}\\[\\]]'
      + '|' + number
      + '|' + string
      + ')', 'g');

    // Matches escape sequences in a string literal
    var escapeSequence = new RegExp('\\\\(?:([^u])|u(.{4}))', 'g');

    // Decodes escape sequences in object literals
    var escapes = {
        '"': '"',
        '/': '/',
        '\\': '\\',
        'b': '\b',
        'f': '\f',
        'n': '\n',
        'r': '\r',
        't': '\t'
    };
    function unescapeOne(_, ch, hex) {
        return ch ? escapes[ch] : String.fromCharCode(parseInt(hex, 16));
    }

    // A non-falsy value that coerces to the empty string when used as a key.
    var EMPTY_STRING = new String('');
    var SLASH = '\\';

    // Constructor to use based on an open token.
    var firstTokenCtors = { '{': Object, '[': Array };

    var hop = Object.hasOwnProperty;

    return function (json, opt_reviver) {
        // Check to see if we can use the standard
        if ((typeof JSON) != "undefined") {
            return JSON.parse(json);
        }

        // Split into tokens
        var toks = json.match(jsonToken);
        // Construct the object to return
        var result;
        var tok = toks[0];
        var topLevelPrimitive = false;
        if ('{' === tok) {
            result = {};
        } else if ('[' === tok) {
            result = [];
        } else {
            // The RFC only allows arrays or objects at the top level, but the JSON.parse
            // defined by the EcmaScript 5 draft does allow strings, booleans, numbers, and null
            // at the top level.
            result = [];
            topLevelPrimitive = true;
        }

        // If undefined, the key in an object key/value record to use for the next
        // value parsed.
        var key;
        // Loop over remaining tokens maintaining a stack of uncompleted objects and
        // arrays.
        var stack = [result];
        for (var i = 1 - topLevelPrimitive, n = toks.length; i < n; ++i) {
            tok = toks[i];

            var cont;
            switch (tok.charCodeAt(0)) {
                default:  // sign or digit
                    cont = stack[0];
                    cont[key || cont.length] = +(tok);
                    key = void 0;
                    break;
                case 0x22:  // '"'
                    tok = tok.substring(1, tok.length - 1);
                    if (tok.indexOf(SLASH) !== -1) {
                        tok = tok.replace(escapeSequence, unescapeOne);
                    }
                    cont = stack[0];
                    if (!key) {
                        if (cont instanceof Array) {
                            key = cont.length;
                        } else {
                            key = tok || EMPTY_STRING;  // Use as key for next value seen.
                            break;
                        }
                    }
                    cont[key] = tok;
                    key = void 0;
                    break;
                case 0x5b:  // '['
                    cont = stack[0];
                    stack.unshift(cont[key || cont.length] = []);
                    key = void 0;
                    break;
                case 0x5d:  // ']'
                    stack.shift();
                    break;
                case 0x66:  // 'f'
                    cont = stack[0];
                    cont[key || cont.length] = false;
                    key = void 0;
                    break;
                case 0x6e:  // 'n'
                    cont = stack[0];
                    cont[key || cont.length] = null;
                    key = void 0;
                    break;
                case 0x74:  // 't'
                    cont = stack[0];
                    cont[key || cont.length] = true;
                    key = void 0;
                    break;
                case 0x7b:  // '{'
                    cont = stack[0];
                    stack.unshift(cont[key || cont.length] = {});
                    key = void 0;
                    break;
                case 0x7d:  // '}'
                    stack.shift();
                    break;
            }
        }
        // Fail if we've got an uncompleted object.
        if (topLevelPrimitive) {
            if (stack.length !== 1) { throw new Error(); }
            result = result[0];
        } else {
            if (stack.length) { throw new Error(); }
        }

        if (opt_reviver) {
            // Based on walk as implemented in http://www.json.org/json2.js
            var walk = function (holder, key) {
                var value = holder[key];
                if (value && typeof value === 'object') {
                    var toDelete = null;
                    for (var k in value) {
                        if (hop.call(value, k) && value !== holder) {
                            // Recurse to properties first.  This has the effect of causing
                            // the reviver to be called on the object graph depth-first.

                            // Since 'this' is bound to the holder of the property, the
                            // reviver can access sibling properties of k including ones
                            // that have not yet been revived.

                            // The value returned by the reviver is used in place of the
                            // current value of property k.
                            // If it returns undefined then the property is deleted.
                            var v = walk(value, k);
                            if (v !== void 0) {
                                value[k] = v;
                            } else {
                                // Deleting properties inside the loop has vaguely defined
                                // semantics in ES3 and ES3.1.
                                if (!toDelete) { toDelete = []; }
                                toDelete.push(k);
                            }
                        }
                    }
                    if (toDelete) {
                        for (var i = toDelete.length; --i >= 0; ) {
                            delete value[toDelete[i]];
                        }
                    }
                }
                return opt_reviver.call(holder, key, value);
            };
            result = walk({ '': result }, '');
        }

        return result;
    };
})();

/*
function RMBLguid() {
var S4 = function () {
return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
*/

//UUID/Guid Generator
// use: UUID.create() or UUID.createSequential()
// convenience:  UUID.empty, UUID.tryParse(string)
(function (w) {
    // From http://baagoe.com/en/RandomMusings/javascript/
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    function Mash() {
        var n = 0xefc8249d;

        var mash = function (data) {
            data = data.toString();
            for (var i = 0; i < data.length; i++) {
                n += data.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 0x100000000; // 2^32
            }
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        };

        mash.version = 'Mash 0.9';
        return mash;
    }

    // From http://baagoe.com/en/RandomMusings/javascript/
    function Kybos() {
        return (function (args) {
            // Johannes Baagøe <baagoe@baagoe.com>, 2010
            var s0 = 0;
            var s1 = 0;
            var s2 = 0;
            var c = 1;
            var s = [];
            var k = 0;

            var mash = Mash();
            var s0 = mash(' ');
            var s1 = mash(' ');
            var s2 = mash(' ');
            for (var j = 0; j < 8; j++) {
                s[j] = mash(' ');
            }

            if (args.length == 0) {
                args = [+new Date];
            }
            for (var i = 0; i < args.length; i++) {
                s0 -= mash(args[i]);
                if (s0 < 0) {
                    s0 += 1;
                }
                s1 -= mash(args[i]);
                if (s1 < 0) {
                    s1 += 1;
                }
                s2 -= mash(args[i]);
                if (s2 < 0) {
                    s2 += 1;
                }
                for (var j = 0; j < 8; j++) {
                    s[j] -= mash(args[i]);
                    if (s[j] < 0) {
                        s[j] += 1;
                    }
                }
            }

            var random = function () {
                var a = 2091639;
                k = s[k] * 8 | 0;
                var r = s[k];
                var t = a * s0 + c * 2.3283064365386963e-10; // 2^-32
                s0 = s1;
                s1 = s2;
                s2 = t - (c = t | 0);
                s[k] -= s2;
                if (s[k] < 0) {
                    s[k] += 1;
                }
                return r;
            };
            random.uint32 = function () {
                return random() * 0x100000000; // 2^32
            };
            random.fract53 = function () {
                return random() +
      (random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
            };
            random.addNoise = function () {
                for (var i = arguments.length - 1; i >= 0; i--) {
                    for (j = 0; j < 8; j++) {
                        s[j] -= mash(arguments[i]);
                        if (s[j] < 0) {
                            s[j] += 1;
                        }
                    }
                }
            };
            random.version = 'Kybos 0.9';
            random.args = args;
            return random;

        } (Array.prototype.slice.call(arguments)));
    };

    var rnd = Kybos();

    // UUID/GUID implementation from http://frugalcoder.us/post/2012/01/13/javascript-guid-uuid-generator.aspx
    var UUID = {
        "empty": "00000000-0000-0000-0000-000000000000"
    , "parse": function (input) {
        var ret = input.toString().trim().toLowerCase().replace(/^[\s\r\n]+|[\{\}]|[\s\r\n]+$/g, "");
        if ((/[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}/).test(ret))
            return ret;
        else
            throw new Error("Unable to parse UUID");
    }
    , "createSequential": function () {
        var ret = new Date().valueOf().toString(16).replace("-", "")
        for (; ret.length < 12; ret = "0" + ret);
        ret = ret.substr(ret.length - 12, 12); //only least significant part
        for (; ret.length < 32; ret += Math.floor(rnd() * 0xffffffff).toString(16));
        return [ret.substr(0, 8), ret.substr(8, 4), "4" + ret.substr(12, 3), "89AB"[Math.floor(Math.random() * 4)] + ret.substr(16, 3), ret.substr(20, 12)].join("-");
    }
    , "create": function () {
        var ret = "";
        for (; ret.length < 32; ret += Math.floor(rnd() * 0xffffffff).toString(16));
        return [ret.substr(0, 8), ret.substr(8, 4), "4" + ret.substr(12, 3), "89AB"[Math.floor(Math.random() * 4)] + ret.substr(16, 3), ret.substr(20, 12)].join("-");
    }
    , "random": function () {
        return rnd();
    }
    , "tryParse": function (input) {
        try {
            return UUID.parse(input);
        } catch (ex) {
            return UUID.empty;
        }
    }
    };
    UUID["new"] = UUID.create;

    w.UUID = w.Guid = UUID;
} (window || this));

RMBLaddLoadEvent(function () { RMBcreateBase() });
RMBLaddScrollEvent(function () {
    if (window.pageYOffset < 2) {
        setTimeout(function () { window.scrollTo(0, 1); }, 50);
    }
});

function RMBLfindPos(obj) {
    var pos = { 'left': 0, 'top': 0 };
    if (obj.offsetParent) {
        while (1) {
            pos.left += obj.offsetLeft;
            pos.top += obj.offsetTop;
            if (!obj.offsetParent) {
                break;
            }
            obj = obj.offsetParent;
        }
    } else if (obj.left) {
        pos.left += obj.left;
        pos.top += obj.top;
    }
    return pos;
}

function xRMBLfindPos(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj == obj.offsetParent);
        return [curleft, curtop];
    }
}

function RMBLgetUserId() {
    theResponse = loadJSON("", "", "getUserId", "").data;
    return theResponse.userid;
}

function RMBLallowAccess(theGroups) {
    if (typeof theGroups != "undefined") {
        theResponse = loadJSON("", "", "checkSecurity", '{"groups":' + JSON.stringify(theGroups) + '}');
        if (theResponse.status.result == "true") {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}
