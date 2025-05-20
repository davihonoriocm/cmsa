<?php
$servername = "localhost";
$username = "root";     // Substitua pelo seu usuário do MySQL
$password = "";       // Substitua pela sua senha do MySQL
$database = "cmsa";   // Substitua pelo nome do seu banco de dados

$conn = new mysqli($servername, $username, $password, $database);

// Verifica conexão
if ($conn->connect_error) {
  die("Erro de conexão: " . $conn->connect_error);
}

// Receber dados do formulário
$intencao = isset($_POST['intencaoi']) ? trim($_POST['intencaoi']) : '';
$nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';

// Validação simples
if (empty($intencao)) {
  echo "Por favor, insira uma intenção de oração.";
  exit;
}

// Prepara e insere no banco
$stmt = $conn->prepare("INSERT INTO intencoes (intencao, nome) VALUES (?, ?)");
$stmt->bind_param("ss", $intencao, $nome);

if ($stmt->execute()) {
  // Redirecionar de volta para a página inicial
  header("Location: ../index.html?status=sucesso");
  exit;
} else {
  echo "Erro ao enviar: " . $stmt->error;
}
$stmt->close();
$conn->close();
