<?php
session_start();

$_SESSION['birthday'] = $_POST['birthday'];
$_SESSION['gender']   = $_POST['gender'];
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>

<div class="card">

<h1>E-Mail erstellen</h1>

<form action="step4.php" method="POST">

<input
class="input"
type="email"
name="email"
placeholder="E-Mail"
required>

<input
class="input"
name="username"
placeholder="Benutzername"
required>

<button class="btn">
Weiter
</button>

</form>

</div>

</body>
</html>
