const moveup = function(){
  console.log('up')
  var currentLoc = document.getElementsByTagName('div')[0];
  var currentMargin = currentLoc.style.marginTop;
  currentMargin = currentMargin.split('p')[0];
  console.log(currentMargin);
  currentMargin = Number(currentMargin);
  currentMargin-=10;
  currentLoc.style.marginTop = currentMargin+'px';
  // console.log(currentLoc.style.marginTop);
  // console.log(currentLoc.style.marginTop.split('p')[0]);
  if(currentLoc.style.marginTop.split('p')[0] <= 0) {
    currentLoc.style.marginTop=0;
  }
  console.log(currentLoc.style.marginTop);
}

const movedown = function(){
  console.log('down')
  var currentLoc = document.getElementsByTagName('div')[0];
  var currentMargin = currentLoc.style.marginTop;
  currentMargin = currentMargin.split('p')[0];
  console.log(currentMargin);
  currentMargin = Number(currentMargin);
  currentMargin+=10;
  currentLoc.style.marginTop = currentMargin+'px';
  // currentMargin = currentMargin;
  console.log(currentLoc.style.marginTop);
}

const moveright = function(){
  console.log('right')
  var currentLoc = document.getElementsByTagName('div')[0];
  var currentMargin = currentLoc.style.marginLeft;
  currentMargin = currentMargin.split('p')[0];
  console.log(currentMargin);
  currentMargin = Number(currentMargin);
  currentMargin+=10;
  currentLoc.style.marginLeft = currentMargin+'px';
  // currentMargin = currentMargin;
  console.log(currentLoc.style.marginLeft);
}

const moveleft = function(){
  console.log('left')
  var currentLoc = document.getElementsByTagName('div')[0];
  var currentMargin = currentLoc.style.marginLeft;
  currentMargin = currentMargin.split('p')[0];
  console.log(currentMargin);
  currentMargin = Number(currentMargin);
  currentMargin-=10;
  currentLoc.style.marginLeft = currentMargin+'px';
  // currentMargin = currentMargin;
  if(currentLoc.style.marginLeft.split('p')[0] <= 0) {
    currentLoc.style.marginLeft=0;
  }
  console.log(currentLoc.style.marginLeft);
}
