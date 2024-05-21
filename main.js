import * as rive from "@rive-app/canvas";

// Load the local .riv file
const riveUrl = "./ib_ai_loader_2.riv";

// Create a new Rive instance
new Rive({
  src: riveUrl,
  canvas: document.createElement("canvas"),
  autoplay: true, // Automatically play the animation
  onLoad: () => {
    const container = document.getElementById("rive-container");
    const canvas = document.querySelector("canvas");
    container.appendChild(canvas);
  },
});
