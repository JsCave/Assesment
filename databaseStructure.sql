-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 30, 2021 at 09:06 PM
-- Server version: 10.3.31-MariaDB-log-cll-lve
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warfxdjl_foodfumes`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `item` text NOT NULL,
  `price` int(11) NOT NULL,
  `owner` text NOT NULL,
  `details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `item`, `price`, `owner`, `details`) VALUES
(39, 'Cheese Burger', 20, 'admin', 'Order via Site'),
(41, 'Cheese Burger', 20, 'novak', 'Order Via API');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `balance` int(11) NOT NULL DEFAULT 1000,
  `privileges` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `username`, `password`, `email`, `balance`, `privileges`) VALUES
(22, 'Sauron', '$2a$10$MtAfQl0FDYcolN3YmX.RGeZxZ0gPkmHtknQskrCcYRmyfmq14aUv.', 'sauron@gmail.com', 935, ''),
(25, 'Novak', '$2a$10$3e3I/07DIhYnouec528p5uCyghH/ePX.qFxuIdj7Pjvs/d9/lov9y', 'novak@novak.com', 725, 'admin'),
(26, 'Admin', '$2a$10$tMEvRhLrFFR0v7v/vNBfveu6rSW40eQJxLtrgl4RJ8ZC9hC6y0YhW', 'admin@admin.com', 840, 'admin'),
(27, 'asdfasdf', '$2a$10$7rdTnfuK742hSCzYmG1GTus4w69tb4ycHdp0wgDOx01d8fPkT9tE2', 'asdf@asdf.com', 860, '');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `price` int(10) NOT NULL,
  `pic` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `pic`) VALUES
(1, 'Cheese Burger', 20, 'cheeseBurger.jpg'),
(2, 'Pizza', 30, 'pizza.jpg'),
(3, 'Jalapeno Cheesy Fries ', 5, 'fries.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `session` text COLLATE utf8_unicode_ci NOT NULL,
  `expires` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `session`, `expires`) VALUES
('6khbugCET8vyLH3n2K0lbJuZZoW53kUR', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-09-30T12:14:04.361Z\",\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"Novak\",\"balance\":805,\"method\":\"Order Via Site\"},\"action\":\"\"}', 1633004044),
('cv8eaHmjw_HQO9dZjHEGIHMsbZyHy8n7', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T05:38:37.500Z\",\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"admin\",\"balance\":980}}', 1633066718),
('fWwyoX7Mt9vTbRORq91Q4fBkKFQUwcQQ', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T07:13:53.284Z\",\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"admin\",\"balance\":840,\"method\":\"Order Via Site\"},\"action\":\"\"}', 1633072433),
('k2u4M7I6QcnrPedJGd49uvDiiWcsLMkN', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T14:26:08.572Z\",\"httpOnly\":true,\"path\":\"/\"},\"action\":\"\"}', 1633098369),
('KDN8En90Mg9xAoMBEwKGdxi9fWP4H953', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T16:24:16.272Z\",\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"admin\",\"balance\":840}}', 1633105456),
('KmmlfcXjqPEFHuVkQjkTEkjm1f5FN8hO', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T14:07:04.214Z\",\"httpOnly\":true,\"path\":\"/\"},\"action\":\"\"}', 1633097224),
('PDPSuqj7dYuULFmc49EqOZKUxeJc5cgt', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-02T01:06:07.907Z\",\"httpOnly\":true,\"path\":\"/\"},\"action\":\"\"}', 1633136768),
('PH_Xmcv_IrDN9aLBaD2mOCevQweDQdBr', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T22:18:17.843Z\",\"httpOnly\":true,\"path\":\"/\"},\"action\":\"\",\"user\":{\"username\":\"asdfasdf\",\"balance\":860,\"method\":\"Order Via Site\"}}', 1633126698),
('pu3E-5P2qihKuXTApB6a_d1oBBXYCvNJ', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T14:17:59.898Z\",\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"Admin\",\"balance\":840}}', 1633097880),
('PZqFQAAJ9Wy_-bFzuU9PWCZPrDnUME51', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T19:00:45.499Z\",\"httpOnly\":true,\"path\":\"/\"},\"csrfSecret\":\"zPqUxtHbRY6zWsFy2W2zA1iI\"}', 1633114845),
('ZRDGny8JZVzxv5GHVO4m0JC3HA5xI0g0', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2021-10-01T06:44:54.812Z\",\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"admin\",\"balance\":915,\"method\":\"Order Via Site\"},\"action\":\"\"}', 1633070695);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
