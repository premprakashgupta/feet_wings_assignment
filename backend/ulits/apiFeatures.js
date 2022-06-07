class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  price() {
    const popularity = this.queryStr.sort;

    if (popularity === "high_to_low") {
      this.query = this.query.find().sort({ price: -1 });
    }
    if (popularity === "low_to_high") {
      this.query = this.query.find().sort({ price: 1 });
    }

    return this;
  }
  popularity() {
    const popularity = this.queryStr.sort;
    if (popularity === "popular") {
      this.query = this.query.find().sort({ rating: -1 });
    }

    return this;
  }
  newestFirst() {
    const popularity = this.queryStr.sort;
    if (popularity === "newest") {
      this.query = this.query.find().sort({ createdAt: -1 });
    }

    return this;
  }
}

module.exports = ApiFeatures;
