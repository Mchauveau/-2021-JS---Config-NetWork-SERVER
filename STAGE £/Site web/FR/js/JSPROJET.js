// Déclaration de variables globales
var t; // incrémentation en fonction du nombre de channel créer avec la fonction Ajout
var n; // n est assigné lorsque l'utilisateur fait un choix, il est ensuite testé lorsque l'utilisateur ré appui sur suivant (Permet à l'utilisateur de ne pas perdre tout ce qu'il a entrer par une fausse manipulation)
var brokerString; // Variable enregistrant l'objet broker en string
var gwString; // Variable enregistrant l'objet GW (GateWay) en string
var gw = new Object(); // Déclaration de l'objet gw
var Cook = new Object();
var brDelString; // Variable enregistrant l'objet brDel en string (representant BrokerDelete)
var e;
var y;
var oui = new Object();
if(oui.GTWCOOK == null )
oui.GTWCOOK=[];
if (Sname == null)
{var Sname = 0;}
var name;
var coade = 'var IDNSS'+Sname+';';
eval(coade);
var NSNOW = getCookie('IDNSTOT');
var methode = "";
var cible; 
var Ist = true;
var idds;
var MKString = new Object();
var GET1 = new Object();
var GET2 = new Object();
var GET3 = new Object();
var code;
var codeNAME;
var d;
var pass;
var virgule = ",";
var verifexist;
var MonTableau = [''];
var MonTableau2 = [''];
var MonTableauV = [''];
var MonTableauV2 = [''];
var tablSel = [];
var numtablSel = [];
function NSLOAD()
	{if (Ist != false){
	alert("Vous vous appretez a configurer le network serveur suivant : "+NSNOW);
	Ist = false;}}
