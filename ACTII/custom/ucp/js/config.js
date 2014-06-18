// Set the base application information

var appDef = '{' +
                  '"Name":"UCP",' +
                  '"Description":"Welcome to Unitized Contractor Pricing Administration and Maintainance",' +
                  '"Footer":"&copy; 2011 PPL Corporation. All Rights Reserved."' +
//'"access":["PPL\\\\ISD-DL-GIS"]' +
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
                                '"background-image":"url(\\"../../custom/images/blue/menuSelected.png\\")"' +
                            '},' +
                          '"Orientation":"vertical",' +
                          '"panels":' +
                            '[' +
/*'{' + 
'"ID":"contacts",' +
'"Text":"&nbsp;&nbsp;Contacts",' +
'"Description":"Create and manage your contacts from here.<br />&nbsp;<br />&nbsp;"' +
'},' +
'{' +
'"ID":"Contractors",' +
'"Text":"&nbsp;&nbsp;Contractors",' +
'"Description":"Maintain Contractors<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
'},' +
'{' +
'"ID":"ContractorsWAM",' +
'"Text":"&nbsp;&nbsp;Contractors WAM",' +
'"Description":"View Contractors From WAM<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
'},' +*/
                                '{' +
                                    '"ID":"Contracts",' +
                                    '"Text":"&nbsp;&nbsp;Contracts",' +
                                    '"Description":"Maintain Contracts<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
                                '},' +
                                '{' +
                                    '"ID":"UnitizedCUs",' +
                                    '"Text":"&nbsp;&nbsp;Unitized CUs",' +
                                    '"Description":"Maintain Unitized CUs<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
                                '},' +
                                '{' +
                                    '"ID":"UnitizedAdders",' +
                                    '"Text":"&nbsp;&nbsp;Unitized Adders",' +
                                    '"Description":"Maintain Unitized Adders<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
                                '},' +
                                '{' +
                                    '"ID":"UOMs",' +
                                    '"Text":"&nbsp;&nbsp;UOM",' +
                                    '"Description":"Maintain Units of Measurement<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
                                '}' +
/*'{' +
    
'"ID":"ContractorPricing",' +
'"Text":"&nbsp;&nbsp;Contractor Pricing",' +
'"Description":"Maintain Contractor Pricing<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
'},' +
'{' +
'"ID":"speakerBureau",' +
'"Text":"&nbsp;&nbsp;Speaker Bureau",' +
'"Description":"Maintain Speaker Bureau<br />&nbsp;<br />&nbsp;<br />&nbsp;"' +
'}' +*/
/*'{' +
'"ID":"organization",' +
'"Text":"&nbsp;&nbsp;Organizations",' +
'"Description":"Create and manage Organizations from here.<br />&nbsp;<br />&nbsp;"' +
'}' +*/
                            ']' +
                       '}';

// Define all of the panels used within the app.


var ContractorsPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Contractors",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"actionDetail":' +
                                '{' +
                                   '"search":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
//'"dataSource":"http://hpx-wamfa-1d:7005/fa_eu_dev/NextAxiomServer",' +
                                                    '"action":"urn:doc?in=QueryContractor?out=QueryContractorResult?path=PPL_UNITIZEDCU.Business.Contractors.QueryContractor",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:contractor_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
/*'"successElement":"",' +
'"successValue":"",' +
'"messages":' +
'[' +
'"urn:releaseHoldsFromTasksRequest/urn:thold/urn1:WOTasksVO/urn1:error",' +
'"urn:releaseHoldsFromTasksRequest/urn:thold/urn1:WOTasksVO/urn1:warning",' +
'"urn:releaseHoldsFromTasksRequest/urn:thold/urn1:WOTasksVO/urn1:information"' +
']' +*/
                                                '}' +
                                        '}' +
//'"add":"",' +
//'"update":"",' +
//'"remove":""' +
                                '},' +
                            '"key":"CONTRACTORID",' +
                            '"detailPanel":"ContractorDetail",' +
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
                                                            '"label":"Only Active Contractors",' +
                                                            '"labelLocation":"right",' +
                                                            '"type":"checkbox",' +
                                                            '"id":"ActiveOnlySelect",' +
                                                             '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":""' +
                                                                                '}' +
                                                                        '}' +
//'"add":"",' +
//'"update":"",' +
//'"remove":""' +
                                                                '}' +
//'"mask":"[character 1 25]"' +
                                                        '},' +
                                                        '{' +
                                                            '"id":"ActiveOnly",' +
                                                            '"type":"hidden",' +
                                                            '"mask":"[character 1 40][calc {document.getElementById(\\"Contractors.ActiveOnlySelect\\").checked ? \\"true\\" : \\"false\\";}]",' +
                                                             '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"sequence":"1",' +
                                                                                    '"id":"QueryContractor/Criteria/ActiveOnly"' +
                                                                                '}' +
                                                                        '}' +
//'"add":"",' +
//'"update":"",' +
//'"remove":""' +
                                                                '}' +
//'"mask":"[character 1 25]"' +
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
                                          '"width":"16em",' +
                                          '"template":"[xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:name]"' +
                                      '},' +
                                      '{' +
                                          '"width":"11em",' +
                                          '"template":"[xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:supply_Chain_ID]"' +
                                      '},' +
                                      '{' +
                                          '"width":"9em",' +
                                          '"template":"[xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:status@AI]"' +
                                      '}' +
                                  '],' +
                               '"translations":' +
                                 '{' +
                                    '"AI":{' +
                                        '"parameter":"AI",' +
                                        '"key":"KEY",' +
                                        '"value":"[VALUE]"' +
                                    '}' +
                                 '}' +
                             '}' +
                          '}';

var ContractorPricingPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Contracts",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"actionDetail":' +
                                '{' +
                                   '"search":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"action":"urn:doc?in=QueryContract?out=QueryContractResult?path=PPL_UNITIZEDCU.Business.Contracts.QueryContract",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:contract_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
                            '"key":"CONTRACTID",' +
                            '"detailPanel":"ContractorPricingDetail",' +
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
                                                            '"label":"Only Active Contracts",' +
                                                            '"labelLocation":"right",' +
                                                            '"type":"checkbox",' +
                                                            '"id":"ActiveOnlySelect",' +
                                                             '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":""' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"id":"ActiveOnly",' +
                                                            '"type":"hidden",' +
                                                            '"mask":"[character 1 40][calc {document.getElementById(\\"Contracts.ActiveOnlySelect\\").checked ? \\"true\\" : \\"false\\";}]",' +
                                                             '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"sequence":"1",' +
                                                                                    '"id":"xsd1:QueryContract/xsd1:Criteria/xsd1:ActiveOnly"' +
                                                                                '}' +
                                                                        '}' +
                                                               '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Contractor",' +
                                                            '"labelLocation":"top",' +
                                                            '"id":"ContractID",' +
                                                            '"type":"select",' +
//'"connection":"SERVICE1",' +
//'"connectionType":"SOAP",' +
                                                            '"key":"xsd1:QueryContractorContractsResult/xsd1:QueryContract/xsd1:Results/xsd1:contract_ID",' +
                                                            '"value":"[xsd1:QueryContractorContractsResult/xsd1:QueryContract/xsd1:Results/xsd1:name] - [xsd1:QueryContractorContractsResult/xsd1:QueryContract/xsd1:Results/xsd1:contract_Local]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                    '"loadselect":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"action":"urn:doc?in=QueryContractorContracts?out=QueryContractorContractsResult?path=PPL_UNITIZEDCU.Business.Contractors.QueryContractorContracts",' +
                                                                                    '"namespaces":' +
                                                                                    '{' +
                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                    '},' +
                                                                                    '"data":' +
                                                                                    '{' +
                                                                                        '"xsd1:QueryContractorContracts":""' +
                                                                                    '}' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"namespaces":' +
                                                                                    '{' +
                                                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                    '}' +
                                                                                '}' +
                                                                        '},' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:QueryContract/xsd1:Criteria/xsd1:contract_ID"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
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
                                          '"width":"16em",' +
                                          '"template":"[xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:name] [xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:contract_Local]"' +
                                      '},' +
                                      '{' +
                                          '"width":"8em",' +
                                          '"template":"[xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:contract_Nbr]"' +
                                      '},' +
                                      '{' +
                                          '"width":"10em",' +
                                          '"template":"Effective: [xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:effective_Date]"' +
                                      '},' +
                                      '{' +
                                          '"width":"10em",' +
                                          '"template":"to&nbsp;&nbsp;&nbsp;[xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:expiration_Date]"' +
                                      '}' +
/*'{' +
'"width":"9em",' +
'"template":"[]abc"' +
'}' +*/
                                  ']' +
                              '}' +
                          '}';

var UnitizedCUsPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Unitized CUs",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"UnitizedCU",' +
                            '"detailPanel":"UnitizedCUsDetail",' +
                            '"addNew":true,' +
                            '"actionDetail":' +
                                '{' +
                                   '"search":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"action":"urn:doc?in=QueryUnitizedCU?out=QueryUnitizedCUResult?path=PPL_UNITIZEDCU.Business.UnitizedCUs.QueryUnitizedCU",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"CU",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"CU",' +
                                                            '"mask":"[alphanumeric 1 5]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:QueryUnitizedCU/xsd1:Criteria/xsd1:unitized_Cu"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Description",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"CU",' +
                                                            '"mask":"[character 1 255]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:QueryUnitizedCU/xsd1:Criteria/xsd1:description"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
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
                                          '"width":"5em",' +
                                          '"template":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu]"' +
                                      '},' +
                                      '{' +
                                          '"width":"8em",' +
                                          '"template":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:description]"' +
                                      '},' +
                                      '{' +
                                          '"width":"8em",' +
                                          '"template":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:uom_Descr]"' +
                                      '}' +
                                  ']' +
                             '}' +
                          '}';

var UnitizedAddersPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Unitized Adders",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"UnitizedCU",' +
                            '"detailPanel":"UnitizedAddersDetail",' +
                            '"addNew":true,' +
                            '"actionDetail":' +
                                '{' +
                                   '"search":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"action":"urn:doc?in=QueryUnitizedAdders?out=QueryUnitizedAddersResult?path=PPL_UNITIZEDCU.Business.UnitizedAdders.QueryUnitizedAdders",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"CU Adder",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"CU",' +
                                                            '"mask":"[alphanumeric 1 5]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:QueryUnitizedAdders/xsd1:Criteria/xsd1:unitized_Cu"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Adder Name",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"CU",' +
                                                            '"mask":"[character 1 255]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:QueryUnitizedAdders/xsd1:Criteria/xsd1:adder_Name"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Description",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"CU",' +
                                                            '"mask":"[character 1 255]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:QueryUnitizedAdders/xsd1:Criteria/xsd1:description"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
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
                                          '"width":"5em",' +
                                          '"template":"[xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:unitized_Cu]"' +
                                      '},' +
                                      '{' +
                                          '"width":"8em",' +
                                          '"template":"[xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:adder_Name]"' +
                                      '},' +
                                      '{' +
                                          '"width":"30em",' +
                                          '"template":"[xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:description]"' +
                                      '}' +
                                  ']' +
                             '}' +
                          '}';

var UOMsPanel = '{' +
                            '"type":"autoSearchList",' +
                            '"title":"Units of Measurement",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"UOMID",' +
                            '"detailPanel":"UOMDetail",' +
                            '"addNew":true,' +
                            '"actionDetail":' +
                                '{' +
                                   '"search":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"action":"urn:doc?in=QueryUOM?out=QueryUOMResult?path=PPL_UNITIZEDCU.Business.UOM.QueryUOM",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '},' +
                                                    '"data":' +   // Object. Optional. Additional fields to act as query criteria.
                                                    '{' +
                                                        '"xsd1:QueryUOM":""' +    // String. Required. Name/Value Pair for query field criteria.
//          SOAP requires at least one which contains the
//              root node within <body>
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"type":"hidden",' +
                                                            '"id":"soapBody",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                    '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:QueryUOM"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":""' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
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
                                          '"width":"20em",' +
                                          '"template":"[xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_Descr]"' +
                                      '}' +
                                  ']' +
                             '}' +
                          '}';

var UOMDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Unit of Measurement Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"UOMID",' +
                            '"deleteButton":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUOM/xsd1:Criteria/xsd1:uom_ID",' +
                                                    '"action":"urn:doc?in=QueryUOM?out=QueryUOMResult?path=PPL_UNITIZEDCU.Business.UOM.QueryUOM",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUOM/xsd1:Data/xsd1:uom_ID",' +
                                                    '"action":"urn:doc?in=SaveUOM?out=SaveUOMResult?path=PPL_UNITIZEDCU.Business.UOM.SaveUOM",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUOMResult/xsd1:Results/xsd1:uom_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"UOM Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"InstallCold",' +
                                                            '"mask":"[required][character 1 20]",' +
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
                                                                                    '"id":"xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_Descr"' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUOM/xsd1:Data/xsd1:uom_Descr"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUOMResult/xsd1:Results/xsd1:uom_Descr"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Divisor:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"InstallCold",' +
                                                            '"mask":"[required][numeric 1 9999999999]",' +
                                                            '"helptext":"This number will be used to divide the textual quantity in the description down to get the acutal quantity in the core CU.",' +
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
                                                                                    '"id":"xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_Divisor"' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUOM/xsd1:Data/xsd1:uom_Divisor"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUOMResult/xsd1:Results/xsd1:uom_Divisor"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '}' +
/*'{' +
'"fields":' +
'[' +
'{' +
'"label":"",' +
'"labelLocation":"top",' +
'"type":"text",' +
'"id":"Information",' +
'"mask":"[html 1 10000][default Hello, this is <b>default</b> content.]",' +
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
'}' +
'}' +
']' +
'}' +*/
                                          ']' +
                                      '}' +
                                  ']' +
                              '}';

var ContractorUnitizedCUsDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Unitized CU Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"contractorCUID",' +
                            '"deleteButton":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:FindUnitPricedCUs/xsd1:Criteria/xsd1:contractor_Cu_ID",' +
                                                    '"action":"urn:doc?in=FindUnitPricedCUs?out=FindUnitPricedCUsResult?path=PPL_UNITIZEDCU.Business.UnitPricedCUs.FindUnitPricedCUs",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:contractor_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:contractor_Cu_ID",' +
                                                    '"action":"urn:doc?in=SaveUnitPricedCU?out=SaveUnitPricedCUResult?path=PPL_UNITIZEDCU.Business.UnitPricedCUs.SaveUnitPricedCU",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:contractor_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"Unitized CU:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"select",' +
                                                            '"id":"unitizedCuID",' +
                                                            '"connection":"SERVICE1",' +
                                                            '"connectionType":"SOAP",' +
                                                            '"key":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                            '"value":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                   '"loadselect":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"action":"urn:doc?in=QueryUnitizedCU?out=QueryUnitizedCUResult?path=PPL_UNITIZEDCU.Business.UnitizedCUs.QueryUnitizedCU",' +
                                                                                    '"namespaces":' +
                                                                                    '{' +
                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                    '},' +
                                                                                    '"data":' +
                                                                                    '{' +
                                                                                        '"xsd1:QueryUnitizedCU":""' +
                                                                                    '}' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"namespaces":' +
                                                                                    '{' +
                                                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                    '}' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"load":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":""' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:unitized_Cu_ID"' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:unitized_Cu_ID"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:unitized_Cu_ID"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"type":"hidden",' +
                                                            '"id":"contractRateID",' +
                                                            '"mask":"[character 1 8][default {document.getElementById(\'LocalRateDetail.contractRateID\').value;}]",' +
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
                                                                                    '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:contract_Rate_ID"' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:contract_Rate_ID"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:contract_Rate_ID"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"CU Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                            '[' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +

                                                                        '{' +
                                                                            '"label":"CU",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"static",' +
                                                                            '"id":"CU",' +
                                                                            '"mask":"[alphanumeric 1 6]",' +
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
                                                                                                    '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:unitized_Cu"' +
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
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"Description",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"static",' +
                                                                            '"id":"Description",' +
                                                                            '"mask":"[character 1 255]",' +
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
                                                                                                    '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:description"' +
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
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"UOM",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"static",' +
                                                                            '"id":"UOM",' +
                                                                            '"mask":"[character 1 20]",' +
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
                                                                                                    '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:uom_Descr"' +
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
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '}' +
                                                            ']' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Target Hours:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                              '[' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:cold_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:cold_Install_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:cold_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"InstallColdCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedCUsDetail.InstallCold\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:hot_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:hot_Install_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:hot_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"InstallHotCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedCUsDetail.InstallHot\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:cold_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:cold_Remove_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:cold_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"RemoveColdCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedCUsDetail.RemoveCold\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:hot_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:hot_Remove_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:hot_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"RemoveHotCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedCUsDetail.RemoveHot\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:cold_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:cold_Transfer_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:cold_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"TransferColdCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedCUsDetail.TransferCold\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:hot_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:hot_Transfer_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:hot_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"TransferHotCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedCUsDetail.TransferHot\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
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
                              '}';



var ContractorUnitizedAddersDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Unitized Adder Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"contractorCUID",' +
                            '"deleteButton":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:FindUnitPricedAdders/xsd1:Criteria/xsd1:contractor_Cu_ID",' +
                                                    '"action":"urn:doc?in=FindUnitPricedAdders?out=FindUnitPricedAddersResult?path=PPL_UNITIZEDCU.Business.UnitPricedCUs.FindUnitPricedAdders",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:contractor_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:contractor_Cu_ID",' +
                                                    '"action":"urn:doc?in=SaveUnitPricedCU?out=SaveUnitPricedCUResult?path=PPL_UNITIZEDCU.Business.UnitPricedCUs.SaveUnitPricedCU",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:contractor_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"Unitized CU:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"select",' +
                                                            '"id":"unitizedCuID",' +
                                                            '"connection":"SERVICE1",' +
                                                            '"connectionType":"SOAP",' +
                                                            '"key":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                            '"value":"[xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:unitized_Cu]",' +
                                                            '"actionDetail":' +
                                                                '{' +
                                                                   '"loadselect":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"action":"urn:doc?in=QueryUnitizedAdders?out=QueryUnitizedAddersResult?path=PPL_UNITIZEDCU.Business.UnitizedAdders.QueryUnitizedAdders",' +
                                                                                    '"namespaces":' +
                                                                                    '{' +
                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                    '},' +
                                                                                    '"data":' +
                                                                                    '{' +
                                                                                        '"xsd1:QueryUnitizedAdders":""' +
                                                                                    '}' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"namespaces":' +
                                                                                    '{' +
                                                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                    '}' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"load":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":""' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:unitized_Cu_ID"' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:unitized_Cu_ID"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:unitized_Cu_ID"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"type":"hidden",' +
                                                            '"id":"contractRateID",' +
                                                            '"mask":"[character 1 8][default {document.getElementById(\'LocalRateDetail.contractRateID\').value;}]",' +
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
                                                                                    '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:contract_Rate_ID"' +
                                                                                '}' +
                                                                        '},' +
                                                                    '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:contract_Rate_ID"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:contract_Rate_ID"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"CU Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                            '[' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +

                                                                        '{' +
                                                                            '"label":"CU",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"static",' +
                                                                            '"id":"CU",' +
                                                                            '"mask":"[alphanumeric 1 6]",' +
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
                                                                                                    '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:unitized_Cu"' +
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
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"Description",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"static",' +
                                                                            '"id":"Description",' +
                                                                            '"mask":"[character 1 255]",' +
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
                                                                                                    '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:description"' +
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
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"UOM",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"static",' +
                                                                            '"id":"UOM",' +
                                                                            '"mask":"[character 1 20]",' +
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
                                                                                                    '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:uom_Descr"' +
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
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '}' +
                                                            ']' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Target Hours:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                              '[' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:cold_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:cold_Install_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:cold_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"InstallColdCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedAddersDetail.InstallCold\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:hot_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:hot_Install_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:hot_Install_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"InstallHotCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedAddersDetail.InstallHot\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:cold_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:cold_Remove_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:cold_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"RemoveColdCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedAddersDetail.RemoveCold\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:hot_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:hot_Remove_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:hot_Remove_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"RemoveHotCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedAddersDetail.RemoveHot\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:cold_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:cold_Transfer_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:cold_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"TransferColdCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedAddersDetail.TransferCold\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:hot_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCU/xsd1:Data/xsd1:hot_Transfer_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitPricedCUResult/xsd1:Results/xsd1:hot_Transfer_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '},' +
                                                                            '{' +
                                                                                '"label":"",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"type":"static",' +
                                                                                '"id":"TransferHotCost",' +
                                                                                '"mask":"[character 1 7][calc {\\"$\\" + (document.getElementById(\'ContractorUnitizedAddersDetail.TransferHot\').value * document.getElementById(\'LocalRateDetail.BlendedRate\').value).toFixed(2);}]",' +
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
                                                                                    '}' +
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
                              '}';




var UnitizedCUsDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Unitized CU Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"UnitizedCU",' +
                            '"deleteButton":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUnitizedCU/xsd1:Criteria/xsd1:unitized_Cu_ID",' +
                                                    '"action":"urn:doc?in=QueryUnitizedCU?out=QueryUnitizedCUResult?path=PPL_UNITIZEDCU.Business.UnitizedCUs.QueryUnitizedCU",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:unitized_Cu_ID",' +
                                                    '"action":"urn:doc?in=SaveUnitizedCU?out=SaveUnitizedCUResult?path=PPL_UNITIZEDCU.Business.UnitizedCUs.SaveUnitizedCU",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitizedCU/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"CU Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                            '[' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +

                                                                        '{' +
                                                                            '"label":"CU",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"text",' +
                                                                            '"id":"CU",' +
                                                                            '"mask":"[required][alphanumeric 1 6]",' +
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
                                                                                                    '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:unitized_Cu"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:unitized_Cu"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"Description",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"text",' +
                                                                            '"id":"Description",' +
                                                                            '"mask":"[character 1 255]",' +
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
                                                                                                    '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:description"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:description"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:description"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"Comments",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"textarea",' +
                                                                            '"id":"Comments",' +
                                                                            '"cols":"38",' +
                                                                            '"rows":"10",' +
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
                                                                                                    '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:comments"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:comments"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:comments"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"UOM",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"select",' +
                                                                            '"id":"UOM",' +
                                                                            '"connection":"SERVICE1",' +
                                                                            '"connectionType":"SOAP",' +
                                                                            '"key":"xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_ID",' +
                                                                            '"value":"[xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_Descr]",' +
                                                                            '"actionDetail":' +
                                                                                '{' +
                                                                                   '"loadselect":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"action":"urn:doc?in=QueryUOM?out=QueryUOMResult?path=PPL_UNITIZEDCU.Business.UOM.QueryUOM",' +
                                                                                                    '"namespaces":' +
                                                                                                    '{' +
                                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                                    '},' +
                                                                                                    '"data":' +
                                                                                                    '{' +
                                                                                                        '"xsd1:QueryUOM":""' +
                                                                                                    '}' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"namespaces":' +
                                                                                                    '{' +
                                                                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                                    '}' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"load":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":""' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:uom_ID"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:uom_ID"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:uom_ID"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '}' +
                                                            ']' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Target Hours:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                              '[' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:install_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:install_Cold_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:install_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:install_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:install_Hot_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:install_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:remove_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:remove_Cold_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:remove_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:remove_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:remove_Hot_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:remove_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:transfer_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:transfer_Cold_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:transfer_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:transfer_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:transfer_Hot_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:transfer_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
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
                              '}';

var UnitizedAddersDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Unitized Adder Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"UnitizedCU",' +
                            '"deleteButton":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUnitizedAdders/xsd1:Criteria/xsd1:unitized_Cu_ID",' +
                                                    '"action":"urn:doc?in=QueryUnitizedAdders?out=QueryUnitizedAddersResult?path=PPL_UNITIZEDCU.Business.UnitizedAdders.QueryUnitizedAdders",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:unitized_Cu_ID",' +
                                                    '"action":"urn:doc?in=SaveUnitizedCU?out=SaveUnitizedCUResult?path=PPL_UNITIZEDCU.Business.UnitizedCUs.SaveUnitizedCU",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveUnitizedCU/xsd1:Results/xsd1:unitized_Cu_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"Adder Description:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                            '[' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +

                                                                        '{' +
                                                                            '"label":"Adder CU",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"text",' +
                                                                            '"id":"CU",' +
                                                                            '"mask":"[required][alphanumeric 1 6]",' +
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
                                                                                                    '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:unitized_Cu"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:unitized_Cu"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:unitized_Cu"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"Description",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"text",' +
                                                                            '"id":"Description",' +
                                                                            '"mask":"[character 1 255]",' +
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
                                                                                                    '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:description"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:description"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:description"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"Comments",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"textarea",' +
                                                                            '"id":"Comments",' +
                                                                            '"cols":"38",' +
                                                                            '"rows":"10",' +
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
                                                                                                    '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:comments"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:comments"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:comments"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '},' +
                                                                '{' +
                                                                    '"fields":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"label":"UOM",' +
                                                                            '"labelLocation":"top",' +
                                                                            '"type":"select",' +
                                                                            '"id":"UOM",' +
                                                                            '"connection":"SERVICE1",' +
                                                                            '"connectionType":"SOAP",' +
                                                                            '"key":"xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_ID",' +
                                                                            '"value":"[xsd1:QueryUOMResult/xsd1:QueryUOM/xsd1:Results/xsd1:uom_Descr]",' +
                                                                            '"actionDetail":' +
                                                                                '{' +
                                                                                   '"loadselect":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"action":"urn:doc?in=QueryUOM?out=QueryUOMResult?path=PPL_UNITIZEDCU.Business.UOM.QueryUOM",' +
                                                                                                    '"namespaces":' +
                                                                                                    '{' +
                                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                                    '},' +
                                                                                                    '"data":' +
                                                                                                    '{' +
                                                                                                        '"xsd1:QueryUOM":""' +
                                                                                                    '}' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"namespaces":' +
                                                                                                    '{' +
                                                                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                                    '}' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"load":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":""' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:uom_ID"' +
                                                                                                '}' +
                                                                                        '},' +
                                                                                   '"save":' +
                                                                                        '{' +
                                                                                            '"request":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:uom_ID"' +
                                                                                                '},' +
                                                                                            '"response":' +
                                                                                                '{' +
                                                                                                    '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:uom_ID"' +
                                                                                                '}' +
                                                                                        '}' +
                                                                                '}' +
                                                                        '}' +
                                                                    ']' +
                                                                '}' +
                                                            ']' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Target Hours:",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"group",' +
                                                            '"border":"1px solid lightgray",' +
                                                            '"lines":' +
                                                              '[' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:install_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:install_Cold_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:install_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Install Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"InstallHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:install_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:install_Hot_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:install_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:remove_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:remove_Cold_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:remove_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Remove Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"RemoveHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:remove_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:remove_Hot_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:remove_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Cold:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferCold",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:transfer_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:transfer_Cold_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:transfer_Cold_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
                                                                            '}' +
                                                                        ']' +
                                                                    '},' +
                                                                    '{' +
                                                                        '"fields":' +
                                                                        '[' +
                                                                            '{' +
                                                                                '"label":"Transfer Hot:",' +
                                                                                '"labelLocation":"left",' +
                                                                                '"labelWidth":"8em",' +
                                                                                '"type":"text",' +
                                                                                '"id":"TransferHot",' +
                                                                                '"mask":"00.00",' +
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
                                                                                                        '"id":"xsd1:QueryUnitizedAddersResult/xsd1:QueryUnitizedAdders/xsd1:Results/xsd1:transfer_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '},' +
                                                                                       '"save":' +
                                                                                            '{' +
                                                                                                '"request":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCU/xsd1:Data/xsd1:transfer_Hot_Tgt_Hrs"' +
                                                                                                    '},' +
                                                                                                '"response":' +
                                                                                                    '{' +
                                                                                                        '"id":"xsd1:SaveUnitizedCUResult/xsd1:Results/xsd1:transfer_Hot_Tgt_Hrs"' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                    '}' +
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
                              '}';



var ContractorsWAMPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Contractors WAM",' +
                            '"connection":"WAM",' +
                            '"connectionType":"DATABASE",' +
                            '"dataSource":"VENTYX.TIDVNMST",' +
                            '"key":"VENDOR_CODE",' +
                            '"detailPanel":"ContractorDetail",' +
                            '"addNew":false,' +
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
                                                            '"label":"Only Active Contractors",' +
                                                            '"labelLocation":"right",' +
                                                            '"type":"checkbox",' +
                                                            '"id":"VENDOR_STATUS",' +
                                                            '"value":"ACTIVE"' +
                                                        '},' +
                                                        '{' +
//'"label":"Only Active Contractors",' +
//'"labelLocation":"right",' +
                                                            '"type":"hidden",' +
                                                            '"id":"VENDOR_CLASS_ID",' +
                                                            '"mask":"[character 1 2][default {\\"S\\"}]"' +
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
                                          '"width":"20em",' +
                                          '"template":"[VENDOR_SUPPLY_NAME] [VENDOR_SUFFIX]"' +
                                      '},' +
                                      '{' +
                                          '"width":"9em",' +
                                          '"template":"[VENDOR_STATUS]"' +
                                      '}' +
                                  ']' +
                              '}' +
                          '}';


var ContractsPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Contracts",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"PPLCONTRACTID",' +
                            '"actionDetail":' +
                                '{' +
                                   '"search":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"action":"urn:doc?in=FindContracts?out=FindContractsResult?path=PPL_UNITIZEDCU.Business.Contracts.FindContracts",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:ppl_Contract_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
/*'"successElement":"",' +
'"successValue":"",' +
'"messages":' +
'[' +
'"urn:releaseHoldsFromTasksRequest/urn:thold/urn1:WOTasksVO/urn1:error",' +
'"urn:releaseHoldsFromTasksRequest/urn:thold/urn1:WOTasksVO/urn1:warning",' +
'"urn:releaseHoldsFromTasksRequest/urn:thold/urn1:WOTasksVO/urn1:information"' +
']' +*/
                                                '}' +
                                        '}' +
//'"add":"",' +
//'"update":"",' +
//'"remove":""' +
                                '},' +
                            '"detailPanel":"ContractDetail",' +
                            '"addNew":false,' +
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
                                                            '"label":"Contract #",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ContractID",' +
                                                            '"mask":"99999999[default {\'00509564\'}]",' +
                                                             '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"FindContracts/Criteria/contract_ID"' +
                                                                                '}' +
                                                                        '}' +
//'"add":"",' +
//'"update":"",' +
//'"remove":""' +
                                                                '}' +
//'"mask":"[character 1 25]"' +
                                                        '},' +
                                                        '{' +
                                                            '"id":"ContractRelease",' +
                                                            '"label":"Release",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"mask":"99999",' +
                                                             '"actionDetail":' +
                                                                '{' +
                                                                   '"search":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"FindContracts/Criteria/contract_Release"' +
                                                                                '}' +
                                                                        '}' +
//'"add":"",' +
//'"update":"",' +
//'"remove":""' +
                                                                '}' +
//'"mask":"[character 1 25]"' +
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
                                          '"width":"10em",' +
                                          '"template":"[xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contract_ID] - [xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contract_Release]"' +
                                      '},' +
                                      '{' +
                                          '"width":"20em",' +
                                          '"template":"[xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contract_Title]"' +
                                      '},' +
                                      '{' +
                                          '"width":"9em",' +
                                          '"template":"Effective: [xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contr_Start_Dt]"' +
                                      '},' +
                                      '{' +
                                          '"width":"7em",' +
                                          '"template":"to&nbsp;&nbsp;&nbsp;[xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contr_End_Dt]"' +
                                      '},' +
                                      '{' +
                                          '"width":"10em",' +
                                          '"template":"[xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:vendor_Suffix_Name]"' +
                                      '}' +
                                  '],' +
                               '"translations":' +
                                 '{' +
                                    '"AI":{' +
                                        '"parameter":"AI",' +
                                        '"key":"KEY",' +
                                        '"value":"[VALUE]"' +
                                    '}' +
                                 '}' +
                             '}' +
                          '}';

var AI = '[' +
                            '{' +
                                '"KEY":"A",' +
                                '"VALUE":"Active"' +
                            '},' +
                            '{' +
                                '"KEY":"I",' +
                                '"VALUE":"Inactive"' +
                            '}' +
                         ']'

//var testDetailForm = '{}';

var ContractDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Contract Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"PPLCONTRACTID",' +
                            '"deleteButton":false,' +
                            '"addNew":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:FindContracts/xsd1:Criteria/xsd1:ppl_contract_id",' +
                                                    '"action":"urn:doc?in=FindContracts?out=FindContractsResult?path=PPL_UNITIZEDCU.Business.Contracts.FindContracts",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:ppl_Contract_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
//'"dataSource":"http://hpx-wamfa-1d:7005/fa_eu_dev/NextAxiomServer",' +
                                                    '"key":"xsd1:SaveContract/xsd1:Data/xsd1:contract_ID",' +
                                                    '"action":"urn:doc?in=SaveContract?out=SaveContractResult?path=PPL_UNITIZEDCU.Business.Contracts.SaveContract",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveContractResult/xsd1:Results/xsd1:contract_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"Contract #",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"ContractNo",' +
                                                            '"mask":"[character 1 8]",' +
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
                                                                                    '"id":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contract_ID"' +
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
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Release",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"Release",' +
                                                            '"mask":"[character 1 6]",' +
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
                                                                                    '"id":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contract_Release"' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +

                                                        '{' +
                                                            '"label":"Title",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"Title",' +
                                                            '"mask":"[character 1 255]",' +
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
                                                                                    '"id":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contract_Title"' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +

                                                        '{' +
                                                            '"label":"Vendor Name",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"VendorName",' +
                                                            '"mask":"[character 1 255]",' +
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
                                                                                    '"id":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:vendor_Suffix_Name"' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"type":"hidden",' +
                                                            '"id":"EffectiveDateRaw",' +
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
                                                                                    '"id":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contr_Start_Dt"' +
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
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Effective Date",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"id":"EffectiveDate",' +
                                                            '"mask":"[character 1 10][default {var thisField = document.getElementById(\'ContractDetail.EffectiveDateRaw\'); thisField.value.substr(4, 2) + \'/\' + thisField.value.substr(6, 2) + \'/\' + thisField.value.substr(0, 4);}]",' +
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
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"type":"hidden",' +
                                                            '"id":"ExpirationDateRaw",' +
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
                                                                                    '"id":"xsd1:FindContractsResult/xsd1:FindContracts/xsd1:Results/xsd1:contr_End_Dt"' +
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
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Expiration Date",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"id":"ExpirationDate",' +
                                                            '"mask":"[character 1 10][default {var thisField = document.getElementById(\'ContractDetail.ExpirationDateRaw\'); thisField.value.substr(4, 2) + \'/\' + thisField.value.substr(6, 2) + \'/\' + thisField.value.substr(0, 4);}]",' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Contract Local Rates",' +
                                        '"lines":' +
                                          '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                          '{' +                             // Not yet implemented in SOAP
// Three data locations are used to create a List:
//      Parent: Location of data for the form definition above.
//       Child: Location that holds the detail of each element.
//        Xref: Location that hold the connection between Parent and Child.  
//  staticList is the same as list, but does not need search fields.
                                                              '"label":"",' +
                                                              '"labelLocation":"top",' +
                                                              '"type":"staticList",' +
                                                              '"detailPanel":"LocalRateDetail",' +  // String. Optional. Only used on staticList. Panel to load when item is selected.
                                                              '"connection":"SERVICE1",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"connectionType":"SOAP",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"id":"ContractLocalRates",' +        // String. Required. Database: Xref: Location that hold the connection between Parent and Child.
//                   SOAP: Simply a unique name for this panel.
                                                              '"parentReference":"pplContractID",' + // String. Required. Field ID that holds the Parent's key to the Child.
// Why isn't childReference used?
                                                              '"childReference":"xsd1:QueryRate/xsd1:Criteria/xsd1:contract_ID",' +     // String. Required. Data location (Database column or SOAP xpath request)
//                   that holds Parent's key on the Xref location.
                                                              '"key":"contractRateID",' +           // String. Required. DATABASE: Data location that holds the key on the Child table.
//                   SOAP: Required. ID of the field on the panel which will hold the unique key to the data on the panel.
                                                              '"addNew":true,' +
                                                              '"actionDetail":' +                   //Object. Optional. Required for SOAP namespaces to load list.
                                                                  '{' +
                                                                     '"subsearch":' +
                                                                          '{' +
                                                                              '"request":' +
                                                                                  '{' +
                                                                                      '"action":"urn:doc?in=QueryRate?out=QueryRateResult?path=PPL_UNITIZEDCU.Business.Rates.QueryRate",' +  // String. Dependant. The action to perform within the request.
//      Required for SOAP and is the SOAP Action.
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '},' +
                                                                              '"response":' +
                                                                                  '{' +
                                                                                      '"key":"xsd1:QueryRateResult/xsd1:QueryRate/xsd1:Results/xsd1:contract_Rate_ID",' + // String. Required.
//    Xpath of the node containing data uniquely identifying
//    a "record" within a SOAP response
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '}' +
                                                                          '}' +
                                                                  '},' +
                                                              '"detailLine":' +                     // Object. Required. Defines the detail line of the search results.
                                                                '{' +
                                                                  '"data":' +                       // Object Array. Required. Defines the "text" portion of the result line.
                                                                    '[' +
                                                                        '{' +
                                                                            '"width":"9em",' +              // String. Required. Width of this "column".
                                                                            '"template":"[xsd1:QueryRateResult/xsd1:QueryRate/xsd1:Results/xsd1:contract_Local]"' + // String. Required. HTML template of this column.
                                                                        '},' +                              //      Anything in brackest [] is a element returnd from the search.
                                                                        '{' +                               //      and is replaced for each record returned.
                                                                            '"width":"5em",' +
                                                                            '"template":"[xsd1:QueryRateResult/xsd1:QueryRate/xsd1:Results/xsd1:blended_Rate]"' +
                                                                        '},' +
                                                                        '{' +
                                                                            '"width":"5em",' +
                                                                            '"template":"[xsd1:QueryRateResult/xsd1:QueryRate/xsd1:Results/xsd1:status@AI]"' +
                                                                        '}' +
                                                                    '],' +
                                                                   '"translations":' +
                                                                     '{' +
                                                                        '"AI":{' +
                                                                            '"parameter":"AI",' +
                                                                            '"key":"KEY",' +
                                                                            '"value":"[VALUE]"' +
                                                                        '}' +
                                                                     '}' +
                                                                '}' +
                                                         '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '}';

var LocalRateDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Local Rate Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"contractRateID",' +
                            '"deleteButton":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
                                                    '"key":"xsd1:QueryRate/xsd1:Criteria/xsd1:contract_Rate_ID",' +
                                                    '"action":"urn:doc?in=QueryRate?out=QueryRateResult?path=PPL_UNITIZEDCU.Business.Rates.QueryRate",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryRateResult/xsd1:QueryRate/xsd1:Results/xsd1:contract_Rate_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
//'"dataSource":"http://hpx-wamfa-1d:7005/fa_eu_dev/NextAxiomServer",' +
                                                    '"key":"xsd1:SaveRate/xsd1:Data/xsd1:contract_Rate_ID",' +
                                                    '"action":"urn:doc?in=SaveRate?out=SaveRateResult?path=PPL_UNITIZEDCU.Business.Rates.SaveRate",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveRateResult/xsd1:Results/xsd1:contract_Rate_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"Contract #",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"ContractNo",' +
                                                            '"mask":"[character 1 8][default {document.getElementById(\'ContractDetail.ContractNo\').value;}]",' +
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
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"type":"hidden",' +
                                                            '"id":"PPLContractID",' +
                                                            '"mask":"[character 1 8][default {document.getElementById(\'ContractDetail.PPLCONTRACTID\').value;}]",' +
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
                                                                                    '"id":"xsd1:SaveRate/xsd1:Data/xsd1:contract_ID"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveRateResult/xsd1:Results/xsd1:contract_ID"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Release",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"Release",' +
                                                            '"mask":"[character 1 6][default {document.getElementById(\'ContractDetail.Release\').value;}]",' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +

                                                        '{' +
                                                            '"label":"Title",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"Title",' +
                                                            '"mask":"[character 1 255][default {document.getElementById(\'ContractDetail.Title\').value;}]",' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +

                                                        '{' +
                                                            '"label":"Vendor Name",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"readonly":true,' +
                                                            '"id":"VendorName",' +
                                                            '"mask":"[character 1 255][default {document.getElementById(\'ContractDetail.VendorName\').value;}]",' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Effective Date",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"id":"EffectiveDate",' +
                                                            '"mask":"[character 1 10][default {document.getElementById(\'ContractDetail.EffectiveDate\').value;}]",' +
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
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Expiration Date",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"static",' +
                                                            '"id":"ExpirationDate",' +
                                                            '"mask":"[character 1 10][default {document.getElementById(\'ContractDetail.ExpirationDate\').value;}]",' +
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
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Local",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"EffectiveDate",' +
                                                            '"mask":"[character 1 20]",' +
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
                                                                                    '"id":"xsd1:QueryRateResult/xsd1:QueryRate/xsd1:Results/xsd1:contract_Local"' +
                                                                                '}' +
                                                                        '},' +
                                                                   '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveRate/xsd1:Data/xsd1:contract_Local"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveRateResult/xsd1:Results/xsd1:contract_Local"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Blended Rate",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"BlendedRate",' +
                                                            '"mask":"0000.00",' +
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
                                                                                    '"id":"xsd1:QueryRateResult/xsd1:QueryRate/xsd1:Results/xsd1:blended_Rate"' +
                                                                                '}' +
                                                                        '},' +
                                                                   '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveRate/xsd1:Data/xsd1:blended_Rate"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveRateResult/xsd1:Results/xsd1:blended_Rate"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Unit Priced CUs",' +
                                        '"lines":' +
                                          '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                          '{' +                             // Not yet implemented in SOAP
// Three data locations are used to create a List:
//      Parent: Location of data for the form definition above.
//       Child: Location that holds the detail of each element.
//        Xref: Location that hold the connection between Parent and Child.  
//  staticList is the same as list, but does not need search fields.
                                                              '"label":"",' +
                                                              '"labelLocation":"top",' +
                                                              '"type":"staticList",' +
                                                              '"detailPanel":"ContractorUnitizedCUsDetail",' +  // String. Optional. Only used on staticList. Panel to load when item is selected.
                                                              '"connection":"SERVICE1",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"connectionType":"SOAP",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"id":"ContractRates",' +        // String. Required. Database: Xref: Location that hold the connection between Parent and Child.
//                   SOAP: Simply a unique name for this panel.
//'"width":"35em",' +                   // String. Optional. Default: 100%. Width of the list box.
                                                              '"parentReference":"contractRateID",' + // String. Required. Field ID that holds the Parent's key to the Child.
// Why isn't childReference used?
                                                              '"childReference":"xsd1:FindUnitPricedCUs/xsd1:Criteria/xsd1:contract_Rate_ID",' +     // String. Required. Data location (Database column or SOAP xpath request)
//                   that holds Parent's key on the Xref location.
                                                              '"key":"contractorCUID",' +           // String. Required. DATABASE: Data location that holds the key on the Child table.
//                   SOAP: Required. ID of the field on the panel which will hold the unique key to the data on the panel.
//'"addNew":false,' +
                                                              '"actionDetail":' +                   //Object. Optional. Required for SOAP namespaces to load list.
                                                                  '{' +
                                                                     '"subsearch":' +
                                                                          '{' +
                                                                              '"request":' +
                                                                                  '{' +
                                                                                      '"action":"urn:doc?in=FindUnitPricedCUs?out=FindUnitPricedCUsResult?path=PPL_UNITIZEDCU.Business.UnitPricedCUs.FindUnitPricedCUs",' +  // String. Dependant. The action to perform within the request.
//      Required for SOAP and is the SOAP Action.
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '},' +
                                                                              '"response":' +
                                                                                  '{' +
                                                                                      '"key":"xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:contractor_Cu_ID",' + // String. Required.
//    Xpath of the node containing data uniquely identifying
//    a "record" within a SOAP response
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '}' +
                                                                          '}' +
                                                                  '},' +
                                                              '"searchFields":' +
                                                                '{' +
                                                                  '"actionDetail":' +                   // Object. Optional. Required for SOAP namespaces to load lists.
                                                                      '{' +
                                                                         '"search":' +
                                                                              '{' +
                                                                                  '"request":' +
                                                                                      '{' +
                                                                                          '"action":"urn:doc?in=QueryUnitizedCU?out=QueryUnitizedCUResult?path=PPL_UNITIZEDCU.Business.UnitizedCUs.QueryUnitizedCU",' +  // String. Dependant. The action to perform within the request.
//      Required for SOAP and is the SOAP Action.
                                                                                          '"namespaces":' +
                                                                                          '{' +
                                                                                              '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                          '}' +
                                                                                      '},' +
                                                                                  '"response":' +
                                                                                      '{' +
                                                                                          '"key":"xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu_ID",' + // String. Required.
//    Xpath of the node containing data uniquely identifying
//    a "record" within a SOAP response
                                                                                          '"namespaces":' +
                                                                                          '{' +
                                                                                              '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                              '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                          '}' +
                                                                                      '}' +
                                                                              '}' +
                                                                      '},' +
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
                                                                                                '"label":"CU",' +
                                                                                                '"labelLocation":"top",' +
                                                                                                '"type":"text",' +
                                                                                                '"id":"CU",' +
                                                                                                '"mask":"[alphanumeric 1 5]",' +
                                                                                                '"actionDetail":' +
                                                                                                    '{' +
                                                                                                        '"search":' +
                                                                                                            '{' +
                                                                                                                '"request":' +
                                                                                                                    '{' +
                                                                                                                        '"id":"xsd1:QueryUnitizedCU/xsd1:Criteria/xsd1:unitized_Cu"' +
                                                                                                                    '}' +
                                                                                                            '}' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                        ']' +
                                                                                    '},' +
                                                                                    '{' +
                                                                                        '"fields":' +
                                                                                        '[' +
                                                                                            '{' +
                                                                                                '"label":"Description",' +
                                                                                                '"labelLocation":"top",' +
                                                                                                '"type":"text",' +
                                                                                                '"id":"CU",' +
                                                                                                '"mask":"[character 1 255]",' +
                                                                                                '"actionDetail":' +
                                                                                                    '{' +
                                                                                                        '"search":' +
                                                                                                            '{' +
                                                                                                                '"request":' +
                                                                                                                    '{' +
                                                                                                                        '"id":"xsd1:QueryUnitizedCU/xsd1:Criteria/xsd1:description"' +
                                                                                                                    '}' +
                                                                                                            '}' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                        ']' +
                                                                                    '}' +
                                                                                ']' +
                                                                            '}' +
                                                                        '],' +
                                                                        '"detailLine":' +                     // Object. Required. Defines the detail line of the search results.
                                                                        '{' +
                                                                            '"data":' +                       // Object Array. Required. Defines the "text" portion of the result line.
                                                                            '[' +
                                                                                '{' +
                                                                                    '"width":"5em",' +              // String. Required. Width of this "column".
                                                                                    '"template":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:unitized_Cu]"' + // String. Required. HTML template of this column.
                                                                                '},' +                              //      Anything in brackest [] is a element returnd from the search.
                                                                                '{' +                               //      and is replaced for each record returned.
                                                                                    '"width":"30em",' +
                                                                                    '"template":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:description]"' +
                                                                                '},' +
                                                                                '{' +
                                                                                    '"width":"5em",' +
                                                                                    '"template":"[xsd1:QueryUnitizedCUResult/xsd1:QueryUnitizedCU/xsd1:Results/xsd1:status@AI]"' +
                                                                                '}' +
                                                                            '],' +
                                                                            '"translations":' +
                                                                                '{' +
                                                                                '"AI":{' +
                                                                                    '"parameter":"AI",' +
                                                                                    '"key":"KEY",' +
                                                                                    '"value":"[VALUE]"' +
                                                                                '}' +
                                                                                '}' +
                                                                        '}' +
                                                                '},' +
                                                              '"detailLine":' +                     // Object. Required. Defines the detail line of the search results.
                                                                '{' +
                                                                  '"data":' +                       // Object Array. Required. Defines the "text" portion of the result line.
                                                                    '[' +
                                                                        '{' +
                                                                            '"width":"5em",' +              // String. Required. Width of this "column".
                                                                            '"template":"[xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:unitized_Cu]"' + // String. Required. HTML template of this column.
                                                                        '},' +                              //      Anything in brackest [] is a element returnd from the search.
                                                                        '{' +                               //      and is replaced for each record returned.
                                                                            '"width":"30em",' +
                                                                            '"template":"[xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:description]"' +
                                                                        '},' +
                                                                        '{' +
                                                                            '"width":"5em",' +
                                                                            '"template":"[xsd1:FindUnitPricedCUsResult/xsd1:FindUnitPricedCUs/xsd1:Results/xsd1:status@AI]"' +
                                                                        '}' +
                                                                    '],' +
                                                                   '"translations":' +
                                                                     '{' +
                                                                        '"AI":{' +
                                                                            '"parameter":"AI",' +
                                                                            '"key":"KEY",' +
                                                                            '"value":"[VALUE]"' +
                                                                        '}' +
                                                                     '}' +
                                                                '}' +
                                                         '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Unit Priced Adders",' +
                                        '"lines":' +
                                          '[' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                          '{' +                             // Not yet implemented in SOAP
// Three data locations are used to create a List:
//      Parent: Location of data for the form definition above.
//       Child: Location that holds the detail of each element.
//        Xref: Location that hold the connection between Parent and Child.  
//  staticList is the same as list, but does not need search fields.
                                                              '"label":"",' +
                                                              '"labelLocation":"top",' +
                                                              '"type":"staticList",' +
                                                              '"detailPanel":"ContractorUnitizedAddersDetail",' +  // String. Optional. Only used on staticList. Panel to load when item is selected.
                                                              '"connection":"SERVICE1",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"connectionType":"SOAP",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"id":"ContractRatesAdders",' +        // String. Required. Database: Xref: Location that hold the connection between Parent and Child.
//                   SOAP: Simply a unique name for this panel.
//'"width":"35em",' +                   // String. Optional. Default: 100%. Width of the list box.
                                                              '"parentReference":"contractRateID",' + // String. Required. Field ID that holds the Parent's key to the Child.
// Why isn't childReference used?
                                                              '"childReference":"xsd1:FindUnitPricedAdders/xsd1:Criteria/xsd1:contract_Rate_ID",' +     // String. Required. Data location (Database column or SOAP xpath request)
//                   that holds Parent's key on the Xref location.
                                                              '"key":"contractorCUID",' +           // String. Required. DATABASE: Data location that holds the key on the Child table.
//                   SOAP: Required. ID of the field on the panel which will hold the unique key to the data on the panel.
//'"addNew":false,' +
                                                              '"actionDetail":' +                   //Object. Optional. Required for SOAP namespaces to load list.
                                                                  '{' +
                                                                     '"subsearch":' +
                                                                          '{' +
                                                                              '"request":' +
                                                                                  '{' +
                                                                                      '"action":"urn:doc?in=FindUnitPricedAdders?out=FindUnitPricedAddersResult?path=PPL_UNITIZEDCU.Business.UnitPricedCUs.FindUnitPricedAdders",' +  // String. Dependant. The action to perform within the request.
//      Required for SOAP and is the SOAP Action.
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '},' +
                                                                              '"response":' +
                                                                                  '{' +
                                                                                      '"key":"xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:contractor_Cu_ID",' + // String. Required.
//    Xpath of the node containing data uniquely identifying
//    a "record" within a SOAP response
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '}' +
                                                                          '}' +
                                                                  '},' +
                                                              '"searchFields":' +
                                                                '{' +
                                                                  '"actionDetail":' +                   // Object. Optional. Required for SOAP namespaces to load lists.
                                                                      '{' +
                                                                         '"search":' +
                                                                              '{' +
                                                                                  '"request":' +
                                                                                      '{' +
                                                                                          '"action":"urn:doc?in=QueryUnitizedAdder?out=QueryUnitizedAdderResult?path=PPL_UNITIZEDCU.Business.UnitizedAdders.QueryUnitizedAdder",' +  // String. Dependant. The action to perform within the request.
//      Required for SOAP and is the SOAP Action.
                                                                                          '"namespaces":' +
                                                                                          '{' +
                                                                                              '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                          '}' +
                                                                                      '},' +
                                                                                  '"response":' +
                                                                                      '{' +
                                                                                          '"key":"xsd1:QueryUnitizedAdderResult/xsd1:QueryUnitizedAdder/xsd1:Results/xsd1:unitized_Cu_ID",' + // String. Required.
