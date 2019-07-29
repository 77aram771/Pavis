var br = "\n";
var req1 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"import\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>Falsches Passwort</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <type_of_instruction>N</type_of_instruction>" + br +
    "      <order_kind/>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "      <catchword>Pulverbeschichtungsanlage</catchword>" + br +
    "      <country_id>DE</country_id>" + br +
    "      <ip_type>PA</ip_type>" + br +
    "      <granted>J</granted>" + br +
    "      <ep_patent>J</ep_patent>" + br +
    "      <licenses>N</licenses>" + br +
    "      <small_entity>N</small_entity>" + br +
    "      <multi_designs>N</multi_designs>" + br +
    "      <application_date>20010119</application_date>" + br +
    "      <application_number>01911504.7</application_number>" + br +
    "      <grant_date>20051221</grant_date>" + br +
    "      <registration_number>50108458.4</registration_number>" + br +
    "      <ep_registration_number>1248683</ep_registration_number>" + br +
    "      <publication_date/>" + br +
    "      <publication_of_filing/>" + br +
    "      <publication_of_grant/>" + br +
    "      <examination_request_date/>" + br +
    "      <patent_term_adjustment/>" + br +
    "      <registration_date_us/>" + br +
    "      <priority_date/>" + br +
    "      <priority_number/>" + br +
    "      <priority_country_id/>" + br +
    "      <owner_name>Gerd Wurster</owner_name>" + br +
    "      <number_of_claims/>" + br +
    "      <number_of_designs/>" + br +
    "      <type_of_order>E</type_of_order>" + br +
    "      <stand_order_start/>" + br +
    "      <renewal_date/>" + br +
    "      <sub_customer/>" + br +
    "      <sub_reference/>" + br +
    "      <cost_account/>" + br +
    "      <debit_id/>" + br +
    "      <names/>" + br +
    "      <countries/>" + br +
    "      <classes/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req2 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"import\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <type_of_instruction>N</type_of_instruction>" + br +
    "      <order_kind/>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "      <catchword>Pulverbeschichtungsanlage</catchword>" + br +
    "      <country_id>DE</country_id>" + br +
    "      <ip_type>PA</ip_type>" + br +
    "      <granted>J</granted>" + br +
    "      <ep_patent>J</ep_patent>" + br +
    "      <licenses>N</licenses>" + br +
    "      <small_entity>N</small_entity>" + br +
    "      <multi_designs>N</multi_designs>" + br +
    "      <application_date/>" + br +
    "      <application_number>01911504.7</application_number>" + br +
    "      <grant_date>20051221</grant_date>" + br +
    "      <registration_number>50108458.4</registration_number>" + br +
    "      <ep_registration_number>1248683</ep_registration_number>" + br +
    "      <publication_date/>" + br +
    "      <publication_of_filing/>" + br +
    "      <publication_of_grant/>" + br +
    "      <examination_request_date/>" + br +
    "      <patent_term_adjustment/>" + br +
    "      <registration_date_us/>" + br +
    "      <priority_date/>" + br +
    "      <priority_number/>" + br +
    "      <priority_country_id/>" + br +
    "      <owner_name>Gerd Wurster</owner_name>" + br +
    "      <number_of_claims/>" + br +
    "      <number_of_designs/>" + br +
    "      <type_of_order>E</type_of_order>" + br +
    "      <stand_order_start/>" + br +
    "      <renewal_date/>" + br +
    "      <family_id/>" + br +
    "      <sub_customer/>" + br +
    "      <sub_reference/>" + br +
    "      <cost_account/>" + br +
    "      <debit_id/>" + br +
    "      <names/>" + br +
    "      <countries/>" + br +
    "      <classes/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>"

