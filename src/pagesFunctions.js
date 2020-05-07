/*
 * Variable donde se guardaran los atributos que se envían a la pagina mediante la url
 *
 */
var paramArray = {};

/*
 * UrlCreateIFrame()
 *	@void
 *
 * Crea un objeto iframe en el body cargando la pagina que se indica con el atributo 'page'
 * Se transmiten el resto de atributos a la página cargada de la misma forma que se reciben
 *
 */
function UrlCreateIFrame(){
	var ifrm = document.createElement("iframe");
    ifrm.id="webActual";
    ifrm.frameborder = "0";
    ifrm.scrolling = "no";

	var paramstr = window.location.search.substr(1);
	var paramarr = paramstr.split ("&");
	var params = {};
	paramArray = params;
	var url="src/";
	for ( var i = 0; i < paramarr.length; i++) {
	    var tmparr = paramarr[i].split("=");
	    params[tmparr[0]] = tmparr[1];
	}
	switch (params['pag']){
		case "start":
	    	url=url+"start.html?";
	    	break;
		case "menu":
	    	url=url+"menu.html?";
	    	break;
		case "options":
	    	url=url+"options.html?";
	    	break;
		case "game":
	    	url=url+"game.html?";
	    	break;
		case "audio":
	    	url=url+"audio.html?";
	    	break;
		case "parchis":
	    	url=url+"parchis.html?";
	    	document.getElementById("home_button").style.left="22%";
	    	document.getElementById("tip_button").style.left="22%";
	    	break;
		case "feria":
	    	url=url+"feria.html?";
	    	document.getElementById("home_button").style.left="11%";
	    	document.getElementById("tip_button").style.left="11%";
	    	break;
	    default:
	    	url=url+"start.html?pag=start&eS=0&eO=2730&eG=1.0.1.0.1.0.1.0.1.0.1.0&eP=0&eF="
	}
	for (var i=0;i<paramarr.length; i++){
		url=url+paramarr[i]+"&";
	}
	ifrm.setAttribute("src", url);
    document.body.appendChild(ifrm);
}

/*
 * Tips()
 *	@void
 *
 * Escoge la pista a mostrar en funcion del estado de la partida
 *
 */
function Tips(){
	var paramstr = window.location.search.substr(1);
	var paramarr = paramstr.split ("&");
	var params = {};
	var i;
	for (i=0; i<paramarr.length; i++) {
	    var tmparr = paramarr[i].split("=");
	    params[tmparr[0]] = tmparr[1];
	}
	var tip;
	switch (params['pag']){
		case "menu":
			if (params['eF']=="0" && params['eG']=="1.0.1.0.1.0.1.0.1.0.1.0"){
				tip="¿Te suena el menú?...No sé por qué...";
			}
			else if (params['eF']=='0'){
				tip="Se que te haces mayor, pero para mí sigues siendo mi bba de 18.¿No quieres seguir JUGANDO?";
			}
			else{
				tip="Además del juego,\n por otro camino has de avanzar,\n sé astuta y atenta,\n y pronto lo adivinarás.";
			}
			alert(tip);
			break;
		case "options":
			if (params['eG']=="1.0.1.0.1.0.1.0.1.0.1.0"){
				tip="01101001010101010010101001010101001 ¿¿??";
			}
			else{
				tip="Vaya menu currado, pero... ¿No ves nada raro?";
			}
			alert(tip);
			break;
		case "game":
			tip="01101001010101010010101001010101001 ¿¿??";
			alert(tip);
			break;
		case "parchis":
			if (params['eP']=="0"){
				tip="[dd/mm 23:47] K: Un parchis?";
			}
			else{
				tip="¡Ala! ¡Que cosa más rara! Ha salido el dia de hoy.\n Bien hecho K!";
			}
			alert(tip);
			break;
		case "feria":
			if (params['eF']==""){
				tip="Ya estamos de feria K!! Coge a la guitarra que vamos a bailar!"
				editarParam('eF',"1");
				alert(tip);
				send2Url("home","feria");
			}
			else{
				tip="LAvanda SOLete MImado REfresco "
				alert(tip);
			}
			break;
		default:
			tip="Felicidades koala!!";
			alert(tip)
	}
}

/*
 * urlInterpret()
 *	@void
 *
 * Lee y guarda los parametros recibidos por url
 * Ejecuta la funcion correspondiente a la pagina cargada para leer sus parametros
 *
 */
