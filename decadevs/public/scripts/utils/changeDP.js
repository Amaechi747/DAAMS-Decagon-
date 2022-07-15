import { extractToken } from "./tokenExtractor.js";

function changeDP() {
  const uploadImage = document.querySelector("#upload-image");
  const profilePicture = document.querySelector("#profile-picture");
  uploadImage.click();
  uploadImage.addEventListener("change", () => {
    const reader = new FileReader();
    reader.readAsDataURL(uploadImage.files[0]);
    reader.addEventListener("load", async () => {
      const uploadedImage = reader.result;
      profilePicture.style.backgroundImage = `url(${uploadedImage})`;
      //send new image buffer to server
      const endpoint = `/api/update-dp/${extractToken("url", document.URL)}`;
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: `url(${uploadedImage})` }),
      });
    });
  });
}

export { changeDP };
