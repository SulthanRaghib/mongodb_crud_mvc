const mongoose = require("mongoose");
const Joi = require("joi");

const mahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    minlength: 5,
    maxlenght: 50,
  },
  nim: {
    type: String,
    required: true,
    minlength: 5,
    maxlenght: 10,
  },
  jurusan: {
    type: String,
    required: true,
  },
  roomble: {
    type: String,
    required: true,
  },
  tglTerdaftar: {
    type: Date,
    default: Date.now,
  },
});

const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);

const validateMahasiswa = (mahasiswa) => {
  const schema = Joi.object({
    nama: Joi.string().min(5).max(50).required(),
    nim: Joi.string().min(5).max(10).required(),
    jurusan: Joi.string().required(),
    roomble: Joi.string().required(),
  });

  return schema.validate(mahasiswa);
};

module.exports.Mahasiswa = Mahasiswa;
module.exports.validate = validateMahasiswa;
