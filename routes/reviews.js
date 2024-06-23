const express = require("express");
const router = express.Router({ mergeParams: true });
const  warpAsync = require("../utils/warpAsync.js");
const expresserror = require("../utils/expresserror.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const{validateReview,isLoggedIn,isReviewAuthor} =  require("../middleware.js");

 const reviewController =  require("../controllers/reviews.js");

 //post review  route
 router.post(
 "/",
 isLoggedIn, 
 validateReview,
 warpAsync(reviewController.createReview)
);

 //delet review route
 router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    warpAsync( reviewController.destroyReview )
  );
  module.exports = router;