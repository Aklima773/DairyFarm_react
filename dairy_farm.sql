-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2023 at 07:07 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

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
  `photo` varchar(200) NOT NULL,
  `pprice` varchar(50) NOT NULL,
  `quantity` int(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `allproducts`
--

INSERT INTO `allproducts` (`id`, `pname`, `pdetails`, `photo`, `pprice`, `quantity`) VALUES
(25, 'Better Cheese', 'Aside from sprinkling it on popcorn or on baked potatoes, we’ve discovered a variety of uses for it.', '1671529524betterchees.png', '18.00', 50),
(26, 'Brie', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ', '1671529601bric.jpg', '20.00', 40),
(27, 'Camembert', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ', '1671529714cacamber.jpg', '11.00', 50),
(28, 'Chedder', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1671529820chedder.jpg', '18.00', 90),
(29, 'Condensed milk', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1671529992Condensedmilk.png', '18.00', 60),
(30, 'Evaporated milk', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1671531564Evaporatedmilk.jpg', '19', 100),
(31, 'Gorgonzola', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1671531786gorgonzola.jpg', '18.00', 50),
(32, 'Uht milk', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1671532448uhtmilk.png', '55.00', 50);

-- --------------------------------------------------------

--
-- Table structure for table `confirmorder`
--

CREATE TABLE `confirmorder` (
  `id` int(11) NOT NULL,
  `uid` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `quantity` int(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `confirmorder`
--

INSERT INTO `confirmorder` (`id`, `uid`, `username`, `name`, `quantity`, `price`, `address`) VALUES
(1, '', '', '', 0, '0.00', ''),
(2, '', '', '', 0, '0.00', ''),
(3, '', '', '', 0, '0.00', ''),
(4, '', '', '', 0, '0.00', '');

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
(1, 'Mr. Karim', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', 1, 'Pure Milk', 'Mirpure');

-- --------------------------------------------------------

--
-- Table structure for table `deliverproduct`
--

CREATE TABLE `deliverproduct` (
  `id` int(11) NOT NULL,
  `username` varchar(225) NOT NULL,
  `useremail` varchar(225) NOT NULL,
  `pname` varchar(225) NOT NULL,
  `pprice` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `totalprice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deliverproduct`
--

INSERT INTO `deliverproduct` (`id`, `username`, `useremail`, `pname`, `pprice`, `quantity`, `totalprice`) VALUES
(1, '', '', '', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `homallproduct`
--

CREATE TABLE `homallproduct` (
  `id` int(11) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `pdetails` varchar(100) NOT NULL,
  `photo` varchar(200) NOT NULL,
  `pprice` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `homallproduct`
--

INSERT INTO `homallproduct` (`id`, `pname`, `pdetails`, `photo`, `pprice`) VALUES
(25, 'Better Cheese', 'Aside from sprinkling it on popcorn or on baked potatoes, we’ve discovered a variety of uses for it.', '1671529524betterchees.png', '18.00'),
(26, 'Brie', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ', '1671529601bric.jpg', '20.00'),
(27, 'Camembert', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ', '1671529714cacamber.jpg', '11.00'),
(28, 'Chedder', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '1671529820chedder.jpg', '18.00');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `useremail` varchar(225) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `pdetails` varchar(50) NOT NULL,
  `pprice` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `totalprice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `username`, `useremail`, `pname`, `pdetails`, `pprice`, `quantity`, `totalprice`) VALUES
(25, 'Rim ', '', 'Condensed milk', '', '18.00', 0, 0),
(26, 'Rim ', 'rim@gmail.com', 'Condensed milk', '', '18.00', 0, 0),
(27, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 0, 0),
(28, 'Aklima Akter', 'aklima123@gmail.com', 'Camembert', '', '11.00', 0, 0),
(29, 'Aklima Akter', 'aklima123@gmail.com', 'Condensed milk', '', '18.00', 0, 0),
(30, 'Aklima Akter', 'aklima123@gmail.com', 'Evaporated milk', '', '19.00', 0, 0),
(31, 'Aklima Akter', 'aklima123@gmail.com', 'Chedder', '', '18.00', 0, 0),
(32, 'Aklima Akter', 'aklima123@gmail.com', 'Camembert', '', '11.00', 0, 0),
(33, 'Aklima Akter', 'aklima123@gmail.com', 'Camembert', '', '11.00', 0, 0),
(34, 'Aklima Akter', 'aklima123@gmail.com', 'Better Cheese', '', '18.00', 0, 0),
(35, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 0, 0),
(36, 'Aklima Akter', 'aklima123@gmail.com', 'Condensed milk', '', '18.00', 0, 0),
(37, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 40, 800),
(38, 'Aklima Akter', 'aklima123@gmail.com', 'Gorgonzola', '', '18.00', 50, 900),
(39, 'Aklima Akter', 'aklima123@gmail.com', 'Condensed milk', '', '18.00', 60, 1080),
(40, 'Aklima Akter', 'aklima123@gmail.com', 'Evaporated milk', '', '19.00', 100, 1900),
(41, 'Aklima Akter', 'aklima123@gmail.com', '', '', '0.00', 0, 0),
(42, 'Aklima Akter', 'aklima123@gmail.com', '', '', '0.00', 0, 0),
(43, 'Aklima Akter', 'aklima123@gmail.com', 'Better Cheese', '', '18.00', 50, 900),
(44, 'Aklima Akter', 'aklima123@gmail.com', 'Condensed milk', '', '18.00', 60, 1080),
(45, 'Aklima Akter', 'aklima123@gmail.com', 'Better Cheese', '', '18.00', 50, 900),
(46, 'Aklima Akter', 'aklima123@gmail.com', 'Evaporated milk', '', '19.00', 100, 1900),
(47, 'Aklima Akter', 'aklima123@gmail.com', 'Chedder', '', '18.00', 90, 1620),
(49, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 40, 800),
(50, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 40, 800),
(51, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 40, 800),
(52, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 40, 800),
(53, 'Aklima Akter', 'aklima123@gmail.com', 'Brie', '', '20.00', 40, 800);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `fname`, `lname`, `email`, `password`) VALUES
(4, 'Dipu', '', 'dipu@gmail.com', '123'),
(5, 'Sajedur', '', 'saj@gmail.com', '123'),
(14, 'Aklima', 'Khatun', 'aklima@gmail.com', '123'),
(16, 'Tokey', 'Khan', 'tokey@gmail.com', '123'),
(17, 'Amzad', 'Hossain', 'am@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `details` varchar(200) NOT NULL,
  `hour` varchar(50) NOT NULL,
  `weekly` varchar(50) NOT NULL,
  `photo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `details`, `hour`, `weekly`, `photo`) VALUES
(14, 'Best Animal Selection', 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', '8am-4pm', '5 Day', '1671537615gallery-6.jpg'),
(15, 'Breeding & Veterinary', 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', '10am-8pm', '5 Day', '1671537678service-2.jpg'),
(16, 'Care & Milking', 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.', '6am-12pm', '7 Day', '1671537763product-1.jpg'),
(17, 'Dairy Products', 'We enjoy working at Hankcok since milk is such a lovely commodity. Milk is a natural source of nutrition.', '7am-11pm', '7 Day', '1671538017dairyproducts.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `team_members`
--

CREATE TABLE `team_members` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `Activity` varchar(50) NOT NULL,
  `photo` varchar(200) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team_members`
--

INSERT INTO `team_members` (`id`, `name`, `designation`, `Activity`, `photo`, `age`) VALUES
(12, 'John Mice', 'Founder', 'Active', '1671534073team-2.jpg', 35),
(13, 'Mark Jhone', 'Feild Farmer', 'Active', '1671534447team1.jpg', 27),
(14, 'Alex Hanson', 'Feild Farmer', 'Active', '1671534504team-3.jpg', 29),
(15, 'Adam Crew', 'Feild Farmer', 'Active', '1671534613team-4.jpg', 35),
(16, 'Ben Stocks', 'Feild Farmer', 'Active', '1671534699team-7.jpg', 25),
(17, 'Mark Sark', 'Monitor', 'Active', '1671534800team-2.jpg', 28);

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(225) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`id`, `username`, `email`, `address`, `password`) VALUES
(1, 'Naim', 'naim@gmail.com', '0', 'naim'),
(2, 'Toimur', 'toimur@gmail.com', '0', 'toimur'),
(3, 'Toimur', 'toim@gmail.com', '0', 'abc'),
(7, 'Aklima Akter', 'aklima123@gmail.com', 'Mirpure', 'Aklima123'),
(8, 'Fahim Hossain', 'fahim@gmail.com', 'Siddiqubazar', 'fahim');

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
-- Indexes for table `confirmorder`
--
ALTER TABLE `confirmorder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers_review`
--
ALTER TABLE `customers_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliverproduct`
--
ALTER TABLE `deliverproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `homallproduct`
--
ALTER TABLE `homallproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_members`
--
ALTER TABLE `team_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `confirmorder`
--
ALTER TABLE `confirmorder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `customers_review`
--
ALTER TABLE `customers_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `deliverproduct`
--
ALTER TABLE `deliverproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `homallproduct`
--
ALTER TABLE `homallproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `team_members`
--
ALTER TABLE `team_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
