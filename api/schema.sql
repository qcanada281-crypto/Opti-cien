-- Opti-Look Database Schema for MySQL / phpMyAdmin (XAMPP)
CREATE DATABASE IF NOT EXISTS `opti_look_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `opti_look_db`;

-- 1. Table: Products
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `original_price` DECIMAL(10,2) NULL,
  `shape` VARCHAR(100) NOT NULL,
  `material` VARCHAR(100) NOT NULL,
  `frame_color` VARCHAR(50) NOT NULL,
  `rating` DECIMAL(2,1) DEFAULT 5.0,
  `is_bestseller` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Featured Products
INSERT INTO `products` (`slug`, `name`, `category`, `price`, `original_price`, `shape`, `material`, `frame_color`, `rating`, `is_bestseller`) VALUES
('aster-optical', 'Aster Optical', 'Vue & Lumière Bleue', 1450.00, 2200.00, 'Pantoscope / Ronde', 'Acétate Mazzucchelli & Titane', '#36C6C9', 4.9, 1),
('forma-one', 'Forma One', 'Optique Architecturale', 1850.00, 2600.00, 'Carrée Épurée', 'Titane Japonais Brossé', '#1E293B', 4.8, 1),
('nova-sun', 'Nova Sun', 'Solaire Polarisée', 1650.00, 2400.00, 'Aviateur Moderne', 'Double Pont Métallique', '#C5A880', 5.0, 0),
('meridian-frame', 'Meridian Frame', 'Vue & Clip-On Solaire', 1950.00, 2900.00, 'Clubmaster Hybride', 'Acétate Bio & Acier Inoxydable', '#0F172A', 4.9, 1);

-- 2. Table: Appointments (Examen de Vue)
CREATE TABLE IF NOT EXISTS `appointments` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `clinic_location` VARCHAR(255) NOT NULL,
  `appointment_date` DATE NOT NULL,
  `time_slot` VARCHAR(50) NOT NULL,
  `patient_name` VARCHAR(255) NOT NULL,
  `patient_phone` VARCHAR(50) NOT NULL,
  `patient_email` VARCHAR(255) NULL,
  `status` ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'confirmed',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Table: Prescriptions (Ordonnances Médicales)
CREATE TABLE IF NOT EXISTS `prescriptions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `patient_name` VARCHAR(255) NULL,
  `file_path` VARCHAR(255) NULL,
  `od_sphere` VARCHAR(20) NULL,
  `od_cylinder` VARCHAR(20) NULL,
  `od_axis` VARCHAR(20) NULL,
  `og_sphere` VARCHAR(20) NULL,
  `og_cylinder` VARCHAR(20) NULL,
  `og_axis` VARCHAR(20) NULL,
  `pupillary_distance` VARCHAR(20) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Table: Orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `order_number` VARCHAR(50) NOT NULL UNIQUE,
  `customer_name` VARCHAR(255) NOT NULL,
  `customer_phone` VARCHAR(50) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `total_amount` DECIMAL(10,2) NOT NULL,
  `payment_method` ENUM('cash_on_delivery', 'card', 'cmi') DEFAULT 'cash_on_delivery',
  `status` ENUM('pending', 'processing', 'shipped', 'delivered') DEFAULT 'pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
