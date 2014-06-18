using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;
using System.Text;
using System.Security.Principal;

namespace ACTII.WebAppToolkit.services
{
    public class Security
    {
        public Boolean CheckGroup(ArrayList theGroups)
        {
            //ArrayList groups = new ArrayList();
            foreach (System.Security.Principal.IdentityReference group in
                System.Web.HttpContext.Current.Request.LogonUserIdentity.Groups)
            {
                String test = group.Translate(typeof(System.Security.Principal.NTAccount)).ToString();
                //WindowsIdentity.GetCurrent()

                

                


               

                //System.Web.HttpContext.Current.User.Identity

                

                foreach (String theGroup in theGroups)
                {
                    if (group.Translate(typeof(System.Security.Principal.NTAccount)).ToString().Equals(theGroup))
                    {
                        return true;
                    }
                }
                //groups.Add(group.Translate(typeof
                //    (System.Security.Principal.NTAccount)).ToString());
            }
            return false;
        }

	    // VERY basic encryption to follow PPL password storage.
	    public String encrypt(String key, String value) {
            ASCIIEncoding encoding = new ASCIIEncoding();

		    byte[] valueBytes = encoding.GetBytes(value);
		    byte[] keyBytes = encoding.GetBytes(key);
		    byte[] resultBytes = new byte[valueBytes.Length];
		    int keyPosition = 0;
		
		    for(int i=0; i < valueBytes.Length; i++) {
			    if(keyPosition == i) {
				    keyPosition = 0;
			    }
			    resultBytes[i] = (byte)(valueBytes[i] ^ keyBytes[keyPosition]);
		    }
		
		    return Convert.ToBase64String(resultBytes);
	    }
	
	    public String decrypt(String key, String value) {
            ASCIIEncoding encoding = new ASCIIEncoding();

		    byte[] valueBytes = Convert.FromBase64String(value);
		    byte[] keyBytes = encoding.GetBytes(key);
		    byte[] resultBytes = new byte[valueBytes.Length];
		    int keyPosition = 0;
		
		    for(int i=0; i < valueBytes.Length; i++) {
			    if(keyPosition == i) {
				    keyPosition = 0;
			    }
			    resultBytes[i] = (byte)(valueBytes[i] ^ keyBytes[keyPosition]);
		    }
		
		    return encoding.GetString(resultBytes);
	    }
        
        /*
        public Boolean CheckGroup(ArrayList theGroups)
        {
            foreach (String theGroup in theGroups)
            {


                if (System.Web.Security.Roles.IsUserInRole(MyBase.Page.User.Identity.Name, theGroup))
                {
                    return true;
                }
            }
            return false;
        }
        */

    }
}