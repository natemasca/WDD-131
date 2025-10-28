const albums = [
    {
        albumName: "To Pimp A Butterfly",
        artist: "Kendrick Lamar",
        year: 2015,
        cover: "./tpab.png"
    },
    {
        albumName: "ASTROWORLD",
        artist: "Travis Scott",
        year: 2018,
        cover: "./astrohd.jpg"
    },
    {
        albumName: "Blonde",
        artist: "Frank Ocean",
        year: 2016,
        cover: "./blondehd.jpeg"
    },
    {
        albumName: "IGOR",
        artist: "Tyler, The Creator",
        year: 2019,
        cover: "./igorhd.png"
    },
]
  
  
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.drop-btn');
    const content = dropdown.querySelector('.drop-content');

btn.addEventListener('click', () => {
    content.classList.toggle('show');
    });
  });

const suggestBtn = document.getElementById("suggest-btn");
const albumDisplay = document.getElementById("album-display");

suggestBtn.addEventListener("click", () => {
  
  const randomIndex = Math.floor(Math.random() * albums.length);
  const album = albums[randomIndex];

  
  albumDisplay.innerHTML = `
    <div class="album-info">
      <img src="${album.cover}" alt="${album.albumName} cover">
      <h3>${album.albumName}</h3>
      <p>${album.artist} (${album.year})</p>
    </div>
  `;

 
  albumDisplay.classList.remove("show");
  setTimeout(() => albumDisplay.classList.add("show"), 10);
});