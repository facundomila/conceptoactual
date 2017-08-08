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
    <meta charset="utf-8">
    <title>Control Panel</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <script src="js/jquery-1.12.3.min.js" charset="utf-8"></script>
    <script src="bootstrap/js/bootstrap.min.js" charset="utf-8"></script>
  </head>
  <body>
        <div class="form-container">
          <form action="recibir.php" method="POST" enctype="multipart/form-data">
              <div class="first-part">
              <label>Titulo:</label>
                <input name="title" type="text" size="100" />
              <label>Ubicacion:</label>
                  <select name="ubicacion" type="text">
                    <option value="0">Destacadas</option>
                    <option value="1">Portal</option>
                  </select>
              </div>
              <div class="second-part">
              <label>Subtitulo:</label>
                <input name="subtitle" type="text" size="100" />
                <label>Categoria:</label>
                    <select name="category_id" type="text">
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
                <textarea name="description" rows="3" cols="30"></textarea>
              </div>
              <div class="fourth-part">
              <label>Cuerpo de noticia:</label><br>
                <textarea name="paragraph" rows="30" cols="50"></textarea>
              </div>
              <div class="fifth-part">
              <label>Adjuntar Imagen</label>
                <input name="archivo" type="file" size="100" />
                <input name="action" type="hidden" value="upload" />
              <label>Pie de imagen:</label>
                <input name="epigraph" type="text" size="100" />
              </div>
              <button type="submit" class="btn btn-default">Enviar noticia</button>
              </form>
    </div>
    <div class="form-container" id="news-list">
      <h1>Noticias</h1>
      <div class="example"></div>
    </div>
      <script>
        var news;

        var xmlhttp = new XMLHttpRequest();

        function writeNews(news) {
            var item = document.createElement("div");
            item.innerHTML = news.title + " - <b>"+news.category_name+"</b> <button onclick='deleteItem("+news.id+")'> Eliminar nota</button>";
            document.getElementById("news-list").appendChild(item);
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                news = myObj.records.map(writeNews);
            }
        };
        xmlhttp.open("GET", "http://conceptoactual.com/api/news/read.php", true);
        xmlhttp.send();

        function deleteItem(id) {
          xmlhttp.open("POST", "http://conceptoactual.com/api/news/delete.php", true);
          xmlhttp.send(JSON.stringify({id: id}));
          location.reload();
        }
      </script>
  </body>
</html>