//    Xpath of the node containing data uniquely identifying
//    a "record" within a SOAP response
                                                                                          '"namespaces":' +
                                                                                          '{' +
                                                                                              '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                              '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                          '}' +
                                                                                      '}' +
                                                                              '}' +
                                                                      '},' +
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
                                                                                                '"label":"Adder",' +
                                                                                                '"labelLocation":"top",' +
                                                                                                '"type":"text",' +
                                                                                                '"id":"CU",' +
                                                                                                '"mask":"[alphanumeric 1 5]",' +
                                                                                                '"actionDetail":' +
                                                                                                    '{' +
                                                                                                        '"search":' +
                                                                                                            '{' +
                                                                                                                '"request":' +
                                                                                                                    '{' +
                                                                                                                        '"id":"xsd1:QueryUnitizedAdder/xsd1:Criteria/xsd1:unitized_Cu"' +
                                                                                                                    '}' +
                                                                                                            '}' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                        ']' +
                                                                                    '},' +
                                                                                    '{' +
                                                                                        '"fields":' +
                                                                                        '[' +
                                                                                            '{' +
                                                                                                '"label":"Description",' +
                                                                                                '"labelLocation":"top",' +
                                                                                                '"type":"text",' +
                                                                                                '"id":"CU",' +
                                                                                                '"mask":"[character 1 255]",' +
                                                                                                '"actionDetail":' +
                                                                                                    '{' +
                                                                                                        '"search":' +
                                                                                                            '{' +
                                                                                                                '"request":' +
                                                                                                                    '{' +
                                                                                                                        '"id":"xsd1:QueryUnitizedAdder/xsd1:Criteria/xsd1:description"' +
                                                                                                                    '}' +
                                                                                                            '}' +
                                                                                                    '}' +
                                                                                            '}' +
                                                                                        ']' +
                                                                                    '}' +
                                                                                ']' +
                                                                            '}' +
                                                                        '],' +
                                                                        '"detailLine":' +                     // Object. Required. Defines the detail line of the search results.
                                                                        '{' +
                                                                            '"data":' +                       // Object Array. Required. Defines the "text" portion of the result line.
                                                                            '[' +
                                                                                '{' +
                                                                                    '"width":"5em",' +              // String. Required. Width of this "column".
                                                                                    '"template":"[xsd1:QueryUnitizedAdderResult/xsd1:QueryUnitizedAdder/xsd1:Results/xsd1:unitized_Cu]"' + // String. Required. HTML template of this column.
                                                                                '},' +                              //      Anything in brackest [] is a element returnd from the search.
                                                                                '{' +                               //      and is replaced for each record returned.
                                                                                    '"width":"30em",' +
                                                                                    '"template":"[xsd1:QueryUnitizedAdderResult/xsd1:QueryUnitizedAdder/xsd1:Results/xsd1:description]"' +
                                                                                '},' +
                                                                                '{' +
                                                                                    '"width":"5em",' +
                                                                                    '"template":"[xsd1:QueryUnitizedAdderResult/xsd1:QueryUnitizedAdder/xsd1:Results/xsd1:status@AI]"' +
                                                                                '}' +
                                                                            '],' +
                                                                            '"translations":' +
                                                                                '{' +
                                                                                '"AI":{' +
                                                                                    '"parameter":"AI",' +
                                                                                    '"key":"KEY",' +
                                                                                    '"value":"[VALUE]"' +
                                                                                '}' +
                                                                                '}' +
                                                                        '}' +
                                                                '},' +
                                                              '"detailLine":' +                     // Object. Required. Defines the detail line of the search results.
                                                                '{' +
                                                                  '"data":' +                       // Object Array. Required. Defines the "text" portion of the result line.
                                                                    '[' +
                                                                        '{' +
                                                                            '"width":"5em",' +              // String. Required. Width of this "column".
                                                                            '"template":"[xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:unitized_Cu]"' + // String. Required. HTML template of this column.
                                                                        '},' +                              //      Anything in brackest [] is a element returnd from the search.
                                                                        '{' +                               //      and is replaced for each record returned.
                                                                            '"width":"30em",' +
                                                                            '"template":"[xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:description]"' +
                                                                        '},' +
                                                                        '{' +
                                                                            '"width":"5em",' +
                                                                            '"template":"[xsd1:FindUnitPricedAddersResult/xsd1:FindUnitPricedAdders/xsd1:Results/xsd1:status@AI]"' +
                                                                        '}' +
                                                                    '],' +
                                                                   '"translations":' +
                                                                     '{' +
                                                                        '"AI":{' +
                                                                            '"parameter":"AI",' +
                                                                            '"key":"KEY",' +
                                                                            '"value":"[VALUE]"' +
                                                                        '}' +
                                                                     '}' +
                                                                '}' +
                                                         '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '}';



