Links = document.links;
youtubeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
let done = 0
for (let i=0; i<Links.length; i++) {
    if ( Links[i].href == youtubeLink )  {
        if (!done) {
            alert("There's a rickroll in this webpage!");
            done = 1
        }
    }

}
