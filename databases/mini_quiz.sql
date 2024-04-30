-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Apr 2024 pada 08.47
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_quiz`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pilih_quiz`
--

CREATE TABLE `pilih_quiz` (
  `id` int(5) NOT NULL,
  `nama_quiz` varchar(255) NOT NULL,
  `id_user` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pilih_quiz`
--

INSERT INTO `pilih_quiz` (`id`, `nama_quiz`, `id_user`) VALUES
(1, 'Matematika', 2),
(2, 'Matematika', 1),
(3, 'Matematika', 2),
(4, 'Biologi', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `questions`
--

CREATE TABLE `questions` (
  `id` int(5) NOT NULL,
  `nama_quiz` varchar(255) NOT NULL,
  `soal_quiz` varchar(255) NOT NULL,
  `opsi_a` varchar(100) NOT NULL,
  `opsi_b` varchar(100) NOT NULL,
  `opsi_c` varchar(100) NOT NULL,
  `opsi_d` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `questions`
--

INSERT INTO `questions` (`id`, `nama_quiz`, `soal_quiz`, `opsi_a`, `opsi_b`, `opsi_c`, `opsi_d`) VALUES
(1, 'Matematika', '2 * 2 = ?', '2', '4', '6', '8'),
(2, 'Biologi', 'Salah satu yang disebut dengan lingkungan abiotik?', 'Manusia', 'Tumbuhan', 'Batu', 'Hewan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `quiz`
--

CREATE TABLE `quiz` (
  `id` int(5) NOT NULL,
  `nama_quiz` varchar(255) NOT NULL,
  `sifat_quiz` enum('public','private') NOT NULL DEFAULT 'public'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `quiz`
--

INSERT INTO `quiz` (`id`, `nama_quiz`, `sifat_quiz`) VALUES
(1, 'Matematika', 'public'),
(2, 'Biologi', 'public'),
(3, 'Pemrograman Aplikasi Berbasis Dekstop', 'public'),
(4, 'Tes IQ', 'private');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `name` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('superadmin','admin','user') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `alamat`, `username`, `password`, `role`) VALUES
(1, 'superadmin', 'bandung', 'superadmin', '$2b$10$JzTz2ZnnSmOaSlN1eOU4Z.ji.9xWtANvPQ5EUxcgSy0EvVPjJFocG', 'superadmin'),
(2, 'dapit', 'jakarta', '123dapit', '$2b$10$7DRxr7.aRyv1kH82bPtf0O.om7jtEPQZAMkbw0wwEJcmHzP69AOS2', 'admin'),
(4, 'vio', 'bandung', '123vio', '$2b$10$oYKG0BpBuHJbHd81EoWvJeUzCK2qlX7aBFBefm1PwHsA1lnZJ.vCG', 'user'),
(5, 'aha', 'medan', '123aha', '$2b$10$tJiVsu816yczxeFzg04R8.Db0xtxzJ.vjep8omcXj.k2W1dBBA6nG', 'user'),
(6, 'brams', 'surabaya', '123brams', 'brams_123', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pilih_quiz`
--
ALTER TABLE `pilih_quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pilih_quiz`
--
ALTER TABLE `pilih_quiz`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
