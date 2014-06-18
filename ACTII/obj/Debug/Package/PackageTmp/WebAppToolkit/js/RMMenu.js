/*
RMMenu - Menu and Panel System for HTML Applications
Copyright (C) 2009 by Gregory J Lamoree

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

function RMMaddLoadEvent(func) { 
  var oldonload = window.onload; 
  if (typeof window.onload !== 'function') { 
    window.onload = func; 
  } else { 
    window.onload = function() { 
      if (oldonload) { 
        oldonload(); 
      } 
      func(); 
    } 
  } 
} 

function RMMaddScrollEvent(func){
  var oldonscroll = window.onscroll; 
  if (typeof window.onscroll!== 'function') { 
    window.onscroll= func; 
  } else { 
    window.onscroll= function() { 
      if (oldonscroll ) { 
        oldonscroll (); 
      } 
      func(); 
    } 
  }
}

function RMMaddResizeEvent(func) {
    var onresize = window.onresize;
    if (typeof window.onscroll !== 'function') {
        window.onresize = func;
    } else {
        window.onresize = function () {
            if (onresize) {
                onresize();
            }
            func();
        }
    }
}

var RMMwindowWidth = window.innerWidth || document.documentElement.clientWidth;
var RMMwindowHeight = window.innerHeight || document.documentElement.clientHeight;

RMMaddResizeEvent(function () {
    RMMwindowWidth = window.innerWidth || document.documentElement.clientWidth;
    RMMwindowHeight = window.innerHeight || document.documentElement.clientHeight;
});



function RMMconvertInToPx(inches) {
    var elem = document.createElement('div');
    elem.style.width = inches+'in';
    document.body.appendChild(elem);
    var ppi = elem.offsetWidth;
    document.body.removeChild(elem);
    return ppi; 
}

var RMManimateX = -7;
var RMManimateInterval = 1;

function RMMswipePage(fromPage, toPage, backwards) { 
    if(fromPage != toPage) {
        toPage.style.left = "100%";
        toPage.setAttribute("selected", "true");
        fromPage.style.position = "fixed";
        toPage.style.position = "fixed";
        fromPage.style.display= "block";
        toPage.style.display= "block";
        scrollTo(0, 1);

        var percent = 100;

        fromPage.style.display = "none";
        toPage.style.position = "relative";
        fromPage.style.position = "relative";
        fromPage.style.left = '0px';
        toPage.style.left = '0px';
        //RMMslidePage(percent, fromPage, toPage, backwards);

        /*
        var timer = setInterval(function()
        {
            percent += RMManimateX;
            if (percent <= 0)
            {
                clearInterval(timer);
                percent = 0;
                fromPage.removeAttribute("selected");
                //if(fromPage!= toPage) {
                    fromPage.style.display= "none";
                    fromPage.style.position = "relative";
                    toPage.style.position = "relative";
                //}
                
            }
            //if(fromPage!= toPage) {
                fromPage.style.left = (backwards ? (100-percent) : (percent-100)) + "%"; 
            //}
            toPage.style.left = (backwards ? -percent : percent) + "%"; 
        }, RMManimateInterval);
        */
    }
}

function RMMslidePage(percent, fromPage, toPage, backwards) {
    percent += RMManimateX;
    if (percent <= 0) {
        //clearInterval(timer);
        percent = 0;
        fromPage.removeAttribute("selected");
        //if(fromPage!= toPage) {
        fromPage.style.display = "none";
        fromPage.style.position = "relative";
        toPage.style.position = "relative";
        //}
        fromPage.style.left = (backwards ? (100 - percent) : (percent - 100)) + "%";
        //}
        toPage.style.left = (backwards ? -percent : percent) + "%";

    } else {
        //if(fromPage!= toPage) {
        //alert(RMManimateInterval);
        fromPage.style.left = (backwards ? (100 - percent) : (percent - 100)) + "%";
        //}
        toPage.style.left = (backwards ? -percent : percent) + "%";
        setTimeout(function () { RMMslidePage(percent, fromPage, toPage, backwards); }, RMManimateInterval);
    }
}



