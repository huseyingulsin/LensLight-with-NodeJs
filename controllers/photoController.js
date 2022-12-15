import photosx from "../model/photoModel.js";


const createPhoto = async (req,res) => {
    try {
        const photo = await photosx.create(req.body);
        res.status(201).json({
            succeded: true,
            photo,
        })
    }catch(err) {
        res.status(500).json({
            succeded: false,
            error, 
        })
    }
    
}
const getAllPhotos = async (req,res) => { 
    try{
        const photos = await photosx.find({})
        res.status(200).render("photos",{
            photos
        })
    }catch(err) {
        res.status(500).json({ 
            succeded: false,
            error,
        })

    }
}
export {createPhoto, getAllPhotos};
