function checkSpam(str) {
  if (str.includes("ViAgRA") || str.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));
