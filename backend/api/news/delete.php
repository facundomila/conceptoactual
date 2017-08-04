<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object file
include_once '../config/database.php';
include_once '../objects/news.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare notice object
$news = new News($db);

// get product id
$data = json_decode(file_get_contents("php://input"));

// set product id to be deleted
$news->id = $data->id;

// delete the notice
if($news->delete()){
    echo '{';
        echo '"message": "Product was deleted."';
    echo '}';
}

// if unable to delete the product
else{
    echo '{';
        echo '"message": "Unable to delete object."';
    echo '}';
}
?>