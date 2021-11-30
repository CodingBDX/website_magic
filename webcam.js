  
        var self = this;

     
		
		const video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function (stream) {
            video.srcObject = stream;
        }).catch(function (err) {
            throw new Error("Problème dans le stream !")
    });
}

        var image;
        function snapshot(){
            var video = document.getElementById("videoElement");
            var canvas = document.getElementById("drawCanvas");
            var ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, 640, 480);
            image = canvas.toDataURL();
            $(video).addClass('hide');
            $("#snapshot").addClass('hide');
            $("#retake").removeClass('hide');
            $(canvas).removeClass('hide');
            $("#ocr").removeClass('hide');
        }
        function retake(){
            $("#videoElement").removeClass('hide');
            $("#snapshot").removeClass('hide');
            $("#retake").addClass('hide');
            $("#drawCanvas").addClass('hide');
            $("#ocr").addClass('hide');          
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
                                    $("#possibleCards span:last").after('<span><p>' + card.name + '</p></span>'
                                   
                                        );
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
   