<?php
require_once __DIR__ . '/db.php';

$pdo = getDatabaseConnection();
$method = $_SERVER['REQUEST_METHOD'];

// Fallback products catalog if MySQL is offline
$fallbackProducts = [
    [
        'id' => 1,
        'slug' => 'aster-optical',
        'name' => 'Aster Optical',
        'category' => 'Vue & Lumière Bleue',
        'price' => 1450.00,
        'original_price' => 2200.00,
        'shape' => 'Pantoscope / Ronde',
        'material' => 'Acétate Mazzucchelli & Titane',
        'frame_color' => '#36C6C9',
        'rating' => 4.9,
        'is_bestseller' => 1,
        'image' => './images/a-close-up-photograph-of-elegant-eyeglas_iL8JZtXgRIiLhdcGUL2Odw_-uOlvARWST-hSO0OCTlfKg.png'
    ],
    [
        'id' => 2,
        'slug' => 'forma-one',
        'name' => 'Forma One',
        'category' => 'Optique Architecturale',
        'price' => 1850.00,
        'original_price' => 2600.00,
        'shape' => 'Carrée Épurée',
        'material' => 'Titane Japonais Brossé',
        'frame_color' => '#1E293B',
        'rating' => 4.8,
        'is_bestseller' => 1,
        'image' => './images/a-high-resolution-photorealistic-close-u_8ff1ZL8LRcyzKIvI18CUFA_MlqbwsMOSJCkWsXX_AvdLg.png'
    ],
    [
        'id' => 3,
        'slug' => 'nova-sun',
        'name' => 'Nova Sun',
        'category' => 'Solaire Polarisée',
        'price' => 1650.00,
        'original_price' => 2400.00,
        'shape' => 'Aviateur Moderne',
        'material' => 'Acier Inoxydable & Bio-Acétate',
        'frame_color' => '#C5A880',
        'rating' => 5.0,
        'is_bestseller' => 0,
        'image' => './images/a-premium-product-photography-shot-of-sl_VjaK7SnIRSCJTCAs9QL4TQ_B6nUmgWrT1KGnJLc0u2Xmg.png'
    ],
    [
        'id' => 4,
        'slug' => 'meridian-navigator',
        'name' => 'Meridian Navigator',
        'category' => 'Haute Précision',
        'price' => 2100.00,
        'original_price' => 2900.00,
        'shape' => 'Double Pont Géométrique',
        'material' => 'Titane Bêta Ultra-Flexible',
        'frame_color' => '#36C6C9',
        'rating' => 4.9,
        'is_bestseller' => 1,
        'image' => './images/a-premium-studio-photograph-of-a-single-_A3bOFMviSFi-iUeXuGWMbw_sIs-Ee9lRg64aoxh2mDTrA_cover.png'
    ]
];

if (!$pdo) {
    if ($method === 'GET') {
        sendJsonResponse(['success' => true, 'source' => 'local_fallback', 'data' => $fallbackProducts]);
    } else {
        sendJsonResponse(['success' => true, 'source' => 'local_fallback_mock', 'message' => 'Action simulated successfully']);
    }
}

// 1. GET: Fetch Products
if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM `products` ORDER BY `id` DESC");
    $products = $stmt->fetchAll();
    sendJsonResponse(['success' => true, 'data' => $products]);
}

// 2. POST: Add Product
if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (empty($input['name']) || empty($input['price'])) {
        sendJsonResponse(['success' => false, 'error' => 'Name and price are required'], 400);
    }

    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $input['name'])));
    $stmt = $pdo->prepare("INSERT INTO `products` (`slug`, `name`, `category`, `price`, `original_price`, `shape`, `material`, `frame_color`, `rating`, `is_bestseller`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->execute([
        $slug . '-' . time(),
        $input['name'],
        $input['category'] ?? 'Vue & Lumière Bleue',
        $input['price'],
        $input['original_price'] ?? ($input['price'] * 1.3),
        $input['shape'] ?? 'Pantoscope / Ronde',
        $input['material'] ?? 'Titane & Bio-Acétate',
        $input['frame_color'] ?? '#36C6C9',
        $input['rating'] ?? 5.0,
        !empty($input['is_bestseller']) ? 1 : 0
    ]);

    sendJsonResponse(['success' => true, 'id' => $pdo->lastInsertId(), 'message' => 'Product created successfully']);
}

// 3. DELETE: Delete Product
if ($method === 'DELETE') {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    if ($id <= 0) {
        sendJsonResponse(['success' => false, 'error' => 'Invalid product ID'], 400);
    }
    $stmt = $pdo->prepare("DELETE FROM `products` WHERE `id` = ?");
    $stmt->execute([$id]);
    sendJsonResponse(['success' => true, 'message' => 'Product deleted successfully']);
}
