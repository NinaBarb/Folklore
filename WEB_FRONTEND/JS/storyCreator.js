// ADDING DIVS
var numberOfOptions=2;
var counter=1;
$("#btnAdd").on('click',() => {
    $(".canvas").append(
        "<div class='holder'>"
            +"<div name='ddlHolder'>"
                +"<select multiple='multiple' id='chooser" + counter + "' class='ddlChoices'>"
                +"</select>"
            +"</div>"
            +"<div class='storyPart' class='ui-widget-content'>"
                + "<textarea id='paragraph" + counter + "' class='paragraph'>sdfdsfsfsfsf</textarea>"
                + "<hr>"
                +"<div class='options'>"
                    + "<div class='number'>" + counter + "</div>"
                    + "<textarea class='option' id='option" + counter + "'></textarea>"
                    + "<div class='number'>" + (++counter) + "</div>"
                    + "<textarea class='option' id='option" + counter + "'></textarea>"
                +"</div>"
            +"</div>"
        +"</div>"
    )
    counter++
    $( ".holder" ).draggable();
    
    $(".ddlChoices").empty()
    for(var i=1; i<=numberOfOptions; i++){

        $(".ddlChoices").append(
            "<option>" + i + "</option>"
        )
    }
    numberOfOptions+=2;
})


// DETECT USER ACTIVE/INACTIVE
var ms = 1000; // 1000 = 1 Sec | 60000 = 1 Min
var IdleTime;
$(document).ready(function () {
    IdleTime = 10;
    setIdleTimeout(IdleTime * ms);
});
document.onIdle = function () {
    console.log("user inactive")
    $(".ping").addClass('active')
    $(".menu").addClass('active')
}
$( "body" ).mousemove( ()=> {
    $(".ping").removeClass('active')
    $(".menu").removeClass('active')
  });


// ADD SCRIPTS DYNAMICALLY
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
   
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

// MENU SLIDER
var viewPortHeight = $( window ).height();
var activate = $( window ).height() - 1200;
$(document).ready(()=>{
    console.log(activate)
    document.addEventListener('mousemove', (event) => {
        if($(event.clientY)[0] < activate){
            $(".hidingNav").addClass("show")
        }else{
            
            $(".hidingNav").removeClass("show")
        }
    });
})

// GATHERING VARIABLES FOR UPLOAD
var allParagraphs;
var textareas;
$("#btnCreate").on('click', () => {
    textareas = $("textarea").map(function() {
        if($(this).val().trim().length === 0){
            $(this).css( "background-color", "red" );
        }
        return this.innerHTML;
    }).get();
    
    console.log(textareas)

    allParagraphs = $(".paragraph").map(function() {
        return this.innerHTML;
    }).get();
    console.log(allParagraphs)
})