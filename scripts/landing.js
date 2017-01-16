var pointsArray = document.getElementsByClassName("point");

//var animatePoints = function(points) {
//    var revealFirstPoint = function() {
//        points[0].style.opacity = 1;
//        points[0].style.transform = "scaleX(1) translateY(0)";
//        points[0].style.msTransform = "scaleX(1) translateY(0)";
//        points[0].style.webkitTransform = "scaleX(1) translateY(0)";
//    }; 
//
//    var revealSecondPoint = function() {
//        points[1].style.opacity = 1;
//        points[1].style.transform = "scaleX(1) translateY(0)";
//        points[1].style.msTransform = "scaleX(1) translateY(0)";
//        points[1].style.webkitTransform = "scaleX(1) translateY(0)";
//    };
//
//    var revealThirdPoint = function() {
//        points[2].style.opacity = 1;
//        points[2].style.transform = "scaleX(1) translateY(0)";
//        points[2].style.msTransform = "scaleX(1) translateY(0)";
//        points[2].style.webkitTransform = "scaleX(1) translateY(0)";
//    };
//
//    revealFirstPoint();
//    revealSecondPoint();
//    revealThirdPoint();
//};

var revealPoint = function(idx) {
    pointsArray[idx].style.opacity = 1;
    pointsArray[idx].style.transform = "scaleX(1) translateY(0)";
    pointsArray[idx].style.msTransform = "scaleX(1) translateY(0)";
    pointsArray[idx].style.webkitTransform = "scaleX(1) translateY(0)";
}

var loopAndShow = function() {
    
    for (var i = 0; i < pointsArray.length; i++ ){
        revealPoint(i);
    }
    
};

window.onload = function(){

    if (window.innerHeight > 950){
        //animatePoints(pointsArray);
        loopAndShow();
    }
    
    var sellingPoints = document.getElementsByClassName("selling-points")[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top -  window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event){   
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
            //animatePoints(pointsArray);
            loopAndShow();
        }
    });                         
};
              