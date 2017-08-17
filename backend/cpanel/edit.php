<?php
session_start();
if(!isset($_SESSION["user"])){
  header("location:login.php");
}

echo '<div class="bienvenido">Bienvenido:'.$_SESSION["user"].'</div>';
echo '<div class="logout"><a href="logout.php">Cerrar Session</a></div>';

?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Control Panel</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script src="js/jquery-1.12.3.min.js" charset="utf-8"></script>
    <script src="bootstrap/js/bootstrap.min.js" charset="utf-8"></script>
  </head>
  <body>
        <div class="form-container">
          <form action="update.php" method="POST" enctype="multipart/form-data">
              <div class="first-part">
              <label>Titulo:</label>
                <input id="title" name="title" type="text" size="100" />
              <label>Ubicacion:</label>
                  <select id="ubicacion" name="ubicacion" type="text">
                    <option value="0">Destacadas</option>
                    <option value="1">Portal</option>
                  </select>
              </div>
              <div class="second-part">
              <label>Subtitulo:</label>
                <input id="subtitle" name="subtitle" type="text" size="100" required/>
                <label>Categoria:</label>
                    <select id="category_id" name="category_id" type="text">
                        <option value="1">Novedades</option>
                        <option value="2">Deportes</option>
                        <option value="3">Life Style</option>
                        <option value="4">Turismo</option>
                        <option value="5">Ocio</option>
                        <option value="6">Tecno</option>
                        <option value="19">Sociales</option>
                        <option value="20">Concepto Actual TV</option>
                    </select>
              </div>
              <div class="third-part">
              <label>Bajada:</label><br>
                <textarea id="description" name="description" rows="3" cols="30" required></textarea>
              </div>
              <div class="fourth-part">
              <label>Cuerpo de noticia:</label><br>
                <textarea id="paragraph" name="paragraph" rows="30" cols="50"></textarea>
              </div>
              <div class="fifth-part">
              <img width="220px" id="thumb"/>
              <span><label>Adjuntar Imagen [ Las imagenes deben ser en formato JPG y tamaño 1920 px x 1080 px ]</label>
                <input name="archivo" type="file" size="100" />
                <input name="action" type="hidden" value="upload" /></span><br>
              <label>Pie de imagen:</label>
                <input id="epigraph" name="epigraph" type="text" size="100" required/>
              </div>
              <button type="submit" class="btn btn-default">Enviar noticia</button>
              </form>
            </div>
      <script>
        var news;
        var toEdit = document.location.search.substring(4))
        var xmlhttp = new XMLHttpRequest();

        function populateValues(news) {
          console.log('news', news)
          var tit = document.getElementById("title");
          tit.setAttribute("value", news.title);
          var ubi = document.getElementById("ubicacion");
          ubi.setAttribute("selected", news.ubicacion);
          var subt = document.getElementById("subtitle");
          var cid = document.getElementById("category_id");
          cid.setAttribute("selected", news.category_id);
          subt.setAttribute("value", news.subtitle);
          var textDesc = news.description;
          document.getElementById("description").value=textDesc;
          var textParr = news.paragraph;
          document.getElementById("paragraph").value=textParr;
          var thumb = document.getElementById("thumb");
          thumb.setAttribute("src", news.ruta_miniatura);
          var epi = document.getElementById("epigraph");
          epi.setAttribute("value", news.epigraph);
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                news = myObj.records.map(populateValues);
            }
        };
        xmlhttp.open("GET", "http://conceptoactual.com/api/news/read.php", true);
        xmlhttp.send();

      </script>
  </body>
</html>
