const { Mahasiswa, validate } = require("../models/Mahasiswa");

const getAllMahasiswa = async (req, res, next) => {
  const list = await Mahasiswa.find().exec();
  res.render("mahasiswa", {
    mahasiswa: list,
  });
};

const getAddMahasiswaView = (req, res, next) => {
  res.render("addMahasiswa");
};

const addMahasiswa = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const data = req.body;
  let mahasiswa = await new Mahasiswa({
    nama: data.nama,
    nim: data.nim,
    jurusan: data.jurusan,
    roomble: data.roomble,
  });

  await mahasiswa.save();
  res.redirect("/");
};

const getUpdateMahasiswaView = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updtMahasiswa = await Mahasiswa.findById(id).exec();
    res.render("updateMahasiswa", {
      mahasiswa: updtMahasiswa,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateMahasiswa = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const { error } = validate(data);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const mahasiswa = await Mahasiswa.findByIdAndUpdate(
      id,
      {
        nama: data.nama,
        nim: data.nim,
        jurusan: data.jurusan,
        roomble: data.roomble,
      },
      { new: true }
    );
    if (!mahasiswa) return res.status(404).send("Mahasiswa not found");

    res.redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getDeleteMahasiswaView = async (req, res, next) => {
  try {
    const id = req.params.id;
    const delMahasiswa = await Mahasiswa.findById(id).exec();
    res.render("deleteMahasiswa", {
      mahasiswa: delMahasiswa,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deleteMahasiswa = async (req, res, next) => {
  try {
    const id = req.params.id;
    const mahasiswa = await Mahasiswa.findByIdAndRemove(id).exec();
    if (!mahasiswa) return res.status(404).send("Mahasiswa not found");
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllMahasiswa,
  getAddMahasiswaView,
  addMahasiswa,
  getUpdateMahasiswaView,
  updateMahasiswa,
  getDeleteMahasiswaView,
  deleteMahasiswa,
};