function conversion(){ // Cette fonction a pour but d'afficher le formulaire qu'a demandé l'utilisateur
			var tel = document.getElementById("sel1").selectedIndex; // Cette variable permet un test et d'afficher les différents formulaires
	if (tel != n) // Test si l'utilisateur n'a pas rentrer a nouveau le même choix (Si oui ne fait rien)
	{
	switch (tel) { // Switch pour afficher le bon formulaire
		case 1:	
				// Affiche le formulaire
			document.getElementById("formjs").innerHTML = '<form><input onChange="Upload();"accept=".json"id="file" type="file" /><table class="table"><tr><td><p><span data-tip="Correspond a l id de votre broker !"><img width="10px" src="pointint.png"></span> mqttBrokerId : <p> <input type="text" id="brokerid" onkeypress="return verifId(\'brokerid\', event);"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mqttBrokerPort :<p> <input type="text" id="brokerport" onkeypress="return restrictCharacters(\'brokerport\', event);"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mqttBrokerUser : <p> <input type="text" id="brokeruser"></td></tr><tr><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mqttBrokerPassword : <p> <input type="text" id="brokerpw"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mqttBrokerAddress : </p> <input type="text" id="brokeraddr"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> caFile : <p> <input type="text" id="cafile"></td></tr><tr><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> certFile : <p> <input type="text" id="certfile"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> keyFile :<p> <input type="text" id="keyfile"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> certPassword : <p> <input type="text" id="certpw"></td></tr></table>	<input class="btn btn-lg btn-success" onclick="transformation();"type="button" value="Terminer la configuration !"></form>';
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
			n = 1;
			break;
		case 0: 
				// Affiche le formulaire
			document.getElementById("formjs").innerHTML = '<form><input accept=".json"id="file" type="file" /> <table class="table"><tr><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mqttBrokerId : <p> <input type="text" id="mqttBrokerId" onkeypress="return verifId(\'mqttBrokerId\', event);"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> setposition : <p> <input type="text" id="setposition"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> gatewayId : <p> <input type="text" id="gatewayId"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> gatewayName :</p><input type="text" id="gatewayName"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span>hwRev :<p><input type="text" id="hwrev"></td> </tr><tr> <td> <p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> serial : <p> <input type="text" id="serial"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> hostName :<p> <input type="text" id="hostName"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> ethernetMac :<p><input type="text" id="ethernetMac"></td> <td> <p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> comment :<p> <input type="text" id="comment"></td><td> <p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> swRev : <p> <input type="text" id="swRev"> </td></tr><tr><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> z_pos_m :<p> <input type="text" id="z_pos_m"  onkeypress="return restrictCharacters(\'z_pos_m\', event);"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> x_pos_m :<p><input type="text" id="x_pos_m" onkeypress="return restrictCharacters(\'x_pos_m\', event);"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> y_pos_m :<p><input type="text" id="y_pos_m" onkeypress="return restrictCharacters(\'y_pos_m\', event);"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> param_1 : <p> <input type ="text" id="param_1" onkeypress="return restrictCharacters(\'y_pos_m\', event);"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> param_2 : <p> <input type ="text" id="param_2" onkeypress="return restrictCharacters(\'y_pos_m\', event);"></td><td></td><td></td><tr><td><p></td></tr><tr><td colspan="5"><p> <h1><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span>GESTION DES CANAUX : </h1> <input id="test" class="btn-secondary" type="button" onClick="Ajout();" value="Ajouter un canal"> </td></tr><tr><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> ChannelId : <p> <input type ="text" id="ChannelId"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mode : <p> <select style="width:175px" class="form-control" id="mode"><option value="Disabled">Disabled</option><option value="ASYNCHRONOUS">ASYNCHRONOUS</option></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> dataRate : <p> <input type ="text" id="dataRate"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> inv_pol : <p> <input type ="text" id="inv_pol"></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> centerFrequency : </p><input type ="text" id="centerFrequency" onkeypress="return restrictCharacters(\'y_pos_m\', event);"></td></tr></table>   <input class="btn btn-lg btn-success" id="positionbtn" onclick="RecModif();return false;"type="button" value="Terminer la configuration !"></form>';
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
			n = 0;
			break;
		case 2: 
				// Affiche le formulaire
			document.getElementById("formjs").innerHTML = '<span data-tip="Votre pseudo"id="erreur"><p>test<p></span><input type="text" id="mon_input" onkeypress="verifierCaracteres(event); return false;" /></span>';
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
			n = 2;
			break;
		case 3:
			document.getElementById("formjs").innerHTML = '<form> <table id="tableDevice" class="table"><tr><td><p><span data-tip="MANDATORY.&#xa;Your new device\'s Id. Device long adress (EUI-64 format on 16 characters).&#xa;ex: \"7077777777777777\"."><img width="10px" src="pointint.png"></span> deviceId : <p> <input type="text" id="deviceId" onkeypress="return restrictCharacters(\'deviceId\', event, false);"></td><td><p><span data-tip="MANDATORY.&#xa;Friendly name for your device."><img width="10px" src="pointint.png"></span> deviceName : <p> <input type="text" id="deviceName"></td><td><p><span data-tip="MANDATORY.&#xa;Unit: milliseconds. Ex: 2000."><img width="10px" src="pointint.png"></span> timerPiggyBack : <p> <input type="text" id="timerPiggyBack" onKeyPress="return restrictCharacters(\'timerPiggyBack\', event, false);"></td><td><p><span data-tip="MANDATORY.&#xa;Possible values: TAG."><img width="10px" src="pointint.png"></span> type :</p><input type="text" id="type"></td><td><p><span data-tip="MANDATORY. Possible values : MODEA or MODEC"><img width="10px" src="pointint.png"></span>mode :<p><select style="width:175px" class="form-control" id="mode"><option value="MODEA">MODEA</option><option value="MODEC">MODEC</option></select></td> </tr><tr> <td> <p><span data-tip="MANDATORY.&#xa;Maximum number of simultaneous pending join authorized for this device."><img width="10px" src="pointint.png"></span> maxDevicePendingJoin : <p> <input type="text" id="maxDevicePendingJoin" onKeyPress="return restrictCharacters(\'maxDevicePendingJoin\', event, false);"></td><td><p><span data-tip="MANDATORY.&#xa;Maximum number of simultaneous pending join for reactive control authorized for this device."><img width="10px" src="pointint.png"></span> maxDevicePendingReact :<p> <input type="text" id="maxDevicePendingJoinForReactiveControl" onKeyPress="return restrictCharacters(\'maxDevicePendingJoinForReactiveControl\', event, false);"></td><td><p><span data-tip="MANDATORY.&#xa;Max deduplication join preventive."><img width="10px" src="pointint.png"></span> maxDedupJoinPreventive :<p><input type="text" id="maxDedupJoinPreventive" onKeyPress="return restrictCharacters(\'maxDedupJoinPreventive\', event, false);"></td> <td> <p><span data-tip="MANDATORY.&#xa;Max deduplication join reactive."><img width="10px" src="pointint.png"></span> maxDedupJoinReactive :<p> <input type="text" id="maxDedupJoinReactive" onKeyPress="return restrictCharacters(\'maxDedupJoinReactive\', event, false);"></td><td> <p><span data-tip="MANDATORY.&#xa; MUST contains 32 characters."><img width="10px" src="pointint.png"></span> devKey : <p> <input type="text" id="devKey"> </td></tr><tr><td><p><span data-tip="MANDATORY.&#xa;Identifier of the AS Adapter where Device Data should be pushed.&#xa;Enables to point to right URI in the NS ASA route configuration table.&#xa;For V17.1, MUST be ASA_VFC (VFC AS Adapter)."><img width="10px" src="pointint.png"></span> asaId :<p> <input type="text" id="asaId"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> serial :<p><input type="text" id="serial"></td><td><p><span data-tip="MANDATORY.&#xa;Enter a comment on your Device"><img width="10px" src="pointint.png"></span> comment :<p><input type="text" id="comment"></td><td><p><span data-tip="MANDATORY.&#xa;"><img width="10px" src="pointint.png"></span> swRev : <p> <input type ="text" id="swRev"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> hwRev : <p> <input type ="text" id="hwRev"></td><td></td><td></td></tr><td><p></td></tr></tr><tr><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> class :<p> <input type="text" id="class"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> loc_enable :<p><select style="width:175px" class="form-control" id="loc_enable"><option value="TRUE">TRUE</option><option value="FALSE">FALSE</option></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> locMaxPeriodTimeMinutes :<p><input type="text" id="loc_max_period_time_minutes" onkeypress="return restrictCharacters(\'loc_max_periode_time_minutes\', event, false);"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> locMinPeriodTimeMinutes <p> <input type ="text" id="loc_min_period_time_minutes" onkeypress="return restrictCharacters(\'loc_min_period_time_minutes\', event, false);"></td><td><p><span data-tip="MANDATORY.&#xa;Supported PLAN protocol version. For V17.1 only v0.3 ."><img width="10px" src="pointint.png"></span> version :<p><input type="text" id="version"></td><td></td><td></td></tr><tr><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> asaId :<p><input type="text" id="asaId"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> asaUri :<p><input type="text" id="asaUri"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> keyFile :<p><input type="text" id="keyFile"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> keyPwd :<p><input type="text" id="keyPwd"></td><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> trustFile :<p><input type="text" id="trustFile"></td></tr><tr><td><p><span data-tip="MANDATORY."><img width="10px" src="pointint.png"></span> trustPwd:<p><input type="text" id="trustPwd"></td></tr><tr><td colspan="5"><p> <h1><span data-tip="You can add as many channels as you wany to your gateway here(MAX: 16). Only the first channel is mandatory. All informations are required to create a new channel."><img width="10px" src="pointint.png"></span>GESTION DES CANAUX : </h1> <input id="test" class="btn-secondary" type="button" onClick="Ajout2();" value="Add a channel"> </td></tr><tr><td><p><span data-tip="MANDATORY.&#xa;Your channel\'s Id. Number from 0 to 15."><img width="10px" src="pointint.png"></span> channelId : <p> <input type ="text" id="channelId"></td><td></td><td><p><span data-tip="MANDATORY.&#xa; Possible values : 0,1,...,15 for DR0,DR1,..., DR15."><img width="10px" src="pointint.png"></span> dataRateName : <p> <input type="text" id="dataRateName"onkeypress="return restrictCharacters(\'dataRateName\', event, false);"></td><td></td><td><p><span data-tip="MANDATORY.&#xa;Enables to define the center frequency."><img width="10px" src="pointint.png"></span> fbin : <p> <input type ="text" id="fbin" onkeypress="return restrictCharacters(\'fbin\', event, false);"></td></tr></table>   <input class="btn btn-lg btn-success" id="positionbtn" onclick="Add2();return false;"type="button" value="Send the creation request !"></form>';
			break;}
}
 }
 function Add2() {
	// if(document.getElementById("asaId").value != "" && document.getElementById("asaUri").value != "" && document.getElementById("deviceId").value != "" && document.getElementById("deviceName").value != "" && document.getElementById("asaUri").value != ""){
	var dv = new Object();
	dv.deviceId = document.getElementById("deviceId").value; // ajoute deviceId en propriété de l'objet
	dv.deviceName = document.getElementById("deviceName").value; // ajoute deviceName en propriété de l'objet
	dv.timerPiggyBack = Number(document.getElementById("timerPiggyBack").value); // ajoute timerPiggyBack en propriété de l'objet
	dv.type = document.getElementById("type").value; // ajoute type en propriété de l'objet
	if (document.getElementById("mode").selectedIndex == 0)// ajoute mode en propriété de l'objet
	{dv.mode = "MODEA";}
	else {dv.mode = "MODEC";}
	dv.maxDevicePendingJoin = Number(document.getElementById("maxDevicePendingJoin").value); // ajoute maxDevicePendingJoin en propriété de l'objet
	dv.maxDevicePendingJoinForReactiveControl = Number(document.getElementById("maxDevicePendingJoinForReactiveControl").value); // ajoute maxDevicePendingJoinForReactiveControl en propriété de l'objet
	dv.maxDedupJoinPreventive = Number(document.getElementById("maxDedupJoinPreventive").value); // ajoute maxDedupJoinPreventive en propriété de l'objet
	dv.maxDedupJoinReactive = Number(document.getElementById("maxDedupJoinPreventive").value); // ajoute maxDedupJoinPreventive en propriété de l'objet
	dv.devKey = document.getElementById("devKey").value; // ajoute devKey en propriété de l'objet
	dv.asaId = document.getElementById("asaId").value; // ajoute asaId en propriété de l'objet
	dv.serial = document.getElementById("serial").value; // ajoute serial en propriété de l'objet
	dv.comment = document.getElementById("comment").value; // ajoute comment en propriété de l'objet
	dv.swRev = document.getElementById("swRev").value; // ajoute swRev en propriété de l'objet
	dv.hwRev = document.getElementById("hwRev").value; // ajoute hwRev en propriété de l'objet
	dv.version= document.getElementById("version").value; // ajoute version en propriété de l'objet
	dv.class = document.getElementById("class").value; // ajoute class en propriété de l'objet
	if (document.getElementById("loc_enable").selectedIndex == 0)// ajoute loc_enable en propriété de l'objet
	{dv.mode = "TRUE";}
	else {chan.mode = "FALSE";}
	dv.loc_max_period_time_minutes = Number(document.getElementById("loc_max_period_time_minutes").value); // ajoute loc_max_period_time_minutes en propriété de l'objet
	dv.loc_min_period_time_minutes = Number(document.getElementById("loc_min_period_time_minutes").value); // ajoute loc_min_period_time_minutes en propriété de l'objet
	dv.deviceChannels=[]; // Création d'un tableau nommé deviceChannels
	// Teste si l'utilisateur a rempli tous les champs si non ne rentre pas le channel 
	if(document.getElementById("channelId").value != "" && document.getElementById("dataRateName").value != "" && document.getElementById("fbin").value != "")
	{
	alert('yop');
	var chan = new Object(); // Déclare un objet chan
	chan.channelId = document.getElementById("channelId").value; // ajoute ChannelId en propriété de l'objet
	chan.dataRateName = Number(document.getElementById("dataRateName").value); // ajoute dataRate en propriété de l'objet
	chan.fbin = Number(document.getElementById("fbin").value); // ajoute inv_pol en propriété de l'objet
	dv.deviceChannels.push(chan);} // rentre l'objet chan à la fin du tableau gatewayHwChannels créé precedement
	
	for (var i = 1; i <= d; i++){ // Boucle for allant de 1 à t, t étant le nombre de nouveau channel créé
	// Teste si l'utilisateur a rempli tous les champs si non ne rentre pas le channel	
	if(document.getElementById("channelId"+i).value != "" && document.getElementById("dataRateName"+i).value != "" && document.getElementById("fbin"+i).value != ""){
		var chan = new Object(); // Déclare un objet chan
		chan.channelId = document.getElementById("channelId"+i).value; // ajoute ChannelId en propriété de l'objet
		// chan.mode = document.getElementById("mode"+i).value; // ajoute mode en propriété de l'objet 
		chan.dataRateName = Number(document.getElementById("dataRateName"+i).value); // ajoute dataRate en propriété de l'objet
		chan.fbin = Number(document.getElementById("fbin"+i).value); // ajoute inv_pol en propriété de l'objet
		dv.deviceChannels.push(chan);} // rentre l'objet chan à la fin du tableau gatewayHwChannels créé precedement
	dvString = JSON.stringify(dv); // ajoute l'objet en string dans la variable gwString
	alert(dvString);// Affiche la variable gwString
	methode = "POST";
	cible = "device";
	idd = dv;
	var urlSCH = "http://10.1.241.34/schema/DeviceCreationReqV6.json"
	schema(methode, NSNOW, "ADD", cible, idd, urlSCH);};
	// var ar = new Object();
	// ar.reqId = "12000";
	// ar.asaId = document.getElementById("asaId").value;
	// ar.asaUri = document.getElementById("asaUri").value;
	// ar.keyFile = document.getElementById("keyFile").value;
	// ar.keyPwd = document.getElementById("keyPwd").value;
	// ar.trustFile = document.getElementById("trustFile").value;
	// ar.trustPwd = document.getElementById("trustPwd").value;
	// methode = "POST";
	// cible = "asaRouter";
	// idd = ar;
	// makeCorsRequest(methode, NSNOW, type,cible, idd);
	// }
	}
	
		function scookie(IDNS,value,days)
	{
		var expire=new Date();
		expire.setDate(expire.getDate()+days);
		document.cookie=IDNS+'='+escape(value)+';expires='+expire.toGMTString();
		return true;
	}
	function gcookie(IDNS)
	{
	if(document.cookie.length>0)
		{
		start=document.cookie.indexOf(IDNS+"=");
		pos = start+IDNS.length+1;
		if(start!=0)
		{
		start=document.cookie.indexOf("; "+IDNS+"=");
		pos = start+IDNS.length+3;
		}
		if(start!=-1)
			{ 
			   start=pos;
			   end=document.cookie.indexOf(";",start);
			   if(end==-1)
				 {
				   end=document.cookie.length;
				 }
				 return unescape(document.cookie.substring(start,end));
			} 
		}
		return '';
		}
