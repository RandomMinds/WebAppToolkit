// Return Template: 
/*
    {
        "data": {
        },
        "status": {
            "result": "true",
            "message": ""
        }
    }

or

    '{' +
        '"data": {' +
        '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +

    '}'


*/

// Set the base application information

var appDef = '{' + 
    '"data": {' + 
        '"Name": "Community Contacts",'+
        '"Description" : "Welcome to Community Contacts<br />The Community and Economic Development\'s<br />Contact Management System",' +
        '"Footer": "&copy; 2011 PPL Corporation. All Rights Reserved."' +
    '},' +
    '"status": {' +
        '"result": "true",' +
        '"message": ""' +
    '}' +
'}';



// Define the Main Menu - This is the launching point of the application


var mainMenux2 = {
    "MenuStyle":
    {
        "float": "right",
        "width": "205px",
        "border": "1px solid #000",
        "background-color": "#fff",
        "margin-right": "10px"

    },
    "MenuItemStyle":
    {
        "line-height": "38px",
        "text-align": "left",
        "border-bottom": "1px solid #ddd",
        "color": "#777"
    },
    "MenuItemHoverStyle":
    {
        "color": "#fff",
        "background-color": "#0e3980",
        "background-image": "url(\"../images/blue/menuSelected.png\")"
    },
    "Orientation": "vertical",
    "panels":
    [
        {
            "ID": "contacts",
            "Text": "&nbsp;&nbsp;Contacts",
            "Description": "Create and manage your contacts from here.<br />&nbsp;<br />&nbsp;"
        },
        {
            "ID": "groups",
            "Text": "&nbsp;&nbsp;Groups",
            "Description": "Create and manage groups and fill them with contacts from here.<br />&nbsp;<br />&nbsp;"
        },
        {
            "ID": "email",
            "Text": "&nbsp;&nbsp;Send Email",
            "Description": "Send an email to groups of people by Mail Codes.<br />&nbsp;<br />&nbsp;"
        },
        {

            "ID": "codes",
            "Text": "&nbsp;&nbsp;Other",
            "Description": "Manage system codes here.<br />&nbsp;<br />&nbsp;<br />&nbsp;",
            "panels":
            [
                {
                    "ID": "users",
                    "Text": "&nbsp;&nbsp;Account Administrators",
                    "Description": "Create and manage Account Administrators from here."
                },
                {
                    "ID": "status",
                    "Text": "&nbsp;&nbsp;Status",
                    "Description": "Create and manage Status Choices from here."
                },
                {
                    "ID": "mailCodes",
                    "Text": "&nbsp;&nbsp;Mail Codes",
                    "Description": "Create and manage Mail Codes from here."
                },
                {
                    "ID": "areas",
                    "Text": "&nbsp;&nbsp;Areas",
                    "Description": "Create and manage Areas from here."
                }
            ]
        }
    ]
};

var mainMenu =
'{' +
    '"data": {' +
                          '"MenuStyle":' +
                            '{' +
                                '"float":"right",' +
                                '"width":"205px",' +
                                '"border":"1px solid #000",' +
                                '"background-color":"#fff",' +
                                '"margin-right":"10px"' +
                            '},' +
                          '"MenuItemStyle":' +
                            '{' +
                                '"line-height":"38px",' +
                                '"text-align":"left",' +
                                '"border-bottom":"1px solid #ddd",' +
                                '"color":"#777"' +
                            '},' +
                          '"MenuItemHoverStyle":' +
                            '{' +
                                '"color":"#fff",' +
                                '"background-color":"#0e3980",' +
                                '"background-image":"url(\\"../images/blue/menuSelected.png\\")"' +
                            '},' +
                          '"Orientation":"vertical",' +
                          '"panels":' +
                            '[' +
                                '{' +
                                    '"ID":"contacts",' +
                                    '"Text":"&nbsp;&nbsp;Contacts",' +
                                    '"Description":"Create and manage your contacts from here.<br />&nbsp;<br />&nbsp;"' +
                                '},' +
                                '{' +
                                    '"ID":"groups",' +
                                    '"Text":"&nbsp;&nbsp;Groups",' +
                                    '"Description":"Create and manage groups and fill them with contacts from here.<br />&nbsp;<br />&nbsp;"' +
                                '},' +
                                '{' +
                                    '"ID":"email",' +
                                    '"Text":"&nbsp;&nbsp;Send Email",' +
                                    '"Description":"Send an email to groups of people by Mail Codes.<br />&nbsp;<br />&nbsp;"' +
                                '},' +
/*                                '{' +
'"ID":"speakerBureau",' +
'"Text":"&nbsp;&nbsp;Speaker Bureau",' +
'"Description":"Need to prepare for a meeting or wrap one up with valuable information, this is the place to do it."' +
'},' +
*/'{' +
                                    '"ID":"codes",' +
                                    '"Text":"&nbsp;&nbsp;Other",' +
                                    '"Description":"Manage system codes here.<br />&nbsp;<br />&nbsp;<br />&nbsp;",' +
                                    '"panels":' +
                                    '[' +
                                        '{' +
                                            '"ID":"users",' +
                                            '"Text":"&nbsp;&nbsp;Account Administrators",' +
                                            '"Description":"Create and manage Account Administrators from here."' +
                                        '},' +
                                        '{' +
                                            '"ID":"status",' +
                                            '"Text":"&nbsp;&nbsp;Status",' +
                                            '"Description":"Create and manage Status Choices from here."' +
                                        '},' +
                                        '{' +
                                            '"ID":"mailCodes",' +
                                            '"Text":"&nbsp;&nbsp;Mail Codes",' +
                                            '"Description":"Create and manage Mail Codes from here."' +
                                        '},' +
                                        '{' +
                                            '"ID":"areas",' +
                                            '"Text":"&nbsp;&nbsp;Areas",' +
                                            '"Description":"Create and manage Areas from here."' +
                                        '}' +
/* '{' +
'"ID":"orgType",' +
'"Text":"&nbsp;&nbsp;Org Types",' +
'"Description":"Create and manage Organization Types from here."' +
'},' +
'{' +
'"ID":"organization",' +
'"Text":"&nbsp;&nbsp;Organizations",' +
'"Description":"Create and manage Organizations from here."' +
'}' +*/
                                    ']' +
                                '}' +
                            ']' +
'},' +
    '"status": {' +
        '"result": "true",' +
        '"message": ""' +
    '}' +
'}';


// Define all of the panels used within the app.

var areasPanel =
    '{' +
        '"data": {' +
                            '"type":"searchList",' +
                            '"title":"Areas",' +
/*'"security":' +
'{' +
'"edit":["abcdef"]' +
'},' +*/
                            '"dataSource":"AREA",' +
                            '"key":"AREAID",' +
                            '"detailPanel":"areaDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Area Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"AREANAME",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[AREANAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[AREADESCRIPTION]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '},' +

        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';