var ContractorDetailPanel = '{' +
                            '"type":"detail",' +
                            '"title": "Contractor Detail",' +
                            '"submitto":"",' +
                            '"connection":"SERVICE1",' +
                            '"connectionType":"SOAP",' +
                            '"key":"CONTRACTORID",' +
                            '"deleteButton":false,' +
                            '"actionDetail":' +
                                '{' +
                                   '"load":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
//'"dataSource":"http://hpx-wamfa-1d:7005/fa_eu_dev/NextAxiomServer",' +
                                                    '"key":"xsd1:QueryContractor/xsd1:Criteria/xsd1:contractor_ID",' +
                                                    '"action":"urn:doc?in=QueryContractor?out=QueryContractorResult?path=PPL_UNITIZEDCU.Business.Contractors.QueryContractor",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:contractor_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '},' +
                                   '"save":' +
                                        '{' +
                                            '"request":' +
                                                '{' +
//'"dataSource":"http://hpx-wamfa-1d:7005/fa_eu_dev/NextAxiomServer",' +
                                                    '"key":"xsd1:SaveContractor/xsd1:Data/xsd1:contractor_ID",' +
                                                    '"action":"urn:doc?in=SaveContractor?out=SaveContractorResult?path=PPL_UNITIZEDCU.Business.Contractors.SaveContractor",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '},' +
                                            '"response":' +
                                                '{' +
                                                    '"key":"xsd1:SaveContractorResult/xsd1:Results/xsd1:contractor_ID",' +
                                                    '"namespaces":' +
                                                    '{' +
                                                        '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                        '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                    '}' +
                                                '}' +
                                        '}' +
                                '},' +
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
                                                            '"label":"Inactive",' +
                                                            '"labelLocation":"right",' +
                                                            '"type":"checkbox",' +
                                                            '"id":"ActiveSelect",' +
                                                            '"value":"I",' +
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
                                                                                    '"id":"xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:status"' +
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
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"id":"Active",' +
                                                            '"type":"hidden",' +
                                                            '"mask":"[character 1 40][calc {document.getElementById(\\"ContractorDetail.ActiveSelect\\").checked ? \\"I\\" : \\"A\\";}][default {\\"A\\";}]",' +
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
                                                                                    '"id":"xsd1:SaveContractor/xsd1:Data/xsd1:status"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveContractorResult/xsd1:Results/xsd1:status"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '},' +
                                                '{' +
                                                    '"fields":' +
                                                    '[' +
                                                        '{' +
                                                            '"label":"Name",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"ContractorName",' +
                                                            '"mask":"[required][character 1 40]",' +
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
                                                                                    '"id":"xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:name"' +
                                                                                '}' +
                                                                        '},' +
                                                                   '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveContractor/xsd1:Data/xsd1:name"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveContractorResult/xsd1:Results/xsd1:name"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '},' +
                                                        '{' +
                                                            '"label":"Supply Chain",' +
                                                            '"labelLocation":"top",' +
                                                            '"type":"text",' +
                                                            '"id":"SupplyChain",' +
                                                            '"mask":"[required][character 1 40]",' +
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
                                                                                    '"id":"xsd1:QueryContractorResult/xsd1:QueryContractor/xsd1:Results/xsd1:supply_Chain_ID"' +
                                                                                '}' +
                                                                        '},' +
                                                                   '"save":' +
                                                                        '{' +
                                                                            '"request":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveContractor/xsd1:Data/xsd1:supply_Chain_ID"' +
                                                                                '},' +
                                                                            '"response":' +
                                                                                '{' +
                                                                                    '"id":"xsd1:SaveContractorResult/xsd1:Results/xsd1:supply_Chain_ID"' +
                                                                                '}' +
                                                                        '}' +
                                                                '}' +
                                                        '}' +
                                                    ']' +
                                                '}' +
                                          ']' +
                                      '},' +
                                      '{' +
                                        '"title":"Contracts",' +
                                        '"lines":' +
                                          '[' +
                                              '{' +
                                                    '"fields":' +
                                                    '[' +
                                                          '{' +
                                                              '"label":"",' +
                                                              '"labelLocation":"top",' +
                                                              '"type":"staticList",' +
                                                              '"detailPanel":"ContractDetail",' +   // String. Optional. Only used on staticList. Panel to load when item is selected.
                                                              '"connection":"SERVICE1",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"connectionType":"SOAP",' +          // String. Optional. Defaults to the form setting. Same rules as for "select".
                                                              '"id":"Contracts",' +                 // String. Required. Database: Xref: Location that hold the connection between Parent and Child.