// function NSCHOICE() 
	// var CHOIX = true;
	// if (CHOIX == true) {
    // name = document.getElementById("NSCONFT").value;
	// IDINCCOOK();
	// for (var i = 0; i <= oui.GTWCOOK.length; i++){
	// scookie('IDNS',oui.GTWCOOK[i].name,100);}
	// QDDCOOK();
	// return false;}}
function disableField(){
  if( document.getElementById("NSCONFB").value.length > 0 )
	  { 
    document.getElementById("NSCONFT").disabled = true; 
	  }
						}


function Suppression() {
		var tel = document.getElementById("sel1").selectedIndex; // Cette variable permet un test et d'afficher les différents formulaires
	if (tel != n) // Test si l'utilisateur n'a pas rentrer a nouveau le même choix (Si oui ne fait rien)
	{
		switch (tel) { // Switch pour afficher le bon formulaire
		case 1: 
		// Affiche le formulaire
		document.getElementById("formjs").innerHTML = '<form><table class="table"><tr><td></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mqttBrokerId :  <p> <input type="text" id="brokerid" ></td><td></td></tr></table><input class="btn btn-lg btn-danger" Onclick="Delete();return false;" type="submit" value="Supprimer !"></form>';
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
				n = 1;
			break;
		case 0: 
		// Affiche le formulaire
		document.getElementById("formjs").innerHTML = '<form><table class="table"><tr><td></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> gatewayId : <p> <input type="text" id="gatewayId" ></td><td></td></tr></table><input class="btn btn-lg btn-danger" Onclick="Delete();return false;" type="submit" value="Supprimer !"></form>';			
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
				n = 0;
			break;
		case 2: 
		// Affiche le formulaire
		document.getElementById("formjs").innerHTML = '<form><table class="table"><tr><td></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> deviceId : <p> <input type="text" id="deviceId" ></td><td></td></tr></table><input class="btn btn-lg btn-danger" Onclick="Delete();return false;" type="submit" value="Supprimer !"></form>';			
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
				n = 2;
			break;
		} 
}}
function Visual(){ // Cette fonction a pour but d'afficher le formulaire qu'a demandé l'utilisateur
			var tel = document.getElementById("sel1").selectedIndex; // Cette variable permet un test et d'afficher les différents formulaires
	if (tel != n) // Test si l'utilisateur n'a pas rentrer a nouveau le même choix (Si oui ne fait rien)
	{
	switch (tel) { // Switch pour afficher le bon formulaire
		case 1:	
		cible = "mqttBroker";
		var method = "LISTB";
		
		// document.getElementById("formjs").innerHTML = '<form><table class="table"><tr><td></td><td><p><span data-tip="Nice Tooltip!"><img width="10px" src="pointint.png"></span> mqttBrokerId :  <p> <input type="text" id="brokerid" ></td><td></td></tr></table><input class="btn btn-lg btn-danger" Onclick="Affich();return false;" type="submit" value="Voir !"></form>';									 
				// Affiche le formulaire
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
			n = 1;
			break;
		case 0: 
		cible = "gateway";
				var method = "LIST";
				// Affiche le formulaire
				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
			n = 0;
			break;
		case 2: 
				// Affiche le formulaire				// Défini n à 1 pour éviter que l'utilisateur selectionne à nouveau le même choix. 
			n = 2;
		cible = "devices";
				var method = "LISTD";
			break;
		case 3 :
			
			n = 3;
		cible = "ASA";
				var method = "LISTA";
			break;
		case 4 :
		idds = "nsoptions";
			n = 4;
		cible = "NSOPTIONS";
				var method = "LISTNSO";
		}
		makeCorsRequest(method,NSNOW, "LIST", cible, null);
	}

	
	
}
function transformation(){ // Cette fonction a pour but d'enregistrer les réponses de l'utilisateur et de les envoyer  (PARTIE BROKER)
		// Cette partie va tester si l'utilisateur a rentré les champs obligatoires, si non, il recevra une alerte et devra remplir les champs.
	if(document.getElementById("brokerid").value == "" || document.getElementById("brokeraddr").value == "" || document.getElementById("brokeraddr").value == "" || document.getElementById("brokerport").value == "" ){ 
		alert('Vous devez entrer au moins ces donnees obligatoires: brokerId, brokerPort, et brokerAdress');
	}
	else {
		var objet = new Object(); // Déclaration d'un objet qui récupere chaque informations de la partie broker
		objet.mqttBrokerId  = document.getElementById("brokerid").value; // rentre la valeur de l'input brokerid dans la propriété brokerid de l'objet "objet"
		objet.mqttBrokerAddress = document.getElementById("brokeraddr").value; // rentre la valeur de l'input brokeraddr dans la propriété brokeraddr de l'objet "objet"
		objet.mqttBrokerPort = Number(document.getElementById("brokerport").value); // rentre la valeur de l'input brokerport dans la propriété brokerport de l'objet "objet"
		if(document.getElementById("brokeruser").value != ""){ // Test si l'input brokeruser est rempli
			objet.mqttBrokerUser = document.getElementById("brokeruser").value; // ajoute brokeruser en propriété de l'objet
		}
		if(document.getElementById("brokerpw").value != ""){ // Test si l'input brokerpw est rempli
			objet.mqttBrokerPassword = document.getElementById("brokerpw").value; // ajoute brokerpw en propriété de l'objet
		}
		if(document.getElementById("cafile").value != ""){ // Test si l'input cafile est rempli
			objet.caFile = document.getElementById("cafile").value; // ajoute cafile en propriété de l'objet 
		}		
		if(document.getElementById("certfile").value != ""){ // Test si l'input certfile est rempli
			objet.certFile = document.getElementById("certfile").value; // ajoute certfile en propriété de l'objet
		}
		if(document.getElementById("keyfile").value != ""){ // Test si l'input keyfile est rempli
			objet.keyFile = document.getElementById("keyfile").value; // ajoute keyfile en propriété de l'objet
		}
		if(document.getElementById("certpw").value != ""){ // Test si l'input certpw est rempli
			objet.certPassword = document.getElementById("certpw").value; // ajoute certpw en propriété de l'objet
		}
		brokerString = JSON.stringify(objet); // ajouter l'objet a la variable brokerString en le convertissant en string
		alert(brokerString); // Affiche ce qui est renvoyé par la variable brokerString
		methode = "POST";
		cible = "mqttBroker";
		idd = objet;
		var url = "http://localhost/schema/MqttBrokerCreationReqV6.json";
        schema(methode, NSNOW, "ADD", cible, idd, url);
	}
}
function Ajout(){ // Cette fonction ajoute un nouveau channel et un nouveau champ de channel au form
	if (t == null) // Défini la variable t à 0 dans le cas ou elle est null
	{t = 0;}
	t=t+1; // incrémente t de 1 pour la suite
	var ChannelId; // Déclare la variable ChannelId
	var mode; // Déclare la variable mode
	var dataRate; // Déclare la variable dateRate 
	var inv_pol; // Déclare la variable inv_pol
	var centerFrequency; // Déclare la variable centerFrequency
	// Ajoute un nouveau champ dans le tableau
	document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="table"><tr><td><p> ChannelId'+t+' : <p> <input type ="text" id="ChannelId'+t+'"></td><td><p> mode'+t+' : <p> <select style="width:175px" class="form-control" id="mode'+t+'"><option value="Disabled">Disabled</option><option value="ASYNCHRONOUS">ASYNCHRONOUS</option></td><td><p> dataRate'+t+' : <p> <input type ="text" id="dataRate'+t+'" ></td><td><p> inv_pol'+t+' : <p> <input type ="text" id="inv_pol'+t+'"></td><td><p> centerFrequency'+t+' : </p><input type ="text" id="centerFrequency'+t+'" onkeypress="return restrictCharacters(\'centerFrequency'+t+'\', event);"></td></tr></table>');
		window['ChannelId'+t] = "ChannelId " + t; // Ajoute t a la variable ChannelId pour obtenir des variables incrémentée
		
	    window['mode'+t] = "mode " + t; // Ajoute t a la variable mode pour obtenir des variables incrémentée
		
	    window['dataRate'+t] = "dataRate " + t; // Ajoute t a la variable dataRate pour obtenir des variables incrémentée
		
	    window['inv_pol'+t] = "inv_pol " + t; // Ajoute t a la variable inv_pol pour obtenir des variables incrémentée
		
	    window['centerFrequency'+t] = "centerFrequency " + t; // Ajoute t a la variable centerFrequency pour obtenir des variables incrémentée
}