function RMMchangecss(theClass,element,value) {
    var cssRules;
    
    var added;

    if (theClass.indexOf("paneltitle") > -1) {
        theClass = theClass;
    }
    
    //for (var S = 0; S < document.styleSheets.length; S++){
        //cssRules = null;
        added = false;
        
        // I don't think we want to try and fix what's there... 
        // Just add another... it is Cascading after all
        // Might have to re-comment out the following Try content
        try {
            
            if (document.styleSheets[document.styleSheets.length].rules) {
                cssRules = document.styleSheets[document.styleSheets.length].rules;
            } else if (document.styleSheets[document.styleSheets.length].cssRules) {
                cssRules = document.styleSheets[document.styleSheets.length].cssRules;
            } else {
                //no rules found... or browser unknown
            }
            
            /* 
            if(cssRules) {
                for (var R = 0; R < cssRules.length; R++) {
                    if (" "+cssRules[R].selectorText.toLowerCase().replace(","," ").replace("{"," ").indexOf(theClass.toLowerCase()) != -1) {
                        if(cssRules[R].style[element]){
                            cssRules[R].style[element] = value;
                            added=true;
                            break;
                        }
                    }
                }
            }
            */
        } catch(e) {}
        
        if(!added){
            try{
                document.styleSheets[document.styleSheets.length-1].insertRule(theClass+' { '+element+': '+value+'; }',cssRules.length);
                
            } catch(err){
                try{
                    //alert(err);
                    document.styleSheets[document.styleSheets.length-1].addRule(theClass,element+': '+value+';');
                    
                } catch(err){
                    //alert(err);
                    var theSelector = theClass.split(",");
                    for (var i = 0; i < theSelector.length; i++) {
                        try{
                            document.styleSheets[document.styleSheets.length-1].addRule(theSelector[i],element+': '+value+';');
                        } catch(err) {}
                    }
                    
                }
            
            }
        }
    //}
}

function RMMaddCSS(theClass, theStyle) {
    var cssRules;
    
    var added = false;
    

        
        if(!added){
            var ss = document.styleSheets[document.styleSheets.length];
            //document.getElementsByTagName("head")[0].appendChild(ss);
            try{
                ss.insertRule(theClass+' { '+theStyle+' }',cssRules.length);
            
            } catch(err){
                try{
                    var theSelector = theStyle.split(";");
                    for (var i = 0; i < theSelector.length; i++) {
                        try{
                            ss.addRule(theClass,theSelector[i] + ";");
                        } catch(err) {}
                    }

                    //alert(err);
                    //document.styleSheets[S].addRule(theClass,theStyle);
                } catch(err){
                    //alert(err);
                    var theSelector = theClass.split(",");
                    for (var i = 0; i < theSelector.length; i++) {
                        try{
                            ss.addRule(theSelector[i],theStyle + ";");
                        } catch(err) {}
                    }
                }
            
            }
        }
    
}

function RMMgetcssvalue(theClass,element) {
    var cssRules;
    var value = "";
    
    var added;
    for (var S = 0; S < document.styleSheets.length; S++){
        cssRules = null;
        added = false;
        try {
            if (document.styleSheets[S].rules) {
                cssRules = document.styleSheets[S].rules;
            } else if (document.styleSheets[S].cssRules) {
                cssRules = document.styleSheets[S].cssRules;
            } else {
                //no rules found... or browser unknown
            }
            if(cssRules) {
                for (var R = 0; R < cssRules.length; R++) {
                    if (" "+cssRules[R].selectorText.toLowerCase().replace(","," ").replace("{"," ").indexOf(theClass.toLowerCase()) != -1) {
                        if(cssRules[R].style[element]){
                            value = cssRules[R].style[element];
                            break;
                        }
                    }
                }
            }
        } catch(e) {}
    }
    return value;
}

/*
Object.prototype.clone = function() {
  var newObj = (this instanceof Array) ? [] : {};
  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};
*/

var RMMHomePanel = "";
function RMMsetDetails(theElement, parentID) {
    for (var i = 0; i < theElement.childNodes.length; i++) {
        RMMsetDetails(theElement.childNodes[i], parentID);
    }
    try {
        var classTest = "";
        if(theElement.getAttribute('className')) {
            classTest = theElement.getAttribute('className');
        } else if(theElement.getAttribute('class')) {
            classTest = theElement.getAttribute('class');
        }
        
        if (theElement.nodeName =='LI') {
            var thePanel = theElement.getAttribute('openPanel');
            if(thePanel != null) {
                if (RMMHomePanel == "") {
                    RMMHomePanel = thePanel;
                    RMMChangePage(RMMHomePanel);
                }
                //RMMaddBasicOnClick(theElement, function() { return RMMChangePage(this.getAttribute('panel')); });
                //theElement.onclick = function() { return RMMChangePage(this.getAttribute('panel')); };
                // Got to find another way to do this!
                var tempText = theElement.innerHTML;
                var closeTop = "";
                if(parentID != "") {
                    closeTop = "document.getElementById(\"" + parentID + "\").style.display=\"none\";";
                    closeTop = "var theParent=document.getElementById(\"" + parentID + "\"); if(!(theParent.getAttribute(\"collapse\") != \"yes\")) { theParent.style.display=\"none\"; } ";
                }
                
                if(typeof LoadForm == 'function') {
                    //theElement.innerHTML = "<a href='#' onclick='LoadForm(this.parentNode.getAttribute(\"openPanel\"),"","",""); " + closeTop + " return false;'>"+tempText+"</a>";
                    if (tempText.trim() != "") {
                        //alert(tempText);
                        theElement.innerHTML = "<a href='#' onclick='RMBLCurrentWorkflow = new Array(); LoadForm(this.parentNode.getAttribute(\"openPanel\"),\"\",\"\",\"\"); " + closeTop + " return false;'>" + tempText + "</a>";
                    }
                } else {
                    theElement.innerHTML = "<a href='#' onclick='RMMChangePage(this.parentNode.getAttribute(\"openPanel\")); " + closeTop + " return false;'>" + tempText + "</a>";
                }
                
                //theElement.innerHTML = "<a href='#' onclick='RMMChangePage(this.parentNode.getAttribute(\"openPanel\")); " + closeTop + " return false;'>"+tempText+"</a>";
                theElement.style.cursor = 'pointer';
            }
        }
    } catch (e) {}
}


