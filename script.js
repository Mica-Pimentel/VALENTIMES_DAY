function startVideoFromCam() {
  const specs = {
    video: {
      facingMode: "user", // Use "environment" for rear camera on mobile devices
      width: { ideal: 1280 }, // Set ideal width
      height: { ideal: 720 }, // Set ideal height
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