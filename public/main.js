
fetch('/music')
  .then((response) => response.json())
  .then((musicData) => {
    const musicContainer = document.getElementById('all-cards');
    
    // Create Bootstrap cards for each music file
    musicData.forEach((music, index) => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3', 'mu-card');
      card.onclick = () => loadTrack(index);
      
      const cardInside = document.createElement('div');
      cardInside.classList.add('card-inside');

      const img = document.createElement('img');
      img.classList.add('img-fluid', 'rounded-start', 'mu-img');
      img.src = `assets/micons/${music.name}.jpg`;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = music.name;

      const author = document.createElement('a');
      author.classList.add('au-name');
      author.textContent = `Author/Artist - ${music.author}`;

        let newTrack = {
          name: `${music.name}`,
          artist: `${music.author}`,
          path: "music/"+`${music.name}`+ ` - ` + `${music.author}`+".mp3"
        };
        track_list.push(newTrack); 

      cardBody.appendChild(title);
      cardBody.appendChild(author);
      cardInside.appendChild(img);
      cardInside.appendChild(cardBody);
      card.appendChild(cardInside);

      musicContainer.appendChild(card);
    });
    console.log(track_list);
    loadTrack(track_index);
  })
  .catch((error) => {
    console.error(error);
  });