function RMMsetMenus(theElement) {
    for (var i = 0; i < theElement.childNodes.length; i++) {
        RMMsetMenus(theElement.childNodes[i]);
    }
    try {
        var classTest = "";
        if(theElement.getAttribute('className')) {
            classTest = theElement.getAttribute('className');
        } else if(theElement.getAttribute('class')) {
            classTest = theElement.getAttribute('class');
        }
        
        if (theElement.nodeName =='UL' && classTest.indexOf("NavigationMenu") > -1) {
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var newElement;
            var theRealElement;
            var theID = "";
            var newElementId = "";
            
           // for( var i=0; i < 10; i++ )
           //     theID += possible.charAt(Math.floor(Math.random() * possible.length));

            theID = RMMrandomString(10);


            /////////////////////////////////////////////
            newElement = theElement.cloneNode(true);
            var menuElement = document.createElement("ul");
            menuElement.setAttribute("class", classTest);
            menuElement.setAttribute("className", classTest);
            menuElement.setAttribute("Orientation", newElement.getAttribute("Orientation"));
            menuElement.setAttribute("MenuStyle", newElement.getAttribute("MenuStyle"));
            menuElement.setAttribute("MenuItemStyle", newElement.getAttribute("MenuItemStyle"));
            menuElement.setAttribute("MenuItemHoverStyle", newElement.getAttribute("MenuItemHoverStyle"));
            newElement.setAttribute("class", "");
            newElement.setAttribute("className", "");
            newElement.setAttribute("Orientation", "");
            newElement.setAttribute("MenuStyle", "");
            newElement.setAttribute("MenuItemStyle", "");
            newElement.setAttribute("MenuItemHoverStyle", "");

            if (newElement.id == "" || newElement.id == "undefined") {
                newElementId = RMMrandomString(10);
                newElement.id = newElementId;
            } else {
                newElementId = newElement.id;
            }
            var menuTitleContainer = document.createElement("li");
            var menuTitleContainerID = "";
            menuTitleContainerID = RMMrandomString(10);
            menuTitleContainer.id = menuTitleContainerID;

            menuTitleContainer.setAttribute("class", "glossy-button");
            menuTitleContainer.setAttribute("className", "glossy-button");

            //menuTitleContainer.setAttribute("style ",menuElement.getAttribute("MenuItemHoverStyle") + );


            var outerMenuTitleTextContainer = document.createElement("span");
            
            var menuTitleTextContainer = document.createElement("span");
            
            menuTitleTextContainer.id = "RMMTitle";
            menuTitleContainer.style.textAlign = "center";
            menuTitleTextContainer.innerText = "Menu";

            //var menuTitle = document.createTextNode("Menu");
            //menuTitleTextContainer.appendChild(menuTitle);
            menuTitleContainer.appendChild(outerMenuTitleTextContainer);
            menuTitleContainer.appendChild(newElement);
            outerMenuTitleTextContainer.appendChild(menuTitleTextContainer);
            menuElement.appendChild(menuTitleContainer);

      
            var theTempBody = document.getElementsByTagName("body")[0];
            var theMenuButton = document.createElement("input");
            theMenuButton.setAttribute("type", "button");
            theMenuButton.id = "menuButton";
            theMenuButton.value = ".\n.\n.";
            //RMMaddBasicOnClick(theMenuButton, function() { document.getElementById(menuTitleContainerID).onclick(); return true;});
            //theMenuButton.onclick = function() { document.getElementById(menuTitleContainerID).onclick(); return true;}
            //theMenuButton.style.whiteSpace = "wrap";
            theMenuButton.style.position = "fixed";
            theMenuButton.style.zIndex = "10000";
            theMenuButton.style.top = "10px";
            theMenuButton.style.left = "5px";
            theMenuButton.style.borderColor = getStyleValue(theMenuButton, "color");
            theMenuButton.setAttribute("class", "field-button");
            theMenuButton.setAttribute("className", "field-button");
            //theTempBody.appendChild(theMenuButton);
            outerMenuTitleTextContainer.appendChild(theMenuButton);
      



            menuElement.id = theID;
            //menuElement.style.position = "fixed";
            menuElement.style.zIndex = "9999";
            //theElement.insertBefore(menuElement,theElement);
            /*
            RMMaddScrollEvent(function(){
            document.get.style.top = window.pageYOffset+"px";
            alert(window.pageYOffset);
            if(window.pageYOffset < 2) {
            setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
            }
            });                
            */
            theElement.parentNode.replaceChild(menuElement, theElement);
            //theElement = theRealElement;
            //alert("inside: " + theElement.getAttribute('Menu'));
            /////////////////////////////////////////////

            
            if(RMMismobile(theElement)) {
                // Not strictly a menu thing... but....
                try {
                    var e=document.getElementsByTagName("header");
                    for(var i=0;i<e.length;i++){
                        e[i].style.display = "none";
                    }
                    e=document.getElementsByTagName("footer");
                    for(var i=0;i<e.length;i++){
                        e[i].style.display = "none";
                    }
                    e=document.getElementsByTagName("nav");
                    for(var i=0;i<e.length;i++){
                        e[i].style.width = "100%";
                        e[i].style.height = "auto";
                        e[i].style.float = "";
                        e[i].style.styleFloat = "";
                        e[i].style.cssFloat = "";
                        e[i].style.zIndex = "auto";
                        e[i].style.position = "relative";
                        e[i].style.left = "0";
                        e[i].style.top = "0";
                    }
                } catch(e){}
                newElement = theElement.cloneNode(true);
                var menuElement = document.createElement("ul");
                menuElement.setAttribute("class",classTest);
                menuElement.setAttribute("className",classTest);
                menuElement.setAttribute("Orientation",newElement.getAttribute("Orientation"));
                menuElement.setAttribute("MenuStyle",newElement.getAttribute("MenuStyle"));
                menuElement.setAttribute("MenuItemStyle",newElement.getAttribute("MenuItemStyle"));
                menuElement.setAttribute("MenuItemHoverStyle",newElement.getAttribute("MenuItemHoverStyle"));
                newElement.setAttribute("class","");
                newElement.setAttribute("className","");
                newElement.setAttribute("Orientation","");
                newElement.setAttribute("MenuStyle","");
                newElement.setAttribute("MenuItemStyle","");
                newElement.setAttribute("MenuItemHoverStyle","");

                if(newElement.id == "" || newElement.id == "undefined") {
                    newElementId = RMMrandomString(10);
                    newElement.id = newElementId;
                } else {
                    newElementId = newElement.id;
                }
                var menuTitleContainer = document.createElement("li");
                var menuTitleContainerID = "";
                    menuTitleContainerID = RMMrandomString(10);
                    menuTitleContainer.id = menuTitleContainerID;

                menuTitleContainer.setAttribute("class","glossy-button");
                menuTitleContainer.setAttribute("className","glossy-button");
                
                //menuTitleContainer.setAttribute("style ",menuElement.getAttribute("MenuItemHoverStyle") + );


                var outerMenuTitleTextContainer = document.createElement("span");
                menuTitleContainer.appendChild(outerMenuTitleTextContainer);
                var menuTitleTextContainer = document.createElement("span");
                outerMenuTitleTextContainer.appendChild(menuTitleTextContainer);
                menuTitleTextContainer.id = "RMMTitle";
                menuTitleContainer.style.textAlign = "center";
                menuTitleTextContainer.innerText = "Menu";

                //var menuTitle = document.createTextNode("Menu");
                //menuTitleTextContainer.appendChild(menuTitle);
                menuTitleContainer.appendChild(newElement);

                menuElement.appendChild(menuTitleContainer);

                var theTempBody = document.getElementsByTagName("body")[0];
                var theMenuButton = document.createElement("input");
                theMenuButton.setAttribute("type","button");
                theMenuButton.setAttribute("class","field-button");
                theMenuButton.setAttribute("className","field-button");
                theMenuButton.value = "Menu";
                //RMMaddBasicOnClick(theMenuButton, function() { document.getElementById(menuTitleContainerID).onclick(); return true;});
                //theMenuButton.onclick = function() { document.getElementById(menuTitleContainerID).onclick(); return true;}
                theMenuButton.style.position="fixed";
                theMenuButton.style.zIndex = "10000";
                theMenuButton.style.top = "10px";
                theMenuButton.style.left = "5px";
                theMenuButton.style.borderColor = getStyleValue(theMenuButton, "color");
                //theTempBody.appendChild(theMenuButton);
                outerMenuTitleTextContainer.appendChild(theMenuButton);




                menuElement.id = theID;
                menuElement.style.position = "fixed";
                menuElement.style.zIndex = "9999";
                //theElement.insertBefore(menuElement,theElement);
                /*
                RMMaddScrollEvent(function(){
                    document.get.style.top = window.pageYOffset+"px";
                    alert(window.pageYOffset);
                    if(window.pageYOffset < 2) {
                      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
                    }
                });                
                */
                theElement.parentNode.replaceChild(menuElement,theElement);
                //theElement = theRealElement;
                //alert("inside: " + theElement.getAttribute('Menu'));
            } else {
                theElement.id = theID;
                //theRealElement = theElement;
            }
            //alert("outside: " + theElement.getAttribute('Menu'));
            theElement = document.getElementById(theID);
            
            RMMsetDetails(theElement, newElementId);
            
            
            var menuID = "Menu";
            menuID  = RMMrandomString(10);
            
            if(RMMismobile()) {
                theElement.setAttribute('Orientation','mobile');
            }

            var theClass = classTest + " RM" + theElement.getAttribute('Orientation') + "Menu " + menuID;
            // This SUCKS! You should NEVER do browser detection!
            //if (RMMmsieversion() < 8 && RMMmsieversion() != 0) {
            //    theClass += " RM" + theElement.getAttribute('Orientation') + "MenuIE ";
            //}
            
            theElement.setAttribute('class',theClass);
            theElement.setAttribute('className',theClass);
            
            if(theElement.getAttribute('MenuItemStyle')) {
                var theCSSElement = theElement.getAttribute('MenuItemStyle').split(";");
                for (var i = 0; i < theCSSElement.length; i++) {
                    var nameValue = theCSSElement[i].split(":");
                    if(!(/*RMMismobile() && */(nameValue[0].indexOf("font-size") != -1 || nameValue[0].indexOf("padding") != -1))) {
                        RMMchangecss("." + menuID + " li > ul, ." + menuID + " li",nameValue[0],nameValue[1]);
                        if(nameValue[0].indexOf("padding") == -1 && nameValue[0].indexOf("margin") == -1) {
                            RMMchangecss("." + menuID + " a, ." + menuID + " a:visited",nameValue[0],nameValue[1]);
                        }
                    }
                }
                RMMchangecss("." + menuID + " a, ." + menuID + " a:visited, ." + menuID + " li > ul","border","none");
            }
            
            if(theElement.getAttribute('MenuStyle')) {
                var theCSSElement = theElement.getAttribute('MenuStyle').split(";");
                for (var i = 0; i < theCSSElement.length; i++) {
                    var nameValue = theCSSElement[i].split(":");
                    if(!(/*RMMismobile() && */(nameValue[0].indexOf("font-size") != -1 || nameValue[0].indexOf("padding") != -1))) {
                        RMMchangecss("." + menuID + ", ." + menuID + " ul",nameValue[0],nameValue[1]);
                        if(nameValue[0].indexOf("border") != -1 || nameValue[0].indexOf("background") > -1) {
                            RMMchangecss("." + menuID + " li > ul",nameValue[0],nameValue[1]);
                        }
                    }
                }
                RMMchangecss("." + menuID + " li > ul","margin","0px");
                RMMchangecss("." + menuID + " li > ul","padding","0px");
                RMMchangecss("." + menuID + " li > ul > li","margin","0px");
                RMMchangecss("." + menuID + " li > ul","margin-top","0px");
                RMMchangecss("." + menuID + " li > ul","padding-top","0px");
                RMMchangecss("." + menuID + " li > ul > li","margin-top","0px");
                RMMchangecss("." + menuID + " li > ul","margin-bottom","0px");
                RMMchangecss("." + menuID + " li > ul","padding-bottom","0px");
                RMMchangecss("." + menuID + " li > ul > li","margin-bottom","0px");
                RMMchangecss("." + menuID + " li > ul > li","margin-left","0px");
                RMMchangecss("." + menuID + " li > ul > li","margin-right","0px");
            }
            
            if(theElement.getAttribute('MenuItemHoverStyle')) {
                var theCSSElement = theElement.getAttribute('MenuItemHoverStyle').split(";");
                for (var i = 0; i < theCSSElement.length; i++) {
                    var nameValue = theCSSElement[i].split(":");
                    if(!(/*RMMismobile() && */(nameValue[0].indexOf("font-size") != -1 || nameValue[0].indexOf("padding") != -1))) {
                        RMMchangecss("." + menuID + " li:hover, ." + menuID + " li a:hover, ." + menuID + " li a.CSStoHighLink",nameValue[0],nameValue[1]);
                    }
                }
            }
            
            //if(RMMismobile()) {
                //RMMchangecss("." + menuID + " li:hover > ul","display","none");
                RMMchangecss("." + menuID + " li","color","");

                var theHeaderStyle = theElement.getAttribute('MenuItemHoverStyle');

                if (theHeaderStyle) {
                    //alert(theHeaderStyle);
                    var theCSSElement = theHeaderStyle.split(";");
                    for (var i = 0; i < theCSSElement.length; i++) {
                        var nameValue = theCSSElement[i].split(":");
                            RMMchangecss("#" + theElement.id,nameValue[0],nameValue[1]);
                            if (nameValue[0] == "color") {
                                // This line is the bastard that causes sub menu headers to show white (transparent)
                                // Should only be in place when it is a header.
                                //RMMchangecss("." + menuID + " li",nameValue[0],nameValue[1]);
                                RMMchangecss("#RMMTitle", nameValue[0], nameValue[1]);
                                //alert("." + menuID + " li",nameValue[0],nameValue[1]);
                            }
                    }
                }

                //theElement.onclick = function() { this.setAttribute("active","");}
                // this is a bad idea... should use line above
                RMMaddBasicOnClick(theElement, function() { this.setAttribute("active",""); return true;});
                RMMaddOnClick(theElement, theElement);
                theElement.style.float = 'none';
                theElement.style.styleFloat = 'none';
                theElement.style.cssFloat = 'none';
            //}
        } else {
            var thePanel = theElement.getAttribute('openPanel');
            if(thePanel != null) {
                //RMMaddBasicOnClick(theElement, function() { return RMMChangePage(this.getAttribute('panel')); });
                //theElement.onclick = function() { return RMMChangePage(this.getAttribute('panel')); };
                // Got to find another way to do this!
                var tempText = theElement.innerHTML;
                if(typeof LoadForm == 'function') {
                    theElement.onclick = function (e) { var evt = window.event || e; if(this.type == "button") RMBLCurrentWorkflow.push(RMBLfindPanel(this)); LoadForm(this.getAttribute('openPanel'), "", "", ""); if (typeof evt.stopPropagation == 'function') { evt.stopPropagation(); } else { evt.cancelBubble = true; } return true; };
                } else {
                    theElement.onclick = function (e) { var evt = window.event || e;  RMMChangePage(this.getAttribute('openPanel')); return true; };
                }
                //theElement.innerHTML = "<span onclick='RMMChangePage(this.parentNode.getAttribute(\"openPanel\")); return true;'>"+tempText+"</span>";
                theElement.style.cursor = 'pointer';
            }
        }
    } catch (e) {
        //alert(e.Description);
    }
    RMMchangecss(".NavigationMenu", "display", "block");

    var resizeFunc = function () {
        //alert(RMMwindowWidth + " <= " + RMM10Height);
        if (RMMwindowWidth <= RMM10Height && !RMMSizedMenu) {
            //alert("I'm In");
            var tmpMenus = document.getElementsByTagName("nav");
            for (var i = 0; i < tmpMenus.length; i++) {
                RMMmakeMobileMenu(tmpMenus[i]);
            }

            //RMMchangecss("nav ul li", "width", "");
            //document.getElementById(newElement.id).style.display = "none";

            RMMSizedMenu = true;
            // Minus 20 is to account for IE's disappearing scroll bar.
        } else if ((RMMwindowWidth - 20) > RMM10Height && RMMSizedMenu) {
            var tmpMenus = document.getElementsByTagName("nav");
            for (var i = 0; i < tmpMenus.length; i++) {
                RMMrevertMobileMenu(tmpMenus[i]);
            }
            //document.getElementById(newElement.id).style.display = "block";

            RMMSizedMenu = false;
        }

    }
                        RMMaddResizeEvent(resizeFunc)
                        //window.onresize();


}

