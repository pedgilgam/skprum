function creaTick(elemento,modo){
	var texts=["GAME HINTS","STRATEGIC TIPS","TUTORIAL HINTS","GORE","LOCK ON AIMING","LISTEN MODE","MELEE PROMPTS","SHOW TAG POPUPS","SHOW RETICLE","SHOW HUD"];
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
	in1.setAttribute(modo, "");
	var span1 = document.createElement("span");
	span1.setAttribute("class","onoffboton-label");

	label1.appendChild(in1);
	label1,appendChild(span1);
	li1.appendChild(a1);
	li1.appendChild(label1);
	document.getElementById("mimenu").appendChild(li1);

}