Links = document.links;
var youtubeLinks =["https://www.youtube.com/watch?v=dQw4w9WgXcQ"  //link of the video
              ,"https://www.youtube.com/watch?v=ub82Xb1C8os"];//link of another notoriously famous video
let done = 0
for (let i=0; i<Links.length; i++) {
    if ( youtubeLinks.indexOf(Links[i].href) != -1 )  {
        if (!done) {
            alert("There's a rickroll in this webpage!");
            done = 1
        }
    }

}
