


$(document).ready(function(){

  var classCycle=['imageCycle1','imageCycle2','imageCycle3', 'imageCycle4'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('#imagechange').addClass(classToAdd);
  
    $('.slide-container').slick({
      arrows: false,
      draggable: true,
      autoplay: true, 
      autoplaySpeed: 4000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 1000,
      

adaptiveHeight: true,
    });
  
    $('.gallerycard').slick({
      arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
variableWidth: true,
adaptiveHeight: true,
  });

  
  

  });

  var myFullpage = new fullpage('#fullpage', {
      anchors: ['Presentation', 'gallery_art_magic_the_gathering', 'take_picture_magic_the_gathering', 'Print_your_card_magic'],
      sectionsColor: ['#dd3d31', '#fff'],
      scrollBar: true,
      responsiveWidth: 900,
     
      afterResponsive: function(isResponsive){

      }
  });







  const parent = $(".gallerycard");
      
      for(let i = 0; i<6; i++) {
        const dir = "gallerycard";
        const extension = "png";
        const file = `${dir}/${i+1}.${extension}`;
      
        const slide = $("<div></div>");
        slide.addClass("slide");
      
        const img = $("<img></img>");
        img.attr("src", file);
      
        slide.append(img);
        parent.append(slide);
      } 

      $(function(){
        $('#elementmove2').triggerOnView([
                  {
                      element: $('#move3'),
                      default: {left: -300, opacity: 0},
                      in: {left: 0, opacity: 1}
                  }
              ]);
    
           $('#elementmove').triggerOnView([
               {
                   element: $('#move1'),
                   default: {left: -100, opacity: 0},
                   in: {left: 0, opacity: 1}
               },
               {
                   element: $('#move2'),
                   default: {left: 100, opacity: 0},
                   in: {left: 0, opacity: 1}
               }
           ]);
    
        
       });
    
    
       var self = this;
    
         
        
    const video = document.querySelector("#videoElement");
    function startCamera() {
    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true})
    .then(function (stream) {
        video.srcObject = stream;
    }).catch(function (err) {
        throw new Error("Problème dans le stream !")
    });
    }
    }
    
    
    
    $("#stopcamera").addClass('d-none');
    $("#retake").addClass('d-none');
     // Trigger starting the camera
     document.getElementById("startCamera").addEventListener("click", function() {
        $(".card").addClass('d-none');
        $("#startCamera").addClass('d-none');
        $("#stopcamera").removeClass('d-none');
        startCamera();
    });
    
    var image;
    function snapshot(){
        var video = document.getElementById("videoElement");
        var canvas = document.getElementById("drawCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, 640, 480);
        image = canvas.toDataURL();
        $(video).addClass('d-none');
        $("#snapshot").addClass('d-none');
        
        $("#retake").removeClass('d-none');
        $(canvas).removeClass('d-none');
        $("#ocr").removeClass('d-none');
    }
    function retake(){
        $("#videoElement").removeClass('d-none');
        $("#snapshot").removeClass('d-none');
        $("#retake").addClass('d-none');
        $("#drawCanvas").addClass('d-none');
        $("#ocr").addClass('d-none');          
    }
    var cardName;
    function ocr(){
        if (image != undefined){
            $("#threeBurgers").click();
            $("#cardName").text("Loading...");
            $.ajax({
                url: "https://api.ocr.space/parse/image",
                method: "POST",
                data:{
                    'apikey': '2a1ffc26e188957',
                    'filetype': 'PNG',
                    'base64Image': image,
                }
            }).then(function(result){
                console.log(result.ParsedResults[0].ParsedText);
                cardName = result.ParsedResults[0].ParsedText;
                $("#cardName").text(cardName);
                $("#possibleCards").html("<span></span><br/>");
                if (cardName != ""){
                    $.ajax({
                        url: "https://api.magicthegathering.io/v1/cards?name=" + cardName,
                        method: "GET"
                    }).then(function(cardResults){                        
                        console.log(cardResults);
    
                        if(cardResults.cards.length != 0){
                            cardResults.cards.forEach(function(card){
                                console.log(card);
                                $("#possibleCards span:last").after('<span><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=' 
                                + card.multiverseid + '" target="_blank"><img src="' + card.imageUrl +'"/></a></span>');
                                document.getElementById("possibleCards2").value = "Fifth Avenue, New York City";
                                
                               
                                    
                                if(card.rulings.length !=0){
                                    card.rulings.forEach(function(rule){
                                        $("a:last").after("<p>" + rule.date +" | "+ rule.text + "</p>");
                                    });
                                }
                            });
                        }else{
                            $("#threeBurgers").click();
                        }
                    });
                }else{
                    $("#cardName").text("No words were found.");
                    $("#threeBurgers").click();
                }
            })
        }
    }
    
    function addtext() {
        var newtext = document.myform.inputtext.value;
        if (document.myform.placement[1].checked) {
            document.myform.outputtext.value = "";
            }
        document.myform.outputtext.value += result;
    }
    


     