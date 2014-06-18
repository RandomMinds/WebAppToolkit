<?php

// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: *');

// Additional headers which may be sent along with the CORS request
// The X-Requested-With header allows jQuery requests to go through
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 3628800');

// Exit early so the page isn't fully loaded for options requests
if (strtolower($_SERVER['REQUEST_METHOD']) == 'options') {
    exit();
}

// If raw post data, this could be from IE8 XDomainRequest
// Only use this if you want to populate $_POST in all instances
if (isset($HTTP_RAW_POST_DATA)) {
    $data = explode('&', $HTTP_RAW_POST_DATA);
    foreach ($data as $val) {
        if (!empty($val)) {
            list($key, $value) = explode('=', $val);   
            $_POST[$key] = urldecode($value);
        }
    }
}

?>
[  
  {  
    "ID":"1", 
    "parentID":"", 
    "name":"Christmas List" 
  }, 
  {  
    "ID":"2", 
    "parentID":"", 
    "name":"MHerron" 
  }, 
  {  
    "ID":"3", 
    "parentID":"2", 
    "name":"Christmas Cards" 
  }, 
  {  
    "ID":"4", 
    "parentID":"2", 
    "name":"Luserne County" 
  }, 
  {  
    "ID":"5", 
    "parentID":"2", 
    "name":"Partners in Education" 
  }, 
  {  
    "ID":"6", 
    "parentID":"5", 
    "name":"Board of Directors" 
  }, 
  {  
    "ID":"7", 
    "parentID":"5", 
    "name":"Executive Committee" 
  }, 
  {  
    "ID":"8", 
    "parentID":"2", 
    "name":"Schuylkill County" 
  } 
]