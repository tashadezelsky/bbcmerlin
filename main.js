console.log("Please work");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: 'keyHlLjNPepQaUXmp'}).base('appOS6yhL3EVn12Xq');

base('arthur').select({}).eachPage(gotPageOfArthurs, gotAllArthurs);
    // This function (`page`) will get called for each page of records.

const arthurs = [];

function gotPageOfArthurs(records, fetchNextPage) {
    console.log("gotPageOfArthur()");
    arthurs.push(...records);
    fetchNextPage();
}

function gotAllArthurs(err) {
    console.log("gotAllArthurs()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

 consoleLogArthurs();
 showArthurs();
}

function consoleLogArthurs() {
    console.log("consoleLogArthurs()");
    arthurs.forEach((arthur) => {
    console.log("Arthur:", arthur);
});
}

function showArthurs() {
    console.log("showArthurs()");
    arthurs.forEach((arthur) => {
        
        //var episodeTitle = document.createElement("h3");
        //episodeTitle.innerText = arthur.fields.episode;
        //document.body.append(episodeTitle);

        //var faceDescription = document.createElement("p");
        //faceDescription.innerText = arthur.fields.thots;
        //document.body.append(faceDescription);

        //var arthurImage = document.createElement("img");
        //arthurImage.src = arthur.fields.image[0].url;
        //document.body.append(arthurImage);

        //new div container where all the song info will go
        var faceContainer = document.createElement("div");
        faceContainer.classList.add("face-container")
        document.querySelector(".container").append(faceContainer);

        //add the picture 
        var arthurImage = document.createElement("img");
        arthurImage.classList.add("image-container");
        arthurImage.src = arthur.fields.image[0].url;
        faceContainer.append(arthurImage);

        //add episode title
        var episodeTitle = document.createElement("h3");
        episodeTitle.classList.add("episode-title");
        episodeTitle.innerText = arthur.fields.episode;
        faceContainer.append(episodeTitle);

        //add description 
        var faceDescription = document.createElement("p");
        faceDescription.classList.add("face-desc");
        faceDescription.innerText = arthur.fields.thots;
        faceContainer.append(faceDescription);

        //add ranking
        var rankingOutof = document.createElement("h4");
        rankingOutof.classList.add("ranking");
        rankingOutof.innerText = arthur.fields.number;
        faceContainer.append(rankingOutof);

        //add event listener, click on container things will appear 
        faceContainer.addEventListener("click", function(){
            faceDescription.classList.toggle("active");
            rankingOutof.classList.toggle("active");
        })


    });
}


