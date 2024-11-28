import express from "express";
import formidable from "formidable";
import path from "path";

const app = express();

app.listen(3001, () => console.log("Server up"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hola" });
});

app.post("/", (req, res) => {
  const form = formidable({
    uploadDir: "uploads",
    maxFileSize: 200 * 1024 * 1024,
  });

  // Evento para mantener el nombre original del archivo
  form.on("fileBegin", (name, file) => {
    const originalName = file.originalFilename || "default_name";
    file.filepath = path.join("uploads", originalName);
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json({ message: "Ocurrio un error" });
      return;
    }
    res.json({ fields, files });
  });
});
