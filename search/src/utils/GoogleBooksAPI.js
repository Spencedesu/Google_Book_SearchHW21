import axios from "axios";

constAPIKEY = ""

// export default {
//   search:function {
//     return axios.get('')
//   }
// }

// Send a POST request

function googleBooksAPI() {
   function getBooks() {
    return axios.get("/api/books");
  }
axios({
  method: 'get',
  url: 'https://www.googleapis.com/books/v1/volumes?q='+ event.target.search,
  responseType: 'stream'
}) .then(function (response) {
    console.log(response);
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  })
}