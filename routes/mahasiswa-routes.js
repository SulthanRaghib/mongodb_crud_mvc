const express = require("express");
const Mahasiswa = require("../controllers/MahasiswaController");

const router = express.Router();

router.get("/", Mahasiswa.getAllMahasiswa);
router.get("/addMahasiswa", Mahasiswa.getAddMahasiswaView);
router.post("/addMahasiswa", Mahasiswa.addMahasiswa);
router.get("/editMahasiswa/:id", Mahasiswa.getUpdateMahasiswaView);
router.post("/updateMahasiswa/:id", Mahasiswa.updateMahasiswa);
router.get("/deleteMahasiswa/:id", Mahasiswa.getDeleteMahasiswaView);
router.post("/deleteMahasiswa/:id", Mahasiswa.deleteMahasiswa);

module.exports = {
  routes: router,
};
