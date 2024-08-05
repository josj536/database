import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router = Router();

router.get("/", languageController.getTarjetas);
router.get("/:id", languageController.getTarjeta);
router.post("/", languageController.addTarjeta);
// Nueva ruta para el scraping
router.post("/scrape", languageController.scrapeAndStoreData);

export default router;