const video = document.getElementById('video');
const deathstar = document.getElementById('fond');
const videoDiv = document.getElementById('vod');

let count = false;
function play()
{

    
//    let vod =`<video src="video/Vidéo sans titre ‐ Réalisée avec Clipchamp (1).mp4" id="video" autoplay muted></video>`;

    if(!count)
    {
        const video = document.createElement("video");
        videoDiv.appendChild(video);

        video.src = "video/Vidéo sans titre ‐ Réalisée avec Clipchamp (1).mp4";
        video.autoplay = true;

        count = true
        console.log(count);

        video.addEventListener('ended', () =>
        {
            video.remove()
        });
    }
    else
    {
        console.log("No exec");
    }
};