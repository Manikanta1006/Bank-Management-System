const fileModel = require("../Model/Files.model");

const fileupload = async (req, res) => {
    const { userId } = req.body;
    console.log(req.body.userId,"idididididid")

    try {
        if (!userId) {
            // return res.status(400).json({ message: "userId is required" });
            console.log("user id  is requiresdfdsafdad")
        }
        const adharCard = req.files.adharCard?.[0]?.filename;
        const panCard = req.files.panCard?.[0]?.filename;
        const photo = req.files.photo?.[0]?.filename;
        // const userId = req.body

        const file = new fileModel({
            userId: req.body.userId,
            adharCard,
            panCard,
            photo,
        });

        await file.save();

        res.status(201).json({ message: "Files uploaded successfully", file });
    } catch (err) {
        console.error(err); 
        res.status(500).json({ message: "Error uploading files" });
    }
};

module.exports = {
    fileupload
};
