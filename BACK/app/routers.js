const express = require("express");
const authentication=require("../authentication");

const {
  mainController,
  adController,
  bandController,
  placeController,
  userController,
  searchController,
  instrumentController,
  styleController,
  cityController,
  hashPassWordController
} = require("./controllers");

const router = express.Router();



router.post("/signin/:role", authentication.findUser, authentication.generateToken);

router.get("/", mainController.homePage);

// authentication.verifyToken hashPassWordController.hash,hashPassWordController.hash
// Routes relatives aux musiciens/user
router.get("/musicians", userController.getAllMusicians);
router.get("/musicians/:id", userController.getMusicianById);

router.post("/sign/musicians",  userController.createNewMusician);
router.delete("/musicians/:id", userController.deleteMusicianById);

// Routes relatives aux groupes/band
router.get("/bands", bandController.getAllBands);
router.get("/bands/:id", bandController.getBandById);

router.post("/sign/bands",bandController.createNewBand);
router.delete("/bands/:id",bandController.deleteBandById);

//Routes relatives aux lieux
router.get("/places", placeController.getAllPlaces);
router.get("/places/:id", placeController.getPlaceById);

router.post("/sign/places", hashPassWordController.hash, placeController.createNewPlace);
router.delete("/places/:id", placeController.deletePlaceById);

//Routes relatives aux annonces
//authentication.verifyToken,authentication.verifyToken,
router.post("/newads/places/:id",  adController.postAdAsPlace);

router.post("/newads/users/:id",  adController.postAdAsUser);
//router.post("/ads/musicians", adController.postAdAsMusician);
router.get("/ads", adController.getAllAds);
router.get("/ads/:id", adController.getAdById);


// Routes relatives à la recherche
router.get("/search", searchController.getEverything)

//Route relative aux instruments lors de l'inscription
router.get("/instruments", instrumentController.getAllInstruments)

//Route relative aux styles lors de l'inscription
router.get("/styles", styleController.getAllStyles)

//Route relative aux villes lors de l'inscription
router.get("/cities", cityController.getAllCities);


module.exports = router;
