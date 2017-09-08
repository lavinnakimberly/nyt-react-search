import axios from "axios";

const API = {
  search: function(query) {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
    let apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    let searchTerm = query.topic;
    let startDate = query.startYear + "0101";
    let endDate = query.endYear + "1231";
    return axios.get(`${url}${apiKey}&q=${searchTerm}&begin_date=${startDate}&end_date=${endDate}`)
  },
  // Retrieves all quotes from the db
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Saves a new quote to the db
  saveQuote: function(text) {
    return axios.post("/api/quotes", { text });
  },
  // Deletes a quote from the db
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // Toggles a quote's favorite property in the db
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  }
};

export default API;
