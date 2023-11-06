/*
SQLyog Community v13.2.0 (64 bit)
MySQL - 8.0.35 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `test`;

/*Table structure for table `leads` */

DROP TABLE IF EXISTS `leads`;

CREATE TABLE `leads` (
  `id` int NOT NULL,
  `contactFirstName` varchar(255) DEFAULT NULL,
  `dateCreated` varchar(50) DEFAULT NULL,
  `suburb` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `contactFullName` varchar(255) DEFAULT NULL,
  `contactno` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `leadType` varchar(255) DEFAULT NULL,
  `isAccepted` tinyint(1) DEFAULT NULL,
  `jobDescription` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `leads` */

insert  into `leads`(`id`,`contactFirstName`,`dateCreated`,`suburb`,`location`,`category`,`description`,`price`,`contactFullName`,`contactno`,`email`,`leadType`,`isAccepted`,`jobDescription`) values 
(1000012,'Alice','2023-11-11 02:37:00','Sample Suburb 4','Perth 6000','Electrician','Sample description for accepted lead 2',150.00,'Alice Johnson','0423456789','alice@mailnator.com','Lead Invitation',1,'Experienced in electrical systems, wiring, and installations, able to handle electrical repairs and maintenance.'),
(1000020,'Jack','2023-11-11 02:37:00','Sample Suburb 12','Brisbane 4000','Carpenter','Sample description for accepted lead 10',180.45,'Jack Smith','0423456781','jack@mailnator.com','Lead Invitation',0,'Skilled in carpentry and woodworking, capable of building and repairing wooden structures and fixtures.'),
(1000025,'Sarah','2023-11-11 02:37:00','Sample Suburb 8','Sydney 2000','Painter','Sample description for accepted lead 12',120.75,'Sarah Davis','0423456783','sarah@mailnator.com','Lead Invitation',0,'Talented in painting and surface finishing, able to provide high-quality painting services for interior and exterior spaces.'),
(1000028,'David','2023-11-11 02:37:00','Sample Suburb 1','Melbourne 3000','Electrician','Sample description for accepted lead 14',160.50,'David Wilson','0423456786','david@mailnator.com','Lead Invitation',0,'Experienced in electrical systems, wiring, and installations, capable of handling electrical repairs and maintenance.'),
(1000031,'Emily','2023-11-11 02:37:00','Sample Suburb 5','Adelaide 5000','Plumber','Sample description for accepted lead 16',190.60,'Emily Moore','0423456782','emily@mailnator.com','Lead Invitation',0,'Proficient in plumbing and pipefitting, skilled in installing and repairing plumbing systems and fixtures.'),
(1000034,'Michael','2023-11-11 02:37:00','Sample Suburb 9','Perth 6000','Carpenter','Sample description for accepted lead 18',175.80,'Michael Anderson','0423456784','michael@mailnator.com','Lead Invitation',0,'Skilled in carpentry and woodworking, capable of building and repairing wooden structures and fixtures.'),
(1000037,'Olivia','2023-11-11 02:37:00','Sample Suburb 3','Brisbane 4000','Plumber','Sample description for accepted lead 20',195.95,'Olivia Johnson','0423456787','olivia@mailnator.com','Lead Invitation',0,'Proficient in plumbing and pipefitting, skilled in installing and repairing plumbing systems and fixtures.'),
(1000040,'James','2023-11-11 02:37:00','Sample Suburb 7','Sydney 2000','Painter','Sample description for accepted lead 22',130.35,'James Taylor','0423456785','james@mailnator.com','Lead Invitation',0,'Talented in painting and surface finishing, able to provide high-quality painting services for interior and exterior spaces.'),
(1000042,'Sophia','2023-11-11 02:37:00','Sample Suburb 2','Adelaide 5000','Plumber','Sample description for accepted lead 24',140.70,'Sophia Clark','0423456788','sophia@mailnator.com','Lead Invitation',0,'Experienced in plumbing and pipefitting, capable of installing and repairing plumbing systems and fixtures.'),
(1000045,'Liam','2023-11-11 02:37:00','Sample Suburb 10','Melbourne 3000','Electrician','Sample description for accepted lead 26',170.65,'Liam Brown','0423456787','liam@mailnator.com','Lead Invitation',0,'Experienced in electrical systems, wiring, and installations, capable of handling electrical repairs and maintenance.');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