function urlInterpret(){
	var paramstr = window.location.search.substr(1);
	var paramarr = paramstr.split ("&");
	var params = {};
	var i;
	for (i=0; i<paramarr.length; i++) {
	    var tmparr = paramarr[i].split("=");
	    params[tmparr[0]] = tmparr[1];
	}
	paramArray = params;
	switch (params['pag']){
		case "start":
	    	paramStart(params);
	    	break;
		case "menu":
	    	paramMenu(params);
	    	break;
		case "options":
	    	paramOptions(params);
	    	break;
		case "audio":
	    	paramAudio(params);
	    	break;
		case "game":
	    	paramGame(params);
	    	break;
		case "parchis":
	    	paramParchis(params);
	    	break;
		case "feria":
	    	paramFeria(params);
	    	break;
	}
}

/*
* send2Url(actual,final)
*	@actual -> pagina desde la que ejecutamos la funcion
*	@elem ->  elemento de la pagina que ejecuta la funcion
*
* Cargamos en la ventana la pagina index pasando como atributo la pagina que cargaremos en el iframe
* Tambien enviamos el resto de atributos actualizados con la url
*
*/
function send2Url(actual,elem){
	var url="../index.html?";
	switch (actual){
		case "home":
			url="index.html?";
			if(paramArray['eF'].split(".").length>4 && paramArray['eP']!="0"){
				alert("Enhorabuena K!! Has superado todas las pruebas disponibles hasta el momento.");
				alert("Ya que no puedo verte y sacarte una sonrisilla en persona,\n espero que te haya gustado esta tonteriilla ;)");
				alert("Muchas Felicidades Kkota!! 1 10V3 U");
				url=url+"pag=parchis&";				
			}
			else if(elem=="feria"){
				url=url+"pag=feria&";
				console.log("feria");
			}
			else{
				url=url+"pag=menu&";				
				if (paramArray['eF'].split(".").length<4){
					paramArray['eF']="";
				}
			}
			url=url+splitInverter();
			break;
		case "start":
			if(elem=="startButton"){
				url=url+"pag=menu&";
			}
			url=url+splitInverter();
			break;
		case "menu":
			if(elem=="backButton"){
				url=url+"pag=start&";
			}
			else if(elem=="optionsButton"){
				url=url+"pag=options&";
			}
			else if(elem=="game"){
				url=url+"pag=feria&";
			}
			url=url+splitInverter();
			break;
		case "options":
			if(elem=="backButton"){
				url=url+"pag=menu&";
			}
			else if(elem=="gameButton"){
				url=url+"pag=game&";
			}
			else if(elem=="audioButton"){
				url=url+"pag=audio&";
			}
			else if(elem=="parchis"){
				url=url+"pag=parchis&"
			}
			url=url+splitInverter();
			break;
		case "audio":
			if(elem=="backButton"){
				url=url+"pag=options&";
			}
			url=url+splitInverter();
			break;
		case "game":
			if(elem=="backButton"){
				url=url+"pag=options&";
			}
			url=url+splitInverter();
			break;
		case "parchis":
			if(elem=="parchis"){
				url=url+"pag=parchis&";
			}
			url=url+splitInverter();
			break;
		case "feria":
			if(elem=="feria"){
				url=url+"pag=feria&";
			}
			url=url+splitInverter();
			break;
	}
	window.top.location.href = url;
}

/*
 * splitInverter()
 *	@void
 *
 * Encadena los elementos del array paramArray en un string que devuelve
 *
 */
function splitInverter(){
	var str ="";
	var i;
	for (i in paramArray){
		if (i != "pag" && paramArray[i] != undefined){
			str=str+i+"="+paramArray[i]+"&";
		}
	}
	return str;
}

/*
 * editarParam(para,value)
 *	@para -> parametro del array a editar
 *	@value -> valor actualizado del parametro
 *
 * Edita el parametro indicado del array de parametros
 *
 */
function editarParam(para,value){
	paramArray[para]=value;
}

/*
 * paramStart(params)
 *	@params -> array con los parametros recibidos mediante url
 *
 * Analiza los parametros correspondientes a la pagina Start para configurarla correctamente
 *
 */
function paramStart(params){
}

/*
 * paramMenu(params)
 *	@params -> array con los parametros recibidos mediante url
 *
 * Analiza los parametros correspondientes a la pagina Menu para configurarla correctamente
 *
 */
function paramMenu (params){
}

/*
 * paramOptions(params)
 *	@params -> array con los parametros recibidos mediante url
 *
 * Analiza los parametros correspondientes a la pagina Options para configurarla correctamente
 *
 */
function paramOptions (params){
	var text1 = document.createTextNode("OPTIONS  -  "+params['eO']);
	document.getElementById("options").appendChild(text1);
	if (params["eO"]=="1999"){
		document.getElementById("options").setAttribute("onclick", "send2Url('options', 'parchis')");
	}
	else{
		document.getElementById("options").setAttribute("onclick", "");
	}
}

