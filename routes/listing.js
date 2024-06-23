const express = require("express");
const router = express.Router();
const  warpAsync = require("../utils/warpAsync.js");
const Listing = require("../models/listing.js");
const { number } = require("joi");
const { createCollection } = require("../models/review.js");
const {isLoggedIn,isOwner,validateListing }  = require("../middleware.js");
const listingController  = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

 router
.route("/")
 .get(warpAsync(listingController.index))
  .post(
   isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
   warpAsync(listingController.createListing)
  );
  
    //New Route
    router.get("/new",isLoggedIn ,listingController.renderNewForm);

   router
   .route("/:id")
   .get(warpAsync(listingController.showListing))
  .put(
   isLoggedIn,
   isOwner ,
   upload.single("listing[image]"),
    validateListing,
    warpAsync(listingController.updateListing )
   )
  .delete(isLoggedIn,isOwner ,warpAsync(listingController.destroyListing))
  
    //Edit Route
  router.get("/:id/edit",  isLoggedIn , isOwner,warpAsync(listingController.renderEditForm)
  );
  

  module.exports = router;