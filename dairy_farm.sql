-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2022 at 09:14 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dairy_farm`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

CREATE TABLE `adminlogin` (
  `id` int(11) NOT NULL,
  `fullname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` char(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`id`, `fullname`, `email`, `password`) VALUES
(1, 'Aklima Akter', 'aklima@gmail.com', 'aklima');

-- --------------------------------------------------------

--
-- Table structure for table `allproducts`
--

CREATE TABLE `allproducts` (
  `id` int(11) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `pdetails` varchar(100) NOT NULL,
  `pimage` varchar(200) NOT NULL,
  `pprice` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `allproducts`
--

INSERT INTO `allproducts` (`id`, `pname`, `pdetails`, `pimage`, `pprice`) VALUES
(2, 'Fresh Meat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'https://cdn.pixabay.com/photo/2016/03/05/22/07/fillet-1239184_960_720.jpg', '0.00'),
(3, 'Pure Milk', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'https://cdn.pixabay.com/photo/2016/11/12/10/08/drink-1818550_960_720.jpg', '10'),
(4, 'Fresh Meat', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'https://cdn.pixabay.com/photo/2016/03/05/22/07/fillet-1239184_960_720.jpg', '19');

-- --------------------------------------------------------

--
-- Table structure for table `customers_review`
--

CREATE TABLE `customers_review` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `review` varchar(200) NOT NULL,
  `pid` int(50) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers_review`
--

INSERT INTO `customers_review` (`id`, `name`, `review`, `pid`, `pname`, `address`) VALUES
(1, 'Mr. Karim', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 1, 'Pure Milk', 'Mirpure'),
(2, 'Alia Khan', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 2, 'Fresh Meat', 'Khulna');

-- --------------------------------------------------------

--
-- Table structure for table `team_members`
--

CREATE TABLE `team_members` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `Activity` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team_members`
--

INSERT INTO `team_members` (`id`, `name`, `designation`, `Activity`) VALUES
(1, 'Adam crew', 'Founder', 'Active'),
(2, 'Doris Jordan', 'Veterinarian', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `allproducts`
--
ALTER TABLE `allproducts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers_review`
--
ALTER TABLE `customers_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminlogin`
--
ALTER TABLE `adminlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `allproducts`
--
ALTER TABLE `allproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `customers_review`
--
ALTER TABLE `customers_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `team_members`
--
ALTER TABLE `team_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
