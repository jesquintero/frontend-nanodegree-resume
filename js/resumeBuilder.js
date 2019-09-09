/*
var awesomeThoughts = " I am Mitchell and I am AWESOME"; //definición de una variane con texto asignado

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN"); //acá usamos la función replace("palabra_vieja", "palabra_nueva")

$("#main").append(funThoughts); //.append es una función de JQuery y el $ indica a JS que trabajaremos con JQuery

*/

var formattedName = HTMLheaderName.replace("%data%", "Jesus Mitchell Quintero Ruiz");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append(formattedName + formattedRole);
