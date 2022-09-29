function make_album(artistName, albumTitle,numberOfTracks) {
    return {
        artistName,
        albumTitle,
        numberOfTracks,
    }
};

console.log( make_album("Atif Aslam", "Nothing"));
console.log(make_album("Ali Zafar", "Something"));
console.log(make_album("Maroon 5", "Pay phone",5));
