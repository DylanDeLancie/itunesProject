function search (){
    apiCall(document.getElementById("mySelectBox").value);

}
function create (artist){
    $("#table3 tr").empty();





}


function apiCall (){


    var artist = $("#mySelectBox").val();

    $.ajax({
        url: "https://itunes.apple.com/search?term=" + artist,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            console.log(result);
            process(result);
        },
        error: function() { alert('Failed!'); }
    });
}



function process (result){
    var songs = result.results
    


}