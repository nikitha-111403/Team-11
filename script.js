// Handle navigation between pages
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

// Handle form submission
document.getElementById("styleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(() => {
      generateRecommendations();
      document.getElementById("loading").classList.add("hidden");
      showPage("results");
    }, 1500);
  }
});

// Form validation
function validateForm() {
  const occasion = document.getElementById("occasion").value;
  const style = document.getElementById("style").value;
  const gender = document.getElementById("gender").value;

  if (!occasion || !style || !gender) {
    alert("Please fill in all fields!");
    return false;
  }
  return true;
}