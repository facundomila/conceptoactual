<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Concepto Actual</title>
    <link href="styles.css" rel="stylesheet">
</head>
<body>

<?php

session_start();
if(!isset($_SESSION["user"])) {
  echo "<script>
          alert('Para ingresar al panel de control debe ser administrador');
          window.location.href='login.php';
        </script>";
} else {
  echo '<h1 align=center>Bienvenido:'.$_SESSION["user"].'</h1>';
  echo '<p align=center><a href="logout.php">Logout</a></p>';
  echo '<div id="app"></div><script src="./bundle.js"></script>';
}
?>

</body>
</html>
