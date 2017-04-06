$(function() {
var cbtn = $(".calcbutton");
var output = $("#digits");
var calRes = "";
console.log(cbtn);

//Use loop to create individual class buttons that equivalent
for(var i=0; i < cbtn.length; i++) {

    $(cbtn[i]).click( function(){ //cbtn array is re-wrapped in Jquery $ scope
        var clkvalue = $(this).text();
       //output.text(clkvalue);

        calRes=calRes + clkvalue;
        output.text(calRes); 
        console.log("Clicked!");
    });
}
});