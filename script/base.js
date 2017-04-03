$(function() {
var cbtn = $(".calcbutton");
console.log(cbtn);

//Use loop to create individual class buttons that equivalent
for(var i=0; i < cbtn.length; i++) {

    cbtn[i].click( function(){
        console.log("Clicked!");
    });
}
});
