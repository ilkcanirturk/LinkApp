import uuid from "react-native-uuid";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../config";


//For Image upload.

const uploadImageAsync = async({uri})=> {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
  console.log("blob",blob);

  const fileRef = ref(storage, uuid.v4());
  const result = await uploadBytes(fileRef, blob);
  return await getDownloadURL(fileRef);
}

export default uploadImageAsync;
