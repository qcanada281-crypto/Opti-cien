<?php
require_once __DIR__ . '/db.php';

$pdo = getDatabaseConnection();
$method = $_SERVER['REQUEST_METHOD'];

$fallbackAppointments = [
    [
        'id' => 1,
        'clinic_location' => 'Casablanca — Boulevard d\'Anfa',
        'appointment_date' => date('Y-m-d', strtotime('+1 day')),
        'time_slot' => '10:30',
        'patient_name' => 'Amine El Idrissi',
        'patient_phone' => '+212 6 61 22 33 44',
        'patient_email' => 'amine.elidrissi@gmail.com',
        'status' => 'confirmed'
    ],
    [
        'id' => 2,
        'clinic_location' => 'Rabat — Agdal Avenue des Nations',
        'appointment_date' => date('Y-m-d', strtotime('+2 days')),
        'time_slot' => '15:00',
        'patient_name' => 'Sara Benjelloun',
        'patient_phone' => '+212 6 62 44 55 66',
        'patient_email' => 'sara.benj@outlook.com',
        'status' => 'pending'
    ],
    [
        'id' => 3,
        'clinic_location' => 'Marrakech — Guéliz Plaza',
        'appointment_date' => date('Y-m-d', strtotime('+3 days')),
        'time_slot' => '11:45',
        'patient_name' => 'Youssef Mansouri',
        'patient_phone' => '+212 6 63 77 88 99',
        'patient_email' => 'youssef.m@gmail.com',
        'status' => 'confirmed'
    ]
];

if (!$pdo) {
    sendJsonResponse(['success' => true, 'source' => 'local_fallback', 'data' => $fallbackAppointments]);
}

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM `appointments` ORDER BY `appointment_date` ASC, `time_slot` ASC");
    $appointments = $stmt->fetchAll();
    sendJsonResponse(['success' => true, 'data' => $appointments]);
}

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (empty($input['patient_name']) || empty($input['patient_phone'])) {
        sendJsonResponse(['success' => false, 'error' => 'Patient name and phone are required'], 400);
    }

    $stmt = $pdo->prepare("INSERT INTO `appointments` (`clinic_location`, `appointment_date`, `time_slot`, `patient_name`, `patient_phone`, `patient_email`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->execute([
        $input['clinic_location'] ?? 'Casablanca — Boulevard d\'Anfa',
        $input['appointment_date'] ?? date('Y-m-d'),
        $input['time_slot'] ?? '10:00',
        $input['patient_name'],
        $input['patient_phone'],
        $input['patient_email'] ?? '',
        'confirmed'
    ]);

    sendJsonResponse(['success' => true, 'id' => $pdo->lastInsertId(), 'message' => 'Appointment scheduled successfully']);
}

if ($method === 'PUT') {
    $input = json_decode(file_get_contents('php://input'), true);
    $id = (int)($input['id'] ?? 0);
    $status = $input['status'] ?? 'confirmed';

    $stmt = $pdo->prepare("UPDATE `appointments` SET `status` = ? WHERE `id` = ?");
    $stmt->execute([$status, $id]);
    sendJsonResponse(['success' => true, 'message' => 'Appointment updated successfully']);
}
