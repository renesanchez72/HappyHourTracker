-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2022 at 04:03 AM
-- Server version: 8.0.31
-- PHP Version: 7.4.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `happyhour`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `deal` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `daysofweek` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `image`, `name`, `address`, `deal`, `daysofweek`) VALUES
(1, 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/10/mcdonalds-exterior.jpg?quality=82&strip=1', 'McDonalds', '14024 Osborne St, Pacoima, CA 91331', 'Free Fries with any purchase', 'MON TUES WED');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int UNSIGNED NOT NULL,
  `username` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `password_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `salt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password_hash`, `salt`) VALUES
(15, 'rene', '$2y$10$UWwY1plp23fAyB4kn9z.X.gkVBGoxxexX1gfHqHVySetk0Q/g5sUq', 'SJ5BDC20'),
(17, 'Rene2', '$2y$10$RCGqOLZX0SocbTfnPLb/CeGcWZgpX5wULOFF7usi.V8mOwFDvpKE2', 'H6S14EOU'),
(38, 'rene3', '$2y$10$DQaIYHeceo7fhGvDFNgA2O1w6amb4ArfUD3s2JUfU5KOhZUPAScCm', 'K8TIXAGD'),
(48, 'rene4', '$2y$10$4JqyKO3gGZqMHmRA0iTcouxQw5OhaS.D/eimMGbULg8D3u2ccJhhS', 'IMPLONK1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
