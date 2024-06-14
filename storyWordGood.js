function tellStory(){
 //gather form elements
 var txtBoy = document.getElementById("txtBoy");
 var txtGirl = document.getElementById("txtGirl");
 var txtArma = document.getElementById("txtArma");
 var txtNum = document.getElementById("txtNum");
 var txtMoney = document.getElementById("txtMoney");
 var txtEnemigo = document.getElementById("txtEnemigo");
 var txtV = document.getElementById("txtV");
 var txtAsig = document.getElementById("txtAsig");
 var output = document.getElementById("output");
 var txtImagen = document.getElementById("txtImagen");
 
 //create variables for input
 var boy = txtBoy.value;
 var girl = txtGirl.value;
 var armaElegida = txtArma.value;
 var numero = txtNum.value;
 var dinero = txtMoney.value;
 var enemigo = txtEnemigo.value;
 var verbo = txtV.value;
 var asignatura = txtAsig.value;
 var imagenElegida = txtImagen.value;
 
var imagen;
 
 switch(imagenElegida)

   {

   case "Lagarto":

      imagen='<img src="images/lagarto.png"  style="width: 50px;" />';

      break

   case "Pajaro":

      imagen='<img src="images/pajaro.png" style="width: 50px;"/>';

      break
	  
	case "Cobaya":

      imagen='<img src="images/cobaya.png" style="width: 50px;"/>';

      break
	  
	case "Piedra":

      imagen='<img src="images/piedra.png" style="width: 50px;"/>';

      break

   default:

      imagen='<img src="images/lagarto.png" style="width: 50px;"/>';     

   }
   
   
   var arma;
   
   switch(armaElegida)

   {

   case "Almohada":

      arma='<img src="images/almohada.png"  style="width: 50px;" />';

      break

   case "Palo":

      arma='<img src="images/palo.png" style="width: 50px;"/>';

      break
	  
	case "Extintor":

      arma='<img src="images/extintor.png" style="width: 50px;"/>';

      break

   default:

      arma='<img src="images/pistola.png" style="width: 50px;"/>';     

   }
 //write the story
 //<input style="font-size:20px;" value="T">

 var story="Tras encontrarte con tu padre decides acompañarlo y junto al mecanico deciden arreglar el coche, " + boy+ " y " +girl+ ",Por fin regresar a casa. ";
 story+= "Pero antes de eso sientes como si algo los sigue en la carretera asi que decides sujetar tu "+imagen+" que siempre te acompaña a todos lados.";
 story+= "También decides coger un/a " +arma+ " con lo que poder " + verbo+ " Tras enterarse ambos se percatan de que un mounstro los seguia todo el tiempo "+enemigo+ " asi que tu padre decide acelerar y correr pero ese " +enemigo + " no está por ningún lado. Empiezas a sospechar que podría haber sido una ilusion de ambos "+dinero+ " tras conseguir algo de dinero deciden detenerse en una gasolinera "+ numero+" tras comer decides contarle lo que viste a tu padre, por lo cual le muestras un "+numero+ " al final se percatan que esa cosa los sigui donde estaban  "+enemigo+ " asi que decides sujetar tu  "+arma+". tu padre queda sorprendido de encontrarse con esa cosa cara a cara, pero el no te quiere a ti sino algo de tu bolsillo "+imagen+",nada, solamente queria uno de tus dulces de colores que sujetaba tu bolsillo asi que lo toma el mismo y lo come hasta que lo disfruta."; 
 story+="'¿Si yo fuera "+enemigo+ ", me perseguiria por un caramelo?' piensas. '¡Claro que sí,despues de haber estado en un bosque tan solitario tambien hubiera tenido hambre "+asignatura+"!' asi que ambos aprovechan a huir rumbo al auto y tu padre sujeta  "+imagen+" encienden el auto y esperan para salir. ";
 story+="'¡"+enemigo+", Espera esa cosa se robo uno de mis dulces favoritos"+verbo+" bajas del auto y tomas tu "+arma+". ves como este se enfada al verlos huir con sus dulces asi que ideas algo "+imagen+" ataca y tú utilizas el/la "+arma+".sin embargo fallas el golpe y terminas rompiendo una de las tuberias de la gasolinera asi que el"+ enemigo +",comienza a gritar debido a que tu "+boy+ ", le habias derramado gasolina encima haciendo que  "+enemigo+" comience a empaparse de gasolina y termina esfumandose en medio del bosque"; 

 output.innerHTML = story;
}
