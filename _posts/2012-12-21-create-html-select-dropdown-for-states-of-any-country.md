---
layout: post
title: "Create HTML select dropdown for states of any country"
description: "Generate HTML select dropdown for states of any country"
category: utility
tags: [html, utility, tool]
---
{% include JB/setup %}

Every now and then we need to make web forms where we need to include address / location fields like country, state or city. For most of the cases we can easily use a textbox and if we are not too concerned about the sanity of the data the texbox method works out very well. But at many times it makes sense to have a dropdown field for country or state so that the quality of data can be maintained. Sanitized and consistent data is easy to maintain and work on. 

Most of the times when you require such a dropdown you can easily search the relevant data on Google and with some work find the relevant data. If you are lucky you will find proper HTML code for the data otherwise you can always work with a plain text list. To reduce this process of finding and converting I have created this micro tool that will easily generate the code for HTML select for the states of any country in the world. It will also generate for you a dropdown list of all the countries in the world. This tool makes use of the 
<a href="http://developer.yahoo.com/geo/geoplanet/guide/" target="_blank">Geoplanet</a> api provided by Yahoo.


<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js" >
</script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min.js" >
</script>
<script type="text/javascript" src="/assets/files/js/states.js" >
</script>
    
<hr>
<br>    
<select id="countries">
<option value='23424739'>Afghanistan</option>
<option value='12577865'>Aland Islands</option>
<option value='23424742'>Albania</option>
<option value='23424740'>Algeria</option>
<option value='23424746'>American Samoa</option>
<option value='23424744'>Andorra</option>
<option value='23424745'>Angola</option>
<option value='23424751'>Anguilla</option>
<option value='28289409'>Antarctica</option>
<option value='23424737'>Antigua and Barbuda</option>
<option value='23424747'>Argentina</option>
<option value='23424743'>Armenia</option>
<option value='23424736'>Aruba</option>
<option value='23424748'>Australia</option>
<option value='23424750'>Austria</option>
<option value='23424741'>Azerbaijan</option>
<option value='23424753'>Bahrain</option>
<option value='23424759'>Bangladesh</option>
<option value='23424754'>Barbados</option>
<option value='23424765'>Belarus</option>
<option value='23424757'>Belgium</option>
<option value='23424760'>Belize</option>
<option value='23424764'>Benin</option>
<option value='23424756'>Bermuda</option>
<option value='23424770'>Bhutan</option>
<option value='23424762'>Bolivia</option>
<option value='23424761'>Bosnia and Herzegovina</option>
<option value='23424755'>Botswana</option>
<option value='28289410'>Bouvet Island</option>
<option value='23424768'>Brazil</option>
<option value='23424849'>British Indian Ocean Territory</option>
<option value='23424983'>British Virgin Islands</option>
<option value='23424773'>Brunei</option>
<option value='23424771'>Bulgaria</option>
<option value='23424978'>Burkina Faso</option>
<option value='23424774'>Burundi</option>
<option value='23424776'>Cambodia</option>
<option value='23424785'>Cameroon</option>
<option value='23424775'>Canada</option>
<option value='23424794'>Cape Verde</option>
<option value='56558056'>Caribbean Netherlands</option>
<option value='23424783'>Cayman Islands</option>
<option value='23424792'>Central African Republic</option>
<option value='23424782'>Chile</option>
<option value='23424781'>China</option>
<option value='23424869'>Christmas Island</option>
<option value='23424784'>Cocos (Keeling) Islands</option>
<option value='23424787'>Colombia</option>
<option value='23424786'>Comoros</option>
<option value='23424779'>Congo</option>
<option value='23424795'>Cook Islands</option>
<option value='23424791'>Costa Rica</option>
<option value='23424843'>Croatia</option>
<option value='23424793'>Cuba</option>
<option value='56558057'>Curacao</option>
<option value='26812346'>Cyprus</option>
<option value='23424810'>Czech Republic</option>
<option value='23424780'>Democratic Republic of Congo</option>
<option value='23424796'>Denmark</option>
<option value='23424928'>Disputed Territory</option>
<option value='23424797'>Djibouti</option>
<option value='23424798'>Dominica</option>
<option value='23424800'>Dominican Republic</option>
<option value='23424968'>East Timor</option>
<option value='23424801'>Ecuador</option>
<option value='23424802'>Egypt</option>
<option value='23424807'>El Salvador</option>
<option value='23424804'>Equatorial Guinea</option>
<option value='23424806'>Eritrea</option>
<option value='23424805'>Estonia</option>
<option value='23424808'>Ethiopia</option>
<option value='23424814'>Falkland Islands</option>
<option value='23424816'>Faroe Islands</option>
<option value='23424815'>Federated States of Micronesia</option>
<option value='23424813'>Fiji</option>
<option value='23424812'>Finland</option>
<option value='23424819'>France</option>
<option value='23424811'>French Guiana</option>
<option value='23424817'>French Polynesia</option>
<option value='23424822'>Gabon</option>
<option value='23424823'>Georgia</option>
<option value='23424829'>Germany</option>
<option value='23424824'>Ghana</option>
<option value='23424825'>Gibraltar</option>
<option value='23424833'>Greece</option>
<option value='23424828'>Greenland</option>
<option value='23424826'>Grenada</option>
<option value='23424831'>Guadeloupe</option>
<option value='23424832'>Guam</option>
<option value='23424834'>Guatemala</option>
<option value='23424835'>Guinea</option>
<option value='23424929'>Guinea-Bissau</option>
<option value='23424836'>Guyana</option>
<option value='23424839'>Haiti</option>
<option value='28289411'>Heard Island and McDonald Islands</option>
<option value='23424841'>Honduras</option>
<option value='24865698'>Hong Kong</option>
<option value='23424844'>Hungary</option>
<option value='23424845'>Iceland</option>
<option value='23424848'>India</option>
<option value='23424846'>Indonesia</option>
<option value='23424851'>Iran</option>
<option value='23424855'>Iraq</option>
<option value='23424998'>Iraq-Saudi Arabia Neutral Zone</option>
<option value='23424803'>Ireland</option>
<option value='23424852'>Israel</option>
<option value='23424853'>Italy</option>
<option value='23424854'>Ivory Coast</option>
<option value='23424858'>Jamaica</option>
<option value='23424856'>Japan</option>
<option value='23424860'>Jordan</option>
<option value='23424871'>Kazakhstan</option>
<option value='23424863'>Kenya</option>
<option value='23424867'>Kiribati</option>
<option value='23424870'>Kuwait</option>
<option value='23424864'>Kyrgyzstan</option>
<option value='23424872'>Laos</option>
<option value='23424874'>Latvia</option>
<option value='23424873'>Lebanon</option>
<option value='23424880'>Lesotho</option>
<option value='23424876'>Liberia</option>
<option value='23424882'>Libya</option>
<option value='23424879'>Liechtenstein</option>
<option value='23424875'>Lithuania</option>
<option value='23424881'>Luxembourg</option>
<option value='20070017'>Macau</option>
<option value='23424890'>Macedonia</option>
<option value='23424883'>Madagascar</option>
<option value='23424889'>Malawi</option>
<option value='23424901'>Malaysia</option>
<option value='23424899'>Maldives</option>
<option value='23424891'>Mali</option>
<option value='23424897'>Malta</option>
<option value='23424932'>Marshall Islands</option>
<option value='23424884'>Martinique</option>
<option value='23424896'>Mauritania</option>
<option value='23424894'>Mauritius</option>
<option value='23424886'>Mayotte</option>
<option value='23424900'>Mexico</option>
<option value='23424885'>Moldova</option>
<option value='23424892'>Monaco</option>
<option value='23424887'>Mongolia</option>
<option value='20069817'>Montenegro</option>
<option value='23424888'>Montserrat</option>
<option value='23424893'>Morocco</option>
<option value='23424902'>Mozambique</option>
<option value='23424763'>Myanmar</option>
<option value='23424987'>Namibia</option>
<option value='23424912'>Nauru</option>
<option value='23424911'>Nepal</option>
<option value='23424909'>Netherlands</option>
<option value='23424903'>New Caledonia</option>
<option value='23424916'>New Zealand</option>
<option value='23424915'>Nicaragua</option>
<option value='23424906'>Niger</option>
<option value='23424908'>Nigeria</option>
<option value='23424904'>Niue</option>
<option value='23424905'>Norfolk Island</option>
<option value='23424865'>North Korea</option>
<option value='23424788'>Northern Mariana Islands</option>
<option value='23424910'>Norway</option>
<option value='23424898'>Oman</option>
<option value='23424922'>Pakistan</option>
<option value='23424927'>Palau</option>
<option value='28289408'>Palestine</option>
<option value='23424924'>Panama</option>
<option value='23424926'>Papua New Guinea</option>
<option value='23424917'>Paraguay</option>
<option value='23424919'>Peru</option>
<option value='23424934'>Philippines</option>
<option value='23424918'>Pitcairn Islands</option>
<option value='23424923'>Poland</option>
<option value='23424925'>Portugal</option>
<option value='23424935'>Puerto Rico</option>
<option value='23424930'>Qatar</option>
<option value='23424931'>Reunion</option>
<option value='23424933'>Romania</option>
<option value='23424936'>Russia</option>
<option value='23424937'>Rwanda</option>
<option value='56042304'>Saint Barthelemy</option>
<option value='23424940'>Saint Kitts and Nevis</option>
<option value='23424981'>Saint Vincent and the Grenadines</option>
<option value='56042305'>Saint-Martin</option>
<option value='23424939'>Saint-Pierre-Et-Miquelon</option>
<option value='23424992'>Samoa</option>
<option value='23424947'>San Marino</option>
<option value='23424966'>Sao Tome E Principe</option>
<option value='23424938'>Saudi Arabia</option>
<option value='23424943'>Senegal</option>
<option value='20069818'>Serbia</option>
<option value='23424941'>Seychelles</option>
<option value='23424946'>Sierra Leone</option>
<option value='23424948'>Singapore</option>
<option value='56558058'>Sint Maarten</option>
<option value='23424877'>Slovakia</option>
<option value='23424945'>Slovenia</option>
<option value='23424766'>Solomon Islands</option>
<option value='23424949'>Somalia</option>
<option value='23424942'>South Africa</option>
<option value='23424955'>South Georgia and the South Sandwich Islands</option>
<option value='23424868'>South Korea</option>
<option value='23424950'>Spain</option>
<option value='23424921'>Spratly Islands</option>
<option value='23424778'>Sri Lanka</option>
<option value='23424944'>St Helena Ascension and Tristan da Cunha</option>
<option value='23424951'>St. Lucia</option>
<option value='23424952'>Sudan</option>
<option value='23424913'>Suriname</option>
<option value='28289413'>Svalbard and Jan Mayen</option>
<option value='23424993'>Swaziland</option>
<option value='23424954'>Sweden</option>
<option value='23424957'>Switzerland</option>
<option value='23424956'>Syria</option>
<option value='23424971'>Taiwan</option>
<option value='23424961'>Tajikistan</option>
<option value='23424973'>Tanzania</option>
<option value='23424777'>Tchad</option>
<option value='28289406'>Terres Australes Et Antarctiques Francaises</option>
<option value='23424960'>Thailand</option>
<option value='23424758'>The Bahamas</option>
<option value='23424821'>The Gambia</option>
<option value='56558055'>The Republic of South Sudan</option>
<option value='23424965'>Togo</option>
<option value='23424963'>Tokelau</option>
<option value='23424964'>Tonga</option>
<option value='23424958'>Trinidad and Tobago</option>
<option value='23424967'>Tunisia</option>
<option value='23424969'>Turkey</option>
<option value='23424972'>Turkmenistan</option>
<option value='23424962'>Turks and Caicos Islands</option>
<option value='23424970'>Tuvalu</option>
<option value='23424985'>US Virgin Islands</option>
<option value='23424974'>Uganda</option>
<option value='23424976'>Ukraine</option>
<option value='23424738'>United Arab Emirates</option>
<option value='23424975'>United Kingdom</option>
<option value='23424997'>United Nations Neutral Zone</option>
<option value='23424977'>United States</option>
<option value='28289407'>United States Minor Outlying Islands</option>
<option value='23424979'>Uruguay</option>
<option value='23424980'>Uzbekistan</option>
<option value='23424907'>Vanuatu</option>
<option value='23424986'>Vatican City</option>
<option value='23424982'>Venezuela</option>
<option value='23424984'>Vietnam</option>
<option value='23424989'>Wallis-Et-Futuna</option>
<option value='23424990'>Western Sahara</option>
<option value='23425002'>Yemen</option>
<option value='23425003'>Zambia</option>
<option value='23425004'>Zimbabwe</option>
</select>
<button id="getStates" style="margin-left:20px">Get States</button>
<button id="getCountries" style="margin-left:10px">Get Countries Dropdown</button>

<br>
<br>

<table style="width:100%;display:none" class="output">
<tr>
<td id="live" style="min-width:150px">
<span>
Sample Dropdown:
</span>
<br>
</td>
<td>
<textarea id="copy" rows="15" style="width:100%" readonly="readonly">
</textarea>
</td>
</tr>
</table>
<br>
<hr>

Please get in touch with me in case you have a query or a feedback. I tweet here [@akhilrex](http://twitter.com/akhilrex)

