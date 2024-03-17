gsap.to("nav",{
    opacity:1,
    duration:1,
}); 

gsap.to(".home-page-title",{
    y:-10,
    duration:1,
}); 

gsap.to(".home-page-image,.home-page-line",{
    y:-10,
    duration:1,
}); 

gsap.to(".awareness-page-image,.awareness-page-line",{
    opacity:1,
    x:30,
    duration:1,
    scrollTrigger:{
        trigger:".awareness-page-image",
        toggleActions:"restart none none none",
        start:"top center",
        end:"bottom bottom",
        scrub:1,
    }
});

gsap.to(".awareness-page-reveal",{
    opacity:1,
    x:-10,
    duration:2,
    scrollTrigger:{
        trigger:".awareness-page-reveal",
        toggleActions:"restart none none none",
        start:"top 60%",
        end:"bottom bottom",
        // markers: true,
        scrub:1,
    }
});

function openFileUploader() {
    document.getElementById('file-input').click();
  }

  function handleDragEnter(event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementsByClassName('drop-area').classList.add('highlight');
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementsByClassName('drop-area').classList.remove('highlight');
    const files = event.dataTransfer.files;
    handleFiles(files);
  }

  function handleFiles(files) {
    const fileNames = Array.from(files).map(file => file.name).join(', ');
    const showFile = document.getElementsByClassName('file-show');
    showFile.innerHTML = `Files uploaded: ${fileNames}`;
  }