var RMMSizedMenu = false;

function RMMmakeMobileMenu(theElement) {
    for (var i = 0; i < theElement.childNodes.length; i++) {
        RMMmakeMobileMenu(theElement.childNodes[i]);
    }
    try {
        var tmpClass = theElement.getAttribute("class");
        if (tmpClass.indexOf("NavigationMenu") > -1) {
            theElement.setAttribute("oldclass", tmpClass);
            tmpClass = tmpClass.replace("RMverticalMenu", "RMmobileMenu");
            tmpClass = tmpClass.replace("RMhorizontalMenu", "RMmobileMenu");
            theElement.setAttribute("class", tmpClass);
            theElement.setAttribute("classname", tmpClass);
            ((theElement.getElementsByTagName("li")[0]).getElementsByTagName("ul")[0]).setAttribute("collapse", "yes");
            ((theElement.getElementsByTagName("li")[0]).getElementsByTagName("ul")[0]).style.display = "none";
            RMMchangecss(".panel", "padding-left", "0px");
            RMMchangecss(".paneltitle", "display", "none");
            RMMchangecss(".titlespacer", "display", "block");
            RMMchangecss("#menuButton", "font-size", "50%");
            RMMchangecss(".NavigationMenu", "position", "fixed");
            try {
                var theHeader = document.getElementsByTagName("header")[0];
                theHeader.style.display = "none";
            } catch (e) { }

        }
    } catch (e) { }
}

