function startVideoFromCam() {
  const specs = {
    video: {
      facingMode: "user", // Use "environment" for rear camera on mobile devices
      width: { ideal: 300 }, // Set ideal width
      height: { ideal: auto}, // Set ideal height
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