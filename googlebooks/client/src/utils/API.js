import axios from "axios";


export default {
    getBooks: function(query) {
return axios.get("/api/googleBooks", { params: { q: query } });
},

getUserBooks: function() {
    return axios.get("/api/userBooks");
},

saveBook: function(bookObj) {
    return axios.post("/api/userBooks", bookObj);
},

deleteBook: function(id) {
    return axios.delete("/api/userBooks/" + id);
}
};