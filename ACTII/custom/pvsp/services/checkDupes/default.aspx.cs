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
using System.Net;
using System.Text;
using System.Security.Cryptography;

using ACTII.WebAppToolkit.services;

namespace ACTII.custom.pvsp.services.checkDupes
{
    public partial class _default : System.Web.UI.Page
    {
        protected String SHA1Encrypt(String phrase) { UTF8Encoding encoder = new UTF8Encoding(); SHA1CryptoServiceProvider sha1Hasher = new SHA1CryptoServiceProvider(); byte[] hashedDataBytes = sha1Hasher.ComputeHash(encoder.GetBytes(phrase)); return ByteArrayToString(hashedDataBytes); }

        protected String ByteArrayToString(byte[] inputArray) { StringBuilder output = new StringBuilder(""); for (int i = 0; i < inputArray.Length; i++) { output.Append(inputArray[i].ToString("X2")); } return output.ToString(); }

        protected void Page_Load(object sender, EventArgs e)
        {
            Dictionary<String, Object> responsePackage = new Dictionary<String, Object>();
            List<Dictionary<String, String>> responses = new List<Dictionary<String, String>>();
            Dictionary<String, String> response = new Dictionary<String, String>();
            Dictionary<String, String> status = new Dictionary<String, String>();
            JavaScriptSerializer rs = new JavaScriptSerializer();

            try
            {

                Stream instream = Page.Request.InputStream;
                BinaryReader br = new BinaryReader(instream,
                System.Text.Encoding.UTF8);
                byte[] bytes = br.ReadBytes((int)instream.Length);

                System.Text.Encoding enc = System.Text.Encoding.ASCII;
                String superProject = enc.GetString(bytes);
                DataConnection theDB = new DataConnection();

                Dictionary<String, Object> jsonRequest = new Dictionary<String, Object>();
                jsonRequest = rs.Deserialize<Dictionary<String, Object>>(enc.GetString(bytes));

                String request = (String)jsonRequest["request"];
                String action = (String)jsonRequest["action"];
                //String connectionType = (String)jsonRequest["connectionType"];
                Dictionary<String, Object> requestData = (Dictionary<String, Object>)jsonRequest["requestData"];



                String userName = Request.ServerVariables["AUTH_USER"];

                //Security securityA = new Security();
                //Boolean ok = securityA.CheckGroup(new String[] {"PPL\\ISD-DL-GIS","aaa"});

                // Allow for case insensitive search.
                theDB.execNonQuery("alter session set NLS_SORT=BINARY_CI");
                theDB.execNonQuery("alter session set NLS_COMP=LINGUISTIC");

                OracleDataReader resultA = null;

                if (theDB.OpenConnection("PVEU"))
                {

                    // Dynamically build query:
                    String sql = "select count(*) from P3E_ACT11_SPNUMBER where SP_NUMBER = '" + requestData["superProject"] + "' and DELETE_DATE is null";
                    resultA = theDB.execQuery(sql);
                    Boolean alreadyExists = false;

                    if (resultA != null)
                    {
                        while (resultA.Read())
                        {
                            if (resultA.GetInt32(0) > 0)
                            {
                                alreadyExists = true;
                            }
                        }
                        resultA.Close();
                    }
                    theDB.CloseConnection();

                    response = new Dictionary<String, String>();
                    if (alreadyExists)
                    {
                        response["exists"] = "true";
                        //Response.Write("true");
                    }
                    else
                    {
                        response["exists"] = "false";
                        //Response.Write("false");
                    }
                    responses.Add(response);
                }

                status.Add("result", "true");
                status.Add("message", "");
                responsePackage.Add("data", responses);
                responsePackage.Add("status", status);

                Response.Write(rs.Serialize(responsePackage));

            }
            catch (Exception ex)
            {
                status.Add("result", "false");
                status.Add("message", ex.Message + "\n" + ex.StackTrace);

                Response.Write(rs.Serialize(responsePackage));
                //Response.Write(ex.Message + "\n" + ex.StackTrace);
            }
        }
    }
}