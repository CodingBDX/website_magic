


$(document).ready(function(){

  var classCycle=['imageCycle1','imageCycle2','imageCycle3', 'imageCycle4'];

  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  
  $('#bode').addClass(classToAdd);
  
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
      responsiveHeight: 600,
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


     