fetch("https://github.com/dotinto/wed-game/blob/main/manifest.json")
.then(res => res.json())
.then(data => console.log(data));