var organizationPanel =

    '{' +
        '"data": {' +
                            '"type":"searchList",' +
                            '"title":"Organizations",' +
                            '"dataSource":"ORGANIZATION",' +
                            '"key":"ORGID",' +
                            '"detailPanel":"organizationDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Organization:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ORGNAME",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                          '"label":"Type:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"ORGTYPEID",' +
                                                          '"parameter":"ORGTYPE",' +
                                                          '"key":"ORGTYPEID",' +
                                                          '"value":"[ORGTYPENAME]",' +
                                                          '"filter":""' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[ORGNAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[ORGDESCRIPTION]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '},' +

        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';



var orgTypePanel =
    '{' +
        '"data": {' +
                            '"type":"searchList",' +
                            '"title":"Organization Types",' +
                            '"dataSource":"ORGTYPE",' +
                            '"key":"ORGTYPEID",' +
                            '"detailPanel":"orgTypeDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Organization Type:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ORGTYPENAME",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[ORGTYPENAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[ORGTYPEDESCRIPTION]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var mailCodesPanel =
    '{' +
        '"data":  {' +
                            '"type":"searchList",' +
                            '"title":"Mail Codes",' +
                            '"dataSource":"MAILCODE",' +
                            '"key":"MAILCODEID",' +
                            '"detailPanel":"mailCodesDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Mail Code:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"MAILCODENAME",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[MAILCODENAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[DESCRIPTION]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '},' +

        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var emailPanel =
    '{' +
        '"data":  {' +
                            '"type":"emailList",' +
                            '"title":"Group Email",' +
                            '"dataSource":"MAILCODE",' +          // String. Required. ID of the table that will be searched (parent)
                            '"parentReference":"MAILCODEID",' +   // String. Required emailList Only. Field ID that holds the Parent's key.
                            '"xref":"CONTACTSMAILCODES",' +       // String. Required. Database: Xref: Location (table) that hold the connection between Parent and Child.
 //                       SOAP: Simply a unique name for this panel.
                            '"childReference":"MAILCODEID",' +    // String. Required emailList Only. Data location (Database column or SOAP xpath request)
 //                   that holds Parent's key on the Xref location.
                            '"childKey":"CONTACTID",' +           // String. Optional emailList Only. Required for DATABASE. Data location on the Xref location of the Child's Key.
                            '"childDataSource":"CONTACT",' +      // String. Optional emailList Only. Required for DATABASE. Child: Location that holds the email address.
                            '"key":"CONTACTID",' +                // String. Required. ID of the field on the panel which will hold the unique key to the data (ie. email address) on the panel.
 //      DATABASE: match this to the table's column name.
 //      SOAP: Required. ID of the field on the panel which will hold the unique key to the data on the panel.
                            '"emailID":"EMAIL",' +                // String. Required. ID of the field holds the email address.
 //      DATABASE: match this to the table's column name.
 //      SOAP: Required. ID of the field on the panel which will hold the unique key to the data on the panel.

                            '"fromEmailSource":"PPLUSER",' +      // String. Optional emailList Only. Required. ID of the locaion that holds the from email address.
 //      DATABASE: match this to the table's name.
 //      SOAP: not yet implemented
                            '"fromEmailID":"EMAIL",' +            // String. Optional emailList Only. Required. ID of the field holds the from email address.
 //      DATABASE: match this to the table's column name.
 //      SOAP: not yet implemented
                            '"fromEmailUserID":"PPLID",' +        // String. Optional emailList Only. Required. ID of the field holds the key to the from email address.
 //      DATABASE: match this to the table's column name.
 //      SOAP: not yet implemented
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Mail Code",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"MAILCODENAME",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Description",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"DESCRIPTION",' +
                                                            '"mask":"[character 1 60]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[MAILCODENAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[DESCRIPTION]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';






 var statusPanel =
     '{' +
        '"data":  {' +
                            '"type":"searchList",' +
                            '"title":"Status",' +
                            '"dataSource":"STATUS",' +
                            '"key":"STATUSID",' +
                            '"detailPanel":"statusDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Status:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"STATUSNAME",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[STATUSNAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[DESCRIPTION]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var usersPanel =
    '{' +
        '"data":  {' +
                            '"type":"searchList",' +
                            '"title":"Account Administrators",' +
 /*'"security":' +
 '{' +
 '"view":["PPL\\\\ISD-DL-GIS"],' +
 '"edit":["abcdef"]' +
 '},' +*/
                            '"dataSource":"PPLUSER",' +
                            '"key":"USERID",' +
                            '"detailPanel":"usersDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"First Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"FIRSTNAME",' +
                                                            '"mask":"[character 1 25]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Last Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"LASTNAME",' +
                                                            '"mask":"[character 1 30]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[LASTNAME], [FIRSTNAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"7em",' +
                                          '"template":"[PPLID]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var areaDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title": "Area Detail",' +
 /*'"security":' +
 '{' +
 '"edit":["PPL\\\\ISD-DL-GIS"]' +
 '},' +*/
                                '"submitto":"",' +
                                '"dataSource":"AREA",' +
                                '"key":"AREAID",' +
                                '"keygen":"UUID",' +
 /*     '"next":' +
 '[' +
 '{' +
 '"panel":"home",' +
 '"key":"",' +
 '"test":"true",' +
 '"save":"workflow",' +
 '"end":"true"' +
 '},' +
 '{' +
 '"panel":"groups",' +
 '"key":"",' +
 '"test":"true",' +
 '"save":""' +
 '}' +
 '],' + */
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                        '{' +
                                                            '"label":"<br />Area Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"AREANAME",' +
                                                            '"mask":"[required][character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"<br />Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"AREADESCRIPTION",' +
                                                            '"mask":"[character 1 100]"' +
                                                        '},' +
                                                        '{' +
                                                          '"label":"PPL Account<br />Manager:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"PPLADMINID",' +
                                                          '"parameter":"PPLUSER",' +
                                                          '"key":"USERID",' +
                                                          '"value":"[FIRSTNAME], [LASTNAME]",' +
                                                          '"filter":""' +
                                                        '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var orgTypeDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title": "Organization Type Detail",' +
                                '"submitto":"",' +
                                '"dataSource":"ORGTYPE",' +
                                '"key":"ORGTYPEID",' +
                                '"keygen":"UUID",' +
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                        '{' +
                                                            '"label":"Organization Type Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ORGTYPENAME",' +
                                                            '"mask":"[required][character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ORGTYPEDESCRIPTION",' +
                                                            '"mask":"[character 1 100]"' +
                                                        '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var organizationDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title": "Organization Detail",' +
                                '"submitto":"",' +
                                '"dataSource":"ORGANIZATION",' +
                                '"key":"ORGID",' +
                                '"keygen":"UUID",' +
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                        '{' +
                                                            '"label":"Organization Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ORGNAME",' +
                                                            '"mask":"[required][character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ORGDESCRIPTION",' +
                                                            '"mask":"[character 1 100]"' +
                                                        '},' +
                                                        '{' +
                                                          '"label":"Type:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"ORGTYPEID",' +
                                                          '"parameter":"ORGTYPE",' +
                                                          '"key":"ORGTYPEID",' +
                                                          '"value":"[ORGTYPENAME]",' +
                                                          '"filter":""' +
                                                        '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Organization Members",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                      '"label":"",' +
                                                      '"labelLocation":"top",' +
                                                      '"type":"staticList",' +
 //'"width":"20em",' +
                                                      '"id":"CONTACT",' +
                                                      '"parentReference":"ORGANIZATIONID",' +
                                                      '"childReference":"ORGANIZATIONID",' +
                                                      '"childKey":"CONTACTID",' +
                                                      '"dataSource":"CONTACT",' +
                                                      '"key":"CONTACTID",' +
                                                      '"detailPanel":"contactDetail",' +
                                                          '"sections":' +
                                                              '[' +
                                                                  '{' +
                                                                  '"title":"",' +
                                                                  '"lines":' +
                                                                      '[' +
                                                                          '{' +
                                                                              '"fields":' +
                                                                              '[' +
                                                                                  '{' +
                                                                                      '"label":"First Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"FIRSTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '},' +
                                                                                  '{' +
                                                                                      '"label":"Last Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"LASTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '}' +
                                                                              ']' +
                                                                          '}' +
                                                                      ']' +
                                                                  '}' +
                                                              '],' +
                                                      '"detailLine":' +
                                                        '{' +
                                                          '"data":' +
                                                            '[' +
                                                                '{' +
                                                                    '"width":"11em",' +
                                                                    '"template":"[LASTNAME], [FIRSTNAME]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"10em",' +
                                                                    '"template":"[PHONE]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[ADDR1]<br />[ADDR2]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[CITY], [STATE] [ZIP]<br />&nbsp;"' +
                                                                '}' +
                                                            '],' +
 // Buttons are Optional
                                                          '"buttons":' +
                                                            '[' +
                                                                '{' +
                                                                    '"href":"tel:[num PHONE]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aPhone.png\\" style=\\"margin-right: 10px; \\">"' +
                                                                '},' +
                                                                '{' +
                                                                    '"href":"http://maps.google.com?daddr=[uri ADDR1]+[uri ADDR2]+[uri CITY]+[uri STATE]+[uri ZIP]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aMap.png\\">"' +
                                                                '}' +
                                                            ']' +
                                                        '}' +
                                                     '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var mailCodesDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title": "Mail Code Detail",' +
                                '"submitto":"",' +
                                '"dataSource":"MAILCODE",' +
                                '"key":"MAILCODEID",' +
                                '"keygen":"UUID",' +
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                        '{' +
                                                            '"label":"Mail Code Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"MAILCODENAME",' +
                                                            '"mask":"[required][character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"DESCRIPTION",' +
                                                            '"mask":"[character 1 100]"' +
                                                        '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Mail Code Contacts",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                      '"label":"",' +
                                                      '"labelLocation":"top",' +
                                                      '"type":"list",' +
 //'"width":"20em",' +
                                                      '"id":"CONTACTSMAILCODES",' +
                                                      '"parentReference":"MAILCODEID",' +
                                                      '"childReference":"MAILCODEID",' +
                                                      '"childKey":"CONTACTID",' +
                                                      '"dataSource":"CONTACT",' +
                                                      '"key":"CONTACTID",' +
                                                      '"detailPanel":"contactDetail",' +
                                                      '"searchFields":' +
                                                        '{' +
                                                          '"sections":' +
                                                              '[' +
                                                                  '{' +
                                                                  '"title":"",' +
                                                                  '"lines":' +
                                                                      '[' +
                                                                          '{' +
                                                                              '"fields":' +
                                                                              '[' +
                                                                                  '{' +
                                                                                      '"label":"First Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"FIRSTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '},' +
                                                                                  '{' +
                                                                                      '"label":"Last Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"LASTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '}' +
                                                                              ']' +
                                                                          '}' +
                                                                      ']' +
                                                                  '}' +
                                                              ']' +
                                                          '},' +
                                                      '"detailLine":' +
                                                        '{' +
                                                          '"data":' +
                                                            '[' +
                                                                '{' +
                                                                    '"width":"11em",' +
                                                                    '"template":"[LASTNAME], [FIRSTNAME]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"10em",' +
                                                                    '"template":"[PHONE]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[ADDR1]<br />[ADDR2]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[CITY], [STATE] [ZIP]<br />&nbsp;"' +
                                                                '}' +
                                                            '],' +
 // Buttons are Optional
                                                          '"buttons":' +
                                                            '[' +
                                                                '{' +
                                                                    '"href":"tel:[num PHONE]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aPhone.png\\" style=\\"margin-right: 10px; \\">"' +
                                                                '},' +
                                                                '{' +
                                                                    '"href":"http://maps.google.com?daddr=[uri ADDR1]+[uri ADDR2]+[uri CITY]+[uri STATE]+[uri ZIP]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aMap.png\\">"' +
                                                                '}' +
                                                            ']' +
                                                        '}' +
                                                     '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var statusDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title": "Status Detail",' +
                                '"submitto":"",' +
                                '"dataSource":"STATUS",' +
                                '"key":"STATUSID",' +
                                '"keygen":"UUID",' +
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                        '{' +
                                                            '"label":"Status Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"STATUSNAME",' +
                                                            '"mask":"[required][character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"DESCRIPTION",' +
                                                            '"mask":"[character 1 100]"' +
                                                        '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Status Contacts",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                      '"label":"",' +
                                                      '"labelLocation":"top",' +
                                                      '"type":"list",' +
 //'"width":"20em",' +
                                                      '"id":"CONTACTSSTATUS",' +
                                                      '"parentReference":"STATUSID",' +
                                                      '"childReference":"STATUSID",' +
                                                      '"childKey":"CONTACTID",' +
                                                      '"dataSource":"CONTACT",' +
                                                      '"key":"CONTACTID",' +
                                                      '"detailPanel":"contactDetail",' +
                                                      '"searchFields":' +
                                                        '{' +
                                                          '"sections":' +
                                                              '[' +
                                                                  '{' +
                                                                  '"title":"",' +
                                                                  '"lines":' +
                                                                      '[' +
                                                                          '{' +
                                                                              '"fields":' +
                                                                              '[' +
                                                                                  '{' +
                                                                                      '"label":"First Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"FIRSTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '},' +
                                                                                  '{' +
                                                                                      '"label":"Last Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"LASTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '}' +
                                                                              ']' +
                                                                          '}' +
                                                                      ']' +
                                                                  '}' +
                                                              ']' +
                                                          '},' +
                                                      '"detailLine":' +
                                                        '{' +
                                                          '"data":' +
                                                            '[' +
                                                                '{' +
                                                                    '"width":"11em",' +
                                                                    '"template":"[LASTNAME], [FIRSTNAME]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"10em",' +
                                                                    '"template":"[PHONE]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[ADDR1]<br />[ADDR2]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[CITY], [STATE] [ZIP]<br />&nbsp;"' +
                                                                '}' +
                                                            '],' +
 // Buttons are Optional
                                                          '"buttons":' +
                                                            '[' +
                                                                '{' +
                                                                    '"href":"tel:[num PHONE]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aPhone.png\\" style=\\"margin-right: 10px; \\">"' +
                                                                '},' +
                                                                '{' +
                                                                    '"href":"http://maps.google.com?daddr=[uri ADDR1]+[uri ADDR2]+[uri CITY]+[uri STATE]+[uri ZIP]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aMap.png\\">"' +
                                                                '}' +
                                                            ']' +
                                                        '}' +
                                                     '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




 var usersDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title": "Account Administrators Detail",' +
                                '"submitto":"",' +
                                '"dataSource":"PPLUSER",' +
                                '"key":"USERID",' +
                                '"keygen":"UUID",' +
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                        '{' +
                                                            '"label":"First Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"FIRSTNAME",' +
                                                            '"mask":"[character 1 25]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Last Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"LASTNAME",' +
                                                            '"mask":"[required][character 1 30]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"PPL User Id:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"PPLID",' +
                                                            '"mask":"[required][character 1 10]"' +
                                                        '}' +
                                                  ']' +
                                              '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Email:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"EMAIL",' +
                                                            '"mask":"[character 1 80]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';






