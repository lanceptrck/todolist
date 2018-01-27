-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 27, 2018 at 12:54 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created`, `modified`) VALUES
(1, 'School', 'Anything related to school.', '2014-06-01 00:35:07', '2014-05-30 09:34:33'),
(2, 'Home', 'Tasks related to home.', '2014-06-01 00:35:07', '2014-05-30 09:34:33'),
(3, 'Work', 'Tasks mostly for job/work', '2014-06-01 00:35:07', '2014-05-30 09:34:54');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

DROP TABLE IF EXISTS `todos`;
CREATE TABLE IF NOT EXISTS `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `duedate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=86 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `name`, `description`, `category_id`, `created`, `duedate`) VALUES
(85, 'Buy new phone', 'Buy a new android phone in GreenHills', 2, '2018-01-27 12:41:28', '2018-02-10 11:00:00'),
(65, 'Create website', 'Create a to-do list website for the exam', 3, '2018-01-27 08:02:25', '2018-01-27 00:02:25'),
(66, 'Create website', 'Create a to-do web app for Lamudi', 3, '2018-01-27 08:03:09', '2018-01-27 00:03:09'),
(67, 'Create web app', 'Create to-do list web app', 3, '2018-01-27 08:06:02', '2018-01-27 00:06:02'),
(68, 'Work interview', 'Prepare for a job interview in Laguna', 2, '2018-01-27 08:20:29', '2018-01-30 00:00:00'),
(83, 'Get tor from school', 'Get TOR from school', 1, '2018-01-27 12:39:19', '2018-01-29 06:00:00'),
(82, 'Walk the dog', 'Walk the dog in the park by 8am', 2, '2018-01-27 12:38:33', '2018-02-01 00:00:00'),
(84, 'Meal Prep Sunday', 'Cook food for the whole week', 2, '2018-01-27 12:39:47', '2018-01-28 10:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
