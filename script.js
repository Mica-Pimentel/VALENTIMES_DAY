function startVideoFromCam() {
  const specs = {
    video: {
      // Use "environment" for rear camera on mobile devices
      width: { ideal: window.innerWidth * 0.8 }, // 80% da largura da tela
      height: { ideal: 400 }, // 400px de altura
    },
  };
  navigator.mediaDevices
    .getUserMedia(specs)
    .then((stream) => {
      const video = document.querySelector("video");
      video.srcObject = stream;
    })
    .catch((error) => {
      console.log("Error accessing webcam: ", error);
    });
}
window.addEventListener("DOMContentLoaded", startVideoFromCam);