var contactsPanel =
    '{' +
        '"data":          {' +
                            '"type":"searchList",' +
                            '"title":"Contacts",' +
                            '"dataSource":"CONTACT",' +
                            '"key":"CONTACTID",' +
                            '"detailPanel":"contactDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"First Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"FIRSTNAME",' +
                                                            '"mask":"[character 1 25]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Last Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"LASTNAME",' +
                                                            '"mask":"[character 1 30]"' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                      '{' +
                                                          '"label":"Organization:",' +
                                                          '"labelLocation":"top",' +
//'"labelWidth":"8em",' +
                                                          '"type":"text",' +
                                                          '"id":"ORGANIZATION",' +
                                                          '"mask":"[character 1 70]"' +
                                                      '},' +
/*'{' +
'"label":"Organization:",' +
'"labelLocation":"top",' +
'"type":"select",' +
'"id":"ORGANIZATIONID",' +
'"parameter":"ORGANIZATION",' +
'"key":"ORGID",' +
'"value":"[ORGNAME]",' +
'"filter":""' +
//'"mask":"[required]"' +
'},' +*/
                                                      '{' +
                                                          '"label":"Area:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"AREAID",' +
                                                          '"parameter":"AREA",' +
                                                          '"key":"AREAID",' +
                                                          '"value":"[AREANAME]",' +
                                                          '"filter":""' +
                                                      '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[LASTNAME], [FIRSTNAME]"' +
                                      '},' +
                                      '{' +
                                          '"width":"10em",' +
                                          '"template":"[PHONE]"' +
                                      '},' +
                                      '{' +
                                          '"width":"13em",' +
                                          '"template":"[ADDR1]<br />[ADDR2]"' +
                                      '},' +
                                      '{' +
                                          '"width":"13em",' +
                                          '"template":"[CITY], [STATE] [ZIP]<br />&nbsp;"' +
                                      '}' +
                                  '],' +
// Buttons are Optional
                                '"buttons":' +
                                  '[' +
                                      '{' +
                                          '"href":"tel:[num PHONE]",' +
                                          '"content":"<img src=\\"custom/images/icons/aPhone.png\\" style=\\"margin-right: 10px; \\">"' +
                                      '},' +
                                      '{' +
                                          '"href":"http://maps.google.com?daddr=[uri ADDR1]+[uri ADDR2]+[uri CITY]+[uri STATE]+[uri ZIP]",' +
                                          '"content":"<img src=\\"custom/images/icons/aMap.png\\">"' +
                                      '}' +
                                  ']' +
                              '}' +
                          '},' +

        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';



var speakerBureauPanel =
    '{' +
        '"data":  {' +
                            '"type":"searchList",' +
                            '"title":"Speaker Bureau",' +
                            '"key":"SBID",' +
                            '"dataSource":"SPEAKERBUREAU",' +
                            '"detailPanel":"speakerBureauDetail",' +
                            '"addNew":true,' +
                            '"searchFields":' +
                              '{' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                          '"label":"PPL Account<br />Manager:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"SBPPLACCTMGRID",' +
                                                          '"parameter":"PPLUSER",' +
                                                          '"key":"USERID",' +
                                                          '"value":"LASTNAME",' +
                                                          '"filter":""' +
                                                        '},' +
                                                        '{' +
                                                          '"label":"<br />Name of Org:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"NAMEOFORG",' +
                                                          '"mask":"[character 1 40]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    ']' +
                                '},' +
                            '"detailLine":' +
                              '{' +
                                '"data":' +
                                  '[' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[SBPPLACCTMGRID@PPLUSER]"' +
                                      '},' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[NAMEOFORG]<br />[ORGCONTACT]"' +
                                      '},' +
                                      '{' +
                                          '"width":"7em",' +
                                          '"template":"[CONTACTPHONE]"' +
                                      '},' +
                                      '{' +
                                          '"width":"10em",' +
                                          '"template":"[SCHDDATETIMEOFPRESENTATION]"' +
                                      '},' +
                                      '{' +
                                          '"width":"13em",' +
                                          '"template":"[CONTACTADDR1]<br />[CONTACTADDR2]<br />[CONTACTCITY], [CONTACTSTATE] [CONTACTZIP]"' +
                                      '}' +
                                  '],' +
                                '"translations":' +
                                 '{' +
                                    '"PPLUSER":{' +
                                        '"parameter":"PPLUSER",' +
                                        '"connection":"DATABASE",' +
                                        '"connectionType":"DATABASE",' +
                                        '"key":"USERID",' +
                                        '"value":"[LASTNAME], [FIRSTNAME]"' +
                                    '}' +
                                 '},' +
// Buttons are Optional
                                '"buttons":' +
                                  '[' +
                                      '{' +
                                          '"href":"tel:[num CONTACTPHONE]",' +
                                          '"content":"<img src=\\"custom/images/icons/aPhone.png\\" style=\\"margin-right: 10px; \\">"' +
                                      '},' +
                                      '{' +
                                          '"href":"http://maps.google.com?daddr=[uri CONTACTADDR1]+[uri CONTACTADDR2]+[uri CONTACTCITY]+[uri CONTACTSTATE]+[uri CONTACTZIP]",' +
                                          '"content":"<img src=\\"custom/images/icons/aMap.png\\">"' +
                                      '}' +
                                  ']' +
                              '}' +
                          '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




var groupsPanel =
    '{' +
        '"data":  {' +
                            '"type":"searchTree",' +
                            '"title":"Groups",' +
                            '"dataSource":"GROUPS",' +
                            '"key":"GROUPID",' +
                            '"parentKey":"GROUPPARENT",' +
                            '"detailPanel":"groupsDetail",' +
                            '"addNew":true,' +
                                '"sections":' +
                                    '[' +
                                        '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                            '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Name:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"GROUPNAME",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"GROUPDESCRIPTION",' +
                                                            '"mask":"[character 1 40]"' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                            ']' +
                                        '}' +
                                    '],' +
                            '"template":"[GROUPNAME]"' +
                          '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';





var contactDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title":"Contact Detail",' +
                                '"submitto":"",' +
                                '"dataSource":"CONTACT",' +
                                '"key":"CONTACTID",' +
                                '"keygen":"UUID",' +
/*'"saveText":"Next",' +
'"next":' +
'[' +
'{' +
'"panel":"contacts",' +
'"key":"",' +
'"test":"false",' +
'"save":""' +
'},' +
'{' +
'"panel":"areaDetail",' +
'"key":"contactDetail.AREAID",' +
'"test":"true",' +
'"save":""' +
'}' +
'],' + */
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"id":"firstSection",' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"First Name:",' +
                                                          '"labelLocation":"top",' +
//'"labelWidth":"8em",' +
                                                          '"type":"text",' +
                                                          '"id":"FIRSTNAME",' +
                                                          '"mask":"[required][character 1 25]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"MI:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"MI",' +
                                                          '"mask":"C"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Last Name:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"LASTNAME",' +
                                                          '"mask":"[required][character 1 30]"' +
//'},' +
//'{' +
//    '"label":"",' +
//    '"value":"Say Something",' +
//    '"labelLocation":"top",' +
//    '"type":"button",' +
//    '"id":"GoogleButton",' +
//    '"action":"document.getElementById(\\"contactDetail.FIRSTNAME\\").value=\\"Greg\\";"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Salutation:",' +
                                                          '"labelLocation":"top",' +
//'"labelWidth":"8em",' +
                                                          '"type":"text",' +
                                                          '"id":"SALUTATION",' +
                                                          '"mask":"[character 1 30]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Title:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"TITLE",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Organization:",' +
                                                          '"labelLocation":"top",' +
//'"labelWidth":"8em",' +
                                                          '"type":"text",' +
                                                          '"id":"ORGANIZATION",' +
                                                          '"mask":"[character 1 70]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Address:",' +
                                                          '"labelLocation":"top",' +
//'"labelWidth":"8em",' +
                                                          '"type":"text",' +
                                                          '"id":"ADDR1",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Address:",' +
                                                          '"labelLocation":"top",' +
//'"labelWidth":"8em",' +
                                                          '"type":"text",' +
                                                          '"id":"ADDR2",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"City:",' +
                                                          '"labelLocation":"top",' +
//'"labelWidth":"8em",' +
                                                          '"type":"text",' +
                                                          '"id":"CITY",' +
                                                          '"mask":"[character 1 30]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"State:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"STATE",' +
                                                          '"mask":"AA"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Zip:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"ZIP",' +
                                                          '"mask":"99999-0000"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Country:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"COUNTRY",' +
                                                          '"mask":"[character 1 30]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Phone:",' +
                                                          '"labelLocation":"top",' +
                                                          '"labelWidth":"6em",' +
                                                          '"type":"text",' +
                                                          '"id":"PHONE",' +
                                                          '"mask":"(999) 999-9999"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Mobile Phone:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"MOBILEPHONE",' +
                                                          '"mask":"(999) 999-9999"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Fax:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"FAX",' +
                                                          '"mask":"(999) 999-9999"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Alt Phone:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"ALTPHONE",' +
                                                          '"mask":"(999) 999-9999"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"E-Mail:",' +
                                                          '"labelLocation":"top",' +
                                                          '"labelWidth":"6em",' +
                                                          '"type":"text",' +
                                                          '"id":"EMAIL",' +
                                                          '"mask":"[character 1 80]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"E-Mail 2:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"EMAIL2",' +
                                                          '"mask":"[character 1 80]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
/* '{' +
'"label":"Organization:",' +
'"labelLocation":"top",' +
'"type":"select",' +
'"id":"ORGANIZATIONID",' +
'"parameter":"ORGANIZATION",' +
'"key":"ORGID",' +
'"value":"[ORGNAME]",' +
'"filter":""' +
'},' +*/
                                                      '{' +
                                                          '"label":"Website:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"WEBSITE",' +
                                                          '"mask":"[character 1 256]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"",' +
                                                          '"value":"Go",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"button",' +
                                                          '"id":"GoogleButton",' +
                                                          '"action":"window.open(\\"http://\\" + document.getElementById(\\"contactDetail.WEBSITE\\").value);"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Area:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"AREAID",' +
                                                          '"parameter":"AREA",' +
                                                          '"key":"AREAID",' +
                                                          '"value":"[AREANAME]",' +
                                                          '"filter":""' +
                                                      '}' +
/*'{' +
'"label":"ID/Status:",' +
'"labelLocation":"top",' +
'"type":"select",' +
'"id":"IDSTATUSID",' +
'"parameter":"STATUS",' +
'"key":"STATUSID",' +
'"value":"[STATUSNAME]",' +
'"filter":""' +
'}' +*/
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                      '"label":"ID/Status:",' +
                                                      '"labelLocation":"top",' +
                                                      '"type":"list",' +
                                                      '"id":"CONTACTSSTATUS",' +
                                                      '"parentReference":"CONTACTID",' +
                                                      '"childReference":"CONTACTID",' +
                                                      '"childKey":"STATUSID",' +
                                                      '"dataSource":"STATUS",' +
                                                      '"key":"STATUSID",' +
                                                      '"detailPanel":"statusDetail",' +
                                                      '"searchFields":' +
                                                        '{' +
                                                          '"sections":' +
                                                              '[' +
                                                                  '{' +
                                                                  '"title":"",' +
                                                                  '"lines":' +
                                                                      '[' +
                                                                          '{' +
                                                                              '"fields":' +
                                                                              '[' +
                                                                                  '{' +
                                                                                      '"label":"Status Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"STATUSNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '}' +
                                                                              ']' +
                                                                          '}' +
                                                                      ']' +
                                                                  '}' +
                                                              ']' +
                                                          '},' +
                                                      '"detailLine":' +
                                                        '{' +
                                                          '"data":' +
                                                            '[' +
                                                                '{' +
                                                                    '"width":"11em",' +
                                                                    '"template":"[STATUSNAME]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"15em",' +
                                                                    '"template":"[DESCRIPTION]"' +
                                                                '}' +
                                                            ']' +
                                                        '}' +
                                                     '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                      '"label":"Mail Codes:",' +
                                                      '"labelLocation":"top",' +
                                                      '"type":"list",' +
                                                      '"id":"CONTACTSMAILCODES",' +
                                                      '"parentReference":"CONTACTID",' +
                                                      '"childReference":"CONTACTID",' +
                                                      '"childKey":"MAILCODEID",' +
                                                      '"dataSource":"MAILCODE",' +
                                                      '"key":"MAILCODEID",' +
                                                      '"detailPanel":"mailCodesDetail",' +
                                                      '"searchFields":' +
                                                        '{' +
                                                          '"sections":' +
                                                              '[' +
                                                                  '{' +
                                                                  '"title":"",' +
                                                                  '"lines":' +
                                                                      '[' +
                                                                          '{' +
                                                                              '"fields":' +
                                                                              '[' +
                                                                                  '{' +
                                                                                      '"label":"Mail Code Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"MAILCODENAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '}' +
                                                                              ']' +
                                                                          '}' +
                                                                      ']' +
                                                                  '}' +
                                                              ']' +
                                                          '},' +
                                                      '"detailLine":' +
                                                        '{' +
                                                          '"data":' +
                                                            '[' +
                                                                '{' +
                                                                    '"width":"11em",' +
                                                                    '"template":"[MAILCODENAME]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"15em",' +
                                                                    '"template":"[DESCRIPTION]"' +
                                                                '}' +
                                                            ']' +
                                                        '}' +
                                                     '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Pertinent Notes:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"textarea",' +
                                                          '"id":"PERTINENTNOTES",' +
                                                          '"cols":"38",' +
                                                          '"rows":"14"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Audit Data:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"group",' +
//'"align":"right",' +
                                                          '"id":"",' +
                                                          '"lines":' +
                                                            '[' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                          '"label":"Create Date:",' +
                                                                          '"labelLocation":"left",' +
                                                                          '"labelWidth":"8em",' +
                                                                          '"type":"text",' +
                                                                          '"id":"CREATEDATE",' +
                                                                          '"mask":"[character 1 10][default {var now=new Date(); (\'0\'+(now.getMonth()+1)).substr(0,2)+\'/\'+now.getDate()+\'/\'+now.getFullYear();}]",' +
                                                                          '"readonly":true' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                          '"label":"Last Edited By:",' +
                                                                          '"labelLocation":"left",' +
                                                                          '"labelWidth":"8em",' +
                                                                          '"type":"text",' +
                                                                          '"id":"LASTEDITEDBY",' +
                                                                          '"mask":"[character 1 10][calc {RMBLgetUserId();}]",' +
                                                                          '"readonly":true' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                          '"label":"Edit Date:",' +
                                                                          '"labelLocation":"left",' +
                                                                          '"labelWidth":"8em",' +
                                                                          '"type":"text",' +
                                                                          '"id":"EDITDATE",' +
                                                                          '"mask":"[character 1 10][calc {var now=new Date(); (\'0\'+(now.getMonth()+1)).substr(0,2)+\'/\'+now.getDate()+\'/\'+now.getFullYear();}]",' +
                                                                          '"readonly":true' +
                                                                        '}' +
                                                                    ']' +
                                                                '}' +
                                                            ']' +
                                                      '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';




var speakerBureauDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title":"Speaker Bureau Detail",' +
                                '"submitto":"",' +
                                '"key":"SBID",' +
                                '"keygen":"UUID",' +
                                '"dataSource":"SPEAKERBUREAU",' +
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"PPL Account<br />Manager:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"SBPPLACCTMGRID",' +
                                                          '"parameter":"PPLUSER",' +
                                                          '"key":"USERID",' +
                                                          '"value":"[LASTNAME]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"<br />Name of Org:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"NAMEOFORG",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Scheduled Date/Time<br />of Presentation:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"SCHDDATETIMEOFPRESENTATION",' +
                                                          '"mask":"09/09/9999 00:00am"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"<br />Location of Presentation:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"LOCATIONOFPRESENTATION",' +
                                                          '"mask":"[character 1 30]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Length of<br />Presentation:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"LENGTHOFPRESENTATION",' +
                                                          '"mask":"09:00"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"<br />Speaker Name:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"SPEAKERNAME",' +
                                                          '"mask":"[character 1 30]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Speaker<br />Phone Number:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"SPEAKERPHONENUMBER",' +
                                                          '"mask":"(999) 999-9999 x:00000"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"<br />Status:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"IDSTATUSID",' +
                                                          '"parameter":"STATUS",' +
                                                          '"key":"STATUSID",' +
                                                          '"value":"[STATUSNAME]",' +
                                                          '"filter":""' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Anticipated<br />Attendees:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"ANTICIPATEDATTENDEES",' +
                                                          '"mask":"[numeric 1 4]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Actual<br />Attendees:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"ACTUALATTENDEES",' +
                                                          '"mask":"[numeric 1 4]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"<br /><br />Emailed Scanned SB Form:",' +
                                                          '"labelLocation":"left",' +
                                                          '"type":"checkbox",' +
                                                          '"id":"EMAILEDSCANNEDSBFORM"' +
                                                      '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Items Needed",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                      '"label":"",' +
                                                      '"labelLocation":"top",' +
                                                      '"type":"group",' +
                                                      '"align":"left",' +
                                                      '"id":"",' +
                                                      '"lines":' +
                                                        '[' +
                                                            '{' +
                                                                '"fields":' +
                                                                '[' +
                                                                    '{' +
                                                                      '"label":"Laptop",' +
                                                                      '"labelLocation":"right",' +
                                                                      '"type":"checkbox",' +
                                                                      '"id":"NEEDLAPTOP"' +
                                                                    '}' +
                                                                ']' +
                                                            '},' +
                                                            '{' +
                                                                '"fields":' +
                                                                '[' +
                                                                    '{' +
                                                                      '"label":"Proxima",' +
                                                                      '"labelLocation":"right",' +
                                                                      '"type":"checkbox",' +
                                                                      '"id":"NEEDPROXIMA"' +
                                                                    '}' +
                                                                ']' +
                                                            '},' +
                                                            '{' +
                                                                '"fields":' +
                                                                '[' +
                                                                    '{' +
                                                                      '"label":"PPT Handouts",' +
                                                                      '"labelLocation":"right",' +
                                                                      '"type":"checkbox",' +
                                                                      '"id":"NEEDPPTHANDOUTS"' +
                                                                    '}' +
                                                                ']' +
                                                            '},' +
                                                            '{' +
                                                                '"fields":' +
                                                                '[' +
                                                                    '{' +
                                                                      '"label":"Flip Top Presentation",' +
                                                                      '"labelLocation":"right",' +
                                                                      '"type":"checkbox",' +
                                                                      '"id":"NEEDFLIPTOPPRESENTATION"' +
                                                                    '}' +
                                                                ']' +
                                                            '}' +
                                                        ']' +
                                                      '},' +
                                                      '{' +
                                                        '"label":"",' +
                                                        '"labelLocation":"top",' +
                                                        '"type":"group",' +
                                                        '"align":"left",' +
                                                        '"id":"",' +
                                                        '"lines":' +
                                                          '[' +
                                                              '{' +
                                                                  '"fields":' +
                                                                  '[' +
                                                                      '{' +
                                                                        '"label":"CFL Bulbs:",' +
                                                                        '"labelLocation":"top",' +
                                                                        '"type":"text",' +
                                                                        '"id":"CFLBULBSNEEDED",' +
                                                                        '"mask":"9999"' +
                                                                      '},' +
                                                                      '{' +
                                                                        '"label":"AV Materials:",' +
                                                                        '"labelLocation":"top",' +
                                                                        '"type":"textarea",' +
                                                                        '"id":"AVMATERIALSNEEDED",' +
                                                                        '"cols":"25",' +
                                                                        '"rows":"5"' +
                                                                      '}' +
                                                                  ']' +
                                                              '}' +
                                                          ']' +
                                                        '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Bulbs Sent:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"BULBSSENT",' +
                                                          '"mask":"9999"' +
                                                      '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Contact Info",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Name:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"ORGCONTACT",' +
                                                          '"mask":"[character 1 30]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Phone:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"CONTACTPHONE",' +
                                                          '"mask":"(999) 999-9999 x:00000"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Address:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"CONTACTADDR1",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Address:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"CONTACTADDR2",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"City:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"CONTACTCITY",' +
                                                          '"mask":"[character 1 30]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"State:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"CONTACTSTATE",' +
                                                          '"mask":"AA"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Zip:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"CONTACTZIP",' +
                                                          '"mask":"99999-0000"' +
                                                      '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Results",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"<br />Notes for Speaker:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"textarea",' +
                                                          '"id":"NOTESFORSPEAKER",' +
                                                          '"cols":38,' +
                                                          '"rows":5' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Date Presentation<br />Complete:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"DATEPRESENTATIONCOMPLETE",' +
                                                          '"mask":"09/09/9999"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Equip Due<br />Back:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"EQUIPDUEBACK",' +
                                                          '"mask":"09/09/9999"' +
                                                      '},' +
                                                      '{' +
                                                        '"label":"<br /><br />Equip Returned:",' +
                                                        '"labelLocation":"left",' +
                                                        '"type":"checkbox",' +
                                                        '"id":"EQUIPRETURNED"' +
                                                      '}' +
                                                  ']' +
                                              '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"<br />Difficult Questions:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"textarea",' +
                                                          '"id":"DIFFICULTQUESTIONS",' +
                                                          '"cols":38,' +
                                                          '"rows":5' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Presentation Subject:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"PRESENTATIONSUBJECT",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';





var groupsDetailPanel =
    '{' +
        '"data":  {' +
                                '"type":"detail",' +
                                '"title":"Group Detail",' +
                                '"submitto":"",' +
                                '"dataSource":"GROUPS",' +
                                '"key":"GROUPID",' +
                                '"keygen":"UUID",' +
                                '"sections":' +
                                  '[' +
                                      '{' +
                                        '"title":"",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                          '"label":"Parent Group:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"GROUPPARENT",' +
                                                          '"url":"",' +
                                                          '"parameter":"GROUPS",' +
                                                          '"key":"GROUPID",' +
                                                          '"value":"[GROUPNAME]",' +
                                                          '"filter":""' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Name:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"GROUPNAME",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '},' +
                                                      '{' +
                                                          '"label":"Description:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"text",' +
                                                          '"id":"GROUPDESCRIPTION",' +
                                                          '"mask":"[character 1 40]"' +
                                                      '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Group Members",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                      '{' +
                                                      '"label":"",' +
                                                      '"labelLocation":"top",' +
                                                      '"type":"list",' +
//'"width":"20em",' +
                                                      '"id":"GROUPMEMBERS",' +
                                                      '"parentReference":"GROUPID",' +
                                                      '"childReference":"GROUPID",' +
                                                      '"childKey":"CONTACTID",' +
                                                      '"dataSource":"CONTACT",' +
                                                      '"key":"CONTACTID",' +
                                                      '"detailPanel":"contactDetail",' +
                                                      '"searchFields":' +
                                                        '{' +
                                                          '"sections":' +
                                                              '[' +
                                                                  '{' +
                                                                  '"title":"",' +
                                                                  '"lines":' +
                                                                      '[' +
                                                                          '{' +
                                                                              '"fields":' +
                                                                              '[' +
                                                                                  '{' +
                                                                                      '"label":"First Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"FIRSTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '},' +
                                                                                  '{' +
                                                                                      '"label":"Last Name:",' +
                                                                                      '"labelLocation":"top",' +
                                                                                      '"type":"text",' +
                                                                                      '"id":"LASTNAME",' +
                                                                                      '"mask":"[character 1 40]"' +
                                                                                  '}' +
                                                                              ']' +
                                                                          '}' +
                                                                      ']' +
                                                                  '}' +
                                                              ']' +
                                                          '},' +
                                                      '"detailLine":' +
                                                        '{' +
                                                          '"data":' +
                                                            '[' +
                                                                '{' +
                                                                    '"width":"11em",' +
                                                                    '"template":"[LASTNAME], [FIRSTNAME]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"10em",' +
                                                                    '"template":"[PHONE]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[ADDR1]<br />[ADDR2]"' +
                                                                '},' +
                                                                '{' +
                                                                    '"width":"13em",' +
                                                                    '"template":"[CITY], [STATE] [ZIP]<br />&nbsp;"' +
                                                                '}' +
                                                            '],' +
