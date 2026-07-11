module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });
  eleventyConfig.addPassthroughCopy({ "src/apple-touch-icon.png": "apple-touch-icon.png" });

  eleventyConfig.addCollection("lugares", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/lugares/*.md")
      .sort((a, b) => (a.data.orden ?? 0) - (b.data.orden ?? 0));
  });

  eleventyConfig.addCollection("noticias", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/noticias/*.md")
      .sort((a, b) => new Date(b.data.fecha) - new Date(a.data.fecha));
  });

  eleventyConfig.addFilter("fechaLarga", (value) => {
    if (!value) return "";
    return new Intl.DateTimeFormat("es-CL", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(value));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