var req3 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"import\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <type_of_instruction>N</type_of_instruction>" + br +
    "      <order_kind/>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "      <catchword>Pulverbeschichtungsanlage</catchword>" + br +
    "      <country_id>DE</country_id>" + br +
    "      <ip_type>PA</ip_type>" + br +
    "      <granted>J</granted>" + br +
    "      <ep_patent>J</ep_patent>" + br +
    "      <licenses>N</licenses>" + br +
    "      <small_entity>N</small_entity>" + br +
    "      <multi_designs>N</multi_designs>" + br +
    "      <application_date>20010119</application_date>" + br +
    "      <application_number>01911504.7</application_number>" + br +
    "      <grant_date>20051221</grant_date>" + br +
    "      <registration_number>50108458.4</registration_number>" + br +
    "      <ep_registration_number>1248683</ep_registration_number>" + br +
    "      <publication_date/>" + br +
    "      <publication_of_filing/>" + br +
    "      <publication_of_grant/>" + br +
    "      <examination_request_date/>" + br +
    "      <patent_term_adjustment/>" + br +
    "      <registration_date_us/>" + br +
    "      <priority_date/>" + br +
    "      <priority_number/>" + br +
    "      <priority_country_id/>" + br +
    "      <owner_name>Gerd Wurster</owner_name>" + br +
    "      <number_of_claims/>" + br +
    "      <number_of_designs/>" + br +
    "      <type_of_order>D</type_of_order>" + br +
    "      <stand_order_start/>" + br +
    "      <renewal_date/>" + br +
    "      <family_id/>" + br +
    "      <sub_customer/>" + br +
    "      <sub_reference/>" + br +
    "      <cost_account/>" + br +
    "      <debit_id/>" + br +
    "      <names/>" + br +
    "      <countries/>" + br +
    "      <classes/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req4 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"import\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <type_of_instruction>Z</type_of_instruction>" + br +
    "      <order_kind/>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "      <catchword>Pulverbeschichtungsanlage</catchword>" + br +
    "      <country_id>DE</country_id>" + br +
    "      <ip_type>PA</ip_type>" + br +
    "      <granted>J</granted>" + br +
    "      <ep_patent>J</ep_patent>" + br +
    "      <licenses>N</licenses>" + br +
    "      <small_entity>N</small_entity>" + br +
    "      <multi_designs>N</multi_designs>" + br +
    "      <application_date>20010119</application_date>" + br +
    "      <application_number>01911504.7</application_number>" + br +
    "      <grant_date>20051221</grant_date>" + br +
    "      <registration_number>50108458.4</registration_number>" + br +
    "      <ep_registration_number>1248683</ep_registration_number>" + br +
    "      <publication_date/>" + br +
    "      <publication_of_filing/>" + br +
    "      <publication_of_grant/>" + br +
    "      <examination_request_date/>" + br +
    "      <patent_term_adjustment/>" + br +
    "      <registration_date_us/>" + br +
    "      <priority_date/>" + br +
    "      <priority_number/>" + br +
    "      <priority_country_id/>" + br +
    "      <owner_name>Gerd Wurster</owner_name>" + br +
    "      <number_of_claims/>" + br +
    "      <number_of_designs/>" + br +
    "      <type_of_order>E</type_of_order>" + br +
    "      <stand_order_start/>" + br +
    "      <renewal_date/>" + br +
    "      <family_id/>" + br +
    "      <sub_customer/>" + br +
    "      <sub_reference/>" + br +
    "      <cost_account/>" + br +
    "      <debit_id/>" + br +
    "      <names/>" + br +
    "      <countries/>" + br +
    "      <classes/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req5 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"preview\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req6 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"budget\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req7 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"history\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <reference>2279/30/16IT</reference>" + br +
    "      <id_code/>" + br +
    "      <include_history>J</include_history>" + br +
    "      <include_receipt>N</include_receipt>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req8 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"history\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <reference>2279/30/16IT</reference>" + br +
    "      <id_code/>" + br +
    "      <include_history>J</include_history>" + br +
    "      <include_receipt>J</include_receipt>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req9 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"receipt\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "      <annuity>13</annuity>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req10 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"status\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var req11 = "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>" + br +
    "<ip_request type=\"cancellation\">" + br +
    "  <cust_id>9999</cust_id>" + br +
    "  <password>WebConnect@Pavis2014</password>" + br +
    "  <ip_data>" + br +
    "    <ip_row>" + br +
    "      <reference>28111-EPDE</reference>" + br +
    "      <id_code/>" + br +
    "    </ip_row>" + br +
    "  </ip_data>" + br +
    "</ip_request>";

var first = "";

var name_row = "";