function RecModif() { // cette fonction a pour but d'enregistrer les réponses de l'utilisateur et de les envoyer (PARTIE GATEWAY)
	var s = document.getElementById("mode");
	var s1 = s.selectedIndex;
	var s2 = s.options[s1].value;
	alert(s2);
	if(document.getElementById("centerFrequency").value == "")
	{
	if(s2 == "ASYNCHRONOUS") {	alert("Le mode étant défini sur ASYNCHRONOUS, vous devez remplir le centerFrequency absolument !");
	}
	else {Add();}}
	else {Add();}}

function Delete() { // Cette fonction a pour but de récuperer les valeurs entrée par l'utilisateur dans le formulaire supprimer et d'envoyer la requete de delete
	switch (document.getElementById("sel1").selectedIndex) {
			case 0 : cible = "gateway";
	var gwDel = new Object(); // // Déclarer un objet brDel
	gwDel.gatewayId = document.getElementById("gatewayId").value; // ajoute brokerid en propriété de l'objet 
	gwDelString = JSON.stringify(gwDel); // ajoute l'objet en string dans la variable brDelString
	alert(gwDelString); // Affiche la variable brDelString
	methode = "DELETE";	
    var idd = gwDel;	
			break;
			
			case 1 : cible = "mqttBroker";		
	var brDel = new Object(); // // Déclarer un objet brDel
	brDel.mqttBrokerId = document.getElementById("brokerid").value; // ajoute brokerid en propriété de l'objet 
	brDelString = JSON.stringify(brDel); // ajoute l'objet en string dans la variable brDelString
	alert(brDelString); // Affiche la variable brDelString
	methode = "DELETE";
	var idd = brDel;
break;
case 2 : cible = "device";		
	var DevDel = new Object(); // // Déclarer un objet brDel
	DevDel.deviceId = document.getElementById("deviceId").value; // ajoute brokerid en propriété de l'objet 
	methode = "DELETE";
	var idd = DevDel;
break; }
	makeCorsRequest(methode, NSNOW, "ADD", cible, idd);
}

function Add() {
	gw.gatewayId = document.getElementById("gatewayId").value; // ajoute gatewayId en propriété de l'objet
	gw.gatewayName = document.getElementById("gatewayName").value; // ajoute gatewayName en propriété de l'objet
	gw.mqttBrokerId = document.getElementById("mqttBrokerId").value; // ajoute mqttBrokerId en propriété de l'objet
	gw.serial = Number(document.getElementById("serial").value); // ajoute serial en propriété de l'objet
	gw.hostName = document.getElementById("hostName").value; // ajoute hostName en propriété de l'objet
	gw.ethernetMac = document.getElementById("ethernetMac").value; // ajoute ethernetMac en propriété de l'objet
	gw.comment = document.getElementById("comment").value; // ajoute comment en propriété de l'objet
	gw.swRev = document.getElementById("swRev").value; // ajoute swRev en propriété de l'objet
	gw.hwRev = document.getElementById("hwrev").value; // ajoute hwRev en propriété de l'objet
	gw.x_pos_m = Number(document.getElementById("x_pos_m").value); // ajoute x_pos_m en propriété de l'objet
	gw.y_pos_m = Number(document.getElementById("y_pos_m").value); // ajoute y_pos_m en propriété de l'objet
	gw.z_pos_m = Number(document.getElementById("z_pos_m").value); // ajoute z_pos_m en propriété de l'objet
	gw.setPosition = document.getElementById("setposition").value; // ajoute setposition en propriété de l'objet
	gw.param_1 = Number(document.getElementById("param_1").value); // ajoute param_1 en propriété de l'objet
	gw.param_2 = Number(document.getElementById("param_2").value); // ajoute param_2 en propriété de l'objet
	gw.gatewayHwChannels=[]; // Création d'un tableau nommé gatewayHwChannels
	// Teste si l'utilisateur a rempli tous les champs si non ne rentre pas le channel 
	if(document.getElementById("ChannelId").value != "" && document.getElementById("dataRate").value != "" && document.getElementById("inv_pol").value != "")
	{
	alert('yop');
	var chan = new Object(); // Déclare un objet chan
	chan.channelId = document.getElementById("ChannelId").value; // ajoute ChannelId en propriété de l'objet
	if (document.getElementById("mode").selectedIndex == 1)
	{chan.mode = "ASYNCHRONOUS";}
	else {chan.mode = "Disabled";}
	// chan.mode = document.getElementById("mode").value; // ajoute mode en propriété de l'objet
	chan.dataRate = document.getElementById("dataRate").value; // ajoute dataRate en propriété de l'objet
	chan.inv_pol = Boolean(document.getElementById("inv_pol").value); // ajoute inv_pol en propriété de l'objet
	chan.centerFrequency = Number(document.getElementById("centerFrequency").value); // ajoute centerFrequency en propriété de l'objet
	gw.gatewayHwChannels.push(chan);} // rentre l'objet chan à la fin du tableau gatewayHwChannels créé precedement
	
	for (var i = 1; i <= t; i++){ // Boucle for allant de 1 à t, t étant le nombre de nouveau channel créé
	// Teste si l'utilisateur a rempli tous les champs si non ne rentre pas le channel
	var s = document.getElementById("mode"+i);
	alert("mode"+i);
	var s1 = s.selectedIndex;
	var s2 = s.options[s1].value;	
	if(document.getElementById("ChannelId"+i).value != "" && document.getElementById("dataRate"+i).value != "" && document.getElementById("inv_pol"+i).value != "")
	{if(document.getElementById("centerFrequency"+i).value == "")
		{
		if(s2 == "ASYNCHRONOUS") {	alert("Le mode étant défini sur ASYNCHRONOUS, vous devez absolument remplir le centerFrequency"+i+"!"); return;}
		else{
		var chan = new Object(); // Déclare un objet chan
			if (document.getElementById("mode").selectedIndex == 1)
	{chan.mode = "ASYNCHRONOUS"+i;}
	else {chan.mode = "Disabled"+i;}
		chan.channelId = document.getElementById("ChannelId"+i).value; // ajoute ChannelId en propriété de l'objet
		// chan.mode = document.getElementById("mode"+i).value; // ajoute mode en propriété de l'objet 
		chan.dataRate = document.getElementById("dataRate"+i).value; // ajoute dataRate en propriété de l'objet
		chan.inv_pol = Boolean(document.getElementById("inv_pol"+i).value); // ajoute inv_pol en propriété de l'objet
		chan.centerFrequency = Number(document.getElementById("centerFrequency"+i).value); // ajoute centerFrequency en propriété de l'objet
		gw.gatewayHwChannels.push(chan);}}}} // rentre l'objet chan à la fin du tableau gatewayHwChannels créé precedement
		gwString = JSON.stringify(gw); // ajoute l'objet en string dans la variable gwString
		alert(gwString);// Affiche la variable gwString
		methode = "POST";
		cible = "gateway";
		idd = gw;
		var urlSCH = "http://localhost/schema/GatewayCreationReqV6.json"
		schema(methode, NSNOW, "ADD", cible, idd, urlSCH);}
		
