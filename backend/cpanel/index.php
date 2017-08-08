<?php

session_start();
if(!isset($_SESSION["user"])){
  header("location:login.php");
}

echo '<h1 align=center>Bienvenido usuario:'.$_SESSION["user"].'</h1>';
echo '<p align=center><a href="logout.php">Logout</a></p>';

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Control Panel</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <script src="js/jquery-1.12.3.min.js" charset="utf-8"></script>
    <script src="bootstrap/js/bootstrap.min.js" charset="utf-8"></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form action="recibir.php" method="POST" enctype="multipart/form-data">
            <div class="form-group">
              <label>Titulo:</label>
                <input name="title" type="text" size="100" />
              <label>Ubicacion:</label>
                  <input name="ubicacion" type="text" size="10" />
              <label>Categoria:</label>
                  <input name="category_id" type="text" size="10" />
              <label>Subtitulo:</label>
                <input name="subtitle" type="text" size="100" />
                <label>Bajada:</label>
                  <input name="description" type="text" size="150" />
                  <label>Cuerpo de noticia:</label>
                    <input name="paragraph" type="textarea" size="800" />
              <label>Adjuntar Imagen</label>
              <input name="archivo" type="file" size="100" />
              <input name="action" type="hidden" value="upload" />
              <label>Pie de imagen:</label>
                <input name="epigraph" type="text" size="100" />
            </div>
            <button type="submit" class="btn btn-default">Enviar noticia</button>
          </form>
        </div>
      </div>
    </div>
  </body>
</html>