// Buttons are Optional
                                                          '"buttons":' +
                                                            '[' +
                                                                '{' +
                                                                    '"href":"tel:[num PHONE]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aPhone.png\\" style=\\"margin-right: 10px; \\">"' +
                                                                '},' +
                                                                '{' +
                                                                    '"href":"http://maps.google.com?daddr=[uri ADDR1]+[uri ADDR2]+[uri CITY]+[uri STATE]+[uri ZIP]",' +
                                                                    '"content":"<img src=\\"custom/images/icons/aMap.png\\">"' +
                                                                '}' +
                                                            ']' +
                                                        '}' +
                                                     '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '},' +
        '"status": {' +
            '"result": "true",' +
            '"message": ""' +
        '}' +
    '}';





// Define all "Pulldown" choice fields

 var xPPLUSER =


 '[ ' +
                        '{' +
                          '"KEY":"1",' +
                          '"VALUE":"Mat"' +
                        '},' +
                        '{' +
                          '"KEY":"2",' +
                          '"VALUE":"Susie"' +
                        '},' +
                        '{' +
                          '"KEY":"3",' +
                          '"VALUE":"Paul"' +
                        '},' +
                        '{' +
                          '"KEY":"4",' +
                          '"VALUE":"Christene"' +
                        '},' +
                        '{' +
                          '"KEY":"5",' +
                          '"VALUE":"Frank"' +
                        '}' +
                       ']';

var idStatus = '[ ' +
                        '{' +
                          '"KEY":"1",' +
                          '"VALUE":"Status 1"' +
                        '},' +
                        '{' +
                          '"KEY":"2",' +
                          '"VALUE":"Status 2"' +
                        '},' +
                        '{' +
                          '"KEY":"3",' +
                          '"VALUE":"Status 3"' +
                        '},' +
                        '{' +
                          '"KEY":"4",' +
                          '"VALUE":"Status 4"' +
                        '},' +
                        '{' +
                          '"KEY":"5",' +
                          '"VALUE":"Status 5"' +
                        '}' +
                       ']';

var referredBy = '[ ' +
                        '{' +
                          '"KEY":"1",' +
                          '"VALUE":"Peter"' +
                        '},' +
                        '{' +
                          '"KEY":"2",' +
                          '"VALUE":"Paul"' +
                        '},' +
                        '{' +
                          '"KEY":"3",' +
                          '"VALUE":"Mary"' +
                        '},' +
                        '{' +
                          '"KEY":"4",' +
                          '"VALUE":"Ringo"' +
                        '},' +
                        '{' +
                          '"KEY":"5",' +
                          '"VALUE":"Star"' +
                        '}' +
                       ']';

var mailCodes = '[ ' +
                        '{' +
                          '"KEY":"1",' +
                          '"VALUE":"Priority"' +
                        '},' +
                        '{' +
                          '"KEY":"2",' +
                          '"VALUE":"Overnight"' +
                        '},' +
                        '{' +
                          '"KEY":"3",' +
                          '"VALUE":"First Class"' +
                        '},' +
                        '{' +
                          '"KEY":"4",' +
                          '"VALUE":"Second Class"' +
                        '},' +
                        '{' +
                          '"KEY":"5",' +
                          '"VALUE":"Pack Mule"' +
                        '}' +
                       ']';


// The following is for DEMO only... Simulating Server Data

var groupsSearchResultString = '[ ' +
                              '{' +
                                '"ID":"1",' +
                                '"parentID":"",' +
                                '"name":"Christmas List",' +
                                '"description":""' +
                              '},' +
                              '{' +
                                '"ID":"2",' +
                                '"parentID":"",' +
                                '"name":"MHerron",' +
                                '"description":""' +
                              '},' +
                              '{' +
                                '"ID":"3",' +
                                '"parentID":"2",' +
                                '"name":"Christmas Cards",' +
                                '"description":""' +
                              '},' +
                              '{' +
                                '"ID":"4",' +
                                '"parentID":"2",' +
                                '"name":"Luserne County",' +
                                '"description":""' +
                              '},' +
                              '{' +
                                '"ID":"5",' +
                                '"parentID":"2",' +
                                '"name":"Partners in Education",' +
                                '"description":""' +
                              '},' +
                              '{' +
                                '"ID":"6",' +
                                '"parentID":"5",' +
                                '"name":"Board of Directors",' +
                                '"description":""' +
                              '},' +
                              '{' +
                                '"ID":"7",' +
                                '"parentID":"5",' +
                                '"name":"Executive Committee",' +
                                '"description":""' +
                              '},' +
                              '{' +
                                '"ID":"8",' +
                                '"parentID":"2",' +
                                '"name":"Schuylkill County",' +
                                '"description":""' +
                              '}' +
//'{' + 
//  '"ID":"1",' +
//  '"parentID":"",' +
//  '"name":"Christmas List",' +
//  '"description":""' +
//'},' +
                             ']';

var CONTACTSSearchResultString = '[ ' +
                              '{' +
                                '"ID":"1",' +
                                '"FIRSTNAME":"Carol",' +
                                '"LASTNAME":"Aichele",' +
                                '"ADDR1":"2 N High Street Suite 512",' +
                                '"ADDR2":"P.O. Box 2748",' +
                                '"CITY":"Allentown",' +
                                '"STATE":"PA",' +
                                '"ZIP":"18104",' +
                                '"PHONE":"(610) 344-6100"' +
                              '},' +
                              '{' +
                                '"ID":"2",' +
                                '"firstName":"Easter",' +
                                '"lastName":"Bunny",' +
                                '"addr1":"1 E Spring LN",' +
                                '"addr2":"",' +
                                '"city":"Holiday Town",' +
                                '"state":"AK",' +
                                '"zip":"71602",' +
                                '"phone":"(610) 796-5470"' +
                              '},' +
                              '{' +
                                '"ID":"3",' +
                                '"firstName":"Jack",' +
                                '"lastName":"Altrades",' +
                                '"addr1":"8 N Every St",' +
                                '"addr2":"",' +
                                '"city":"Phantomville",' +
                                '"state":"WI",' +
                                '"zip":"54003",' +
                                '"phone":"(796) 463-4965"' +
                              '},' +
                              '{' +
                                '"ID":"4",' +
                                '"firstName":"Gregory",' +
                                '"lastName":"Lamoree",' +
                                '"addr1":"1925 W Congress St",' +
                                '"addr2":"",' +
                                '"city":"Allentown",' +
                                '"state":"PA",' +
                                '"zip":"18104",' +
                                '"phone":"(610) 737-7766"' +
                              '}' +
//'{' + 
//  '"ID":"",' +
//  '"firstName":"",' +
//  '"lastName":"",' +
//  '"addr1":"",' +
//  '"addr2":"",' +
//  '"city":"",' +
//  '"state":"",' +
//  '"zip":"",' +
//  '"phone":"",' +
//'}' +
                             ']';

//var groupMembersSearchSearchResultString = contactsSearchResultString;                              

var groupMembersList1 = '[ ' +
                              '{' +
                                '"ID":"1",' +
                                '"firstName":"Carol",' +
                                '"lastName":"Aichele",' +
                                '"addr1":"2 N High Street Suite 512",' +
                                '"addr2":"P.O. Box 2748",' +
                                '"city":"Allentown",' +
                                '"state":"PA",' +
                                '"zip":"18104",' +
                                '"phone":"(610) 344-6100"' +
                              '},' +
                              '{' +
                                '"ID":"3",' +
                                '"firstName":"Jack",' +
                                '"lastName":"Altrades",' +
                                '"addr1":"8 N Every St",' +
                                '"addr2":"",' +
                                '"city":"Phantomville",' +
                                '"state":"WI",' +
                                '"zip":"54003",' +
                                '"phone":"(796) 463-4965"' +
                              '},' +
                              '{' +
                                '"ID":"4",' +
                                '"firstName":"Gregory",' +
                                '"lastName":"Lamoree",' +
                                '"addr1":"1925 W Congress St",' +
                                '"addr2":"",' +
                                '"city":"Allentown",' +
                                '"state":"PA",' +
                                '"zip":"18104",' +
                                '"phone":"(610) 737-7766"' +
                              '}' +
//'{' + 
//  '"ID":"",' +
//  '"firstName":"",' +
//  '"lastName":"",' +
//  '"addr1":"",' +
//  '"addr2":"",' +
//  '"city":"",' +
//  '"state":"",' +
//  '"zip":"",' +
//  '"phone":"",' +
//'}' +
                             ']';

