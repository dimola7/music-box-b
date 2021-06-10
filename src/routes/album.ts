import express from "express";

import {
  mostPlayedAlbum,
  getLikedAlbumsByUser,
  likedAlbum,
  listenedAlbumCount,
  searchAlbum,
} from "../controllers/album";

import verifyToken from "../middleware/auth";

const router = express.Router();

router.get("/likes", verifyToken, getLikedAlbumsByUser);
router.get("/mostplayed", verifyToken, mostPlayedAlbum);

router.post("/", verifyToken, searchAlbum);
router.put("/likes/:id", verifyToken, likedAlbum);
router.put("/listened/:id", verifyToken, listenedAlbumCount);

export default router;