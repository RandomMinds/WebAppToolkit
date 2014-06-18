/*
default.aspx.cs - Generic Backend for CRUD applications in C#.
    (C)reate, (R)ead, (U)pdate, (D)elete
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Net;
using System.Net.Mail;


using System.IO;
using System.Web.Script.Serialization;
using System.Data.OracleClient;
using System.Collections;
using System.Xml;
using System.Text;
using System.Security.Cryptography;

namespace ACTII.WebAppToolkit.services.catchAll
{
    public partial class _default : System.Web.UI.Page
    {
        protected String SHA1Encrypt(String phrase) { UTF8Encoding encoder = new UTF8Encoding(); SHA1CryptoServiceProvider sha1Hasher = new SHA1CryptoServiceProvider(); byte[] hashedDataBytes = sha1Hasher.ComputeHash(encoder.GetBytes(phrase)); return ByteArrayToString(hashedDataBytes); }

        protected String ByteArrayToString(byte[] inputArray) { StringBuilder output = new StringBuilder(""); for (int i = 0; i < inputArray.Length; i++) { output.Append(inputArray[i].ToString("X2")); } return output.ToString(); } 

        protected void Page_Load(object sender, EventArgs e)
        {
            // Generic response package ///////////////////////////////////
            Dictionary<String, Object> responsePackage = new Dictionary<String, Object>();
            List<Dictionary<String, String>> responses = new List<Dictionary<String, String>>();
            Dictionary<String, String> response = new Dictionary<String, String>();
            Dictionary<String, String> status = new Dictionary<String, String>();
            ///////////////////////////////////////////////////////////////
            JavaScriptSerializer rs = new JavaScriptSerializer();

            try
            {
                /*
                Response.Write("Hello");
                return;
                Response.Write(System.Environment.GetEnvironmentVariable("PPL.Env"));
                return;
                */
                String credentialUID = Request.QueryString["u"];
                String credentialPSWD = Request.QueryString["p"];
                String credentialEPSWD = null;
                // Comment out the following line for production.
                credentialEPSWD = Request.QueryString["ep"];

                if (credentialPSWD != null)
                {
                    Security security = new Security();
                    Response.Write(security.encrypt(credentialUID, credentialPSWD));
                    return;
                }
                else if (credentialEPSWD != null)
                {
                    Security security = new Security();
                    Response.Write(security.decrypt(credentialUID, credentialEPSWD));
                    return;
                }

                Dictionary<String, Object> jsonRequest = new Dictionary<String, Object>();
                //JavaScriptSerializer rs = new JavaScriptSerializer();

                try
                {
                    String[] theFormRequest = Request.Form.GetValues(0);
                    jsonRequest = rs.Deserialize<Dictionary<String, Object>>(theFormRequest[0]);
                }
                catch (Exception tmpE)
                {
                    Stream instream = Page.Request.InputStream;
                    BinaryReader br = new BinaryReader(instream,
                    System.Text.Encoding.UTF8);
                    byte[] bytes = br.ReadBytes((int)instream.Length);

                    System.Text.Encoding enc = System.Text.Encoding.ASCII;
                    jsonRequest = rs.Deserialize<Dictionary<String, Object>>(enc.GetString(bytes));
                }

                String request = (String)jsonRequest["request"];
                String action = (String)jsonRequest["action"];
                //String connectionType = (String)jsonRequest["connectionType"];
                Dictionary<String, Object> requestData = (Dictionary<String, Object>)jsonRequest["requestData"];

                DataConnection theDB = new DataConnection();

                String userName = Request.ServerVariables["AUTH_USER"];
                 
                //Security securityA = new Security();
                //Boolean ok = securityA.CheckGroup(new String[] {"PPL\\ISD-DL-GIS","aaa"});

                switch (action)
                {
                    case "getUserId":
                        response.Add("userid", userName.Substring(userName.LastIndexOf("\\") + 1));
                        //response.Add("userid", System.Web.HttpContext.Current.Request.LogonUserIdentity.Name);

                        status.Add("result", "true");
                        status.Add("message", "");
                        responsePackage.Add("data", response);
                        responsePackage.Add("status", status);

                        Response.Write(rs.Serialize(responsePackage));
                        
                        
                        //Response.Write(rs.Serialize(response));
                        return;
                        //break;
                    case "checkSecurity":
                        Security security = new Security();
                        if //(security.CheckGroup(((ArrayList)requestData["groups"]))) 
                            (security.CheckGroup((ArrayList)requestData["groups"]))
                        {
                            response.Add("success", "true");
                        }
                        else
                        {
                            response.Add("success", "false");
                        }
                        
                        
                        status.Add("result", "true");
                        status.Add("message", "");
                        responsePackage.Add("data", response);
                        responsePackage.Add("status", status);

                        Response.Write(rs.Serialize(responsePackage));
                        
                        
                        
                        //Response.Write(rs.Serialize(response));
                        return;
                        //break;
                }

                switch ((String)requestData["form:connectionType"])
                {
                    case "SOAP":

                         Dictionary<String, String> credentials = new Dictionary<String, String>();

                         if(requestData.ContainsKey("form:connection")) {
                            credentials = theDB.getSOAPCredentials((String)requestData["form:connection"]);
                         }


                        switch (action)
                        {
                            default:
                                String soapEnv = "";
                                Random r = new Random();
                                DateTime created = DateTime.Now;
                                string nonce = Convert.ToBase64String(Encoding.ASCII.GetBytes(SHA1Encrypt(created + r.Next().ToString()))); 
                                    soapEnv += "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'>";

  		                        String securityHeader = "";
    		                      securityHeader += "<wsse:Security soapenv:mustUnderstand='1' xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd'>";
      		                      securityHeader += "<wsu:Timestamp wsu:Id='" + System.Guid.NewGuid().ToString() + "' xmlns:wsu='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'>";
                                  String createdDate = TimeZoneInfo.ConvertTimeToUtc(created).ToString("yyyy-MM-dd'T'HH:mm:ss.FFF'Z'");

                                  String expirationDate = TimeZoneInfo.ConvertTimeToUtc(created).AddSeconds(30).ToString("yyyy-MM-dd'T'HH:mm:ss.FFF'Z'");
      		                      securityHeader += "<wsu:Created>" + createdDate + "</wsu:Created>";
      		                      securityHeader += "<wsu:Expires>" + expirationDate + "</wsu:Expires>";
      		                      securityHeader += "</wsu:Timestamp>";
                                  if (credentials.ContainsKey("userid"))
                                  {
                                      securityHeader += "<wsse:UsernameToken wsu:Id='" + System.Guid.NewGuid().ToString() + "' xmlns:wsu='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'>";
                                      securityHeader += "<wsse:Username>" + credentials["userid"] + "</wsse:Username>";
                                      securityHeader += "<wsse:Password Type='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText'>" + credentials["password"] + "</wsse:Password>";
                                      securityHeader += "<wsse:Nonce EncodingType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary'>" + nonce + "</wsse:Nonce>";
                                      securityHeader += "<wsu:Created>" + createdDate + "</wsu:Created>";
                                      securityHeader += "</wsse:UsernameToken>";
                                  }
      		                      securityHeader += "</wsse:Security>";

                                  soapEnv += "<soapenv:Header>";
                                  soapEnv += securityHeader;
                                  soapEnv += "</soapenv:Header>";
                                  soapEnv += "<soapenv:Body";

                                  soapEnv += "></soapenv:Body>";
                                  soapEnv += "</soapenv:Envelope>";

                                  XmlDocument doc = new XmlDocument();
                                  doc.LoadXml(soapEnv);
                                  XmlNamespaceManager nsmgr = new XmlNamespaceManager(doc.NameTable);

                                  nsmgr.AddNamespace("soapenv", "http://schemas.xmlsoap.org/soap/envelope/");
                                  nsmgr.AddNamespace("wsse", "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd");
                                  nsmgr.AddNamespace("wsu", "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd");


                                  String endPoint = "";
                                  String soapAction = "";

                                  Dictionary<String, Object> actionDetail = (Dictionary<String, Object>)requestData["form:actionDetail"];
                                  Dictionary<String, Object> searchActionDetail = null;
                                  Dictionary<String, Object> searchRequestActionDetail = null;
                                  Dictionary<String, Object> namespaces = null;
                                  if (actionDetail.ContainsKey(action.ToLower()))
                                  {
                                      searchActionDetail = (Dictionary<String, Object>)actionDetail[action.ToLower()];
                                      if (searchActionDetail.ContainsKey("request"))
                                      {
                                          searchRequestActionDetail = (Dictionary<String, Object>)searchActionDetail["request"];
                                          endPoint = (String)credentials["server"];
                                          soapAction = (String)searchRequestActionDetail["action"];
                                          if (searchRequestActionDetail.ContainsKey("namespaces"))
                                          {
                                              namespaces = (Dictionary<String, Object>)searchRequestActionDetail["namespaces"];
                                              foreach (var namespaceItem in namespaces)
                                              {
                                                  //soapEnv += " xmlns:" + namespaceItem.Key + "=\"" + namespaceItem.Value + "\"";
                                                  nsmgr.AddNamespace(namespaceItem.Key, namespaceItem.Value.ToString());
                                              }

                                          }
                                      }

                                  }

                                  if (action == "subsearch")
                                  {
                                      requestData.Add((String)requestData["sub:childReference"], (String)requestData["sub:Key"]);
                                      //requestData.Add("key", (String)requestData["sub:Key"]);
                                  }
                                  foreach(var field in requestData) {
                                        String[] nodeParts = field.Key.Split('/');
                                        String prePartSegment = "/soapenv:Envelope/soapenv:Body";
                                        String postPartSegment = String.Copy(prePartSegment);

                                        XmlNode newNode = null;
                                        foreach(var part in nodeParts) {
                                            if (!part.StartsWith("form:") && !part.StartsWith("return:") && !part.StartsWith("sub:") && !part.StartsWith("key") && !part.Contains("xrefSubform"))
                                            {
                                                String[] theNamespace = part.Split(':');
                                                postPartSegment += "/" + part;
                                                if (doc.SelectSingleNode(postPartSegment, nsmgr) == null)
                                                {
                                                    if (theNamespace.Length > 1)
                                                    {
                                                        newNode = doc.SelectSingleNode(prePartSegment, nsmgr).AppendChild(doc.CreateElement(part, (String)namespaces[theNamespace[0]]));
                                                    }
                                                    else
                                                    {
                                                        newNode = doc.SelectSingleNode(prePartSegment, nsmgr).AppendChild(doc.CreateElement(part));
                                                    }
                                                }
                                                prePartSegment = String.Copy(postPartSegment);
                                            }
                                        }
                                        if (newNode != null)
                                        {
                                            String tmpValue = field.Value.ToString();
                                            if (nodeParts[nodeParts.Length - 1].ToLower().Contains("date"))
                                            {
                                                newNode.AppendChild(doc.CreateTextNode(tmpValue.Substring(6, 4) + tmpValue.Substring(0, 2) + tmpValue.Substring(3,2)));
                                            }
                                            else
                                            {
                                                newNode.AppendChild(doc.CreateTextNode(tmpValue));
                                            }

                                            
                                        }

                                  }

                                //String soapDocumentString = doc.InnerXml;
                                //byte[] soapRequestDocument = new byte[doc.InnerXml.Length * sizeof(char)];
                                //System.Buffer.BlockCopy(doc.InnerXml.ToCharArray(), 0, soapRequestDocument, 0, soapRequestDocument.Length); 

                                //System.Text.UTF8Encoding UTF8 = new System.Text.UTF8Encoding();
                                //Byte[] soapRequestDocument = UTF8.GetBytes(doc.InnerXml);

                                System.Text.ASCIIEncoding encoding = new System.Text.ASCIIEncoding();
                                byte[] soapRequestDocument = encoding.GetBytes(doc.InnerXml);

                                HttpWebRequest soapRequest = (HttpWebRequest)WebRequest.Create(endPoint);
                                //soapRequest.Credentials = CredentialCache.DefaultCredentials;
                                //((HttpWebRequest)soapRequest).UserAgent = ".NET Framework Example Client";
                                soapRequest.Method = "POST";
                                soapRequest.ContentLength = soapRequestDocument.Length;
                                soapRequest.ContentType = "text/xml;charset=UTF-8";
                                soapRequest.Accept = "text/xml";
                                soapRequest.Headers.Add("SOAPAction", soapAction);

                                

                                Stream dataStream = soapRequest.GetRequestStream();
                                dataStream.Write (soapRequestDocument, 0, soapRequestDocument.Length);
                                dataStream.Close ();
                                //WebResponse soapResponse = null;

                                //try
                                //{
                                    //soapResponse = soapRequest.GetResponse();
                                string responseFromServer = null;

                                try
                                {
                                    using (WebResponse soapResponse = soapRequest.GetResponse())
                                    {


                                        //}
                                        //catch (WebException we)
                                        //{
                                        /*
                                        response = new Dictionary<String, String>();
                                        response.Add("success", "false");
                                        response.Add("message", we.ToString());
                                        responses.Add(response);

                                        Response.Write(rs.Serialize(responses));
                                        return;
                                         */

                                        //}

                                        dataStream = soapResponse.GetResponseStream();
                                        StreamReader reader = new StreamReader(dataStream);
                                        responseFromServer = reader.ReadToEnd();

                                        reader.Close();
                                        dataStream.Close();
                                        soapResponse.Close();
                                    }
                                }
                                catch (WebException eee) {
                                    //responses.Add(response);
                                        //responseFromServer = responseFromServer;
                                    /*
                                    response.Add("success", "false");
                                    doc.LoadXml(new StreamReader(eee.Response.GetResponseStream()).ReadToEnd());
                                    
                                    response.Add("message", "A HTTP/SOAP Error has occured.\nA member of the support staff has been notified.\n" +
                                        ((doc.GetElementsByTagName("body").Count > 0) ? doc.GetElementsByTagName("body")[0].InnerText : doc.InnerXml) + "\n\n" +
                                        (new ASCIIEncoding().GetString(soapRequestDocument))
                                    );
                                    Response.Write(rs.Serialize(response));
                                    */
                                    status.Add("result", "false");
                                    status.Add("message", "A HTTP/SOAP Error has occured.\nA member of the support staff has been notified.\n");
                                    responsePackage.Add("data", responses);
                                    responsePackage.Add("status", status);

                                    Response.Write(rs.Serialize(responsePackage));


                                    return;

                                }

                                XmlDocument responseDoc = new XmlDocument();
                                responseDoc.LoadXml(responseFromServer);

                                  XmlNamespaceManager responseNsmgr = new XmlNamespaceManager(doc.NameTable);

                                String keyRoot = "";

                                  Dictionary<String, Object> actionDetailResponse = (Dictionary<String, Object>)requestData["form:actionDetail"];
                                  if (actionDetailResponse.ContainsKey(action.ToLower()))
                                  {
                                      Dictionary<String, Object> searchActionDetailResponse = (Dictionary<String, Object>)actionDetail[action.ToLower()];
                                      if (searchActionDetailResponse.ContainsKey("response"))
                                      {
                                          Dictionary<String, Object> searchResponseActionDetail = (Dictionary<String, Object>)searchActionDetailResponse["response"];
                                          if (searchResponseActionDetail.ContainsKey("key"))
                                          {
                                              // Need to do this for the database side as well.
                                              if ((searchResponseActionDetail["key"]).GetType().Name.Equals("ArrayList"))
                                              {
                                                  keyRoot = (String)(((ArrayList)(searchResponseActionDetail["key"]))[0]);
                                              }
                                              else
                                              {
                                                  keyRoot = (String)searchResponseActionDetail["key"];
                                              }
                                          }
                                          else
                                          {
                                              if ((requestData["key"]).GetType().Name.Equals("ArrayList"))
                                              {
                                                  keyRoot = (String)(((ArrayList)(requestData["key"]))[0]);
                                              }
                                              else
                                              {
                                                  keyRoot = (String)requestData["key"];
                                              }
                                          }
                                          keyRoot = keyRoot.Substring(0,keyRoot.LastIndexOf('/'));
                                          if (searchResponseActionDetail.ContainsKey("namespaces"))
                                          {
                                              Dictionary<String, Object> responseNamespaces = (Dictionary<String, Object>)searchResponseActionDetail["namespaces"];
                                              foreach (var responseNamespaceItem in responseNamespaces)
                                              {
                                                  //soapEnv += " xmlns:" + namespaceItem.Key + "=\"" + namespaceItem.Value + "\"";
                                                  responseNsmgr.AddNamespace(responseNamespaceItem.Key, responseNamespaceItem.Value.ToString());
                                              }

                                          }
                                      }

                                  }


                                  String documentRoot = "/" + responseDoc.DocumentElement.Name + "/" + responseDoc.DocumentElement.Name.Replace("Envelope", "Body") + "/";
                                  String resultNodes = documentRoot + keyRoot;
                                  foreach (XmlNode node in responseDoc.DocumentElement.SelectNodes(resultNodes, responseNsmgr))
                                  {
                                      response = new Dictionary<String, String>();
                                      //if(node.SelectSingleNode("ns:contractor_ID", responseNsmgr).InnerText
                                      /*if (action.ToLower() == "loadselect")
                                      {
                                          String relativeNode = ((String)requestData["key"]).Replace(keyRoot + "/", "");
                                          XmlNode fieldNode = node.SelectSingleNode(relativeNode, responseNsmgr);
                                          if (fieldNode != null)
                                          {
                                              response.Add("KEY", fieldNode.InnerText);
                                          }
                                          relativeNode = ((String)requestData["value"]).Replace(keyRoot + "/", "");
                                          fieldNode = node.SelectSingleNode(relativeNode, responseNsmgr);
                                          if (fieldNode != null)
                                          {
                                              response.Add("VALUE", fieldNode.InnerText);
                                          }

                                      } else*/ if (requestData.ContainsKey("return:fields"))
                                      {
                                          foreach (String field in (ArrayList)requestData["return:fields"])
                                          {
                                              String relativeNode = field.Replace(keyRoot + "/", "");
                                              XmlNode fieldNode = node.SelectSingleNode(relativeNode, responseNsmgr);
                                              if (fieldNode != null)
                                              {
                                                  if (field.ToLower().Contains("date"))
                                                  {
                                                      response.Add(field, fieldNode.InnerText.Substring(4, 2) + "/" + fieldNode.InnerText.Substring(6, 2) + "/" + fieldNode.InnerText.Substring(0, 4));
                                                  }
                                                  else
                                                  {
                                                      response.Add(field, fieldNode.InnerText);
                                                  }
                                              }
                                          }
                                      }
                                      else // Might not need this part.
                                      {

                                          foreach (KeyValuePair<String, Object> field in requestData)
                                          {
                                              try
                                              {
                                                  String relativeNode = field.Key.Replace(keyRoot + "/", "");
                                                  XmlNode fieldNode = node.SelectSingleNode(relativeNode, responseNsmgr);
                                                  if (fieldNode != null)
                                                  {
                                                      response.Add(field.Key, fieldNode.InnerText);
                                                  }
                                              }
                                              catch (Exception ex) { }
                                          }
                                      }
                                      responses.Add(response);
                                  }

                                  //if (responses.Count > 1)
                                  if (action.ToLower() == "search" || action.ToLower() == "subsearch" || action.ToLower() == "loadselect")
                                  { // Must be a search
                                      responses.Sort(delegate(Dictionary<String, String> d1, Dictionary<String, String> d2) { try { return d1[(String)((ArrayList)requestData["return:fields"])[1]].CompareTo(d2[(String)((ArrayList)requestData["return:fields"])[1]]); } catch (Exception se) { return 0; } });

                                      
                                      status.Add("result", "true");
                                      status.Add("message", "");
                                      responsePackage.Add("data", responses);
                                      responsePackage.Add("status", status);

                                      Response.Write(rs.Serialize(responsePackage));
                                      
                                      //Response.Write(rs.Serialize(responses));
                                  }
                                  else if (action.ToLower() == "loadselect-xxxxxxx")
                                      {
                                          responses.Sort(delegate(Dictionary<String, String> d1, Dictionary<String, String> d2) { return d1["VALUE"].CompareTo(d2["VALUE"]); });

                                          
                                          status.Add("result", "true");
                                          status.Add("message", "");
                                          responsePackage.Add("data", responses);
                                          responsePackage.Add("status", status);

                                          Response.Write(rs.Serialize(responsePackage));
                                          
                                          //Response.Write(rs.Serialize(responses));
                                      }
                                      else
                                      {
                                          /* This is what I want to do:
                                          status.Add("result", "true");
                                          status.Add("message", "");
                                          responsePackage.Add("data", response);
                                          responsePackage.Add("status", status);

                                          Response.Write(rs.Serialize(responsePackage));
                                           */

                                          if (action != "Search" || action.ToLower() == "loadselect")
                                          {
                                              //response.Add("success", "true");
                                              //Response.Write(rs.Serialize(response));

                                              status.Add("result", "true");
                                              status.Add("message", "");
                                              responsePackage.Add("data", response);
                                              responsePackage.Add("status", status);

                                              Response.Write(rs.Serialize(responsePackage));

                                          }
                                      }
                                    break;
                        }


                        break;

                    case "DATABASE":
                        if (theDB.OpenConnection((String)requestData["form:connection"]))
                        {
                            String sql = "";
                            String sql2 = "";
                            String sql3 = "";
                            String sql4 = "";
                            String finalSQL = "";
                            String theComma = "";
                            String theComma2 = "";

                            // Allow for case insensitive search.
                            theDB.execNonQuery("alter session set NLS_SORT=BINARY_CI");
                            theDB.execNonQuery("alter session set NLS_COMP=LINGUISTIC");
                    
                            OracleDataReader resultA = null;

                            switch (action)
                            {
                                case "Email":
                                    sql = "select * from " + (String)requestData["fromEmailSource"] + " where 1=2";
                                    resultA = theDB.execQuery(sql);
                                    sql = "select ";
                                    sql2 = "";
                                    theComma = "";

                                    for (int i = 0; i < resultA.FieldCount; i++)
                                    {
                                        if ((String)requestData["emailID"] == resultA.GetName(i))
                                        {
                                            if (resultA.GetFieldType(i) == typeof(DateTime))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ", 'MM/DD/YYYY') " + resultA.GetName(i);
                                            }
                                            else if (resultA.GetFieldType(i) != typeof(String))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ") " + resultA.GetName(i);
                                            }
                                            else
                                            {
                                                sql2 += theComma + resultA.GetName(i);
                                            }
                                            if (!sql2.Equals(""))
                                            {
                                                theComma = ", ";
                                            }
                                        }
                                    }
                                    resultA.Close();

                                    finalSQL = sql + sql2 + " from " + (String)requestData["fromEmailSource"] + " where " + (String)requestData["fromEmailUserID"] + " = '" + (userName.Substring(userName.LastIndexOf("\\") + 1)).Replace("'", "''") + "'";
                                    //finalSQL = "select * from (" + finalSQL + ") where ROWNUM <= 100";
                                    OracleDataReader result = theDB.execQuery(finalSQL);

                                    String emailString = "";
                                    MailAddress fromAddress = null;

                                    if (result.Read())
                                    {
                                        for (int i = 0; i < result.FieldCount; i++)
                                        {
                                            try
                                            {
                                                emailString = result.GetString(i);
                                            }
                                            catch (Exception ex) { }


                                            fromAddress = new MailAddress(emailString);


                                        }
                                    }
                                    result.Close();

                                    var message = new MailMessage();

                                    message.From = fromAddress;
                                    message.To.Add(fromAddress);
                                    message.Subject = (String)requestData["Subject"];
                                    message.Body = (String)requestData["Body"];



                                    foreach (var subTable in requestData)
                                    {
                                        if (subTable.Key.IndexOf("xrefSubform") > -1)
                                        {
                                            String subField = subTable.Key.Substring(0, subTable.Key.IndexOf("xrefSubform"));
                                            // subTableInfo variable needs to be hardened against SQL injection
                                            String[] subTableInfo = ((String)subTable.Value).Split(',');

                                            finalSQL = "select " + subTableInfo[1] + "." + (String)requestData["emailID"] + 
                                                       " from " + subTableInfo[1] + 
                                                       " inner join  " + (String)requestData["xref"] + " on " + 
                                                            subTableInfo[1] + "." + subTableInfo[2] + "=" + (String)requestData["xref"] + "." + subTableInfo[4] + 
                                                       " inner join " + subTableInfo[0] + " on " + 
                                                            (String)requestData["xref"] + "." + subTableInfo[5] + "=" + subTableInfo[0] + "." +  subTableInfo[5] + " and " +  
                                                            subTableInfo[0] + "." +  subTableInfo[3] + " in (";
                                            theComma = "";
                                            foreach (var subTable2 in requestData)
                                            {
                                                if (subTable2.Key.IndexOf("|") > -1)
                                                {
                                                    finalSQL += theComma + "'" + ((String)subTable2.Value).Replace("'", "''") + "'";
                                                    theComma = ",";
                                                }
                                            }



                                        }
                                    }

                                    finalSQL += ")";

                                    result = theDB.execQuery(finalSQL);

                                    if (result.Read())
                                    {
                                        for (int i = 0; i < result.FieldCount; i++)
                                        {
                                            try
                                            {
                                                if(!(string.IsNullOrEmpty(result.GetString(i))))
                                                    message.Bcc.Add(result.GetString(i));
                                            }
                                            catch (Exception ex) { }


                                        }
                                    }
                                    result.Close();


                                    var smtp = new SmtpClient
                                    {
                                        Host = "mailhub.ppl.com",
                                        Port = 25,
                                        EnableSsl = false,
                                        DeliveryMethod = SmtpDeliveryMethod.Network,
                                        UseDefaultCredentials = true,
                                        //Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                                    };


                                    smtp.Send(message);


                                    status.Add("result", "true");
                                    status.Add("message", "");
                                    responsePackage.Add("data", response);
                                    responsePackage.Add("status", status);

                                    Response.Write(rs.Serialize(responsePackage));


                                    //response.Add("success", "true");
                                    //Response.Write(rs.Serialize(response));
                                    break;
                                case "Save":
                                    // This only currently deals with one key... need to split on ":" for more than one.
                                    if (((String)requestData[(String)requestData["form:key"]]) == "")
                                    {
                                        // Generate Key
                                        switch ((String)requestData["form:keygen"])
                                        {
                                            case "UUID":
                                                requestData[(String)requestData["form:key"]] = System.Guid.NewGuid().ToString();
                                                break;
                                            case "MAX":
                                                // Add select max logic when needed
                                                break;
                                        }
                                        // Do Data Validation Here

                                        // ... and I know what you're going to say, but I like Dynamic SQL.

                                        // Dynamically build query:
                                                // to-do: harden "table" from sql injection.
                                        sql = "select * from " + (String)requestData["form:dataSource"] + " where 1=2";
                                        resultA = theDB.execQuery(sql);
                                        sql = "insert into " + (String)requestData["form:dataSource"] + " (";
                                        sql2 = ") values (";
                                        theComma = "";

                                        for (int i = 0; i < resultA.FieldCount; i++)
                                        {
                                            if (requestData.ContainsKey(resultA.GetName(i)))
                                            {
                                                sql += theComma + resultA.GetName(i);
                                                
                                                if (resultA.GetFieldType(i) == typeof(DateTime))
                                                {
                                                    if ((String)requestData[resultA.GetName(i)] == "")
                                                    {
                                                        sql2 += theComma + "null";
                                                    }
                                                    else
                                                    {
                                                        sql2 += theComma + "to_date('" + ((String)requestData[resultA.GetName(i)]).Replace("'", "''") + "','MM/DD/YYYY')";
                                                    }
                                                }
                                                else
                                                {
                                                    if ((String)requestData[resultA.GetName(i)] == "")
                                                    {
                                                        sql2 += theComma + "null";
                                                    }
                                                    else
                                                    {
                                                        sql2 += theComma + "'" + ((String)requestData[resultA.GetName(i)]).Replace("'", "''") + "'";
                                                    }
                                                }
                                                theComma = ", ";
                                            }
                                        }
                                        resultA.Close();

                                        finalSQL = sql + sql2 + ")";


                                        response.Add("datakey", (String)requestData[(String)requestData["form:key"]]);
                                        if (theDB.execNonQuery(finalSQL) == true)
                                        {
                                            response.Add("success", "true");
                                        }
                                        else
                                        {
                                            response.Add("success", "false");
                                            response.Add("message", "A SQL Error has occured.\nA member of the support staff has been notified.");
                                        }


                                        status.Add("result", "true");
                                        status.Add("message", "");
                                        responsePackage.Add("data", response);
                                        responsePackage.Add("status", status);

                                        Response.Write(rs.Serialize(responsePackage));

                                        
                                        
                                        //Response.Write(rs.Serialize(response));



                                    }
                                    else
                                    {

                                        // Dynamically build query:
                                        sql = "select * from " + (String)requestData["form:dataSource"] + " where 1=2";
                                        resultA = theDB.execQuery(sql);
                                        sql = "update " + (String)requestData["form:dataSource"] + " set ";
                                        sql2 = "";
                                        theComma = "";

                                        for (int i = 0; i < resultA.FieldCount; i++)
                                        {
                                            if (requestData.ContainsKey(resultA.GetName(i)))
                                            {
                                                if (resultA.GetName(i) == (String)requestData["form:key"])
                                                {
                                                    // Do nothing
                                                }

                                                else if (resultA.GetFieldType(i) == typeof(DateTime))
                                                {
                                                    if ((String)requestData[resultA.GetName(i)] == "")
                                                    {
                                                        sql2 += theComma + resultA.GetName(i) + " = null";
                                                    }
                                                    else
                                                    {
                                                        sql2 += theComma + resultA.GetName(i) + " = to_date('" + ((String)requestData[resultA.GetName(i)]).Replace("'", "''") + "','MM/DD/YYYY')";
                                                    }
                                                }
                                                else
                                                {
                                                    sql2 += theComma + resultA.GetName(i) + " = '" + ((String)requestData[resultA.GetName(i)]).Replace("'", "''") + "'";
                                                }
                                                if (!sql2.Equals(""))
                                                {
                                                    theComma = ", ";
                                                }
                                            }
                                        }
                                        resultA.Close();

                                        finalSQL = sql + sql2 + " where " + (String)requestData["form:key"] + " = '" + ((String)requestData[(String)requestData["form:key"]]).Replace("'", "''") + "'";


                                        response.Add("datakey", ((String)requestData[(String)requestData["form:key"]]));
                                        if (theDB.execNonQuery(finalSQL) == true)
                                        {
                                            response.Add("success", "true");
                                        }
                                        else
                                        {
                                            response.Add("success", "false");
                                            response.Add("message", "A SQL Error has occured.\nA member of the support staff has been notified.");
                                        }


                                        status.Add("result", "true");
                                        status.Add("message", "");
                                        responsePackage.Add("data", response);
                                        responsePackage.Add("status", status);

                                        Response.Write(rs.Serialize(responsePackage));


                                        //Response.Write(rs.Serialize(response));

                                    }

                                    // Sub Tables
                                    foreach (var subTable in requestData)
                                    {
                                        if (subTable.Key.IndexOf("xrefSubform") > -1)
                                        {
                                            String subField = subTable.Key.Substring(0, subTable.Key.IndexOf("xrefSubform"));
                                            // subTableInfo variable needs to be hardened against SQL injection
                                            String[] subTableInfo = ((String)subTable.Value).Split(',');

                                            // Delete Existing Data
                                            sql = "select * from " + subTableInfo[1] + " where 1=2";
                                            resultA = theDB.execQuery(sql);
                                            sql = "delete from " + subTableInfo[1] + " where " + subTableInfo[2] + " = ";
                                            sql2 = "";
                                            theComma = "";

                                            for (int i = 0; i < resultA.FieldCount; i++)
                                            {
                                                if (((String)subTableInfo[2]).Equals(resultA.GetName(i)))
                                                {
                                                    if (resultA.GetFieldType(i) == typeof(DateTime))
                                                    {

                                                        sql2 += theComma + "TO_CHAR(" + (String)requestData[(String)requestData["form:key"]] + ", 'MM/DD/YYYY')";
                                                    }
                                                    else if (resultA.GetFieldType(i) != typeof(String))
                                                    {

                                                        sql2 += theComma + "TO_CHAR(" + (String)requestData[(String)requestData["form:key"]] + ")";
                                                    }
                                                    else
                                                    {
                                                        sql2 += theComma + "'" + (String)requestData[(String)requestData["form:key"]] + "'";
                                                    }
                                                    if (!sql2.Equals(""))
                                                    {
                                                        theComma = " and ";
                                                    }
                                                }
                                            }
                                            resultA.Close();
                                            finalSQL = sql + sql2;
                                            theDB.execNonQuery(finalSQL);

                                            // Insert new records
                                            foreach (var subRecord in requestData)
                                            {
                                                if (subRecord.Key.IndexOf(subField + "|") == 0)
                                                {
                                                    sql = "select * from " + subTableInfo[1] + " where 1=2";
                                                    resultA = theDB.execQuery(sql);
                                                    sql = "insert into " + subTableInfo[1] + " (";
                                                    sql2 = ") values (";
                                                    theComma = "";

                                                    for (int i = 0; i < resultA.FieldCount; i++)
                                                    {
                                                        if (resultA.GetName(i).Equals(subTableInfo[2]) || resultA.GetName(i).Equals(subTableInfo[3]))
                                                        {
                                                            sql += theComma + resultA.GetName(i);
                                                            if (resultA.GetFieldType(i) == typeof(DateTime))
                                                            {
                                                                if (resultA.GetName(i).Equals(subTableInfo[3]))
                                                                {
                                                                    sql2 += theComma + "to_date('" + ((String)subRecord.Value).Replace("'", "''") + "','MM/DD/YYYY')";
                                                                }
                                                                else
                                                                {
                                                                    sql2 += theComma + "to_date('" + ((String)requestData[(String)requestData["form:key"]]).Replace("'", "''") + "','MM/DD/YYYY')";
                                                                }
                                                            }
                                                            else
                                                            {
                                                                if (resultA.GetName(i).Equals(subTableInfo[3]))
                                                                {
                                                                    sql2 += theComma + "'" + ((String)subRecord.Value).Replace("'", "''") + "'";
                                                                }
                                                                else
                                                                {
                                                                    sql2 += theComma + "'" + ((String)requestData[(String)requestData["form:key"]]).Replace("'", "''") + "'";
                                                                }
                                                            }
                                                            theComma = ", ";
                                                        }
                                                    }
                                                    resultA.Close();
                                                    finalSQL = sql + sql2 + ")";
                                                    theDB.execNonQuery(finalSQL);
                                                }
                                            }



                                        }
                                    }


                                    break;
                                case "Delete":
                                    // Dynamically build query:
                                    sql = "select * from " + (String)requestData["form:dataSource"] + " where 1=2";
                                    resultA = theDB.execQuery(sql);
                                    sql = "delete from " + (String)requestData["form:dataSource"] + " where " + (String)requestData["form:key"] + " = ";
                                    sql2 = "";
                                    theComma = "";

                                    for (int i = 0; i < resultA.FieldCount; i++)
                                    {
                                        if (((String)requestData["form:key"]).Equals(resultA.GetName(i)))
                                        {
                                            if (resultA.GetFieldType(i) == typeof(DateTime))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + (String)requestData[(String)requestData["form:key"]] + ", 'MM/DD/YYYY')";
                                            }
                                            else if (resultA.GetFieldType(i) != typeof(String))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + (String)requestData[(String)requestData["form:key"]] + ")";
                                            }
                                            else
                                            {
                                                sql2 += theComma + "'" + (String)requestData[(String)requestData["form:key"]] + "'";
                                            }
                                            if (!sql2.Equals(""))
                                            {
                                                theComma = " and ";
                                            }
                                        }
                                    }
                                    resultA.Close();

                                    finalSQL = sql + sql2;

                                    if (theDB.execNonQuery(finalSQL) == true)
                                    {
                                        response.Add("success", "true");
                                    }
                                    else
                                    {
                                        response.Add("success", "false");
                                        response.Add("message", "A SQL Error has occured.\nA member of the support staff has been notified.");
                                    }

                                    status.Add("result", "true");
                                    status.Add("message", "");
                                    responsePackage.Add("data", response);
                                    responsePackage.Add("status", status);

                                    Response.Write(rs.Serialize(responsePackage));


                                    //Response.Write(rs.Serialize(response));
                                    break;

                                case "Load":
                                    // Dynamically build query:
                                    sql = "select * from " + (String)requestData["form:dataSource"] + " where 1=2";
                                    resultA = theDB.execQuery(sql);
                                    sql = "select ";
                                    sql2 = "";
                                    theComma = "";

                                    for (int i = 0; i < resultA.FieldCount; i++)
                                    {
                                        if (requestData.ContainsKey(resultA.GetName(i)))
                                        {
                                            if (resultA.GetFieldType(i) == typeof(DateTime))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ", 'MM/DD/YYYY') " + resultA.GetName(i);
                                            }
                                            else if (resultA.GetFieldType(i) != typeof(String))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ") " + resultA.GetName(i);
                                            }
                                            else
                                            {
                                                sql2 += theComma + resultA.GetName(i);
                                            }
                                            if (!sql2.Equals(""))
                                            {
                                                theComma = ", ";
                                            }
                                        }
                                    }
                                    resultA.Close();

                                    finalSQL = sql + sql2 + " from " + (String)requestData["form:dataSource"] + " where " + (String)requestData["form:key"] + " = '" + ((String)requestData[(String)requestData["form:key"]]).Replace("'", "''") + "'";
                                    //finalSQL = "select * from (" + finalSQL + ") where ROWNUM <= 100";
                                    result = theDB.execQuery(finalSQL);

                                    if (result.Read())
                                    {
                                        for (int i = 0; i < result.FieldCount; i++)
                                        {
                                            String theValue = "";
                                            try
                                            {
                                                theValue = result.GetString(i);
                                            }
                                            catch (Exception ex) { }


                                            response.Add(result.GetName(i), theValue);
                                        }
                                    }
                                    result.Close();
                                    
                                    status.Add("result", "true");
                                    status.Add("message", "");
                                    responsePackage.Add("data", response);
                                    responsePackage.Add("status", status);

                                    Response.Write(rs.Serialize(responsePackage));


                                    //Response.Write(rs.Serialize(response));
                                    break;

                                case "LoadSelect":
                                case "Search":
                                case "Export": // This feature is not fully implemented
                                    // Do NOT USE for Export!

                                    if(action.Equals("Export")) {
                                        Response.AddHeader("Content-Disposition", "attachment; filename=export.csv");
                                        //Response.AddHeader("Content-Length", file.Length.ToString());
                                        Response.ContentType = "text/plain";
                                    }

                                    // Dynamically build query:
                                    sql = "select * from " + (String)requestData["form:dataSource"] + " where 1=2";
                                    resultA = theDB.execQuery(sql);
                                    sql = "select ";
                                    sql2 = "";
                                    sql3 = "";
                                    sql4 = " order by ";
                                    theComma = "";
                                    String exportLine = "";
                                    ArrayList returnFields = (ArrayList)requestData["return:fields"];
                                    String theComma3 = "";

                                    for (int i = 0; i < resultA.FieldCount; i++)
                                    {
                                        if (returnFields.Contains(resultA.GetName(i)) || requestData.ContainsKey(resultA.GetName(i)))
                                        {
                                    
                                            if (resultA.GetFieldType(i) == typeof(DateTime))
                                            {
                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ", 'MM/DD/YYYY') " + resultA.GetName(i);
                                                if (requestData.ContainsKey(resultA.GetName(i)))
                                                {
                                                    if (((String)requestData[resultA.GetName(i)]) == "null")
                                                    {
                                                        sql3 += theComma3 + resultA.GetName(i) + " is null";
                                                    } else if (((String)requestData[resultA.GetName(i)]) != "")
                                                    {
                                                        sql3 += theComma3 + resultA.GetName(i) + " = to_date('" + ((String)requestData[resultA.GetName(i)]).Replace("'", "''") + "','MM/DD/YYYY')";
                                                    }
                                                }
                                            }
                                            else if (resultA.GetFieldType(i) != typeof(String))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ") " + resultA.GetName(i);
                                                if (requestData.ContainsKey(resultA.GetName(i)))
                                                {
                                                    if (((String)requestData[resultA.GetName(i)]) != "")
                                                    {
                                                        sql3 += theComma3 + resultA.GetName(i) + " = '" + ((String)requestData[resultA.GetName(i)]).Replace("'", "''") + "'";
                                                    }
                                                }
                                            }
                                            else
                                            {
                                                sql2 += theComma + resultA.GetName(i);
                                                if (requestData.ContainsKey(resultA.GetName(i)))
                                                {
                                                    if (((String)requestData[resultA.GetName(i)]) != "")
                                                    {
                                                        sql3 += theComma3 + resultA.GetName(i) + " like'%" + ((String)requestData[resultA.GetName(i)]).Replace("'", "''") + "%'";
                                                    }
                                                }
                                            }
                                            if (!sql2.Equals(""))
                                            {
                                                theComma = ", ";
                                            }
                                            if (!sql3.Equals(""))
                                            {
                                                theComma3 = " and ";
                                            }
                                        }
                                    }
                                    resultA.Close();

                                    finalSQL = sql + sql2 + " from " + (String)requestData["form:dataSource"];
                                    if (sql3 != "")
                                    {
                                        finalSQL += " where " + sql3;
                                    }

                                    //sql = "select CONTACTID, FIRSTNAME, LASTNAME, ADDR1, ADDR2, CITY, STATE, ZIP, PHONE from CONTACT where FIRSTNAME like'%" + ((String)requestData["FIRSTNAME"]).Replace("'", "''") + "%' and LASTNAME like '%" + ((String)requestData["LASTNAME"]).Replace("'", "''") + "%'";
                                    finalSQL = "select * from (" + finalSQL + ")"; // where ROWNUM <= 500";
                                    result = theDB.execQuery(finalSQL);

                                    if (result != null)
                                    {
                                        while (result.Read())
                                        {
                                            response = new Dictionary<String, String>();
                                            String comma = "";
                                            exportLine = "";
                                            for (int i = 0; i < result.FieldCount; i++)
                                            {
                                                String theValue = "";
                                                try
                                                {
                                                    theValue = result.GetString(i);
                                                }
                                                catch (Exception ex) { }

                                                if(action.Equals("Export")) {
                                                    exportLine += comma + "\"" + theValue.Replace("\"", "\"\"") + "\"";
                                                    comma = ",";
                                                } else {
                                                    response.Add(result.GetName(i), theValue);
                                                }
                                            }
                                            if(action.Equals("Export")) {
                                                Response.Write(exportLine + "\n");
                                            } else {
                                                responses.Add(response);
                                            }
                                       }
                                        result.Close();
                                        if(!action.Equals("Export")) {
                                            responses.Sort(delegate(Dictionary<String, String> d1, Dictionary<String, String> d2) { return d1[(String)((ArrayList)requestData["return:fields"])[1]].CompareTo(d2[(String)((ArrayList)requestData["return:fields"])[1]]); });
                                            status.Add("result", "true");
                                            status.Add("message", "");

                                        }
                                    }
                                    else
                                    {
                                        //response = new Dictionary<String, String>();

                                        status.Add("result", "false");
                                        status.Add("message", "A SQL Error has occured.\nA member of the support staff has been notified.");


                                        //response.Add("success", "false");
                                        //response.Add("message", "A SQL Error has occured.\nA member of the support staff has been notified.");
                                        //responses.Add(response);
                                    }

                                    if(!action.Equals("Export")) {
                                        rs.MaxJsonLength = rs.MaxJsonLength * 2;

                                        responsePackage.Add("data", responses);
                                        responsePackage.Add("status", status);

                                        Response.Write(rs.Serialize(responsePackage));


                                        //Response.Write(rs.Serialize(responses));
                                    
                                    }
                                    break;

                                case "subsearch":

                                    // Dynamically build query:
                                    sql = "select * from " + (String)requestData["sub:dataSource"] + " where 1=2";
                                    resultA = theDB.execQuery(sql);
                                    sql = "select ";
                                    sql2 = "";
                                    sql3 = "";
                                    theComma = "";
                                    returnFields = (ArrayList)requestData["return:fields"];
                                    theComma3 = "";

                                    for (int i = 0; i < resultA.FieldCount; i++)
                                    {
                                        if (returnFields.Contains(resultA.GetName(i)) || requestData.ContainsKey(resultA.GetName(i)))
                                        {
                                            if (resultA.GetFieldType(i) == typeof(DateTime))
                                            {
                                                sql2 += theComma + "TO_CHAR(sec." + resultA.GetName(i) + ", 'MM/DD/YYYY') sec." + resultA.GetName(i);
                                            }
                                            else if (resultA.GetFieldType(i) != typeof(String))
                                            {

                                                sql2 += theComma + "TO_CHAR(sec." + resultA.GetName(i) + ") sec." + resultA.GetName(i);
                                            }
                                            else
                                            {
                                                sql2 += theComma + "sec." + resultA.GetName(i);
                                            }
                                            if (!sql2.Equals(""))
                                            {
                                                theComma = ", ";
                                            }
                                            if (!sql3.Equals(""))
                                            {
                                                theComma3 = " and ";
                                            }
                                        }
                                    }
                                    resultA.Close();
                                    // Need to change this line to include different columns for the join (they could be called different things on different tables).
                                    // All of this needs to be validated against the table just like the return columns.
                                    finalSQL = sql + sql2 + " from " + (String)requestData["sub:dataSource"] + " sec inner join " + (String)requestData["sub:parentDataSource"] + " pri on " + "sec." + (String)requestData["sub:childKey"] + " = pri." + (String)requestData["key"] + " where " + "pri." + (String)requestData["sub:parentReference"] + " = '" + (String)requestData["sub:Key"] + "'";
                                    /*
                                    if (sql3 != "")
                                    {
                                        finalSQL += " where " + sql3;
                                    }
                                    */

                                    //sql = "select CONTACTID, FIRSTNAME, LASTNAME, ADDR1, ADDR2, CITY, STATE, ZIP, PHONE from CONTACT where FIRSTNAME like'%" + ((String)requestData["FIRSTNAME"]).Replace("'", "''") + "%' and LASTNAME like '%" + ((String)requestData["LASTNAME"]).Replace("'", "''") + "%'";
                                    //finalSQL = "select * from (" + finalSQL + ") where ROWNUM <= 100";
                                    result = theDB.execQuery(finalSQL);

                                    if (result != null)
                                    {
                                        while (result.Read())
                                        {
                                            response = new Dictionary<String, String>();

                                            for (int i = 0; i < result.FieldCount; i++)
                                            {
                                                String theValue = "";
                                                try
                                                {
                                                    theValue = result.GetString(i);
                                                }
                                                catch (Exception ex) { }


                                                response.Add(result.GetName(i), theValue);
                                            }
                                            responses.Add(response);
                                        }
                                        result.Close();
                                        responses.Sort(delegate(Dictionary<String, String> d1, Dictionary<String, String> d2) { return d1[(String)((ArrayList)requestData["return:fields"])[1]].CompareTo(d2[(String)((ArrayList)requestData["return:fields"])[1]]); });
                                        status.Add("result", "true");
                                        status.Add("message", "");

                                    }
                                    else
                                    {
                                        //response = new Dictionary<String, String>();

                                        status.Add("result", "false");
                                        status.Add("message", "A SQL Error has occured.\nA member of the support staff has been notified.");

                                        //response.Add("success", "false");
                                        //response.Add("message", "A SQL Error has occured.\nA member of the support staff has been notified.");
                                        //responses.Add(response);
                                    }

                                    //status.Add("result", "true");
                                    //status.Add("message", "");
                                    responsePackage.Add("data", responses);
                                    responsePackage.Add("status", status);

                                    Response.Write(rs.Serialize(responsePackage));


                                    //Response.Write(rs.Serialize(responses));
                                    break;

                                case "xxxxxLoadSelect":
                                    // Dynamically build query:
                                    sql = "select * from " + request + " where 1=2";
                                    resultA = theDB.execQuery(sql);
                                    sql = "select ";
                                    sql2 = "";
                                    theComma = "";

                                    for (int i = 0; i < resultA.FieldCount; i++)
                                    {
                                        if ((String)requestData["key"] == resultA.GetName(i) || (String)requestData["value"] == resultA.GetName(i))
                                        {
                                            if (resultA.GetFieldType(i) == typeof(DateTime))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ", 'MM/DD/YYYY') " + resultA.GetName(i);
                                            }
                                            else if (resultA.GetFieldType(i) != typeof(String))
                                            {

                                                sql2 += theComma + "TO_CHAR(" + resultA.GetName(i) + ") " + resultA.GetName(i);
                                            }
                                            else
                                            {
                                                sql2 += theComma + resultA.GetName(i);
                                            }

                                            if ((String)requestData["key"] == resultA.GetName(i))
                                            {
                                                sql2 += " KEY ";
                                            }
                                            else if ((String)requestData["value"] == resultA.GetName(i))
                                            {
                                                sql2 += " VALUE ";
                                            }
                                            if (!sql2.Equals(""))
                                            {
                                                theComma = ", ";
                                            }
                                        }
                                    }
                                    resultA.Close();

                                    finalSQL = sql + sql2 + " from " + request;
                                    if ((String)requestData["filter"] != "")
                                    {
                                        finalSQL += " where " + ((String)requestData["filter"]).Replace("'", "''") + "'";
                                    }
                                    //finalSQL = "select * from (" + finalSQL + ") where ROWNUM <= 100";
                                    result = theDB.execQuery(finalSQL);

                                    if (result != null)
                                    {
                                        while (result.Read())
                                        {
                                            response = new Dictionary<String, String>();
                                            for (int i = 0; i < result.FieldCount; i++)
                                            {
                                                String theValue = "";
                                                try
                                                {
                                                    theValue = result.GetString(i);
                                                }
                                                catch (Exception ex) { }


                                                response.Add(result.GetName(i), theValue);
                                            }
                                            responses.Add(response);
                                        }
                                        result.Close();
                                        responses.Sort(delegate(Dictionary<String, String> d1, Dictionary<String, String> d2) { return d1["VALUE"].CompareTo(d2["VALUE"]); });
                                    }
                                    result.Close();

                                    status.Add("result", "true");
                                    status.Add("message", "");
                                    responsePackage.Add("data", responses);
                                    responsePackage.Add("status", status);

                                    Response.Write(rs.Serialize(responsePackage));
                                    
                                    
                                    //Response.Write(rs.Serialize(responses));
                                    break;
                            }
                            theDB.CloseConnection();
                        }

                        break;
                }
                
            }
            catch (Exception ex)
            {

                status.Add("result", "false");
                status.Add("message", ex.Message + "\n" + ex.StackTrace);
                responsePackage.Add("data", "");
                responsePackage.Add("status", status);

                Response.Write(rs.Serialize(responsePackage));


                //Response.Write(ex.Message + "\n" + ex.StackTrace);
            }
        }
    }
}