var groupMembersList4 = '[ ' +
                              '{' +
                                '"ID":"1",' +
                                '"firstName":"Carol",' +
                                '"lastName":"Aichele",' +
                                '"addr1":"2 N High Street Suite 512",' +
                                '"addr2":"P.O. Box 2748",' +
                                '"city":"Allentown",' +
                                '"state":"PA",' +
                                '"zip":"18104",' +
                                '"phone":"(610) 344-6100"' +
                              '},' +
                              '{' +
                                '"ID":"2",' +
                                '"firstName":"Easter",' +
                                '"lastName":"Bunny",' +
                                '"addr1":"1 E Spring LN",' +
                                '"addr2":"",' +
                                '"city":"Holiday Town",' +
                                '"state":"AK",' +
                                '"zip":"71602",' +
                                '"phone":"(610) 796-5470"' +
                              '},' +
                              '{' +
                                '"ID":"3",' +
                                '"firstName":"Jack",' +
                                '"lastName":"Altrades",' +
                                '"addr1":"8 N Every St",' +
                                '"addr2":"",' +
                                '"city":"Phantomville",' +
                                '"state":"WI",' +
                                '"zip":"54003",' +
                                '"phone":"(796) 463-4965"' +
                              '},' +
                              '{' +
                                '"ID":"4",' +
                                '"firstName":"Gregory",' +
                                '"lastName":"Lamoree",' +
                                '"addr1":"1925 W Congress St",' +
                                '"addr2":"",' +
                                '"city":"Allentown",' +
                                '"state":"PA",' +
                                '"zip":"18104",' +
                                '"phone":"(610) 737-7766"' +
                              '}' +
//'{' + 
//  '"ID":"",' +
//  '"firstName":"",' +
//  '"lastName":"",' +
//  '"addr1":"",' +
//  '"addr2":"",' +
//  '"city":"",' +
//  '"state":"",' +
//  '"zip":"",' +
//  '"phone":"",' +
//'}' +
                             ']';
var contactsDetailResultString = '[ ' +
                              '{' +
                                '"CONTACTID":"1",' +
                                '"FIRSTNAME":"Carol",' +
                                '"MI":"",' +
                                '"LASTNAME":"Aichele",' +
                                '"SALUTATION":"",' +
                                '"title":"",' +
                                '"addr1":"2 N High Street Suite 512",' +
                                '"addr2":"P.O. Box 2748",' +
                                '"city":"Allentown",' +
                                '"state":"PA",' +
                                '"zip":"18104",' +
                                '"country":"",' +
                                '"phone":"(610) 344-6100",' +
                                '"mobilePhone":"",' +
                                '"fax":"",' +
                                '"altPhone":"",' +
                                '"email":"",' +
                                '"email2":"",' +
                                '"company":"",' +
                                '"website":"",' +
                                '"contactPplAcctMgrID":"",' +
                                '"idStatus":"",' +
                                '"referredBy":"",' +
                                '"mailCodes":"",' +
                                '"pertinentNotes":"",' +
                                '"createDate":"",' +
                                '"lastEditedBy":"",' +
                                '"editDate":"",' +
                                '"lastEMail":"",' +
                                '"letterDate":"",' +
                                '"lastReach":"",' +
                                '"lastAttempt":""' +
                              '},' +
                              '{' +
                                '"contactID":"2",' +
                                '"firstName":"Easter",' +
                                '"MI":"",' +
                                '"lastName":"Bunny",' +
                                '"salutation":"",' +
                                '"title":"",' +
                                '"addr1":"1 E Spring LN",' +
                                '"addr2":"",' +
                                '"city":"Holiday Town",' +
                                '"state":"AK",' +
                                '"zip":"71602",' +
                                '"country":"",' +
                                '"phone":"(610) 796-5470",' +
                                '"mobilePhone":"",' +
                                '"fax":"",' +
                                '"altPhone":"",' +
                                '"email":"",' +
                                '"email2":"",' +
                                '"company":"",' +
                                '"website":"",' +
                                '"contactPplAcctMgrID":"",' +
                                '"idStatus":"",' +
                                '"referredBy":"",' +
                                '"mailCodes":"",' +
                                '"pertinentNotes":"",' +
                                '"createDate":"",' +
                                '"lastEditedBy":"",' +
                                '"editDate":"",' +
                                '"lastEMail":"",' +
                                '"letterDate":"",' +
                                '"lastReach":"",' +
                                '"lastAttempt":""' +
                              '},' +
                              '{' +
                                '"contactID":"3",' +
                                '"firstName":"Jack",' +
                                '"MI":"",' +
                                '"lastName":"Altrades",' +
                                '"salutation":"",' +
                                '"title":"",' +
                                '"addr1":"8 N Every St",' +
                                '"addr2":"",' +
                                '"city":"Phantomville",' +
                                '"state":"WI",' +
                                '"zip":"54003",' +
                                '"country":"",' +
                                '"phone":"(796) 463-4965",' +
                                '"mobilePhone":"",' +
                                '"fax":"",' +
                                '"altPhone":"",' +
                                '"email":"",' +
                                '"email2":"",' +
                                '"company":"",' +
                                '"website":"",' +
                                '"contactPplAcctMgrID":"",' +
                                '"idStatus":"",' +
                                '"referredBy":"",' +
                                '"mailCodes":"",' +
                                '"pertinentNotes":"Here are some notes!",' +
                                '"createDate":"",' +
                                '"lastEditedBy":"",' +
                                '"editDate":"2010/05/10",' +
                                '"lastEMail":"",' +
                                '"letterDate":"",' +
                                '"lastReach":"",' +
                                '"lastAttempt":""' +
                              '},' +
                              '{' +
                                '"contactID":"4",' +
                                '"firstName":"Gregory",' +
                                '"MI":"",' +
                                '"lastName":"Lamoree",' +
                                '"salutation":"",' +
                                '"title":"",' +
                                '"addr1":"1925 W Congress St",' +
                                '"addr2":"",' +
                                '"city":"Allentown",' +
                                '"state":"PA",' +
                                '"zip":"18104",' +
                                '"country":"",' +
                                '"phone":"(610) 737-7766",' +
                                '"mobilePhone":"",' +
                                '"fax":"",' +
                                '"altPhone":"",' +
                                '"email":"",' +
                                '"email2":"",' +
                                '"company":"",' +
                                '"website":"",' +
                                '"contactPplAcctMgrID":"4",' +
                                '"idStatus":"",' +
                                '"referredBy":"",' +
                                '"mailCodes":"4",' +
                                '"pertinentNotes":"",' +
                                '"createDate":"",' +
                                '"lastEditedBy":"",' +
                                '"editDate":"",' +
                                '"lastEMail":"",' +
                                '"letterDate":"",' +
                                '"lastReach":"",' +
                                '"lastAttempt":""' +
                              '}' +
//'{' + 
//  '"contactID":"",' +
//  '"firstName":"",' +
//  '"MI":"",' +
//  '"lastName":"",' +
//  '"salutation":"",' +
//  '"title":"",' +
//  '"addr1":"",' +
//  '"addr2":"",' +
//  '"city":"",' +
//  '"state":"",' +
//  '"zip":"",' +
//  '"country":"",' +
//  '"phone":"",' +
//  '"mobilePhone":"",' +
//  '"fax":"",' +
//  '"altPhone":"",' +
//  '"email":"",' +
//  '"email2":"",' +
//  '"company":"",' +
//  '"website":"",' +
//  '"contactPplAcctMgrID":"",' +
//  '"idStatus":"",' +
//  '"referredBy":"",' +
//  '"mailCodes":"",' +
//  '"pertinentNotes":"",' +
//  '"createDate":"",' +
//  '"lastEditedBy":"",' +
//  '"editDate":"",' +
//  '"lastEMail":"",' +
//  '"letterDate":"",' +
//  '"lastReach":"",' +
//  '"lastAttempt":""' +
//'},' +
                             ']';

var speakerBureauSearchResultString = '[ ' +
                              '{' +
                                '"sbID":"1",' +
                                '"pplAcctMgr":"MacBrideT",' +
                                '"nameOfOrg":"Harleysville Rotary",' +
                                '"schdDateTimeOfPresentation":"11/10/2011 12:00pm",' +
                                '"orgContact":"Mr. Rotary",' +
                                '"contactPhone":"(610) 334-6100",' +
                                '"contactAddr1":"2 N High Street Suite 512",' +
                                '"contactAddr2":"P.O. Box 2748",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18104"' +
                              '},' +
                              '{' +
                                '"sbID":"2",' +
                                '"pplAcctMgr":"SimpsonB",' +
                                '"nameOfOrg":"GIANT Food Store",' +
                                '"schdDateTimeOfPresentation":"12/10/2012 09:00am",' +
                                '"orgContact":"Alton Brown",' +
                                '"contactPhone":"(610) 776-1531",' +
                                '"contactAddr1":"3100 West Tilghman Street",' +
                                '"contactAddr2":"",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18104-4266"' +
                              '},' +
                              '{' +
                                '"sbID":"3",' +
                                '"pplAcctMgr":"JonesD",' +
                                '"nameOfOrg":"Carmike Cinema",' +
                                '"schdDateTimeOfPresentation":"02/21/2010 01:00pm",' +
                                '"orgContact":"Popcorn Pete",' +
                                '"contactPhone":"(610) 786-4964",' +
                                '"contactAddr1":"1700 Catasauqua Rd",' +
                                '"contactAddr2":"",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18109-9694"' +
                              '},' +
                              '{' +
                                '"sbID":"4",' +
                                '"pplAcctMgr":"GregL",' +
                                '"nameOfOrg":"Lehigh - Northampton Airport Authority",' +
                                '"schdDateTimeOfPresentation":"08/15/2011 09:00am",' +
                                '"orgContact":"Skip Fairchild",' +
                                '"contactPhone":"(610) 266-6001",' +
                                '"contactAddr1":"3311 Airport Road",' +
                                '"contactAddr2":"",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18109-3040"' +
                              '}' +