function RMMrevertMobileMenu(theElement) {
    for (var i = 0; i < theElement.childNodes.length; i++) {
        RMMrevertMobileMenu(theElement.childNodes[i]);
    }
    try {
        var tmpClass = theElement.getAttribute("oldclass");
        if (tmpClass.indexOf("NavigationMenu") > -1) {
            //tmpClass = tmpClass.replace(" RMmobileMenu", "");
            theElement.setAttribute("class", tmpClass);
            theElement.setAttribute("classname", tmpClass);
            ((theElement.getElementsByTagName("li")[0]).getElementsByTagName("ul")[0]).setAttribute("collapse", "no");
            ((theElement.getElementsByTagName("li")[0]).getElementsByTagName("ul")[0]).style.display = "block";
            RMMchangecss(".panel", "padding-left", "220px");
            RMMchangecss(".paneltitle", "display", "block");
            RMMchangecss(".titlespacer", "display", "none");
            RMMchangecss(".NavigationMenu", "position", "relative");
            //RMMchangecss("#menuButton", "font-size", "");
            
            try {
                var theHeader = document.getElementsByTagName("header")[0];
                if (RMMwindowHeight > RMM10Height) {
                    theHeader.style.display = "block";
                }
            } catch (e) { }
        }
    } catch (e) { }
}




