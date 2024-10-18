var t;
var n;
var brokerString;
var gwString;
var gw = new Object();
var brDelString;
function convertion(){
			alert("yop");
			var tel = document.getElementById("sel1").selectedIndex;
			alert (tel);
	if (tel != n)
	{
	switch (tel) {
		case 1:		
			document.getElementById("formjs").innerHTML = '<form><table class="table"><tr><td></td><td><p> reqId : <p> <input type="text" id="reqid" ></td><td><p> mqttBrokerId : <p> <input type="text" id="brokerid" ></td><td></td></tr><tr><td><p> mqttBrokerPort :<p> <input type="text" id="brokerport"></td><td><p> mqttBrokerUser : <p> <input type="text" id="brokeruser"></td><td><p> mqttBrokerPassword : <p> <input type="text" id="brokerpw"></td><td><p> mqttBrokerAddress : </p> <input type="text" id="brokeraddr"></td></tr><tr><td><p> caFile : <p> <input type="text" id="cafile"></td><td><p> certFile : <p> <input type="text" id="certfile"></td><td><p> keyFile :<p> <input type="text" id="keyfile"></td><td><p> certPassword : <p> <input type="text" id="certpw"></td></tr></table>	<input class="btn btn-lg btn-success" onclick="transformation();"type="submit" value="End the configuration !"></form>';
			n = 1;
			break;
		case 0: 
			document.getElementById("formjs").innerHTML = '<form> <table class="table"><tr><td><p> mqttBrokerId : <p> <input type="text" id="mqttBrokerId" ></td> <td><p> reqId : <p> <input type="text" id="reqId" ></td><td><p> gatewayId : <p> <input type="text" id="gatewayId"></td><td><p> gatewayName :</p><input type="text" id="gatewayName"></td><td><p>hwRev :<p><input type="text" id="hwrev"></td> </tr><tr> <td> <p> serial : <p> <input type="text" id="serial"></td><td><p> hostName :<p> <input type="text" id="hostName"></td><td><p> ethernetMac :<p><input type="text" id="ethernetMac"></td> <td> <p> comment :<p> <input type="text" id="comment"></td><td> <p> swRev : <p> <input type="text" id="swRev"> </td></tr><tr><td><p> z_pos_m :<p> <input type="text" id="z_pos_m"></td><td><p> x_pos_m :<p><input type="text" id="x_pos_m"></td><td><p> y_pos_m :<p><input type="text" id="y_pos_m"></td><td><p> setposition : <p> <input type="text" id="setposition"></td><td><p> param_1 : <p> <input type ="text" id="param_1"></td></tr><tr><td></td><td></td><td><p> param_2 : <p> <input type ="text" id="param_2"></td><td></td><td></td><tr><td><p></td></tr><tr><td colspan="5"><p> <h1>CHANNEL MANAGEMENT : </h1> <input id="test" class="btn-secondary" type="button" onClick="Ajout();" value="Add a channel"> </td></tr><tr><td><p> ChannelId : <p> <input type ="text" id="ChannelId"></td><td><p> mode : <p> <input type ="text" id="mode"></td><td><p> dataRate : <p> <input type ="text" id="dataRate"></td><td><p> inv_pol : <p> <input type ="text" id="inv_pol"></td><td><p> centerFrequency : </p><input type ="text" id="centerFrequency"></td></tr></table>   <input class="btn btn-lg btn-success" id="positionbtn" onclick="RecModif();"type="submit" value="End the configuration !"></form>';
			n = 0;
			break;
		case 2: 
			document.getElementById("formjs").innerHTML = '<p>test<p>';
			n = 2;
			break;
	}
}
 }

function Suppression() {
		alert("Delete");
					var tel = document.getElementById("sel1").selectedIndex;
		switch (tel) {
		case 1: 
		document.getElementById("formjs").innerHTML = '<form><table class="table"><tr><td></td><td><p> reqId : <p> <input type="text" id="reqid" ></td><td><p> mqttBrokerId : <p> <input type="text" id="brokerid" ></td><td></td></tr></table><input class="btn btn-lg btn-danger" Onclick="Delete();return false;" type="submit" value="Delete"></form>';
			break;
		case 0: 
		alert("Cas 0");
			break;
		case 2: 
		alert("Cas 2");
			break;
		} 
		alert("éé");
	}
			
