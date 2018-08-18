var carouselList;
var maxElement = $("#carouselcontrols")
  .find("div:last")
  .attr("id");

$(function carousel() {
  carouselList = $("#carousel ul");
});

setInterval(function interval() {
  animate(500);
}, 3000);

$("#rightarrow").on("click", function() {
  animate(200);
});

$("#leftarrow").on("click", function() {
  animate2(200);
});

function animate(transitionTime) {
  marker("right");

  $("#carousel ul").animate(
    { marginLeft: -400 },
    transitionTime,
    moveFirstSlide
  );
}

function animate2(transitionTime) {
  marker("left");

  moveLastSlide();
  $("#carousel ul").animate({ marginLeft: 0 }, transitionTime);
}

function moveFirstSlide() {
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  carouselList.css({ marginLeft: 0 });
}

function moveLastSlide() {
  carouselList.css({ marginLeft: -400 });
  var lastItem = carouselList.find("li:last");
  var firstItem = carouselList.find("li:first");
  firstItem.before(lastItem);
}

function marker(direction) {
  var activeElement = $("#carouselcontrols").find(".active");

  var targetElementId = 0;

  if ((direction == "right")) {
    if (parseInt(activeElement.attr("id"), 10) + 1 > maxElement) {
      targetElementId = 1;
    } else {
      targetElementId = parseInt(activeElement.attr("id"), 10) + 1;
    }
  } else {
    if (parseInt(activeElement.attr("id"), 10) - 1 == 0) {
      targetElementId = 5;
    } else {
      targetElementId = parseInt(activeElement.attr("id"), 10) - 1;
    }
  }

  $("#carouselcontrols > div").each(function() {
    if ($(this).attr("id") == targetElementId) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

$("#carouselcontrols").on("click", "div", function(event) {
  var activeElementid = $("#carouselcontrols")
    .find(".active")
    .attr("id");
  var targetElementId = $(event.target).attr("id");

  while (targetElementId != activeElementid) {
    if (activeElementid < targetElementId) {
      activeElementid++;
      animate(0);
    } else {
      activeElementid--;
      animate2(0);
    }
  }
});