function Affich()
{
	switch (document.getElementById("sel1").selectedIndex) {
		case 1 :
	var brVis = new Object(); // // Déclarer un objet brDel
	brVis.mqttBrokerId = document.getElementById("brokerid").value; // ajoute brokerid en propriété de l'objet 
	brVisString = JSON.stringify(brVis); // ajoute l'objet en string dans la variable brDelString
	alert(brVisString); // Affiche la variable brDelString
	methode = "LISTB";
	cible = document.getElementById("brokerid").value;
	idds = "mqttBroker";
		break;
		case 0 :
	var gwVis = new Object(); // // Déclarer un objet brDel
	gwVis.mqttBrokerId = document.getElementById("gatewayId").value; // ajoute gatewayId en propriété de l'objet 
	gwVisString = JSON.stringify(gwVis); // ajoute l'objet en string dans la variable brDelString
	alert(gwVisString); // Affiche la variable brDelString
	methode = "LIST";
	cible = document.getElementById("gatewayId").value;
	idds = "gateway";
		break;
	}		makeCorsRequest(methode, NSNOW, "LIST", cible);}
  function restrictCharacters(myfield, e) {
    code = e.key;
    switch (code) {
    case "0":
		// Touche 0 acceptée
		return true;
    case "1":
		return true;
    case "2":
		return true;
    case "3":
		return true;
    case "4":
		return true;
	case "5":
		return true;
	case "6":
		return true;
	case "7":
		return true;
	case "8":
		return true;
	case "9":
		return true;
	case ".":
	
		if(document.getElementById(myfield).value.indexOf(".") == -1)
			{return true;}
		else
			{return false;}
	case "Backspace":
		return true;
    default:
		return false; // Quitter lorsque cela ne gère pas l'événement touche.
  }
}
function verifId(myfield, event){
	if(document.getElementById(myfield).value == "" && ((event.which < 64 || event.which > 91) && (event.which < 96 || event.which > 123)  )){
		return false;
	}
	else{
		if(((event.which > 64 && event.which < 91) || (event.which > 96 && event.which < 123)  ) || event.which == 45 || event.which == 95 || event.which == 126 || event.which == 8 || (event.which > 47 && event.which < 58))
			{return true;}
		else
			{return false;}
	}
}

	function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
	function QDDCOOK (){
		//1ere partie de la fonction (envoie de get pour tester la connexion)
		if(document.getElementById("NSCONFB").selectedIndex != 0) {
					var method = "LIST";
			select = document.getElementById("NSCONFB");
			choice = select.selectedIndex
			var name = select.options[choice].value;
			makeCorsRequest(method,name, "CON");
		}
		else {
					var method = "LIST";
		var name = document.getElementById("NSCONFT").value;
		makeCorsRequest(method,name, "CON");}
	}
	function QDDCOOKTOT(){
		// 2nd partie du programme (Enregistre le NS dans la CBox)
		if(document.getElementById("NSCONFT").value == null || document.getElementById("NSCONFT").value == ""){
		select = document.getElementById("NSCONFB");
		choice = select.selectedIndex
		var name = select.options[choice].value;
		scookie('IDNSTOT',name,100);
		document.location.href="conf.html";
		} else {
		var name = document.getElementById("NSCONFT").value;
		var Sname = getCookie('IDNS1');
		Sname++;
		for(var i = 0; i < Sname; i++){
			var CookAlone;
			if (CookAlone == "" || CookAlone == null){
			CookAlone = true;}
			else {
				var CompCook = getCookie('IDNSS'+i);
				if (CompCook == name)
			CookAlone = false;
			}
		}
		if (CookAlone == true){
			scookie('IDNS1',Sname,100); 
		}
		if(Sname == null)
		{var Sname = 0;}
		var code = 'var name'+Sname+' = "'+name+'";';
		eval(code);
		scookie('IDNSS'+Sname,name,100);
		scookie('IDNSTOT',name,100);
		document.location.href="conf.html";}}
	
		//3eme partie de la fonction (Redirige l'utilisateur sur le NS qui lui correspond)
// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}
// Make the actual CORS request.
function makeCorsRequest(method, URI, type,cible, idd) {
	var alea = entierAleatoire(1,19000);
		if (idd != null) {
	iddString = JSON.stringify(idd);
	console.log(iddString);
	alert(iddString);
		}
  // This is a sample server that supports CORS.
  switch (method) {
	case 'DELETE':
  var URI = URI+"/OAM/CM/v1/"+cible;
  break;
	case 'GET':
  var URI = URI+"/OAM/CM/v1/"+idds+"/"+alea+"/"+cible+"";
  break;
	case 'LIST':
	method = "GET";
  var URI = URI+"/OAM/CM/v1/allGateways/"+alea+"";
  break;
	case 'LISTB' :
  method = "GET";
  type = "LIST";
  var URI = URI+"/OAM/CM/v1/allMqttBrokers/"+alea+"";
  break;
	case 'POST' :
	
  var URI = URI+"/OAM/CM/v1/"+cible;
  break;
  case 'LISTD' :
  method = "GET";
  type = "LIST";
	var URI = URI+"/OAM/CM/v1/allDevices/"+alea+"";
  break;
  case 'LISTA' :
  method = "GET";
  type = "LIST";
	var URI = URI+"/OAM/CM/v1/asaRouter/"+alea+"";
  break;
    case 'GETA' :
  method = "GET";
  type = "GET";
	var URI = URI+"/OAM/CM/v1/asaRouter/"+alea+"";
  break;
	case 'LISTNSO' :
	method = "GET";
	type = "GET";
	var URI = URI+"/OAM/CM/v1/cam/"+alea+"";
  break;
	case 'LISTNSOC' :
	method = "GET";
	type = "GET";
	var URI = URI+"/OAM/CM/v1/networkController/"+alea+"";
  break;
	case 'LISTNSOO' :
	method = "GET";
	type = "GET";
	var URI = URI+"/OAM/CM/v1/oam/"+alea+"";
	break;
  }
  var xhr = createCORSRequest(method, URI);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === 4 && this.status == 409)
	{
		alert("Le serveur indique que cette ressource existe déja.");
		return false;
	}
		if (this.readyState === 4 && this.status == 400)
	{
		alert("Un ou plusieurs champs ne respectent pas les spécifications.");
		return false;
	}
		if (this.readyState === 4 && this.status == 500)
	{
		alert("Le serveur est inaccessible !!");
		return false;
	}
	if (this.readyState === 4 && this.status == 200) {
		code = this.responseText;
		switch (type) {
			case 'CON' :
		alert("Vous allez être redirigé vers le site");
		alert(this.responseText);
		QDDCOOKTOT();
		document.location.href="conf.html";
		break;
		case 'GET' :
		switch (idds) {
		case 'nsoptions' :
		if (pass == 0 || pass == null){
		GET1 = JSON.parse(this.responseText);
					document.getElementById("formjs").innerHTML = '';
		for (var i = 0; i < GET1.CamConfigParameters.length; i++){
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>'+GET1.CamConfigParameters[i].name+' = '+GET1.CamConfigParameters[i].value+'</td></tr></table>');
		MonTableau[i] = GET1.CamConfigParameters[i].name;
		MonTableauV[i] = GET1.CamConfigParameters[i].value;
		}
		idds = "nsoptions";
		cible = "NSOPTIONS";
		pass = 1;
		var method = "LISTNSOC";
		makeCorsRequest(method,NSNOW, "LIST", cible, null);}
		if (pass == 1) {
		GET2 = JSON.parse(this.responseText);
		for (var i = 0; i < GET2.nsCtrlConfigParameters.length; i++){
		MonTableau2[i] = GET2.nsCtrlConfigParameters[i].name;
		MonTableauV2[i] = GET2.nsCtrlConfigParameters[i].value;
		if (GET2.nsCtrlConfigParameters[i].name == "httpTimeout" || GET2.nsCtrlConfigParameters[i].name == "oamFmUri" || GET2.nsCtrlConfigParameters[i].name == "oamFmPort" ) {
		if (MonTableau.indexOf(GET2.nsCtrlConfigParameters[i].name) == -1){
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>'+GET2.nsCtrlConfigParameters[i].name+' = '+GET2.nsCtrlConfigParameters[i].value+'</td></tr></table>');}
		else{
			if (MonTableauV.indexOf(GET2.nsCtrlConfigParameters[i].value) == -1){
				alert("Une erreur de configuration est apparue au niveau de "+GET2.nsCtrlConfigParameters[i].name+" car ce parametre a été renseigné deux fois mais n'a pas la même valeur a chaque fois !!");
			}
		}}
				else {
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>'+GET2.nsCtrlConfigParameters[i].name+' = '+GET2.nsCtrlConfigParameters[i].value+'</td></tr></table>');}}
		idds = "nsoptions";
		cible = "NSOPTIONS";
		pass = 2;
		var method = "LISTNSOO";
		makeCorsRequest(method,NSNOW, "LIST",cible,null);}
		if (pass == 2) {
		GET3 = JSON.parse(this.responseText);
		for (var i = 0; i < GET3.OamConfigParameters.length; i++){
		if (GET3.OamConfigParameters[i].name == "httpTimeout" || GET3.OamConfigParameters[i].name == "oamFmUri" || GET3.OamConfigParameters[i].name == "oamFmPort" ) {
		if (MonTableau.indexOf(GET3.OamConfigParameters[i].name) == -1){
					if (MonTableau2.indexOf(GET3.OamConfigParameters[i].name) == -1){
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>'+GET3.OamConfigParameters[i].name+' = '+GET3.OamConfigParameters[i].value+'</td></tr></table>');}}
		else{
			if (MonTableauV.indexOf(GET3.OamConfigParameters[i].value) == -1){
				alert("Une erreur de configuration est apparue au niveau de "+GET3.OamConfigParameters[i].name+" car ce parametre a été renseigné deux fois mais n'a pas la même valeur a chaque fois !!");
			}
			if (MonTableauV2.indexOf(GET3.OamConfigParameters[i].value) == -1){
				alert("Une erreur de configuration est apparue au niveau de "+GET3.OamConfigParameters[i].name+" car ce parametre a été renseigné deux fois mais n'a pas la même valeur a chaque fois !!");
			}
		}}
		else {
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>'+GET3.OamConfigParameters[i].name+' = '+GET3.OamConfigParameters[i].value+'</td></tr></table>');}}
		pass = 0;
		}
		break;
		case 'mqttBroker' :
		var BrokerNOW = getCookie('BrokerNOW');
		GET = JSON.parse(this.responseText);
		codeNAME = GET.mqttBrokerId;
		alert(getCookie('BrokerNOW'));
		alert(getCookie('typeMod'));
		alert(GET.mqttBrokerPort);
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td><h1>Aperçu configuration de : '+BrokerNOW+'</h&></td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>MQTTBROKERID = '+GET.mqttBrokerId+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>MQTTBROKERADDRESS = '+GET.mqttBrokerAddress+'/tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>MQTTBROKERPPORT = '+GET.mqttBrokerPort+'</td></tr>');
		break;
		case 'gateway' :
		var GatewayNOW = getCookie('GatewayNOW');
		GET = JSON.parse(this.responseText);
		codeNAME = GET.gatewayId;
		alert(getCookie('GatewayNOW'));
		alert(getCookie('typeMod'));
		alert(GET.mqttBrokerPort);
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td><h1>Aperçu configuration de : '+GatewayNOW+'</h&></td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>gatewayId = '+GET.gatewayId+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>gatewayName = '+GET.gatewayName+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>mqttBrokerID = '+GET.mqttBrokerId+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>serial = '+GET.serial+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>hostname = '+GET.hostName+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>ethernetMac = '+GET.ethernetMac+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>comment = '+GET.comment+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>swRev = '+GET.swRev+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>hwRev = '+GET.hwRev+'</td></tr>');
		// document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>setPosition = '+GET.setPosition+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>x_pos_m = '+GET.x_pos_m+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>y_pos_m = '+GET.y_pos_m+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>z_pos_m = '+GET.z_pos_m+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>param_1 = '+GET.param_1+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>param_2 = '+GET.param_2+'</td></tr>');
		for (var i = 0; i < GET.gatewayHwChannels.length; i++){
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td><h1>Canal '+i+'</h&></td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>channelId = '+GET.gatewayHwChannels[i].channelId+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>mode = '+GET.gatewayHwChannels[i].mode+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>inv_pol = '+GET.gatewayHwChannels[i].inv_pol+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>dataRate = '+GET.gatewayHwChannels[i].dataRate+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>centerFrequency = '+GET.gatewayHwChannels[i].centerFrequency+'</td></tr>');
				
		}
		break;
		case 'device' :
		var DeviceNOW = getCookie('DeviceNOW');
		GET = JSON.parse(this.responseText);
		codeNAME = GET.deviceId;
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td><h1>Aperçu configuration de : '+DeviceNOW+'</h&></td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>deviceName = '+GET.deviceName+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>timerPiggyBack = '+GET.timerPiggyBack+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>type = '+GET.type+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>version = '+GET.version+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>mode = '+GET.mode+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>maxDevicePendingJoinForReactiveControl = '+GET.maxDevicePendingJoinForReactiveControl+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>maxDedupJoinPreventive = '+GET.maxDedupJoinPreventive+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>maxDedupJoinReactive = '+GET.maxDedupJoinReactive+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>devKey = '+GET.devKey+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>asaId = '+GET.asaId+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>serial = '+GET.serial+'</td></tr>');	
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>comment = '+GET.comment+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>swRev = '+GET.swRev+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>hwRev = '+GET.hwRev+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>class = '+GET.class+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>loc_enable = '+GET.loc_enable+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>loc_max_period_time_minutes = '+GET.loc_max_period_time_minutes+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>loc_min_period_time_minutes = '+GET.loc_min_period_time_minutes+'</td></tr>');
		for (var i = 0; i < GET.deviceChannels.length; i++){
				document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td><h1>Canal '+i+'</h&></td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>channelId = '+GET.deviceChannels[i].channelId+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>dataRateName = '+GET.deviceChannels[i].dataRateName+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>fbin = '+GET.deviceChannels[i].fbin+'</td></tr>'); }
		break;
		case 'ASA' :
		var iddc = Number(getCookie('iddc'));
		var ASANOW = getCookie('ASANOW');
				MKString = JSON.parse(this.responseText);
				alert(MKString.reqId);
		var ASANB = getCookie('ASANB');
		alert(ASANOW);
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td><h1>Aperçu configuration de : '+MKString.asaConfigs[ASANB].asaId+'</h&></td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>asaUri : '+MKString.asaConfigs[ASANB].asaUri+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>keyFile : '+MKString.asaConfigs[ASANB].keyFile+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>keyPwd : '+MKString.asaConfigs[ASANB].keyPwd+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>trustFile : '+MKString.asaConfigs[ASANB].trustFile+'</td></tr>');
		document.getElementById("formjs2").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td>trustPwd : '+MKString.asaConfigs[ASANB].trustPwd+'</td></tr>');
		RedirTo(iddc);


		break;
		}
		break;
			case 'LIST' :
		switch (document.getElementById("sel1").selectedIndex) {
			case 1 :
		MKString = JSON.parse(this.responseText);
		alert(MKString.reqId);
				document.getElementById("formjs").innerHTML = '';
		for (var i = 0; i < MKString.mqttBrokerIds.length; i++){
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td></td><td><p align="left">'+' '+' '+MKString.mqttBrokerIds[i]+' <img width="30px" src="loupe.jpg" OnClick="RedirTo(MKString.mqttBrokerIds['+i+'], '+document.getElementById("sel1").selectedIndex+' );"><img width="30px" src="DelBtn.png" OnClick="RedirTo(MKString.mqttBrokerIds['+i+'], '+document.getElementById("sel1").selectedIndex+','+i+' );"> <input type="checkbox" id="'+MKString.mqttBrokerIds[i]+'" name="oui" value="newsletter"></td><td></td></tr>');		}
		return JSON.parse(this.responseText); 
			break;
			case 0 :
			MKString = JSON.parse(this.responseText);
		alert(MKString.reqId);
				document.getElementById("formjs").innerHTML = '';
		for (var i = 0; i < MKString.gatewayIds.length; i++){
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td></td><td><p align="left">'+' '+' '+MKString.gatewayIds[i]+' <img width="30px" src="loupe.jpg" OnClick="RedirTo(MKString.gatewayIds['+i+'], '+document.getElementById("sel1").selectedIndex+' );"><img width="30px" src="DelBtn.png" OnClick="RedirTo(MKString.gatewayIds['+i+'], '+document.getElementById("sel1").selectedIndex+','+i+' );"><input type="checkbox" id="'+MKString.gatewayIds[i]+'" name="oui" value="newsletter"></td><td></td></tr>');		}
		return JSON.parse(this.responseText); 
			break;
			case 2 :
		MKString = JSON.parse(this.responseText);
		alert(MKString.reqId);
				document.getElementById("formjs").innerHTML = '';
		for (var i = 0; i < MKString.deviceIds.length; i++){
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td></td><td><p align="left">'+' '+' '+MKString.deviceIds[i]+' <img width="30px" src="loupe.jpg" OnClick="RedirTo(MKString.deviceIds['+i+'], '+document.getElementById("sel1").selectedIndex+' );"><img width="30px" src="DelBtn.png" OnClick="RedirTo(MKString.deviceIds['+i+'], '+document.getElementById("sel1").selectedIndex+','+i+' );"><input type="checkbox" id="'+MKString.deviceIds[i]+'" name="oui" value="newsletter"></td><td></td></tr>');		}
		return JSON.parse(this.responseText); 
			break;
						break;
			case 3 :
		MKString = JSON.parse(this.responseText);
		alert(MKString.reqId);
				document.getElementById("formjs").innerHTML = '';
		for (var i = 0; i < MKString.asaConfigs.length; i++){
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="help1"><tr><td></td><td><p align="left">'+' '+' '+MKString.asaConfigs[i].asaId+'<input type="checkbox" onclick="tableaugen(MKString.asaConfigs['+i+'].asaId, this.checked,'+i+');";id="'+MKString.asaConfigs[i].asaId+'" name="oui" value="'+MKString.asaConfigs[i].asaId+'"></td><td></td></tr>');		}
		document.getElementById("formjs").insertAdjacentHTML('beforeend', '<img width="30px" src="loupe.jpg" OnClick="RedirTo('+document.getElementById("sel1").selectedIndex+',0);">');
		return JSON.parse(this.responseText); 
			break;}
		break; 
			case 'DEL' :
		alert(this.responseText)
		document.location.href="conf.html";
			break;
			case 'ADD' :
		alert(this.responseText)
		console.log(this.status);
		document.location.href="conf.html";
break;}
CON = true;}})
  // Response handlers.
  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
	return false;
  };
	xhr.setRequestHeader("Content-Type", "application/json");
	if (idd != null){
	xhr.send(iddString);
	}
	else{xhr.send();}
	}	
// var xhr = new XMLHttpRequest();
// var CON;
// xhr.addEventListener("readystatechange", function () {
	// if (this.readyState === 4 && this.status == 200) {
		// alert("Vous allez être redirigé vers le site");
		// alert(this.responseText);
		// QDDCOOKTOT();
	// CON = true;}
	// if (this.readyState === 4 && this.status != 200)
	// { alert("Votre URI N'existe pas ou votre NS n'est pas accessible !");}
	
	
	// });
// xhr.open("GET", "https://"+URI+".cluster4.lab.acs.altran.com:443/OAM/CM/v1/allMqttBrokers/100");

// xhr.setRequestHeader("Cache-Control", "no-cache");
// xhr.setRequestHeader("Postman-Token", "3b01e86b-12a0-47a6-bd25-515cccbd5af8");
function tableaugen(param, check, i){
	alert(param);
	if (check == true){
	tablSel.push(param);
	numtablSel.push(i);
	alert(numtablSel[0]);}
	else {
		tablSel.removeValue(param);
		numtablSel.removeValue(i);
	}
}
Array.prototype.removeValue = function(x)
{
     var trouvee = false;
 
      // parcours du tableau
     for(var i=0; i+2<=this.length; i++)
     {
          if(this[i] == x)
               trouvee = true;
          if(trouvee)
               this[i] = this[i+1];   // on decale
     }
 
     // suppression du dernier element
     if(trouvee || this[this.length-1] == x)
     {
          this.pop();
          return true;
     }
     else
        return false;
};
	function Ajout2(){ // Cette fonction ajoute un nouveau channel et un nouveau champ de channel au form(device)
	if (d == null) // Défini la variable t à 0 dans le cas ou elle est null
	{d = 0;}
	d=d+1; // incrémente t de 1 pour la suite
	// var ChannelId; // Déclare la variable ChannelId
	// var mode; // Déclare la variable mode
	// var dataRate; // Déclare la variable dateRate 
	// var inv_pol; // Déclare la variable inv_pol
	// var centerFrequency; // Déclare la variable centerFrequency
	// Ajoute un nouveau champ dans le tableau
	if(d<16) document.getElementById("tableDevice").insertAdjacentHTML('beforeend', '<table id="tableDevice" class="table"><tr><td><p><span data-tip="MANDATORY.&#xa;Your new channel\'s Id. From 0 to 15."><img width="10px" src="pointint.png"></span> channelId'+d+' : <p> <input type ="text" id="channelId'+d+'"></td><td></td><td><p><span data-tip="MANDATORY.&#xa;Possible values : 0,1,...,15 for DR0;DR1,...,DR15."><img width="10px" src="pointint.png"></span> dataRateName'+d+' : <p> <input id="dataRateName'+d+'" type="text" onkeypress="return restrictCharacters(\'dataRateName\', event, false);"></td><td></td><td><p><span data-tip="MANDATORY.&#xa; Enables to define the center frequency."><img width="10px" src="pointint.png"></span> fbin'+d+' : <p> <input type ="text" id="fbin'+d+'" onkeypress="return restrictCharacters(\'fbin\', event, false);"></td></tr></table>');
		// window['ChannelId'+d] = "ChannelId " + d; // Ajoute t a la variable ChannelId pour obtenir des variables incrémentée
		
	    // window['mode'+d] = "mode " + d; // Ajoute t a la variable mode pour obtenir des variables incrémentée
		
	    // window['dataRate'+d] = "dataRate " + d; // Ajoute t a la variable dataRate pour obtenir des variables incrémentée
		
	    // window['inv_pol'+d] = "inv_pol " + d; // Ajoute t a la variable inv_pol pour obtenir des variables incrémentée
		
	    // window['centerFrequency'+d] = "centerFrequency " + d; // Ajoute t a la variable centerFrequency pour obtenir des variables incrémentée
}
function MakeFich()
		{
			var download = document.createElement('a');
			download.setAttribute('href',"data:text/plain;charset=utf-8,"+encodeURIComponent(code));
			download.setAttribute('download',"JSONof"+codeNAME+".txt");
			download.click();
		}
	function QDDLOAD (){
		var Sname = getCookie('IDNS1');
		for (var i = 0; i <= Sname; i++){
		var select = document.getElementById ("NSCONFB");
		var AddName = getCookie('IDNSS'+i);
		if (AddName != null) {
		var newOption = new Option (AddName);
		select.options.add (newOption);}}}
		
			// alert(oui.GTWCOOK[0].name);
		// for (var i = 0; i <= oui.GTWCOOK.length-1; i++){
			// var select = document.getElementById ("NSCONFB");
			// var AddName = oui.GTWCOOK[i].name;
			// var newOption = new Option (AddName);
			// select.options.add (newOption);}
function RedirTo(type, NB)
{
	switch (type) {
		case 1 :
	scookie('BrokerNOW',NS,100)
	scookie('iddc',type,100)
			window.open('http://localhost/Site%20web/FR/View.html?');
		break;
		case 0 :
	scookie('GatewayNOW',NS,100)
	scookie('iddc',type,100)
			window.open('http://localhost/Site%20web/FR/View.html?');
		break;
		case 2 :
	scookie('DeviceNOW',NS,100)
	scookie('iddc',type,100)
			window.open('http://localhost/Site%20web/FR/View.html?');
		break;
		case 3 :
		
		var i= getCookie('iii');	
		if (i <= tablSel.length){
	scookie('iii',i,100);
	console.log(tablSel.length);
	scookie('ASANOW',tablSel[i],100);
	scookie('iddc',type,100);
	scookie('ASANB',numtablSel[i],100);
	scookie('tablS',tablSel,100);
	scookie('numtablS',numtablSel,100);
	alert(getCookie('ASANB'));
		i++
	window.open('http://localhost/Site%20web/FR/View.html?');}
	else {
		i = 0;
	scookie('iii',i,100);
		}
		break;
	}

}
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('La chaine d\'origine est : "' + stringToSplit + '"');
  console.log('Le délimiteur est : "' + separator + '"');
  console.log("Le tableau comporte " + arrayOfStrings.length + " elements : ");

  for (var i=0; i < arrayOfStrings.length; i++)
    print(arrayOfStrings[i] + " / ");
return arrayOfStrings;
}
function AffichView()
{	var iddc = getCookie('iddc');
	switch (iddc)
	{
		case "1" :
		idds = "mqttBroker";
	var BRmethod = "GET";
	var BRURI = getCookie('IDNSTOT');
	var BRtype= 'GET';
	var BRcible = getCookie('BrokerNOW');
		makeCorsRequest(BRmethod, BRURI, BRtype,BRcible);
		break;
		case "0" :
		idds = "gateway";
	var GWmethod = "GET";
	var GWURI = getCookie('IDNSTOT');
	var GWtype= 'GET';
	var GWcible = getCookie('GatewayNOW');
		makeCorsRequest(GWmethod, GWURI, GWtype,GWcible);
		break;
		case '2' :
		idds = "device";
	var DVmethod = "GET";
	var DVURI = getCookie('IDNSTOT');
	var DVtype= 'GET';
	var DVcible = getCookie('DeviceNOW');
		makeCorsRequest(DVmethod, DVURI, DVtype, DVcible);
		break;
		case '3' :
		idds = "ASA";
	var ASAcible = getCookie('ASANOW');
	var ASAURI = getCookie('IDNSTOT');
	tablSels = getCookie('tablS');
	numtablSels = getCookie('numtablS');
	tablSel = splitString(tablSels, virgule);
	numtablSel = splitString(numtablSels, virgule);
	var ASAtype = 'GET';
	var ASAmethod = "GETA";
		makeCorsRequest(ASAmethod,ASAURI, ASAtype, ASAcible);
	}
}
function MakePARA(NomVAR, Value) {
	var LISTPAR = document.createElement('p');
	LISTPAR.id = 'IDAFFICH';
	var text = document.createTextNode(NomVAR+"   "+Value);
	LISTPAR.appendChild(text);
	document.body.appendChild(LISTPAR);
}
function DELCOOK(){
	var Sname = getCookie('IDNS1');
	for(var i = 0; i < Sname; i++){
	Delete1Cookie('IDNSS'+Sname);
	}
	Delete1Cookie('IDNS1')
	location.reload();
}

function Delete1Cookie (name) {
	var exp=new Date();
	exp.setTime (exp.getTime() - 100000);
	var cval=getCookie(name);
	document.cookie=name+"="+cval+"; expires="+exp.toGMTString();
	}	
	
   function  getCookie(name){
     if(document.cookie.length == 0)
       return null;

     var regSepCookie = new RegExp('(; )', 'g');
     var cookies = document.cookie.split(regSepCookie);

     for(var i = 0; i < cookies.length; i++){
       var regInfo = new RegExp('=', 'g');
       var infos = cookies[i].split(regInfo);
       if(infos[0] == name){
         return unescape(infos[1]);
       }
     }
     return null;
   }
   
   function Upload()
   {
	   var reader = new FileReader();
	   reader.readAsText(file, 'UTF-8');
	   reader.readAsText(file, 'ISO-8859-1');
   }
				// Sname = entierAleatoire(1, 9999999);
		// alert(Sname + name);
		// name = document.getElementById("NSCONFT").value;
		// Cook.name = name;
		// Cook.Sname = Sname; 
		// oui.GTWCOOK.push(Cook); 
		// GTWstring = JSON.stringify(oui);
		// for (var i = 0; i <= oui.GTWCOOK.length-1; i++){
			// createVar(('variable'+i),oui.GTWCOOK[i].name);
			// alert(name+i);
			// scookie('IDNS',oui.GTWCOOK[i].name,100);
			// scookie('IDNS',oui.GTWCOOK[i].Sname,100);
			// alert(oui.GTWCOOK[i].name)
			// var select = document.getElementById ("NSCONFB");
			// var AddName = oui.GTWCOOK[i].name;
			// var newOption = new Option (AddName);
			// select.options.add (newOption); 
			// alert(oui.GTWCOOK[i].Sname);
			// alert(oui.GTWCOOK[i].name);}}
	// function IDINCCOOK() {
		// for (var i = 0; i <= oui.GTWCOOK.length; i++){
	// alert(Sname + name);	
		// Cook.Sname = Sname; // ajoute centerFrequency en propriété de l'objet
		// Cook.name = name;
		// oui.GTWCOOK.push(Cook); // rentre l'objet chan à la fin du tableau gatewayHwChannels créé precedement
		// GTWstring = JSON.stringify(oui); // ajoute l'objet en string dans la variable gwString// Affiche la variable gwString
		// alert(oui.GTWCOOK[0].Sname);
		// alert(oui.GTWCOOK[0].name);
	// return GTWstring;}




// function linkurl (){
	// var tavariable = "index.html";
	// document.location.href="www.siteweb.com/"+tavariable+"";
// }