function transformation(){
	if(document.getElementById("reqid").value == "" || document.getElementById("brokerid").value == "" || document.getElementById("brokeraddr").value == "" || document.getElementById("brokeraddr").value == "" || document.getElementById("brokerport").value == "" ){
		alert('Please do enter the 4 following mandatory parameters : reqID, brokerId, brokerPort, and brokerAdress');
	}
	else {
		var objet = new Object();
		objet.reqId = document.getElementById("reqid").value;
		objet.mqttBrokerId  = document.getElementById("brokerid").value;
		objet.mqttBrokerAdress = document.getElementById("brokeraddr").value;
		objet.mqttBrokerPort = document.getElementById("brokerport").value;
		if(document.getElementById("brokeruser").value != ""){
			objet.mqtteBrokerUser = document.getElementById("brokeruser").value;
		}
		if(document.getElementById("brokerpw").value != ""){
			objet.mqttBrokerPassword = document.getElementById("brokerpw").value;
		}
		if(document.getElementById("cafile").value != ""){
			objet.caFile = document.getElementById("cafile").value;
		}		
		if(document.getElementById("certfile").value != ""){
			objet.certFile = document.getElementById("certfile").value;
		}
		if(document.getElementById("keyfile").value != ""){
			objet.keyFile = document.getElementById("keyfile").value;
		}
		if(document.getElementById("certpw").value != ""){
			objet.certPassword = document.getElementById("certpw").value;
		}
		brokerString = JSON.stringify(objet);
		alert(brokerString);
	}
}

function Ajout(){
	if (t == null)
	{t = 0;}
	alert("test");
	t=t+1;
	var ChannelId;
	var mode;
	var dataRate;
	var inv_pol;
	var centerFrequency;
	document.getElementById("formjs").insertAdjacentHTML('beforeend', '<table class="table"><tr><td><p> ChannelId'+t+' : <p> <input type ="text" id="ChannelId'+t+'"></td><td><p> mode'+t+' : <p> <input type ="text" id="mode'+t+'"></td><td><p> dataRate'+t+' : <p> <input type ="text" id="dataRate'+t+'"></td><td><p> inv_pol'+t+' : <p> <input type ="text" id="inv_pol'+t+'"></td><td><p> centerFrequency'+t+' : </p><input type ="text" id="centerFrequency'+t+'"></td></tr></table>');
		window['ChannelId'+t] = "ChannelId " + t;
		
	    window['mode'+t] = "mode " + t;
		
	    window['dataRate'+t] = "dataRate " + t;
		
	    window['inv_pol'+t] = "inv_pol " + t;
		
	    window['centerFrequency'+t] = "centerFrequency " + t;
		

		alert(ChannelId+t); // hello 0
		alert(mode+t); // hello 1
		alert(dataRate+t); // hello 2
		alert(inv_pol+t); // hello 3
		alert(centerFrequency+t); // hello 3
}


function RecModif() {
	gw.reqId = document.getElementById("reqId").value;
	gw.gatewayId = document.getElementById("gatewayId").value;
	gw.gatewayName = document.getElementById("gatewayName").value;
	gw.mqttBrokerId = document.getElementById("mqttBrokerId").value;
	gw.serial = document.getElementById("serial").value;
	gw.hostName = document.getElementById("hostName").value;
	gw.ethernetMac = document.getElementById("ethernetMac").value;
	gw.comment = document.getElementById("comment").value;
	gw.swRev = document.getElementById("swRev").value;
	gw.hwrev = document.getElementById("hwrev").value;
	gw.x_pos_m = document.getElementById("x_pos_m").value;
	gw.y_pos_m = document.getElementById("y_pos_m").value;
	gw.z_pos_m = document.getElementById("z_pos_m").value;
	gw.setposition = document.getElementById("setposition").value;
	gw.param_1 = document.getElementById("param_1").value;
	gw.param_2 = document.getElementById("param_2").value;
	gw.gatewayHwChannels=[];
	if(document.getElementById("ChannelId").value != "" && document.getElementById("mode").value != "" && document.getElementById("dataRate").value != "" && document.getElementById("inv_pol").value != "" && document.getElementById("centerFrequency").value != "")
	{var chan = new Object();
	chan.ChannelId = document.getElementById("ChannelId").value;
	chan.mode = document.getElementById("mode").value;
	chan.dataRate = document.getElementById("dataRate").value;
	chan.inv_pol = document.getElementById("inv_pol").value;
	chan.centerFrequency = document.getElementById("centerFrequency").value;
	gw.gatewayHwChannels.push(chan);}
	
	for (var i = 1; i <= t; i++){
	if(document.getElementById("ChannelId"+i).value != "" && document.getElementById("mode"+i).value != "" && document.getElementById("dataRate"+i).value != "" && document.getElementById("inv_pol"+i).value != "" && document.getElementById("centerFrequency"+i).value != "")
	{var chan = new Object();
	chan.ChannelId = document.getElementById("ChannelId"+i).value;
	chan.mode = document.getElementById("mode"+i).value;
	chan.dataRate = document.getElementById("dataRate"+i).value;
	chan.inv_pol = document.getElementById("inv_pol"+i).value;
	chan.centerFrequency = document.getElementById("centerFrequency"+i).value;
	gw.gatewayHwChannels.push(chan);
	}}
	gwString = JSON.stringify(gw);
	alert(gwString);
	
	}

function Delete() {
	alert("yop");
	var brDel = new Object();
	brDel.reqId = document.getElementById("reqid").value;
	brDel.mqttBrokerId = document.getElementById("brokerid").value;
	brDelString = JSON.stringify(brDel);
	alert(brDelString);
}