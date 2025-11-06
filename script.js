function grabText() {
  navigator.clipboard
    .writeText("3AfG1UcxayWTsUdftZorissUxytmAq8i8X")
    .then(() => {
      document.getElementById("grab").innerHTML =
        "Bitcoin wallet address successfully copied.";
    });
}
