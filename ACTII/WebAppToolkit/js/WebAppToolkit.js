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
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/  

function WATaddJavascript(jsName) {
    var theHead = document.getElementsByTagName('head')[0];
    var theScript = document.createElement('script');
    theScript.setAttribute('type','text/javascript');
    theScript.setAttribute('src',jsName);
    
    //theScript.onreadystatechange = function(){WATRun()};
    //theScript.onload = function(){WATRun()};
    
    theHead.appendChild(theScript);
}

function WATaddMeta(name, content) {
    var theHead = document.getElementsByTagName('head')[0];
    var theMeta = document.createElement('meta');
    theMeta.setAttribute('name',name);
    theMeta.setAttribute('content',content);
    theHead.appendChild(theMeta);
}

function WATaddLink(rel, type, href) {
    var theHead = document.getElementsByTagName('head')[0];
    var theLink = document.createElement('link');
    theLink.setAttribute('type',type);
    theLink.setAttribute('rel',rel);
    theLink.setAttribute('href',href);
    theHead.appendChild(theLink);
}

WATaddMeta('viewport', 'width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;');
WATaddMeta('apple-mobile-web-app-capable', 'yes');

WATaddLink('shortcut icon', 'image/png', 'custom/images/icons/logo.png');
WATaddLink('icon', 'image/png', 'custom/images/icons/logo.png');
WATaddLink('apple-touch-icon', 'image/png', 'custom/images/icons/logo.png');


var theSystem = RMBLgetSystem();

if (theSystem != "") {
    //RMBLloadjscssfile("custom/" + theSystem + "/js/config.js", "js");
    var script = loadFile("custom/" + theSystem + "/js/config.js");
    window.eval(script);

    RMBLloadjscssfile("custom/" + theSystem + "/css/main.css", "css");
} else {
    //RMBLloadjscssfile("custom/js/config.js", "js");
    var script = loadFile("custom/js/config.js");
    window.eval(script);
    RMBLloadjscssfile("custom/css/main.css", "css");
}



/*
WATaddJavascript('custom/js/dummydata.js');
WATaddJavascript('WebAppToolkit/js/baseline.js');
WATaddJavascript('WebAppToolkit/js/InputMask.js');
WATaddJavascript('WebAppToolkit/js/RMMenu.js');

WATaddLink('stylesheet', 'text/css', 'WebAppToolkit/css/baseline.css');
WATaddLink('stylesheet', 'text/css', 'WebAppToolkit/css/RMMenu.css');

function WATRun() {
    if (typeof jsonParse != "undefined" && 
        typeof groupsDetailPanel != "undefined" && 
        typeof RMIMsetMasks != "undefined" && 
        typeof RMMChangePage != "undefined" 
        ) {
        RMBcreateBase();
        } else {
            setTimeout(function(){WATRun()},500);
        }
}

WATRun();

*/