//                   SOAP: Simply a unique name for this panel.
                                                              '"parentReference":"CONTRACTORID",' + // String. Required. Field ID that holds the Parent's key to the Child.
                                                              '"childReference":"xsd1:QueryContract/xsd1:Criteria/xsd1:contractor_ID",' +     // String. Required. Data location (Database column or SOAP xpath)
//                   that holds Parent's key on the Xref location.
                                                              '"key":"xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:contract_ID",' +               // String. Required. DATABASE: Data location that holds the key on the Child table.
                                                              '"actionDetail":' +                   //Object. Optional. Required for SOAP namespaces to load list.
                                                                  '{' +
                                                                     '"subsearch":' +
                                                                          '{' +
                                                                              '"request":' +
                                                                                  '{' +
                                                                                      '"action":"urn:doc?in=QueryContract?out=QueryContractResult?path=PPL_UNITIZEDCU.Business.Contracts.QueryContract",' +  // String. Dependant. The action to perform within the request.
//      Required for SOAP and is the SOAP Action.
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '},' +
                                                                              '"response":' +
                                                                                  '{' +
                                                                                      '"namespaces":' +
                                                                                      '{' +
                                                                                          '"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
                                                                                          '"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
                                                                                      '}' +
                                                                                  '}' +
                                                                          '}' +
                                                                  '},' +
                                                            '"detailLine":' +
                                                                '{' +
                                                                '"data":' +
                                                                    '[' +
                                                                        '{' +
                                                                            '"width":"16em",' +
                                                                            '"template":"[xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:name]"' +
                                                                        '},' +
                                                                        '{' +
                                                                            '"width":"8em",' +
                                                                            '"template":"[xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:contract_Nbr]"' +
                                                                        '},' +
                                                                        '{' +
                                                                            '"width":"10em",' +
                                                                            '"template":"Effective: [xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:effective_Date]"' +
                                                                        '},' +
                                                                        '{' +
                                                                            '"width":"10em",' +
                                                                            '"template":"to&nbsp;&nbsp;&nbsp;[xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:expiration_Date]"' +
                                                                        '},' +
                                                                        '{' +
                                                                            '"width":"9em",' +
                                                                            '"template":"[xsd1:QueryContractResult/xsd1:QueryContract/xsd1:Results/xsd1:status@AI]"' +
                                                                        '}' +
                                                                    '],' +
                                                                   '"translations":' +
                                                                     '{' +
                                                                        '"AI":{' +
                                                                            '"parameter":"AI",' +
                                                                            '"key":"KEY",' +
                                                                            '"value":"[VALUE]"' +
                                                                        '}' +
                                                                     '}' +
                                                                '}' +
                                                         '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '}';




