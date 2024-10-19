<?php
$servername = "localhost"; // Altere se necessário
$username = "root"; // Substitua pelo seu usuário do MySQL
$password = "familia"; // Substitua pela sua senha do MySQL
$dbname = "calculadora_imc";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Receber dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $peso = $_POST['peso'];
    $altura = $_POST['altura'];
    $imc = $peso / ($altura * $altura);
    
    // Determinar a situação do IMC
    if ($imc < 17) {
        $situacao = "Muito abaixo do peso";
    } elseif ($imc < 18.49) {
        $situacao = "Abaixo do peso";
    } elseif ($imc < 24.99) {
        $situacao = "Peso normal";
    } elseif ($imc < 29.99) {
        $situacao = "Acima do peso";
    } elseif ($imc < 34.99) {
        $situacao = "Obesidade I";
    } elseif ($imc < 39.99) {
        $situacao = "Obesidade II (severa)";
    } else {
        $situacao = "Obesidade III (mórbida)";
    }

    // Inserir dados na tabela
    $sql = "INSERT INTO usuarios (nome, peso, altura, imc, situacao)
            VALUES ('$nome', '$peso', '$altura', '$imc', '$situacao')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro inserido com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>