<?php
// Opti-Look MySQL Database Connector (PDO)
header('Content-Type: application/json; charset=UTF-8');

$host = '127.0.0.1';
$db   = 'opti_look_db';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    // Attempt connection
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // Attempt auto-creating database if not found
    try {
        $rootPdo = new PDO("mysql:host=$host;charset=$charset", $user, $pass, $options);
        $rootPdo->exec("CREATE DATABASE IF NOT EXISTS `$db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
        $pdo = new PDO($dsn, $user, $pass, $options);
        
        // Auto-run schema if exists
        $schemaPath = __DIR__ . '/schema.sql';
        if (file_exists($schemaPath)) {
            $sql = file_get_contents($schemaPath);
            $pdo->exec($sql);
        }
    } catch (\PDOException $ex) {
        // Fallback flag for environments where MySQL is not yet started
        $pdo = null;
    }
}

function getDatabaseConnection() {
    global $pdo;
    return $pdo;
}

function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}
