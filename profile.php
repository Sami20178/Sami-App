<?php
include "includes/config.php";

$id = $_SESSION['user_id'];

$stmt = $conn->prepare(
"SELECT * FROM users WHERE id=?"
);

$stmt->bind_param("i",$id);
$stmt->execute();

$user = $stmt->get_result()->fetch_assoc();
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet"
href="assets/css/style.css">
</head>
<body>

<div class="card">

<h1>Profil bearbeiten</h1>

<form
action="save_profile.php"
method="POST"
enctype="multipart/form-data">

<input
class="input"
name="firstname"
value="<?=htmlspecialchars($user['firstname'])?>">

<input
class="input"
name="lastname"
value="<?=htmlspecialchars($user['lastname'])?>">

<input
type="file"
name="profile_image">

<br><br>

<button class="btn">
Speichern
</button>

</form>

</div>

</body>
</html>
