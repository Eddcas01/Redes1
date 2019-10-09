
  var cuerpo = document.getElementById("cuerpo");
  var cont = document.getElementById("contenedor");
  var nu = [];
  var i;

 
  
  
  
  for(i = 0; i<16; i++){
  var na = Math.trunc(1+ Math.random()*40);
  nu.push(na);
  
  }
  var l = nu.length;

 
  
  var carga = function(){
  
    document.write("<head>" + "<meta charset="+'"'+ "UTF-8" +'"'+ ">" + "<link rel="+'"'+ "stylesheet" +'"' + "href=" + '"' + "css/estilos.css"+ '"' +">" + "<script type="+ '"' + "text/javascript" + '"' + " src=" +'"'+ "jquery/jquery-3.4.1.min.js" + '"' + ">" + "</script>"+"<script type="+ '"' + "text/javascript" + '"' + " src=" +'"'+ "js/script.js" + '"' + ">" + "</script>"+ "</head>");
  
    
    
    }
   
 
  
  var borrar2 = function(){
    
    cuerpo.innerHTML="";
    
      }
        
    
        
  
  
  
  var orden =  function (arr){
  
  
   const bubbleSort = nu => {

    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( nu[ j ] > nu[ j + 1 ] ) {
          [ nu[ j ], nu[ j + 1 ] ] = [ nu[ j + 1 ], nu[ j ] ];
          
       
          
        }
        
       
      }
    } 
    
    return nu;
  //quiero mostrar y limpiar luego que se quede el final del orden
   
  };
  const result = bubbleSort(nu);
  
  result;
  
  
  }

var res = function(){
  for(let i=0; i<l;i++){
              
    document.write("<div class="+'"'+"barra"+ '"'+ " style="+'"'+ "padding-bottom:"+nu[i]*1+"%;"+"width: 6%;"+'"'+">"+nu[i]+"</div>"); 
   
    
    } 
    

}
  
var imprimir = function(){
  carga();
  document.write("<h1>"+ "Ordenado" +"</h1>")
  document.write("<br>"); 
 orden(nu);
 res();
}

var desor = function (){
  for(let i=0; i<l;i++){
   
      document.write("<div style="+'"'+ "padding-bottom:"+nu[i]*1+"%;"+"width: 5%;"+'"'+">"+nu[i]+"</div>"); 
      
      
      }
      
  }



/*

*/