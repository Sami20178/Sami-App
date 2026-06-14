<?php
include "includes/config.php";

$id = $_SESSION['user_id'];

$firstname = trim($_POST['firstname']);
$lastname  = trim($_POST['lastname']);

$imageName = null;

if(
isset($_FILES['profile_image']) &&
$_FILES['profile_image']['error']==0
){

$imageName =
time()."_".
basename(
$_FILES['profile_image']['name']
);

move_uploaded_file(
$_FILES['profile_image']['tmp_name'],
"uploads/".$imageName
);

$stmt = $conn->prepare(
"UPDATE users
SET firstname=?,
lastname=?,
profile_image=?
WHERE id=?"
);

$stmt->bind_param(
"sssi",
$firstname,
$lastname,
$imageName,
$id
);

}else{

$stmt = $conn->prepare(
"UPDATE users
SET firstname=?,
lastname=?
WHERE id=?"
);

$stmt->bind_param(
"ssi",
$firstname,
$lastname,
$id
);

}

$stmt->execute();

header("Location: dashboard.php");
exit;
