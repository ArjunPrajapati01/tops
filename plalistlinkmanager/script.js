let playlists =
JSON.parse(localStorage.getItem("myPlaylists")) || [];

let editIndex = -1;

function saveData(){

    localStorage.setItem(
        "myPlaylists",
        JSON.stringify(playlists)
    );

}

function validateURL(url){

    return url.startsWith("https://") &&
           url.includes(".");
}

function validateLink(url){

    const error=document.getElementById("error");

    if(
        url.startsWith("https://") &&
        (
        url.includes("spotify.com") ||
        url.includes("youtube.com")
        )
    ){

        error.innerHTML="";
        return true;

    }

    error.innerHTML=
    "Enter a valid Spotify or YouTube playlist URL.";

    return false;

}

function addPlaylistLink(linkObj){

    playlists.push(linkObj);

    saveData();

    displayLinks();

}

function editPlaylistLink(index,newLinkObj){

    playlists[index]=newLinkObj;

    saveData();

    displayLinks();

}

function deletePlaylistLink(index){

    playlists.splice(index,1);

    saveData();

    displayLinks();

}

function manageLink(linkObj,mode){

    if(mode==="add"){

        playlists.push(linkObj);

    }
    else{

        playlists[editIndex]=linkObj;

    }

    saveData();

    displayLinks();

}

function displayLinks(){

    const container=
    document.getElementById("playlistContainer");

    container.innerHTML="";

    playlists.forEach((playlist,index)=>{

        const card=document.createElement("div");

        card.className="card";

        card.innerHTML=`

        <h3>${playlist.name}</h3>

        <a href="${playlist.url}"
        target="_blank">
        Open Playlist
        </a>

        <br><br>

        <button onclick="editLink(${index})">
        Edit
        </button>

        <button onclick="deletePlaylistLink(${index})">
        Delete
        </button>

        `;

        container.appendChild(card);

    });

}

function editLink(index){

    editIndex=index;

    document.getElementById("name").value=
    playlists[index].name;

    document.getElementById("url").value=
    playlists[index].url;

}

document
.getElementById("saveBtn")
.addEventListener("click",()=>{

    const name=
    document.getElementById("name").value.trim();

    const url=
    document.getElementById("url").value.trim();

    if(name===""){

        return;

    }

    if(!validateLink(url)){

        return;

    }

    const obj={

        name:name,

        url:url

    };

    if(editIndex==-1){

        manageLink(obj,"add");

    }
    else{

        manageLink(obj,"edit");

        editIndex=-1;

    }

    document.getElementById("name").value="";

    document.getElementById("url").value="";

});

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    if(
        document.body.classList.contains("dark-mode")
    ){

        localStorage.setItem("theme","dark");

    }
    else{

        localStorage.setItem("theme","light");

    }

}

document
.getElementById("themeBtn")
.addEventListener("click",toggleTheme);

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

}

displayLinks();