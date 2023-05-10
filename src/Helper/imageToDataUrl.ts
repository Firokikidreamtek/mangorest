const encodeImageFileAsURL = (element: File) => {
    var file = element;
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
    return reader.result;
  }
  export default encodeImageFileAsURL;