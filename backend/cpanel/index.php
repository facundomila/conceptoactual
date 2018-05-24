<?php
session_start();
if(!isset($_SESSION["user"])){
  header("location:login.php");
}

echo '<div class="header-bar"><div class="bienvenido">Bienvenido:'.$_SESSION["user"].'</div>';
echo '<div class="logout"><a href="logout.php">Cerrar Session</a></div></div>';

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
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 12px;
        font-size: 14px;
      }
      tr:nth-child(even) {
        background-color: #dddddd;
      }
    </style>
  </head>
  <body>
      <div class="form-container">
          <h1>Crear Noticia</h1>
          <hr>
          <form action="insert.php" method="POST" enctype="multipart/form-data">
            <div class="first-part">
              <label>Titulo: *</label>
                  <input name="title" type="text" size="100" required/>
              <label>Subtitulo: *</label>
                  <input name="subtitle" type="text" size="100" required/>
            </div>
            <div class="second-part">
              <div class="half">
                <label>Ubicacion:</label>
                  <select name="ubicacion" type="text">
                    <option value="0">Destacadas</option>
                    <option value="1">Portal</option>
                  </select>
              </div><div class="half">
              <label>Categoria:</label>
                  <select name="category_id" type="text">
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
                <textarea name="description" rows="3" cols="30"></textarea>
              </div>
              <div class="fourth-part">
              <label>Cuerpo de noticia: *</label><br>
              <p>Para dar formato al texto ingresar <a href="https://wordtohtml.net/" target="_blank">AQUI</a>. Dar formato y copiar el resultado del HTML editor</p>
                <textarea type="text" name="paragraph" rows="100" cols="100" required></textarea>
              </div>
              <div class="fifth-part">
              <span><label>Adjuntar Imagen [ Las imagenes deben ser en formato JPG y tamaño 1920 px x 1080 px ]</label>
                <input name="archivo" type="file" size="100" class="btn btn-default" required/>
                <input name="action" type="hidden" value="upload" /></span><br>
                </div>
                <div class="fifth-part">
                <span><label>Enlace de video</label>
                  <input name="video" type="text" size="200" class="btn btn-default"/>
              <label>Pie de imagen:</label>
                <input name="epigraph" type="text" size="100"/>
                <div class="separator"></div>
                <button type="submit" class="btn btn-success">Enviar noticia</button>
              </div>
              </form>
      </div>
      <div class="form-container">
      <h1>Noticias</h1><hr>
      <table id="news-list">
        <tr>
          <th>Titulo</th>
          <th>Categroria</th>
          <th>Acciones</th>
        </tr>
        <script>
        var news;

        var xmlhttp = new XMLHttpRequest();

        function writeNews(news) {
            var item = document.createElement("tr");
            item.innerHTML = "<td>"+ news.title + "</td><td>"+ news.category_name +"</td><td><button onclick='editItem("+news.id+")'> Editar </button><button onclick='deleteItem("+news.id+")'> Eliminar </button></td>";
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

        function editItem(id) {
          location.assign("http://conceptoactual.com/cpanel/edit.php?id="+id);
        }

        function deleteItem(id) {
          var x = confirm("Esta seguro que desea Eliminar esta noticia?");
          if (x == true) {
          xmlhttp.open("POST", "http://conceptoactual.com/api/news/delete.php", true);
          xmlhttp.send(JSON.stringify({id: id}));
          location.reload();
          }
        }
        </script>
      </table>
      </div>
  </body>
</html>
