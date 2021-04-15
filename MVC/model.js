
const mongoose =require(`mongoose`);

const Structure = mongoose.Schema(
    {
    name: {
        type: String,
        unique: true,
    },
    location: {
        type: String,
    },
    age: {
        type: Number
    },
});

module.exports = mongoose.model("monies", Structure);
