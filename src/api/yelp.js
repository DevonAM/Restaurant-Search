import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 2UlIwN54GzfcqEIePvpwsM9UcnTulJAv6dsUB5b0IdbqjkwUye5nzzWGDP28gr7YIDsCAxeaJIEHm-0zM0S65aEmemB739C5ukBpb5uPDFrHXe1XpjYCL2rBaqe-YHYx",
  },
});
