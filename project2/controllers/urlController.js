const Url = require("../models/url");
const shortid = require("shortid");

class UrlController {
  // Create short URL
  async shortenUrl(req, res) {
    try {
      const { originalUrl } = req.body;

      const shortCode = shortid.generate();

      const newUrl = new Url({
        originalUrl,
        shortCode,
      });

      await newUrl.save();

      res.json({
        shortUrl: `http://localhost:5000/${shortCode}`,
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }

  // Redirect to original URL
  async redirectUrl(req, res) {
    try {
      const { code } = req.params;

      const url = await Url.findOne({ shortCode: code });

      if (url) {
        return res.redirect(url.originalUrl);
      } else {
        return res.status(404).json({ message: "URL not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }
}

module.exports = new UrlController();
