<?php
include "includes/config.php";

if(!isset($_SESSION['user_id'])){
    header("Location: login.php");
    exit;
}

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

<img
src="uploads/<?=
htmlspecialchars(
$user['profile_image']
)
?>"
width="120"
height="120"
style="
border-radius:50%;
object-fit:cover;
">

<h1>
Willkommen
<?=htmlspecialchars($user['firstname'])?>
</h1>

<br>

<a href="profile.php">
Profil bearbeiten
</a>

<br><br>

<a href="logout.php">
Abmelden
</a>

</div>

</body>
</html>
