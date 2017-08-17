<?php

$conexion= mysql_connect ("localhost","c0780297_data","35LAmafebi") or die ("no hay conexion al servidor");
mysql_select_db ("c0780297_data") or die ("no existe la base de datos");
mysql_set_charset("utf8");

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
}

$sql = "UPDATE news SET (title,subtitle,ubicacion,category_id,description,paragraph,epigraph,ruta,ruta_miniatura) values('$titulo','$subtitulo','$ubicacion','$category_id','$description','$paragraph','$epigraph','".$destino."','".$destmini."')";
$res=mysql_query($sql,$conexion);


if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