function RMMaddBasicOnClick(theElement, func) { 
  var oldonclick = theElement.onclick; 
  if (typeof theElement.onclick !== 'function') { 
    theElement.onclick = func; 
  } else { 
    theElement.onclick = function() { 
      if (oldonclick) { 
        return oldonclick(); 
      } 
      return func(); 
    } 
  } 
}

function RMMaddOnClick(theElement, topElement) {
    for (var i = 0; i < theElement.childNodes.length; i++) {
        RMMaddOnClick(theElement.childNodes[i], topElement);
    }
    if (theElement.nodeName =='LI') {
        theElement.onclick = function () {
            try {
                if (topElement.getAttribute("active") == "Y") {
                    return true;
                }
            } catch (e) { }
            try {
                topElement.setAttribute("active", "Y");
                if (this.childNodes[1].style.display == "block") {
                    //if (this.childNodes[1].getAttribute("collapse") == "yes") {
                        this.childNodes[1].style.display = "none";
                    //}
                } else {
                    this.childNodes[1].style.display = "block";
                }
            } catch (e) { }

            return true;
        }
    }
}


function RMMismobile(theElement){
    //return true;
    //Debugging override
    if (document.location.toString().indexOf("mobile=y") > -1) {
        return true;
    }

    theElement = typeof(theElement) != 'undefined' ? theElement : "";
    try {
        if(theElement.getAttribute("orientation") == "mobile") {
            return true;
        }
    }
    catch(e){}
    
    var ua=navigator.userAgent.toLowerCase();
    if(ua.indexOf("trident") > -1) return false;
    if(ua.indexOf("ipad") > -1) return false;
    if(ua.indexOf("creative autoupdate") > -1) return false;

    var uamatches = [   "midp", "j2me", "avantg", "docomo", "novarra", "palmos", 
                        "palmsource", "240x320", "400x240", "opwv", "chtml", "pda", "windows ce", 
                        "mmp/", "blackberry", "mib/", "symbian", "wireless", "nokia", 
                        "hand", "mobi", "phone", "cdm", "up.b", "audio", "sie-", 
                        "sec-", "samsung", "htc", "mot-", "mitsu", "sagem", "sony", 
                        "alcatel", "lg", "erics", "vx", "nec", "philips", "mmm", "xx",
                        "panasonic", "sharp", "wap", "sch", "rover", "pocket", "benq", 
                        "java", "pt", "pg", "vox", "amoi", "bird", "compal", "kg", 
                        "voda", "sany", "kdd", "dbt", "sendo", "sgh", "gradi", "jb", 
                        "dddi", "moto"];

    for(var uastring in uamatches){
        if(ua.indexOf(uamatches[uastring]) > -1)
        {
            return true;
        }
    }

 
    return false;
} 


