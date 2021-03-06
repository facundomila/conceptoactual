<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/news.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$news = new News($db);

// query products
$stmt = $news->read();
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // products array
    $news_arr=array();
    $news_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $news_item=array(
            "id" => $id,
            "title" => $title,
            "subtitle" => $subtitle,
            "description" => html_entity_decode($description),
            "paragraph" => $paragraph,
            "ruta" => $ruta,
            "ruta_miniatura" => $ruta_miniatura,
            "ubicacion" => $ubicacion,
            "epigraph" => $epigraph,
            "video" => $video,
            "category_id" => $category_id,
            "category_name" => $category_name,
            "modificated" => $modificated
        );

        array_push($news_arr["records"], $news_item);
    }

    echo json_encode($news_arr);
}

else{
    echo json_encode(
        array("message" => "No news found.")
    );
}
?>
