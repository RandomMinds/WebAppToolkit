﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

using System.Diagnostics;


	

namespace ACTII
{
    public class Global : System.Web.HttpApplication
    {

        void Application_Start(object sender, EventArgs e)
        {
            // Code that runs on application startup

        }

        void Application_End(object sender, EventArgs e)
        {
            //  Code that runs on application shutdown

        }

        void Application_Error(object sender, EventArgs e)
        {
            /*
            Exception objErr = Server.GetLastError().GetBaseException();
            string err = "Error Caught in Application_Error event\n" +
                    "Error in: " + Request.Url.ToString() +
                    "\nError Message:" + objErr.Message.ToString() +
                    "\nStack Trace:" + objErr.StackTrace.ToString();
            EventLog.WriteEntry("Sample_WebApp", err, EventLogEntryType.Error);
            Server.ClearError();
            //additional actions...
            */
        }

        void Session_Start(object sender, EventArgs e)
        {
            // Code that runs when a new session is started

        }

        void Session_End(object sender, EventArgs e)
        {
            // Code that runs when a session ends. 
            // Note: The Session_End event is raised only when the sessionstate mode
            // is set to InProc in the Web.config file. If session mode is set to StateServer 
            // or SQLServer, the event is not raised.

        }

    }
}