//'{' + 
//  '"sbID":"",' +
//  '"pplAcctMgr":"",' +
//  '"nameOfOrg":"",' +
//  '"schdDateTimeOfPresentation":"",' +
//  '"orgContact":"",' +
//  '"contactPhone":"",' +
//  '"contactAddr1":"",' +
//  '"contactAddr2":"",' +
//  '"contactCity":"",' +
//  '"contactState":"",' +
//  '"contactZip":""' +
//'},' +
                             ']';

var speakerBureauDetailResultString = '[ ' +
                              '{' +
                                '"sbID":"1",' +
                                '"SBpplAcctMgrID":"1",' +
                                '"nameOfOrg":"Harleysville Rotary",' +
                                '"schdDateTimeOfPresentation":"11/10/2011 12:00pm",' +
                                '"locationOfPresentation":"",' +
                                '"lengthOfPresentation":"",' +
                                '"speakerName":"",' +
                                '"speakerPhoneNumber":"",' +
                                '"status":"",' +
                                '"anticipatedAttendees":"",' +
                                '"actualAttendees":"",' +
                                '"emailedScannedSBForm":"",' +
                                '"needLaptop":"",' +
                                '"needProxima":"",' +
                                '"needPPTHandouts":"",' +
                                '"needFlipTopPresentation":"",' +
                                '"aVMaterialsNeeded":"",' +
                                '"cFLBulbsNeeded":"",' +
                                '"bulbsSent":"",' +
                                '"orgContact":"Mr. Rotary",' +
                                '"contactPhone":"(610) 334-6100",' +
                                '"contactAddr1":"2 N High Street Suite 512",' +
                                '"contactAddr2":"P.O. Box 2748",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18104",' +
                                '"notesForSpeaker":"",' +
                                '"datePresentationComplete":"",' +
                                '"equipDueBack":"",' +
                                '"equipReturned":"",' +
                                '"difficultQuestions":"",' +
                                '"presentationSubject":""' +
                              '},' +
                              '{' +
                                '"sbID":"2",' +
                                '"SBpplAcctMgrID":"2",' +
                                '"nameOfOrg":"GIANT Food Store",' +
                                '"schdDateTimeOfPresentation":"12/10/2012 09:00am",' +
                                '"locationOfPresentation":"",' +
                                '"lengthOfPresentation":"",' +
                                '"speakerName":"",' +
                                '"speakerPhoneNumber":"",' +
                                '"status":"",' +
                                '"anticipatedAttendees":"",' +
                                '"actualAttendees":"",' +
                                '"emailedScannedSBForm":"",' +
                                '"needLaptop":"",' +
                                '"needProxima":"",' +
                                '"needPPTHandouts":"",' +
                                '"needFlipTopPresentation":"",' +
                                '"aVMaterialsNeeded":"",' +
                                '"cFLBulbsNeeded":"",' +
                                '"bulbsSent":"",' +
                                '"orgContact":"Alton Brown",' +
                                '"contactPhone":"(610) 776-1531",' +
                                '"contactAddr1":"3100 West Tilghman Street",' +
                                '"contactAddr2":"",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18104-4266",' +
                                '"notesForSpeaker":"",' +
                                '"datePresentationComplete":"",' +
                                '"equipDueBack":"",' +
                                '"equipReturned":"",' +
                                '"difficultQuestions":"",' +
                                '"presentationSubject":""' +
                              '},' +
                              '{' +
                                '"sbID":"3",' +
                                '"SBpplAcctMgrID":"3",' +
                                '"nameOfOrg":"Carmike Cinema",' +
                                '"schdDateTimeOfPresentation":"02/21/2010 01:00pm",' +
                                '"locationOfPresentation":"",' +
                                '"lengthOfPresentation":"",' +
                                '"speakerName":"",' +
                                '"speakerPhoneNumber":"",' +
                                '"status":"",' +
                                '"anticipatedAttendees":"",' +
                                '"actualAttendees":"",' +
                                '"emailedScannedSBForm":"",' +
                                '"needLaptop":"",' +
                                '"needProxima":"",' +
                                '"needPPTHandouts":"",' +
                                '"needFlipTopPresentation":"",' +
                                '"aVMaterialsNeeded":"",' +
                                '"cFLBulbsNeeded":"",' +
                                '"bulbsSent":"",' +
                                '"orgContact":"Popcorn Pete",' +
                                '"contactPhone":"(610) 786-4964",' +
                                '"contactAddr1":"1700 Catasauqua Rd",' +
                                '"contactAddr2":"",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18109-9694",' +
                                '"notesForSpeaker":"",' +
                                '"datePresentationComplete":"",' +
                                '"equipDueBack":"",' +
                                '"equipReturned":"",' +
                                '"difficultQuestions":"",' +
                                '"presentationSubject":""' +
                              '},' +
                              '{' +
                                '"sbID":"4",' +
                                '"SBpplAcctMgrID":"4",' +
                                '"nameOfOrg":"Lehigh - Northampton Airport Authority",' +
                                '"schdDateTimeOfPresentation":"08/15/2011 09:00am",' +
                                '"locationOfPresentation":"",' +
                                '"lengthOfPresentation":"",' +
                                '"speakerName":"",' +
                                '"speakerPhoneNumber":"",' +
                                '"status":"3",' +
                                '"anticipatedAttendees":"",' +
                                '"actualAttendees":"",' +
                                '"emailedScannedSBForm":"1",' +
                                '"needLaptop":"",' +
                                '"needProxima":"1",' +
                                '"needPPTHandouts":"1",' +
                                '"needFlipTopPresentation":"",' +
                                '"aVMaterialsNeeded":"",' +
                                '"cFLBulbsNeeded":"",' +
                                '"bulbsSent":"",' +
                                '"orgContact":"Skip Fairchild",' +
                                '"contactPhone":"(610) 266-6001",' +
                                '"contactAddr1":"3311 Airport Road",' +
                                '"contactAddr2":"",' +
                                '"contactCity":"Allentown",' +
                                '"contactState":"PA",' +
                                '"contactZip":"18109-3040",' +
                                '"notesForSpeaker":"",' +
                                '"datePresentationComplete":"",' +
                                '"equipDueBack":"",' +
                                '"equipReturned":"",' +
                                '"difficultQuestions":"",' +
                                '"presentationSubject":""' +
                              '}' +
//'{' + 
//  '"sbID":"",' +
//  '"pplAcctMgr":"",' +
//  '"nameOfOrg":"",' +
//  '"schdDateTimeOfPresentation":"",' +
//  '"locationOfPresentation":"",' +
//  '"lengthOfPresentation":"",' +
//  '"speakerName":"",' +
//  '"speakerPhoneNumber":"",' +
//  '"status":"",' +
//  '"anticipatedAttendees":"",' +
//  '"actualAttendees":"",' +
//  '"emailedScannedSBForm":"",' +
//  '"needLaptop":"",' +
//  '"needProxima":"",' +
//  '"needPPTHandouts":"",' +
//  '"needFlipTopPresentation":"",' +
//  '"aVMaterialsNeeded":"",' +
//  '"cFLBulbsNeeded":"",' +
//  '"bulbsSent":"",' +
//  '"orgContact":"",' +
//  '"contactPhone":"",' +
//  '"contactAddr1":"",' +
//  '"contactAddr2":"",' +
//  '"contactCity":"",' +
//  '"contactState":"",' +
//  '"contactZip":"",' +
//  '"notesForSpeaker":"",' +
//  '"datePresentationComplete":"",' +
//  '"equipDueBack":"",' +
//  '"equipReturned":"",' +
//  '"difficultQuestions":"",' +
//  '"presentationSubject":""' +
//'},' +
                             ']';

var groupsDetailResultString = '[ ' +
                              '{' +
                                '"groupID":"1",' +
                                '"groupParent":"",' +
                                '"groupName":"Christmas List"' +
                              '},' +
                              '{' +
                                '"groupID":"2",' +
                                '"groupParent":"",' +
                                '"groupName":"MHerron"' +
                              '},' +
                              '{' +
                                '"groupID":"3",' +
                                '"groupParent":"2",' +
                                '"groupName":"Christmas Cards"' +
                              '},' +
                              '{' +
                                '"groupID":"4",' +
                                '"groupParent":"2",' +
                                '"groupName":"Luserne County"' +
                              '},' +
                              '{' +
                                '"groupID":"5",' +
                                '"groupParent":"2",' +
                                '"groupName":"Partners in Education"' +
                              '},' +
                              '{' +
                                '"groupID":"6",' +
                                '"groupParent":"5",' +
                                '"groupName":"Board of Directors"' +
                              '},' +
                              '{' +
                                '"groupID":"7",' +
                                '"groupParent":"5",' +
                                '"groupName":"Executive Committee"' +
                              '},' +
                              '{' +
                                '"groupID":"8",' +
                                '"groupParent":"2",' +
                                '"groupName":"Schuylkill County"' +
                              '}' +
//'{' + 
//  '"groupID":"1",' +
//  '"groupParent":"",' +
//  '"groupName":"Christmas List"' +
//'},' +
                             ']';



