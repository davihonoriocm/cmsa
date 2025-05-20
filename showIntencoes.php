<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";     // Substitua pelo seu usuário do MySQL
$password = "";       // Substitua pela sua senha do MySQL
$database = "cmsa";   // Substitua pelo nome do seu banco de dados

$conn = new mysqli($servername, $username, $password, $database);

// Verifica conexão
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Consulta para buscar as intenções
$sql = "SELECT nome, intencao, data_envio FROM intencoes ORDER BY data_envio DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Intenções de Oração</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 2em;
        }
        h1 {
            color: #333;
        }
        .intencao {
            border-bottom: 1px solid #ccc;
            padding: 1em 0;
        }
        .data {
            color: #777;
            font-size: 0.9em;
        }
        .nome {
            font-weight: bold;
        }
    </style>
</head>
<body>

<h1>Intenções de Oração</h1>

<?php
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $nome = htmlspecialchars($row["nome"]);
        $intencao = htmlspecialchars($row["intencao"]);
        $data = date("d/m/Y H:i", strtotime($row["data_envio"]));
        echo "<div class='intencao'>
                <p class='nome'>{$nome}</p>
                <p>{$intencao}</p>
                <p class='data'>Enviado em: {$data}</p>
              </div>";
    }
} else {
    echo "<p>Nenhuma intenção registrada ainda.</p>";
}

$conn->close();
?>

</body>
</html>
