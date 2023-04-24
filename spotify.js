let songIndex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressbar=document.getElementById('progresbar');
let playing =document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItems'));

let songs=[
            {songname:'Maan meri jaan', filepath:' ./songs/1.mp3',     coverpath:'covers/1.jpg'},
            {songname:'Woh', filepath:'songs/2.mp3',     coverpath:'covers/2.jpg'},
            {songname:'Legend', filepath:'songs/3.mp3',       coverpath:'covers/3.jpg'},
            {songname:'Game', filepath:'songs/4.mp3',    coverpath:'covers/4.jpg'},
            {songname:'Baller', filepath:'songs/5.mp3',      coverpath:'covers/5.jpg'},
            {songname:'295', filepath:'songs/6.mp3',      coverpath:'covers/6.jpg'},
            {songname:'Halamithi Habibo ', filepath:'songs/7.mp3',      coverpath:'covers/7.jpg'},
            {songname:'Jollyo Gymkhana', filepath:'songs/8.mp3',      coverpath:'covers/8.jpg'},
           ]

           songItems.forEach((element, i)=>{
            element.getElementsByTagName("img")[0].src=songs[i].coverpath;
            element.getElementsByClassName("songname")[0].innerHTML=songs[i].songname;

        })

masterPlay.addEventListener('click',function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        playing.style.opacity=1;
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        playing.style.opacity=0;
        
    }
})

audioElement.addEventListener('timeupdate',function(){
    var progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',function(){
    audioElement.currentTime=(progressbar.value*audioElement.duration)/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
         makeallplays();
         songIndex=parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioElement.src= `./songs/${songIndex+1}.mp3`;
         audioElement.currentTime=0;
         mastersongname.innerHTML=songs[songIndex].songname;

         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
         audioElement.currentTime=0;
         mastersongname.innerHTML=songs[songIndex].songname;

         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
         audioElement.currentTime=0;
         mastersongname.innerHTML=songs[songIndex].songname;

         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
