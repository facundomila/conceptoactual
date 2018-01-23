<?php
session_start();
if(!isset($_SESSION["user"])){
  header("location:login.php");
}

echo '<div class="header-bar"><div class="bienvenido">Bienvenido:'.$_SESSION["user"].'</div>';
echo '<div class="logout"><a href="logout.php">Cerrar Session</a></div>';
echo '<div class="menu"><a href="index.php">Menu principal</a></div></div>';

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
      <h1>Editar Noticia</h1>
      <hr>
      <form action="update.php" method="POST" enctype="multipart/form-data">
        <div class="first-part">
          <input id="idnews" name="id" type="hidden"/>
          <label>Titulo:</label>
              <input id="title" name="title" type="text" size="100" />
          <label>Subtitulo:</label>
              <input id="subtitle" name="subtitle" type="text" size="100" />
        </div>
        <div class="second-part">
          <div class="half">
            <label>Ubicacion:</label>
              <select id="ubicacion" name="ubicacion" type="text">
                <option value="0">Destacadas</option>
                <option value="1">Portal</option>
              </select>
          </div><div class="half">
          <label>Categoria:</label>
              <select id="category_id" name="category_id" type="text">
                <option value="0">Novedades</option>
                <option value="1">Deportes</option>
                <option value="2">Life Style</option>
                <option value="3">Viajes</option>
                <option value="4">Ocio</option>
                <option value="5">Tecno</option>
                <option value="6">Sociales</option>
                <option value="7">Moda</option>
                <option value="8">Concepto Actual TV</option>
              </select>
          </div>
        </div>
        <div class="third-part">
          <label>Bajada:</label><br>
            <textarea id="description" name="description" rows="3" cols="30" ></textarea>
        </div>
        <div class="fourth-part">
          <label>Cuerpo de noticia:</label><br>
            <textarea id="paragraph" name="paragraph" rows="30" cols="50" ></textarea>
        </div>
        <div class="fifth-part">
          <img width="220px" id="thumb" />
          <div class="nueva-img">
              <label>Adjuntar Imagen [ Las imagenes deben ser en formato JPG y tamaño 1920 px x 1080 px ]</label>
                <input name="archivo" type="file" size="300"/>
                <input name="action" type="hidden" value="upload" /></span><br>
          </div>
        </div>
        <div class="fifth-part">
            <input id="epigraph" name="epigraph" type="text" size="100" />
        </div> 
        <div class="fifth-part">
        <label>Video:</label><br>
          <input id="video" name="video" type="text" size="300" />
          <div class="separator"></div>
            <button type="submit" class="btn btn-success">Confirmar</button>
          </div>
        </div>
    </form>
  </div>

    <script>
        var collection;
        var xmlhttp = new XMLHttpRequest();

        function populateValues(collection) {
          var filter = document.location.search.substring(4);
          var news = [];

          collection.forEach(function (item) {
            if (item.id === filter) {
              news.push(item);
            }
          });

          var idnews = document.getElementById("idnews");
            idnews.setAttribute("value", filter);
          var tit = document.getElementById("title");
            tit.setAttribute("value", news[0].title);
          var subt = document.getElementById("subtitle");
            subt.setAttribute("value", news[0].subtitle);
          document.getElementById("ubicacion").selectedIndex = news[0].ubicacion;
          document.getElementById("category_id").selectedIndex = news[0].category_id;
          var textDesc = news[0].description;
            document.getElementById("description").value=textDesc;
          var textParr = news[0].paragraph;
            document.getElementById("paragraph").value=textParr;  
          var thumb = document.getElementById("thumb");
            thumb.setAttribute("src", news[0].ruta_miniatura);
          var epi = document.getElementById("epigraph");
            epi.setAttribute("value", news[0].epigraph);
          var video = document.getElementById("video");
            video.setAttribute("value", news[0].video);
        }

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                collection = myObj.records;
                populateValues(collection);
            }
        };
        xmlhttp.open("GET", "http://conceptoactual.com/api/news/read.php", true);
        xmlhttp.send();

      </script>
  </body>
</html>