var areasPanel = '{' +
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
                     '}';

var organizationPanel = '{' +
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
                     '}';

var orgTypePanel = '{' +
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
                     '}';

var mailCodesPanel = '{' +
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
                     '}';

var statusPanel = '{' +
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
                     '}';

var usersPanel = '{' +
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
                     '}';

var areaDetailPanel = '{' +
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
                                                          '"value":"[LASTNAME]",' +
                                                          '"filter":""' +
                                                        '}' +
                                                  ']' +
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '}';

var orgTypeDetailPanel = '{' +
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
                              '}';

var organizationDetailPanel = '{' +
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
                              '}';

var mailCodesDetailPanel = '{' +
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
                                                      '"type":"staticList",' +
//'"width":"20em",' +
                                                      '"id":"CONTACTSMAILCODES",' +
                                                      '"parentReference":"MAILCODEID",' +
                                                      '"childReference":"MAILCODEID",' +
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
                                                                    '"width":"7em",' +
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
                              '}';

var statusDetailPanel = '{' +
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
                                      '}' +
                                  ']' +
                              '}';

var usersDetailPanel = '{' +
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
                                              '}' +
                                          ']' +
                                      '}' +
                                  ']' +
                              '}';



var contactsPanel = '{' +
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
/*            '{' +
'"label":"Organization Type:",' +
'"labelLocation":"top",' +
'"type":"select",' +
'"id":"ORGANIZATIONID",' +
'"parameter":"ORGANIZATIONTYPE",' +
'"key":"ORGTYPEID",' +
'"value":"ORGNAME",' +
'"link":' +
'[' +
'{' +
'"ORGANIZATION.ORGTYPEID":"ORGANIZATIONTYPE.ORGTYPEID",' +
'"CONTACT.ORGANIZATIONID":"ORGANIZATION.ORGANIZATIONID"' +
'}' +
'],' +
'"filter":""' +
'},' +*/
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
                                                        '"type":"select",' +
                                                        '"id":"ORGANIZATIONID",' +
                                                        '"parameter":"ORGANIZATION",' +
                                                        '"key":"ORGID",' +
                                                        '"value":"[ORGNAME]",' +
                                                        '"filter":""' +
