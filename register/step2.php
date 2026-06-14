<?php
session_start();

$_SESSION['firstname'] = $_POST['firstname'];
$_SESSION['lastname']  = $_POST['lastname'];
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>

<div class="card">

<h1>Persönliche Daten</h1>

<form action="step3.php" method="POST">

<input
class="input"
type="date"
name="birthday"
required>

<select
class="input"
name="gender"
required>

<option value="">
Geschlecht
</option>

<option>
Männlich
</option>

<option>
Weiblich
</option>

<option>
Andere
</option>

</select>

<button class="btn">
Weiter
</button>

</form>

</div>

</body>
</html>
