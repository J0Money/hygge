


function Album(album, artist, website, year) {
  this.albumName = album;
  this.artistName = artist;
  this.artistWebsite = website;
  this.productionYear = year;
}
// Funktion til at tilføje rækker til tabellen
function addRowWithAlbum(album, parentId) {
  let parentElement = document.getElementById(parentId);

  // Opret en ny række i tabellen
  let newRow = parentElement.insertRow();

  // Opret celler og tilføj data til cellerne
  let cellAlbum = newRow.insertCell(0);
  let cellArtist = newRow.insertCell(1);
  let cellWebsite = newRow.insertCell(2);
  let cellYear = newRow.insertCell(3);

  cellAlbum.textContent = album.albumName;
  cellArtist.textContent = album.artistName;
  cellWebsite.textContent = album.artistWebsite;
  cellYear.textContent = album.productionYear;
}

fetchContent("albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums);
  let albumObjects = [];
  console.log("To be populated: ");
  console.log(albumObjects);

  // For-loop iterating through the JSON-data and creating album objects
  for (let i = 0; i < albums.length; i++) {
      const album = new Album(
          albums[i].albumName,
          albums[i].artistName,
          albums[i].artistWebsite,
          albums[i].productionYear
      );
      albumObjects.push(album);
  }
  
  // Loop through album objects and add rows to the table
  albumObjects.forEach(function (a) {
      addRowWithAlbum(a, "content");
  });
});
//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}