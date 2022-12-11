-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2022 at 10:25 PM
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
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int UNSIGNED NOT NULL,
  `username` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `password_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `salt` varchar(100) NOT NULL,
  `favorites` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password_hash`, `salt`, `favorites`) VALUES
(15, 'rene', '$2y$10$UWwY1plp23fAyB4kn9z.X.gkVBGoxxexX1gfHqHVySetk0Q/g5sUq', 'SJ5BDC20', NULL),
(17, 'Rene2', '$2y$10$RCGqOLZX0SocbTfnPLb/CeGcWZgpX5wULOFF7usi.V8mOwFDvpKE2', 'H6S14EOU', NULL),
(38, 'rene3', '$2y$10$DQaIYHeceo7fhGvDFNgA2O1w6amb4ArfUD3s2JUfU5KOhZUPAScCm', 'K8TIXAGD', NULL),
(48, 'rene4', '$2y$10$4JqyKO3gGZqMHmRA0iTcouxQw5OhaS.D/eimMGbULg8D3u2ccJhhS', 'IMPLONK1', NULL),
(49, 'rene5', '$2y$10$Wb3NJJtkB4OsdJVMTzPEH.cME22cdPRe1mMg9LByEyloY9Mj3AiwK', 'D94SAQRM', '2'),
(50, 'rene6', '$2y$10$MC.f54Vbp9zqnxXxRT3zoOng2YUAzAJtOXuU0iTQGO/PCbiiTvAfW', '5NJ23BMC', NULL);

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
