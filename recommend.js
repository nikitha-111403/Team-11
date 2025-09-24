// Generate recommendations
function generateRecommendations() {
  const occasion = document.getElementById("occasion").value;
  const style = document.getElementById("style").value;

  const outfit = getOutfitRecommendations(occasion, style);
  const accessories = getAccessoryRecommendations(occasion);

  const recommendationsDiv = document.getElementById("recommendations");
  recommendationsDiv.innerHTML = `
    <h3>Outfit Recommendation</h3>
    <p>${outfit}</p>
    <h3>Accessories</h3>
    <ul>${accessories.map(acc => <li>${acc}</li>).join("")}</ul>
  `;
}

// Outfit logic (female only)
function getOutfitRecommendations(occasion, style) {
  if (occasion === "wedding" && style === "traditional") {
    return "A beautiful red saree with golden embroidery.";
  }
  if (occasion === "party" && style === "modern") {
    return "An elegant cocktail dress with statement heels.";
  }
  if (occasion === "casual") {
    return "A chic floral dress with comfortable sandals.";
  }
  return "A classy outfit tailored to your occasion.";
}

// Accessory logic (female only)
function getAccessoryRecommendations(occasion) {
  let accessories = [];
  if (occasion === "wedding") {
    accessories.push("Gold jewelry", "Elegant clutch");
  }
  if (occasion === "party") {
    accessories.push("Stylish earrings", "High heels");
  }
  if (occasion === "casual") {
    accessories.push("Sneakers", "Crossbody bag");
  }
  return accessories;
}