//Browser Detection is BAD... Don't Do it!
function RMMmsieversion()
{
  var ua = window.navigator.userAgent
  var msie = ua.indexOf ( "MSIE " )

  if ( msie > 0 )      // If Internet Explorer, return version number
     return parseInt (ua.substring (msie+5, ua.indexOf (".", msie )))
  else                 // If another browser, return 0
     return 0

}

var RMMcurrentPage = null;
function RMMChangePage(pageID) {
   //if(pageID != RMMcurrentPage.id) {
    try {

        if (typeof RMIMsetMasks == 'function') {
            //RMIMsetMasks(document.getElementById(pageID));
        }

        
        if (typeof RMBLCurrentWorkflow != "undefined" && document.getElementById(pageID + ".RMBBack") != null) {
            if (RMBLCurrentWorkflow.length > 0) {
                document.getElementById(pageID + ".RMBBack").style.display = "inline-block";
            } else {
                document.getElementById(pageID + ".RMBBack").style.display = "none";
            }
        }
        

	if(RMMcurrentPage != null) {
            RMMswipePage(RMMcurrentPage, document.getElementById(pageID), false);
            //RMMcurrentPage.style.display="none"; 
        }
    } catch (e) {}
    try {
        RMMcurrentPage = document.getElementById(pageID); 
        RMMcurrentPage.style.display="block";
        //if(RMMismobile()) {
            document.getElementById("RMMTitle").innerText = RMMcurrentPage.getAttribute("panelTitle");
            //RMMcurrentPage.style.padding="0px";
            //RMMcurrentPage.style.margin="0px";

        //}
    } catch (e) {}
    window.scrollTo(0,1);
   //}
    return false;
}

