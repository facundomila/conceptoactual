<?php

$conexion= mysql_connect ("localhost","c0780297_data","35LAmafebi") or die ("no hay conexion al servidor");
mysql_select_db ("c0780297_data") or die ("no existe la base de datos");
mysql_set_charset("utf8");

$id = $_POST["id"];
$titulo = $_POST["title"];
$subtitulo = $_POST["subtitle"];
$ubicacion = $_POST["ubicacion"];
$category_id = $_POST["category_id"];
$description = $_POST["description"];
$paragraph = $_POST["paragraph"];
$epigraph = $_POST["epigraph"];

$sql = "UPDATE news SET title='probando form' WHERE id=43";
$res=mysql_query($sql,$conexion);

echo 'Se ha actualizado: '.$titulo.' correctamente.';
?>
<script>
alert("La noticia ha sido actualizada correctamente!")
window.location.href = "index.php";
</script>
