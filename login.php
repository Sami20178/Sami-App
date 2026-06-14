<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>Anmelden</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="card">

<img src="assets/images/logo.svg" class="logo">

<h1>Anmelden</h1>

<p>Mit deinem Konto fortfahren</p>

<form action="api/login.php" method="POST">

<input
class="input"
name="email"
type="email"
placeholder="E-Mail"
required>

<input
class="input"
name="password"
type="password"
placeholder="Passwort"
required>

<button class="btn">
Weiter
</button>

</form>

<br>

<a href="register/step1.php">
Konto erstellen
</a>

</div>

</body>
</html>
