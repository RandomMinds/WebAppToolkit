using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.OracleClient;

namespace ACTII.WebAppToolkit.services
{
    public class DataConnection
    {
        private OracleConnection conn;

        public Dictionary<String, String> getSOAPCredentials(String connectionEntry)
        {
            Dictionary<String, String> credentials = new Dictionary<String, String>();

            credentials = getCredentials(connectionEntry);

            return credentials;
        }

        private Dictionary<String, String> getCredentials(String connectionEntry)
        {
            string connectionString = "";

            Dictionary<String, String> credentials = new Dictionary<String, String>();

            Security security = new Security();

            System.Configuration.Configuration rootWebConfig =
                            System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("/");



            connectionString = System.Configuration.ConfigurationManager.ConnectionStrings[connectionEntry + "D"].ConnectionString;

            string env = System.Environment.GetEnvironmentVariable("PPL.Env");
            //Determine Credentials
            switch (System.Environment.GetEnvironmentVariable("PPL.Env"))
            {
                case "DEV":
                    connectionString = System.Configuration.ConfigurationManager.ConnectionStrings[connectionEntry + "D"].ConnectionString;
                    break;
                case "PT":
                    connectionString = System.Configuration.ConfigurationManager.ConnectionStrings[connectionEntry + "T"].ConnectionString;
                    break;
                case "PRD":
                    connectionString = System.Configuration.ConfigurationManager.ConnectionStrings[connectionEntry + "P"].ConnectionString;
                    break;
            }

            //Decrypt Password
            String[] connectionPart = connectionString.Split(';');
            int pswdPart = 0;
            String tmpEPSWD = null;
            String tmpPSWD = null;
            String tmpUID = null;
            String tmpServer = null;

            foreach (String part in connectionPart)
            {
                if (part.IndexOf("Password") > -1)
                {
                    pswdPart = part.IndexOf('=');
                    tmpEPSWD = part.Substring(pswdPart + 1).Trim();
                }
                else if (part.IndexOf("User Id") > -1)
                {
                    pswdPart = part.IndexOf('=');
                    tmpUID = part.Substring(pswdPart + 1).Trim();
                }
                else if (part.IndexOf("data source") > -1)
                {
                    pswdPart = part.IndexOf('=');
                    tmpServer = part.Substring(pswdPart + 1).Trim();
                }

            }

            tmpPSWD = security.decrypt(tmpUID, tmpEPSWD);
            connectionString = connectionString.Replace(tmpEPSWD, tmpPSWD);

            credentials.Add("connectionString", connectionString);
            credentials.Add("userid", tmpUID);
            credentials.Add("password", tmpPSWD);
            credentials.Add("server", tmpServer);

            return credentials;
        }

        public void CloseConnection()
        {
            conn.Close();
        }

        public bool OpenConnection(String connectionEntry)
        {
            try
            {
                string connectionString = "";

                connectionString = getCredentials(connectionEntry)["connectionString"];

                //instance new oracle connection
                conn = new OracleConnection(connectionString);
                //open the connection
                conn.Open();
                return true;
            }
            catch (Exception ex)
            {
                //Response.Write(ex.Message + "\n" + ex.StackTrace);
                //return ex.Message;
                return false;
            }
        }

        public OracleDataReader execQuery(string sql)
        {

            OracleCommand cmd = new OracleCommand(sql);
            OracleDataReader reader = null;

            cmd.Connection = conn;
            cmd.CommandType = CommandType.Text;

            try
            {

                reader = cmd.ExecuteReader();
                
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                cmd.Dispose();
            }

            return reader;
        }

        public bool execNonQuery(string sql)
        {

            OracleCommand command = new OracleCommand(sql);
            command.Connection = conn;
            try
            {
                //a non-query command doesn’t need any reader, all you have to do is execute them !
                command.ExecuteNonQuery();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }

        }
    }
}