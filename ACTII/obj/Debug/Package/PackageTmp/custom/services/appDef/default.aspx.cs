using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;

using ACTII.WebAppToolkit.services;

namespace ACTII.custom.services.appDef
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            Dictionary<String, String> appDef = new Dictionary<String, String>();

            DataConnection actDB = new DataConnection();

            if (actDB.OpenConnection("DATABASE"))
            {
                appDef.Add("Name", "ACT IIb");
                appDef.Add("Description", "Welcome to ACTII<br />Community and Economic Development's<br />Contact Management System");
                appDef.Add("Footer", "&copy; 2011 PPL Corporation. All Rights Reserved.");

                JavaScriptSerializer rs = new JavaScriptSerializer();
                Response.Write(rs.Serialize(appDef));
            }

            actDB.CloseConnection();

        }

    
    }



}