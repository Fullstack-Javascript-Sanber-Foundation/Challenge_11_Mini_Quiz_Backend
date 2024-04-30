Role user terdapat 3 buah : superadmin, admin, dan user
Superadmin : Dapat melakukan akses ke endpoin manapun
Admin : Hanya dapat mengakses endpoin dengan metode get saja
User : Bisa membuat pilihan quiz mana yang mau diambil

Title : Wall-Quiz
Deskripsi : Aplikasi untuk mengambil dan mengisi kuis untuk hiburan dan kebutuhan pengetahuan.
Tech Stack : JavaScript, Express.js, Node.js, MySQL, GIT, dan npm.

How to use :
Flow Aplikasi Wall-Quiz

Sebelum memulai aplikasi silahkan download terlebih dahulu node_modules nya dengan memasukkan perintah
"npm i" atau "npm init"

User pergi ke enpoin /auth/login terlebih dahulu,
jika tidak memiliki akun pergi ke endpoin /auth/register untuk membuat akun.

PORT yang digunakan ialah 3000

Setelah login user akan mendapat sebuah token yang dimana token tersebut berguna untuk memasuki aplikasi Wall-Quiz melalui variable token yang terdapat di global environment.

Setelah login, user pergi ke endpoin /quiz untuk melihat quiz apa saja yang disajikan oleh superadmin
Untuk memilih quiz, user pergi ke endpoin /choice dengan methode post

Dalam endpoin /dashboard user dapat mengetahui kuis apa saja yang ia ambil

Feature : User yang login dapat melakukan update profile dengan pergi ke endpoin /profile dengan method put