//'"mask":"[required]"' +
                                                      '},' +
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
                                          '"width":"7em",' +
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
                          '}';

var speakerBureauPanel = '{' +
                            '"type":"searchList",' +
                            '"title":"Speaker Bureau",' +
                            '"key":"SBID",' +
                            '"dataSource":"SPEAKERBUREAU",' +
                            '"detailPanel":"speakerBureauDetail",' +
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
                                                          '"label":"PPL Account<br />Manager:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"SBPPLACCTMGRID",' +
                                                          '"parameter":"PPLUSER",' +
                                                          '"key":"USERID",' +
                                                          '"value":"[LASTNAME], [FIRSTNAME]",' +
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
                                    '],' +
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
                                  '],' +
                                '"translations":' +
                                 '{' +
                                    '"PPLUSER":{' +
                                        '"parameter":"PPLUSER",' +
                                        '"connection":"DATABASE",' +
                                        '"connectionType":"DATABASE",' +
                                        '"key":"USERID",' +
                                        '"value":"[LASTNAME], [FIRSTNAME]"' +
/*'"actionDetail":' +                       //Object. Optional. Required for SOAP namespaces to load choices.
'{' +
'"loadselect":' +
'{' +
'"request":' +
'{' +
'"action":"urn:doc?in ...",' +  // String. Dependant. The action to perform within the request.
//      Required for SOAP and is the SOAP Action.
'"namespaces":' +
'{' +
'"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
'},' +
'"data":' +   // Object. Optional. Additional fields to act as query criteria.
'{' +
'"xsd1:QueryContractorContracts":""' +    // String. Required. Name/Value Pair for query field criteria.
//          SOAP requires at least one which contains the
//              root node within <body>
'}' +
'},' +
'"response":' +
'{' +
'"namespaces":' +
'{' +
'"soap-env":"http://schemas.xmlsoap.org/soap/envelope/",' +
'"xsd1":"http://www.nextaxiom.com/soapservice/xsd1"' +
'}' +
'}' +
'}' +
'}' +*/
                                    '}' +
                                 '}' +
                              '}' +
                          '}';

var groupsPanel = '{' +
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
                          '}';


var contactDetailPanel = '{' +
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
                                                      '{' +
                                                        '"label":"Organization:",' +
                                                        '"labelLocation":"top",' +
                                                        '"type":"select",' +
                                                        '"id":"ORGANIZATIONID",' +
                                                        '"parameter":"ORGANIZATION",' +
                                                        '"key":"ORGID",' +
                                                        '"value":"[ORGNAME]",' +
                                                        '"filter":""' +
                                                      '},' +
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
                                                      '},' +
                                                      '{' +
                                                          '"label":"",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"qrcode",' +
                                                          '"id":"abc",' +
                                                          '"size":"100",' +
                                                          '"qrdata":"[contactDetail.WEBSITE]"' +
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
                                                      '},' +
                                                      '{' +
                                                          '"label":"ID/Status:",' +
                                                          '"labelLocation":"top",' +
                                                          '"type":"select",' +
                                                          '"id":"IDSTATUSID",' +
                                                          '"parameter":"STATUS",' +
                                                          '"key":"STATUSID",' +
                                                          '"value":"[STATUSNAME]",' +
                                                          '"filter":""' +
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
//'"width":"35em",' +
                                                      '"id":"CONTACTSMAILCODES",' +
                                                      '"parentReference":"CONTACTID",' +
                                                      '"childReference":"CONTACTID",' +
                                                      '"childKey":"MAILCODEID",' +
                                                      '"dataSource":"MAILCODE",' +
                                                      '"key":"MAILCODEID",' +
                                                      '"detailPanel":"mailCodesDetail",' +
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
                                                                          '"mask":"[character 1 10][default {RMBLgetUserId();}]",' +
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
                              '}';

var speakerBureauDetailPanel = '{' +
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
                                                          '"value":"[LASTNAME], [FIRSTNAME]"' +
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
                                                          '"id":"STATUS",' +
                                                          '"url":"",' +
                                                          '"parameter":"idStatus"' +
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
                                                          '"label":"<br />Difficult Questioxsd1:",' +
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
                              '}';


var groupsDetailPanel = '{' +
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
                                                                    '"width":"7em",' +
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
                              '}';


// Define all "Pulldown" choice fields

var xPPLUSER = '[ ' +
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
                             
                       
                                              
                                              
