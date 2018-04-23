function search (){
    apiCall(document.getElementById("mySelectBox").value);

}

function apiCall (artist){

    $.ajax({
        url: "https://itunes.apple.com/search?term=" + artist,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            console.log(result);
            process(result);
        },
        error: function() {
            alert('Failed!');
        }
    });
}



function process (result){
    var songs = result.results
    var html = "<table border = '5'>";
    for (var i = 0; i < songs.length; i ++){
        $("#stuff").append(songs[i].trackName);
    }
}

function makeList (result){
    $("#things").empty();
    var songs = result.results;
    var htm = "<table border = '1'>";
    for (var i = 0; i < songs.length; i++){
        htm += "<tr>";
        htm += "<td>" + songs[i].artistName + "</td>";
        htm += "<td>" + songs[i].collectionName + "</td>";
        htm += "<td>" + songs[i].trackName + "</td>";
        htm += "<td>" + "Play Song:" + "</td>";
        htm += "<td><audio controls='true' src=" + songs[i].previewUrl + " id= audio type='audio/m4a'></audio> + </td>";
        htm += "<td> <img src='" + songs[i].artworkUrl100 + "'></td>";

        htm += "</tr>";
    }
    htm += "</things>";
    document.getElementById("output").innerHTML = htm;
}


