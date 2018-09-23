alert("Welkom bij Resident Evil 8");
alert ("je kan kiezen tussen 2 caracter: Jill of Chris.");
alert ("Jill's Voordeel: is heel erg vindingrijk. Nadeel: niet zo sterk.");
alert ("Chris's Voordeel: is heel erg sterk. Nadeel: niet zo snel.");


  var caracter = prompt("Kiez een caracter: Chris of Jill.")//Hoofdletter gebruiken A.U.B 
     if (caracter == "Jill"){
     	alert ("Fijn dat je Jill heb gekozen." );
     }
if (caracter == "Chris"){
	alert ("Fijn dat je Chris heb gekozen");
}


alert ("Het verhaal speelt zich af in Luxemburg in een landhuis.Je gaat nu het landhuis in en je probeert de sleutel te vinden om Ricardo te bevrijden van de zombies.");
  
    var deur = prompt ("Je loopt door de deur heen. Je zit nu in de hal er zijn twee deuren eentje links en eentje rechts,welke deur open je?" );  
    
    if (deur == "links"){
 
  	if (caracter == "Chris")
      	alert ( "Hee Je hebt een pistool gevonden met 10 kogels.");
     if (caracter == "Jill")
     	alert ("Hee Je hebt een pistool gevonden met 15 kogels.");
      }else{
         	alert (" O nee!!! Er stond toevallig een zombie. Je bent in je nek gebeten. Je ben dood ");
         	startOpnieuw();
         }

      var doden =prompt ("je komt een zombie tegen schiet je op hem of ontwijk je hem?");
      if (doden == "schieten") {
         if (caracter == "Chris"){
         alert ("je hebt de zombie gedood je heb nog 5 kogels over");
     	}
       	 if (caracter == "Jill"){
       	alert ("je hebt de zombie gedood je heb nog 10 kogels over");
       }
     }


      if (doden == "ontwijken"){
      	if (caracter == "Chris"){
      		alert("Je bent dood. je bent niet snel genoeg.");
      		startOpnieuw();
      	}
      	if (caracter == "Jill"){
      		alert("Je hebt de zombie ontweken je loopt door de volgende deur");
      	}
      } // type in: ontwijken

      var doden2= prompt ("Je komt nog een zombie tegen maar je wapen loopt vast. sla je hem dood of ontwijk je?");

       if (doden2 == "dood slaan"){
       	if (caracter == "Jill"){
       		alert ("Je bent dood, je bent niet sterk genoeg.");
       		startOpnieuw();
       	}//type in :dood slaan 
       	


       	if (doden2 == "dood slaan"){
       		if (caracter == "Chris"){
       			alert ("Je hebt de zombie gedood.en je wapen doet het weer. je loopt nu door de deur keuken heen je ziet 1 groene plant die je kan genezen wanneer je het nodig hebt.Je de plant.")

       		}
       	}
       }

          if (doden2 == "ontwijken"){
          	if (caracter == "Jill"){
          		alert ("je hebt de zombie ontweken. en je wapen doet het weer. je loopt nu door de deur keuken heen je ziet 1 groene plant die je kan genezen wanneer je het nodig hebt.Je de plant.")
          	}
          }
           if (doden2 == "ontwijken"){
           	if (caracter == "Chris"){
           		alert("je bent niet snel genoeg. Je ben dood.");
           		startOpnieuw();//type in :ontwijken
           	}
           }
       
            var genezen= prompt("Je loopt door de keuken deur heen en je staat in de woonkamer. Er staan twee zombies schiet je of niet ");
            if (genezen == "schieten"){
             if (caracter == "Chris"){
             var ja	= prompt (" Je schiet twee kogels af maar je mist en een van de zombies heeft in je arm gebeten. gebruik je de plant?");{
             		if (ja == "ja") 
             			alert ("goed zo je bent genezen en de zombie heb je dood geslagen en de andere zombie heb je met 3 kogels uitgeschakeld. ")
             	}// type in: schieten 
             	}
             }else{
             	alert ("O nee! je hebt de zombie wel verslagen maar de andere heeft je afgemaakt.");
             	startOpnieuw();
             }
             
             if (genezen == "schieten"){
             if (caracter == "Jill"){
             var ja	= prompt (" Je schiet 2 kogels af maar je mist en een van de zombies heeft in je arm gebeten. gebruik je de plant?");{
             		if (ja == "ja") 
             			alert ("goed zo je bent genezen en de zombie heb je dood geslagen en de andere zombie heb je met 3 kogels uitgeschakeld. ");

             	}
             	}
             } // type in :schieten
              
            var kogels = prompt("Je vindt daarna 5 kogels hoeveel pak je erop?");
            if (kogels <5){
            	alert("Goed zo je hebt zo veel kogels mogelijk gepakt.");
            } else if (kogels <3){
            	alert ("Beetje weinig maar oke.")
            } else {
            	alert("Nou zeg jij pak weinig kogels op.")
            }

             var Ricardo =prompt ("Je hebt eindelijk de sleutel gevonden voor Ricardo's kamer.Je hebt Ricardo gevonden. Nu ga je via de achterdeur naar buiten. Er staat een helicopter te wachten maar er staan 3 zombies in de weg. Sluip je er omheen of vecht je.")
             
             if (Ricardo== "sluipen"){
             	alert ("Het is je gelukt. Je hebt langs de zombies gesluipt en je zit nu in de helicopter.");
             }else{
             	alert ("je hebt twee zombies gedood maar de derde heeft Ricardo dood gebeten. Je heb gefaald!!");
             }

            var helicopter = prompt ("Je zit veilig in de helicopter. De piloot geeft je twee keuzes. blaas het landhuis op zodat de zombie virus verdwijnt. of je doet niks en vliegt veilig weg.")
            
            if (helicopter == "landhuis opblazen"){
            	alert ("je hebt het het landhuis verwoest en ook de zombie virus. Jij en Ricardo vliegen weg naar de zonsondergang."); 
            }else{
            	alert ("Je hebt niet het landhuis opgeblazen. Jij en Ricardo vliegen weg naar de zonsondergang, maar hoe zal Luxemburg ervoor staan over een paar? ")
            } // Type in :landhuis opblazen of niks 

             alert("Dit was Resident Evil. Ik hoop dat je het leuk vondt");
             alert ("Credits")
             alert ("producer: Ricardo Thijssen")
             alert ("schrijver: Ricardo Thijssen")
              




       
       
       	
       

      

     	 
     	 
      
     
     
      
 