function getStyleValue(theElement, theProperty) {

    var propertyValue = ""
    if (theElement.currentStyle) {
        propertyValue = theElement.currentStyle[theProperty];
        if (typeof propertyValue == "undefined") {
            var propParts = theProperty.split("-");
            var newProperty = "";
            for (thePart in propParts) {
                if (thePart > 0) {
                    newProperty += propParts[thePart].substr(0, 1).toUpperCase() + propParts[thePart].substr(1);
                } else {
                    newProperty = propParts[thePart];
                }
            }
            propertyValue = theElement.currentStyle[newProperty];
        }
    } else if (window.getComputedStyle) {
        propertyValue = document.defaultView.getComputedStyle(theElement, null).getPropertyValue("theProperty");
    }
    return propertyValue;
}

function RMMrandomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}


//var RMMipadWidth = RMMconvertInToPx(7.75);
//var RMMipadHeight = RMMconvertInToPx(5.82);
var RMM10Width = 0;
var RMM10Height = 0;
var RMM10Sized = false;
//var RMMandroidWidth = RMMconvertInToPx(5.9375);
//var RMMandroidHeight = RMMconvertInToPx(3.75);
var RMM7Width = 0;
var RMM7Height = 0;
var RMM7Sized = false;

var RMM5Width = 0;
var RMM5Height = 0;
var RMM5Sized = false;



RMMaddLoadEvent(function () {
    //var RMMipadWidth = RMMconvertInToPx(7.75);
    //var RMMipadHeight = RMMconvertInToPx(5.82);
    RMM10Width = RMMconvertInToPx(7.8);
    RMM10Height = RMMconvertInToPx(5.9);
    //var RMMandroidWidth = RMMconvertInToPx(5.9375);
    //var RMMandroidHeight = RMMconvertInToPx(3.75);
    RMM7Width = RMMconvertInToPx(6);
    RMM7Height = RMMconvertInToPx(3.8);

    RMM5Width = RMMconvertInToPx(2);
    RMM5Height = RMMconvertInToPx(3.5);

});


RMMaddLoadEvent(function () { RMMsetMenus(document.body) });

RMMaddLoadEvent(function () { /*if (RMMismobile()) {*/ RMMchangecss(".RMmobileMenu ul", "height", parseInt(document.body.offsetHeight) + "px"); /*}*/ });
RMMaddResizeEvent(function () { /*if (RMMismobile()) {*/ RMMchangecss(".RMmobileMenu ul", "height", parseInt(document.body.offsetHeight) + "px"); /*}*/ });


