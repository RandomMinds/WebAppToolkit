// Set the base application information

var appDef = '{' +
                  '"Name":"PV ACT 11",' +
                  '"Description":"Welcome to PV ACT 11<br />Premivera ACT 11 Super Project Editor",' +
                  '"Footer":"&copy; 2011 PPL Corporation. All Rights Reserved."' +
                  //',"access":["PPL\\\\ISD-DL-GIS"]' +
                 '}';



// Define the Main Menu - This is the launching point of the application

var mainMenu = '{' +
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
                                    '"ID":"superProjects",' +
                                    '"Text":"&nbsp;&nbsp;Super Projects",' +
                                    '"Description":"Create and Delete Super Projects from here."' +
                                '}' +
                            ']' +
                       '}';

// Define all of the panels used within the app.

var superProjectsPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Super Projects",' +
                            '"connection":"PVEU",' + 
                            '"dataSource":"P3E_ACT11_SPNUMBER",' +
                            '"key":"SP_KEY",' +
                            '"detailPanel":"superProjectDetail",' +
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
                                                            '"label":"SP Number:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"SP_NUMBER",' +
                                                            '"mask":"[character 1 20]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Create User ID:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"CREATE_USER",' +
                                                            '"mask":"[character 1 7]"' +
                                                        '},' +
                                                        '{' +
                                                            '"label":" and Deleted on ",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"hidden",' +
                                                            '"id":"DELETE_DATE",' +
                                                            '"mask":"[character 1 10][default {\'null\';}]",' +
                                                            '"readonly":true' +
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
                                          '"template":"Number is: [SP_NUMBER]"' +
                                      '},' +
                                      '{' +
                                          '"width":"9em",' +
                                          '"template":"[CREATE_USER]"' +
                                      '}' +
                                  ']' +
                              '}' +
                     '}';

var superProjectDetailPanel = '{' +
                                '"type":"detail",' +
                                '"title": "Super Project Detail",' +
                                '"submitto":"",' +
                                '"connection":"PVEU",' +
                                '"dataSource":"P3E_ACT11_SPNUMBER",' +
                                '"key":"SP_KEY",' +
                                '"keygen":"UUID",' +
                                '"deleteButton":false,' +
                                '"next":' +
                                '[' +
                                    '{' +
                                        '"panel":"superProjects",' +
                                        '"key":"",' +
                                        '"test":"true",' +
                                        '"save":"panel",' +
                                        '"end":"true"' +
                                    '}' +
                                '],' +
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
                                                            '"label":"Super Project#:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"SP_NUMBER",' +
                                                            '"mask":"[required][character 1 20]"' +
                                                        '}' +
                                                  ']' +
                                              '},' +
                                            '{' +
                                                '"fields":' +
                                                '[' +
                                                    '{' +
                                                        '"label":"Created By",' +
                                                        '"labelLocation":"left",' +
                                                        '"type":"static",' +
                                                        '"id":"CREATE_USER",' +
                                                        '"mask":"[character 1 10][default {RMBLgetUserId();}]",' +
                                                        '"readonly":true' +
                                                    '},' +
                                                    '{' +
                                                        '"label":"on ",' +
                                                        '"labelLocation":"left",' +
                                                        '"type":"static",' +
                                                        '"id":"CREATE_DATE",' +
                                                        '"mask":"[character 1 10][default {var now=new Date(); (\'0\'+(now.getMonth()+1)).slice(-2)+\'/\'+(\'0\'+now.getDate()).slice(-2)+\'/\'+now.getFullYear();}]",' +
                                                        '"readonly":true' +
                                                    '},' +
                                                    '{' +
                                                        '"label":" and Deleted on ",' +
                                                        '"labelLocation":"left",' +
                                                        '"type":"hidden",' +
                                                        '"id":"DELETE_DATE",' +
                                                        '"mask":"[character 1 10]",' +
                                                        '"readonly":true' +
                                                    '},' +
                                                    '{' +
                                                        '"label":"Deleted By",' +
                                                        '"labelLocation":"left",' +
                                                        '"type":"hidden",' +
                                                        '"id":"DELETE_USER",' +
                                                        '"mask":"[character 1 10]",' +
                                                        '"readonly":true' +
                                                    '},' +
                                                    '{' +
                                                        '"type":"hidden",' +
                                                        '"id":"toggleSave",' +
                                                        '"actionDetail":' +
                                                            '{' +
                                                                '"load":' +
                                                                    '{' +
                                                                        '"request":' +
                                                                            '{' +
                                                                                '"id":""' +
                                                                            '},' +
                                                                        '"response":' +
                                                                            '{' +
                                                                                '"id":""' +
                                                                            '}' +
                                                                    '},' +
                                                                '"save":' +
                                                                    '{' +
                                                                        '"request":' +
                                                                            '{' +
                                                                                '"id":""' +
                                                                            '},' +
                                                                        '"response":' +
                                                                            '{' +
                                                                                '"id":""' +
                                                                            '}' +
                                                                    '}' +
                                                            '},' +
                                                        '"mask":"[character][default {if (document.getElementById(\'superProjectDetail.SP_KEY\').value > \'\') { document.getElementById(\'superProjectDetail.RMBSave\').style.display=\'none\'; document.getElementById(\'superProjectDetail.realDeleteButton\').style.display=\'inline-block\'; true; } else { document.getElementById(\'superProjectDetail.RMBSave\').style.display=\'inline-block\'; document.getElementById(\'superProjectDetail.realDeleteButton\').style.display=\'none\'; true;}}]",' +
                                                        '"readonly":true' +
                                                    '}' +
                                                ']' +
                                            '},' +
                                              '{' +
                                                  '"fields":' +
                                                  '[' +
                                                        '{' +
                                                            '"label":"",' +
                                                            '"value":"Delete",' +                   // String. Required. Text that shows on the button.
                                                            '"labelLocation":"top",' +
                                                            '"type":"button",' +
                                                            '"id":"realDeleteButton",' +
                                                            '"action":"var now=new Date(); document.getElementById(\'superProjectDetail.DELETE_DATE\').value = (\'0\'+(now.getMonth()+1)).slice(-2)+\'/\'+(\'0\'+now.getDate()).slice(-2)+\'/\'+now.getFullYear(); document.getElementById(\'superProjectDetail.DELETE_USER\').value = RMBLgetUserId();document.getElementById(\'superProjectDetail.RMBSave\').onclick();"' +  // String. Required. Javascript that will run when the button is pressed.
                                                        '},' +
                                                        '{' +
                                                            '"label":"A Unique Super Project Number",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"hidden",' +
                                                            '"id":"checkDupe",' +
                                                            '"mask":"[required][C][calc {if (document.getElementById(\'superProjectDetail.DELETE_DATE\').value != \'\') {\'x\';} else {var theCheck = loadJSON(\'\', \'checkDupes\', \'check\', JSON.stringify({ \'superProject\': document.getElementById(\'superProjectDetail.SP_NUMBER\').value })); if(theCheck.status.result == \'true\') { if(theCheck.data[0].exists == \'true\') {\'\';} else {\'x\';} } else {alert(theCheck.status.message);\'\';}}}]",' +
                                                            '"maskerror":"This SP Number already Exists"' +
                                                        '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '}';

