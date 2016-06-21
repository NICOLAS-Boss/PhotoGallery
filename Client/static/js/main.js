var CANSEL_CHAR = '×';
var MENU_CHAR = '≡';

function switchMenuChar(){
    var menuButton = $('#hoverMenuButton');
    if(menuButton.html()  == CANSEL_CHAR){
        menuButton.html(MENU_CHAR);
    }else{
        menuButton.html(CANSEL_CHAR);
    }
}

$('#hoverMenuButton').click(function(){
    switchMenuChar();
    if($('#menu').css('left')=="0px"){
        $('#menu').css('left',"-300px");
    }else{
        $('#menu').css('left',"0px");
    }
    return false;
})

function loadPhotoAsync(path,to,handler){
  var downloadingPhoto = $('<img>');
  downloadingPhoto.bind('load',function() {
    var dp = $(this);
    to.attr("src",dp.attr('src'));
    handler();
  });
  downloadingPhoto.attr('src',path);
}

function Slider(photos){
  var self = this;

  var currentIndex = 0;

  var currentPage = $('#currentPhotoPage');
  currentPage.Photo = $('#currentPhoto');
  currentPage.currentTitle = $('#currentTitle');
  currentPage.currentDescription = $('#currentDiscription');

  function ChangePage(index){
    currentIndex = index;
    currentPage.currentTitle.html(photos[currentIndex].title);
    currentPage.currentDescription.html(photos[currentIndex].description);
    loadPhotoAsync(photos[currentIndex].full_screan,currentPage.Photo,function() {
      currentPage.fadeIn(1000);
    });
  }

  this.nextPage = function() {
    currentPage.css('display','none');
    if(currentIndex<photos.length-1){
      ChangePage(currentIndex+1);
    }else{
      ChangePage(0);
    }
    return false;
  }

  this.prevPage = function() {
    if(currentIndex>0){
      currentPage.css('display','none');
      ChangePage(currentIndex-1);
      console.log(currentIndex);
    }else{
      ChangePage(photos.length-1);
    }
    return false;
  }

  $('#rightArrow').click(function() {
    self.nextPage();
  })

  $('#leftArrow').click(function() {
    self.prevPage();
  })

  function init() {
    ChangePage(0);
  }

  init();
}




$.getJSON('photoserver/api/photos/',function(data) {
  new Slider(data);
});
