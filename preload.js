var myimages=new Array()
function preloadimages(){
for (i=0;i<preloadimages.arguments.length;i++){
myimages[i]=new Image()
myimages[i].src=preloadimages.arguments[i]
}
}

preloadimages("pildid/antminer.png","pildid/chart.png","pildid/difficulty.png", "pildid/hashrate.png", "pildid/taust.png", "pildid/videokaardid.png")