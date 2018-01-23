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
<?php
//conexion a la base de datos

$conexion= mysql_connect ("localhost","c0780297_data","35LAmafebi") or die ("no hay conexion al servidor");
mysql_select_db ("c0780297_data") or die ("no existe la base de datos");
mysql_set_charset("utf8");


	      	$status = "";
          ($_POST["action"] == "upload") or die ("Error al subir la imagen.");
          $tamano = $_FILES["archivo"]['size'];
          $tipo = $_FILES["archivo"]['type'];
          $archivo = $_FILES["archivo"]['name'];
          $prefijo = substr(md5(uniqid(rand())),0,6);//generamos una id para poder tener imagenens repetidas

         	($archivo != "") or die ("Error al subir la imagen ".$archivo);

				 	//definimos la extension de la imagen
					($tipo == "image/jpeg" || $tipo == "image/jpg") or die ("Sólo se admiten imágenes en <b>.jpg</b> y <b>.jpeg </b>");
          //subimos la imagen original
          $destino =  "imagenes/originales/".$prefijo."_".$archivo; //ruta de la imagen original
          (copy($_FILES['archivo']['tmp_name'],$destino)) or die ("Error al subir la imagen ".$archivo);
          //$status = "La imagen <b>".$archivo."</b> se a subido correctamente!";
	      	$post=$destino;

		  		//echo $status;

          //creamos la miniaturas
          $source=$destino;
          $destmini="imagenes/miniaturas/".$prefijo."_".$archivo;//ruta donde se guardan las miniaturas
          $width_d=640; // ancho de la imagen
          $height_d=360; // alto de la imagen

					//copyamos la miniatura
          list($width_s, $height_s, $type, $attr) = getimagesize($source, $info2);
          $gd_s = imagecreatefromjpeg($source);
          $gd_d = imagecreatetruecolor($width_d, $height_d);
          imagecopyresampled($gd_d, $gd_s, 0, 0, 0, 0, $width_d, $height_d, $width_s, $height_s);
          imagejpeg($gd_d, $destmini);
          imagedestroy($gd_s);
          imagedestroy($gd_d);

					$titulo = $_POST["title"];
					$subtitulo = $_POST["subtitle"];
					$ubicacion = $_POST["ubicacion"];
					$category_id = $_POST["category_id"];
					$description = $_POST["description"];
					$paragraph = $_POST["paragraph"];
          $epigraph = $_POST["epigraph"];
          $video = $_POST["video"];

//insertamos los datos en la db
$sql="INSERT INTO  news (title,subtitle,ubicacion,category_id,description,paragraph,epigraph,video,ruta,ruta_miniatura) values('$titulo','$subtitulo','$ubicacion','$category_id','$description','$paragraph','$epigraph','$video','".$destino."','".$destmini."')";
$res=mysql_query($sql,$conexion);

echo '<div class="mensaje">Se ha ingresado: '.$titulo.' correctamente.<br> Imagen: '.$archivo.'<br>Video: '.$video.'<div class="separador"><a href="index.php">Menu principal</a></div>';
?>
</body>
</html>