/*
 * paramAudio(params)
 *	@params -> array con los parametros recibidos mediante url
 *
 * Analiza los parametros correspondientes a la pagina Audio para configurarla correctamente
 *
 */
function paramAudio (params){
}

/*
 * paramGame(params)
 *	@params -> array con los parametros recibidos mediante url
 *
 * Analiza los parametros correspondientes a la pagina Game para configurarla correctamente
 *
 */
function paramGame (params){
	var ticks = params['eG'].split(".");
	var i;
	for (i=0;i<ticks.length;i++){
		if (ticks[i]=="0"){
			creaTick(i,"unchecked");
		}
		else{
			creaTick(i,"checked");
		}
	}
}

/*
 * paramParchis(params)
 *	@params -> array con los parametros recibidos mediante url
 *
 * Analiza los parametros correspondientes a la pagina Parchis para configurarla correctamente
 *
 */
function paramParchis (params){
	switch (params['eP']){
		case "0":
			break;
		default:
			var numeros=params['eP'].split(".")
			document.getElementById("dado_dia1_img").setAttribute("src","../media/images/"+numeros[0]+".png");
			document.getElementById("dado_dia1_img").setAttribute("onclick","");
			document.getElementById("dado_dia2_img").setAttribute("src","../media/images/"+numeros[1]+".png");
			document.getElementById("dado_dia2_img").setAttribute("onclick","");
			document.getElementById("dado_mes1_img").setAttribute("src","../media/images/"+numeros[2]+".png");
			document.getElementById("dado_mes1_img").setAttribute("onclick","");
			document.getElementById("dado_mes2_img").setAttribute("src","../media/images/"+numeros[3]+".png");
			document.getElementById("dado_mes2_img").setAttribute("onclick","");

			document.getElementById("fondo").setAttribute("src","../media/images/koala.png");
	}
}

/*
 * paramFeria(params)
 *	@params -> array con los parametros recibidos mediante url
 *
 * Analiza los parametros correspondientes a la pagina Feria para configurarla correctamente
 *
 */
function paramFeria (params){
	if(paramArray['eF']=="1"){
		var c;
		for (c=1;c<7;c++){
			var t;
			for(t=1;t<5;t++){
				elemen="p"+c.toString()+t.toString();
				console.log(document.body);
				document.getElementById(elemen).setAttribute("src","../media/images/circulo_senal.png");
			}
		}
	}
	else if (paramArray['eF'].split(".").length>4){
		document.getElementById("bloque").parentNode.removeChild(document.getElementById("bloque"));
		var divi = document.createElement("div");
		divi.setAttribute("class","relativa");
		divi.setAttribute("id","bloque");
		var imagen = document.createElement("img");
		imagen.setAttribute("src","../media/images/feria.jpg");
		imagen.setAttribute("width","50%");
		imagen.setAttribute("style","z-index: 3;")
		divi.appendChild(imagen);
		document.body.appendChild(divi);
	}
}

/*
 * creaTicks(elemento,modo)
 *	@elemento -> indice o numero del tick que queremos poner
 *	@modo -> checked: si esta marcado, unchecked: si esta desmarcado
 *
 * Crea un elemento tipo li en #mimenu  con los parametros indicados
 *
 */
 function creaTick(elemento,modo){
	var texts=["SUBTITLES","GAME HINTS","STRATEGIC TIPS","TUTORIAL HINTS","GORE","LOCK ON AIMING","LISTEN MODE","MELEE PROMPTS","SHOW TAG POPUPS","SHOW RETICLE","SHOW HUD","PHOTO MODE"];
	var li1 = document.createElement("li");
	var a1 = document.createElement("a");
	a1.setAttribute("class", "me");
	var text1 = document.createTextNode(texts[elemento]);
	var label1 = document.createElement("label");
	label1.setAttribute("class","onoffboton");
	var in1 = document.createElement("input");
	in1.setAttribute("type","checkbox");
	in1.setAttribute("name","onoffboton");
	in1.setAttribute("class", "onoffboton-checkbox");
	in1.setAttribute("onclick", "editarParam('eG', "+"cambiaTick("+elemento+")"+")");
	in1.setAttribute(modo, "");
	var span1 = document.createElement("span");
	span1.setAttribute("class","onoffboton-label");

	a1.appendChild(text1);
	label1.appendChild(in1);
	label1.appendChild(span1);
	li1.appendChild(a1);
	li1.appendChild(label1);
	document.getElementById("mimenu").appendChild(li1);

}
