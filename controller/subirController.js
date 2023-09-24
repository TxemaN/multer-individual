


const formularioSubir = async (req, res) => {



    res.render("subirfoto.ejs")

}

const subir = async (req, res) => {
 

  try {
   
      const filePath = `uploads/${req.file.filename}`

        res.render("upload.ejs", {

            ruta: filePath
            
        })
       console.log(filePath)
    
} catch (error) {
    console.log(error);
}

}

module.exports = {

    formularioSubir,
    subir
}