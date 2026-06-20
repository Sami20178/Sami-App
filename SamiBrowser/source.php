<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$url = $_GET["url"] ?? "";

if (!$url) {
    echo json_encode([
        "error" => "URL fehlt"
    ]);
    exit;
}

$html = @file_get_contents($url);

if ($html === false) {
    echo json_encode([
        "error" => "Webseite konnte nicht geladen werden"
    ]);
    exit;
}

echo json_encode([
    "html" => $html
]);
?>
