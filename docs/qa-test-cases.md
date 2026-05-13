# STARK v2 — Design QA Test Cases

**Date:** 2026-05-09
**Scope:** Visual & UX design review of 59 prototype screens at `http://localhost:3000`
**Method:** Browser review via Screen Navigator dropdown
**Reviewer:** Edy

---

## How to Use

1. Open `http://localhost:3000`
2. Select screen dari dropdown navigator
3. Isi kolom **Status**: `✅` Pass / `❌` Fail / `⚠️` Minor
4. Catat temuan di kolom **Notes**
5. Screen dengan ❌ perlu perbaikan sebelum engineering handoff

---

## Section 0 — Global Checklist (apply to EVERY screen)

Cek ini berlaku untuk semua screen. Jika ada yang fail, catat screen mana di Notes.


| #    | Check                                                          | Status | Notes |
| ---- | -------------------------------------------------------------- | ------ | ----- |
| G-01 | Background color warm gray-green `#F8FAF9`, bukan pure white   |        |       |
| G-02 | Heading: Manrope (rounded, friendly) — bukan sistem default    |        |       |
| G-03 | Body: Plus Jakarta Sans — readable, warm                       |        |       |
| G-04 | Brand green `#118A6D` muncul minimal di satu elemen per screen | `✅`    |       |
| G-05 | Card radius rounded (≥8px) — no hard edges                     |        |       |
| G-06 | Konten tidak overflow 375px ke kiri/kanan                      |        |       |
| G-07 | Copy dalam Bahasa Indonesia, bukan placeholder atau English    |        |       |
| G-08 | Tidak ada elemen terpotong atau overlapping                    |        |       |


---

## Section A — Registration Flow

### R-01 — Register Credentials


| #    | Check                                          | Status | Notes                                                                   |
| ---- | ---------------------------------------------- | ------ | ----------------------------------------------------------------------- |
| A-01 | Logo/icon Gapai muncul di atas                 | `✅`    | Fixed: logo asli dari gapai-brain/raw/assets/gapai-logo.jpg ditambahkan |
| A-02 | "Selamat datang di Gapai" headline jelas       | `✅`    |                                                                         |
| A-03 | Field: Nomor HP, Password, Konfirmasi Password | `✅`    | Fixed: placeholder HP diubah ke "Contoh: 081234567890"                  |
| A-04 | Eye toggle di field password                   | `✅`    |                                                                         |
| A-05 | CTA "Lanjutkan" — brand green, full width      | `✅`    |                                                                         |
| A-06 | Link "Sudah punya akun? Masuk"                 | `✅`    |                                                                         |
| A-07 | T&C + Privacy Policy link ada                  | `✅`    |                                                                         |


### R-02 — Register OTP


| #    | Check                                | Status | Notes |
| ---- | ------------------------------------ | ------ | ----- |
| A-08 | Heading "Verifikasi Nomor HP"        | `✅`    |       |
| A-09 | 6 kotak OTP input, centered          | `✅`    |       |
| A-10 | Nomor HP yang dimasukkan ditampilkan | `✅`    |       |
| A-11 | Countdown timer resend OTP           | `✅`    |       |
| A-12 | Link "Kirim ulang" ada               | `✅`    |       |
| A-13 | Back button ke R-01                  | `✅`    |       |


### R-03 — Register Demographics


| #    | Check                                              | Status | Notes                                                                                 |
| ---- | -------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- |
| A-14 | "Kenalan" heading atau equivalent                  | `✅`    | Fixed: heading diubah ke "Kenalan 👋" dengan subtitle warm                            |
| A-15 | Field: Nama lengkap, Tanggal lahir, Jenis kelamin  | `✅`    | Fixed: Apple-style wheel picker (3 kolom: Tanggal / Bulan / Tahun) dengan scroll snap |
| A-16 | Field domisili: Provinsi + Kota                    | `✅`    |                                                                                       |
| A-17 | Checkbox "Alamat KTP sama dengan domisili"         | `✅`    | Fixed: checkbox ditambahkan, menyembunyikan/menampilkan field KTP province + kota     |
| A-18 | Progress indicator (step 3 dari 4 atau equivalent) | `✅`    | Fixed: 4-pill progress bar + label "Langkah 3 dari 4" ditambahkan                     |


### R-04 — Register Success


| #    | Check                                          | Status | Notes |
| ---- | ---------------------------------------------- | ------ | ----- |
| A-19 | Celebratory visual (ilustrasi atau emoji)      | `✅`    |       |
| A-20 | "Selamat" atau "Pendaftaran berhasil" headline | `✅`    |       |
| A-21 | CTA ke dashboard — brand green                 | `✅`    |       |
| A-22 | Nama user dipersonalisasi ("Sari")             | `✅`    |       |


---

## Section B — Dashboard States

### D-S1 — Pre-Assessment Pending


| #    | Check                                                         | Status | Notes                                                                              |
| ---- | ------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| B-01 | Greeting "Halo, [Nama]" — bukan logo Gapai                    | `✅`    |                                                                                    |
| B-02 | 3-tab bottom nav: Beranda, Dokumen, Profil (Aktivitas hidden) | `✅`    |                                                                                    |
| B-03 | Hero/ilustrasi journey overview                               | `✅`    |                                                                                    |
| B-04 | CTA utama "Mulai Assessment" — prominent                      | `✅`    | Perlu ganti copy untuk istilah Assessment                                          |
| B-05 | JaKer preview cards (beberapa pilihan tersedia)               | `⚠️`   | Di Jaker cards tidak perlu ada label nama employer, karena Jaker bukanlah Job Post |
| B-06 | Tidak ada streak pill                                         | `✅`    |                                                                                    |


### D-S2 — JaKer Selection Pending


| #    | Check                                             | Status | Notes                                                                            |
| ---- | ------------------------------------------------- | ------ | -------------------------------------------------------------------------------- |
| B-07 | "Pilih jalurmu" atau equivalent                   | `✅`    |                                                                                  |
| B-08 | List JaKer dengan fit % chip (mis. "92% cocok")   | `✅`    |                                                                                  |
| B-09 | Setiap JaKer punya destination pill (Jepang 🇯🇵) | `⚠️`   | Jaker bisa jadi bukan spesifik di satu negara. Tidak perlu tampilkan destination |
| B-10 | JaKer card tappable → drill-down                  | `⚠️`   | Ini refer ke screen mana?                                                        |
| B-11 | 3-tab bottom nav                                  | `✅`    |                                                                                  |


### D-S3-fresh — Pre-RTD Assessment Fresh


| #    | Check                                                       | Status | Notes                                                                                                                                                                                        |
| ---- | ----------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B-12 | JaKer identity card muncul di atas (cream background)       | `⚠️`   | Card Jaker identity harus lebih prominent. Copywriting juga harus bisa mengidentify bahwa ini adalah sebuah program Jalur Kerja. Coba cek juga di screen lain yang memiliki komponen serupa. |
| B-13 | Typography-as-decoration: nama negara ghosted (opacity 10%) | `✅`    | Dihilangkan — disepakati tidak diperlukan untuk saat ini                                                                                                                                     |
| B-14 | "Selesaikan assessment" atau equivalent                     | `✅`    |                                                                                                                                                                                              |
| B-15 | CTA "Mulai Assessment"                                      | `✅`    |                                                                                                                                                                                              |
| B-16 | 3-tab bottom nav                                            | `✅`    |                                                                                                                                                                                              |


### D-S3-resume — Pre-RTD Assessment Resume


| #    | Check                                      | Status | Notes |
| ---- | ------------------------------------------ | ------ | ----- |
| B-17 | Progress bar assessment yang sudah dimulai | `✅`    |       |
| B-18 | CTA "Lanjutkan" — bukan "Mulai"            | `✅`    |       |
| B-19 | Info berapa % sudah selesai                | `✅`    |       |


### D-S4 — In Training


| #    | Check                                     | Status | Notes |
| ---- | ----------------------------------------- | ------ | ----- |
| B-20 | "Lagi training di XAVIER" atau equivalent |        |       |
| B-21 | Training card(s) dengan nama training     |        |       |
| B-22 | CTA redirect ke XAVIER                    |        |       |
| B-23 | 3-tab bottom nav                          |        |       |


### D-S5a — Activation


| #    | Check                                                 | Status | Notes |
| ---- | ----------------------------------------------------- | ------ | ----- |
| B-24 | "Halo, Sari" greeting                                 |        |       |
| B-25 | JaKer identity card (cream) dengan destination pill   |        |       |
| B-26 | "Hari ini" section dengan tasks actionable            |        |       |
| B-27 | Streak pill "🔥 12 hari" ada                          |        |       |
| B-28 | Feed aktivitas terbaru (Tim Gapai + Cohort)           |        |       |
| B-29 | 4-tab bottom nav: Beranda, Aktivitas, Dokumen, Profil |        |       |


### D-S5b-A — Pre-Pipeline A (Tawaran Diterima)


| #    | Check                                    | Status | Notes |
| ---- | ---------------------------------------- | ------ | ----- |
| B-30 | Progress pills 1-2-3-4, step 1 aktif     |        |       |
| B-31 | "Tawaran Diterima" label atau equivalent |        |       |
| B-32 | CTA ke info session (F-02)               |        |       |


### D-S5b-B — Pre-Pipeline B (Sesi Info Selesai)


| #    | Check                               | Status | Notes |
| ---- | ----------------------------------- | ------ | ----- |
| B-33 | Progress pills, step 2 aktif        |        |       |
| B-34 | "Sesi Info Selesai" atau equivalent |        |       |
| B-35 | CTA ke payment (F-03)               |        |       |


### D-S5b-C — Pre-Pipeline C (Pembayaran Selesai)


| #    | Check                                | Status | Notes |
| ---- | ------------------------------------ | ------ | ----- |
| B-36 | Progress pills, step 3 aktif         |        |       |
| B-37 | "Pembayaran Selesai" atau equivalent |        |       |
| B-38 | CTA ke interview prep (F-04)         |        |       |


### D-S5b-D — Pre-Pipeline D (Siap Wawancara)


| #    | Check                              | Status | Notes |
| ---- | ---------------------------------- | ------ | ----- |
| B-39 | Progress pills, step 4 aktif       |        |       |
| B-40 | "Siap Wawancara" atau equivalent   |        |       |
| B-41 | Info jadwal wawancara + next steps |        |       |


### D-S5c — Pipeline Overview


| #    | Check                                             | Status | Notes |
| ---- | ------------------------------------------------- | ------ | ----- |
| B-42 | 4 track cards: Visa, Medical, Job Docs, Departure |        |       |
| B-43 | Status pill per track (waiting/active/done)       |        |       |
| B-44 | Progress visual per track                         |        |       |


### D-S5d — Departure


| #    | Check                                | Status | Notes |
| ---- | ------------------------------------ | ------ | ----- |
| B-45 | Countdown "D-N hari lagi" prominent  |        |       |
| B-46 | Dark green hero section              |        |       |
| B-47 | Tidak ada streak pill                |        |       |
| B-48 | Today zone + Cohort farewell section |        |       |


### D-S6-active — Standby Active


| #    | Check                                                | Status | Notes |
| ---- | ---------------------------------------------------- | ------ | ----- |
| B-49 | Empathetic copy: "Belum ada jalur yang pas sekarang" |        |       |
| B-50 | Penjelasan kenapa belum ada jalur                    |        |       |
| B-51 | Actions: Lengkapi profil, Aktifkan notifikasi, dll   |        |       |
| B-52 | "Butuh jeda sejenak?" link                           |        |       |
| B-53 | 3-tab bottom nav                                     |        |       |


### D-S6-jeda — Standby Jeda


| #    | Check                                      | Status | Notes |
| ---- | ------------------------------------------ | ------ | ----- |
| B-54 | "Lagi jeda" atau equivalent                |        |       |
| B-55 | Tone empathetic, quiet — bukan error state |        |       |
| B-56 | CTA untuk re-activate / kembali aktif      |        |       |


### D-S7-active — Alumni Active


| #    | Check                   | Status | Notes |
| ---- | ----------------------- | ------ | ----- |
| B-57 | "Alumni Gapai" headline |        |       |
| B-58 | Story / share CTA       |        |       |
| B-59 | Celebratory visual      |        |       |


---

## Section C — Pre-Pipeline Funnel

### F-01 — Acceptance Gate


| #    | Check                                                  | Status | Notes |
| ---- | ------------------------------------------------------ | ------ | ----- |
| C-01 | "Tinjauan Tawaran" heading                             |        |       |
| C-02 | JaKer identity card (cream) + fit %                    |        |       |
| C-03 | Breakdown "Kenapa kamu cocok" (checkmark list)         |        |       |
| C-04 | CTA "Terima Tawaran" — green, prominent                |        |       |
| C-05 | CTA "Tolak tawaran ini" — di bawah primary, text/merah |        |       |
| C-06 | Progress pill step 1/4                                 |        |       |


### F-02 — Info Session


| #    | Check                                | Status | Notes |
| ---- | ------------------------------------ | ------ | ----- |
| C-07 | Info sesi: tanggal, waktu, format    |        |       |
| C-08 | CTA "Daftar Sesi" atau "Gabung Sesi" |        |       |
| C-09 | Progress pill step 2/4               |        |       |


### F-03 — Payment


| #    | Check                                   | Status | Notes |
| ---- | --------------------------------------- | ------ | ----- |
| C-10 | Jumlah pembayaran jelas                 |        |       |
| C-11 | Info "refundable" / penjelasan komitmen |        |       |
| C-12 | CTA "Bayar Sekarang"                    |        |       |
| C-13 | Progress pill step 3/4                  |        |       |


### F-04 — Interview Prep


| #    | Check                                   | Status | Notes |
| ---- | --------------------------------------- | ------ | ----- |
| C-14 | Materi/checklist persiapan wawancara    |        |       |
| C-15 | CTA "Selesai Persiapan" atau equivalent |        |       |
| C-16 | Progress pill step 4/4                  |        |       |


---

## Section D — Pipeline Overview

### P-01


| #    | Check                                             | Status | Notes |
| ---- | ------------------------------------------------- | ------ | ----- |
| D-01 | 4 track cards: Visa, Medical, Job Docs, Departure |        |       |
| D-02 | Status pill per track (color-coded)               |        |       |
| D-03 | Progress visual per track                         |        |       |


---

## Section E — Detail Screens

### DT-01 — Document Tracker


| #    | Check                                                       | Status | Notes |
| ---- | ----------------------------------------------------------- | ------ | ----- |
| E-01 | List dokumen dengan status per item                         | `✅`    |       |
| E-02 | Upload button/CTA                                           | `✅`    |       |
| E-03 | Status pill per dokumen (belum upload / diverifikasi / dll) | `✅`    |       |


### JD-01 — JaKer Detail


| #    | Check                                  | Status | Notes                                                                                   |
| ---- | -------------------------------------- | ------ | --------------------------------------------------------------------------------------- |
| E-04 | Nama JaKer + employer                  | `✅`    | Fixed: employer dan lokasi dihapus, diframe sebagai "Jalur Kerja · Program JAKER Gapai" |
| E-05 | Destination pill                       | `✅`    |                                                                                         |
| E-06 | Fit score % dan breakdown alasan cocok | `✅`    |                                                                                         |
| E-07 | Info gaji / benefit / kontrak          | `✅`    |                                                                                         |
| E-08 | CTA "Pilih Jalur Ini"                  | `✅`    |                                                                                         |


### AK-01 — Aktivitas Persiapan


| #    | Check                                | Status | Notes |
| ---- | ------------------------------------ | ------ | ----- |
| E-09 | 3 sub-tabs: Persiapan, Acara, Alumni | `✅`    |       |
| E-10 | Content persiapan harian             | `✅`    |       |


### AK-02 — Aktivitas Acara


| #    | Check                            | Status | Notes |
| ---- | -------------------------------- | ------ | ----- |
| E-11 | Tab "Acara" aktif                | `✅`    |       |
| E-12 | Event calendar / upcoming events | `✅`    |       |


### AK-03 — Aktivitas Alumni


| #    | Check               | Status | Notes                              |
| ---- | ------------------- | ------ | ---------------------------------- |
| E-13 | Tab "Alumni" aktif  | `✅`    | Tidak perlu ada CTA "Tulis Cerita" |
| E-14 | Alumni stories feed | `✅`    |                                    |


### PR-01 — Profile


| #    | Check                                       | Status | Notes |
| ---- | ------------------------------------------- | ------ | ----- |
| E-15 | Avatar + Nama + destination                 | `✅`    |       |
| E-16 | Readiness score atau status visual          | `✅`    |       |
| E-17 | Settings list rows (navigasi ke S-01..S-06) | `✅`    |       |
| E-18 | Bottom nav ada (tidak regression)           | `✅`    |       |


### TR-01 to TR-04 — Track Details (Visa, Medical, Job Docs, Departure)


| #    | Check                                    | Status | Notes                                                                                                         |
| ---- | ---------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| E-19 | Judul track jelas per halaman            | `✅`    |                                                                                                               |
| E-20 | Checklist subtask dengan status per item | `✅`    |                                                                                                               |
| E-21 | CTA per subtask yang actionable          | `✅`    | Fixed: status "Terkunci" + Lock icon diganti ke "Menunggu" + Clock icon — lebih akurat untuk pipeline paralel |


### AL-01 — Alumni Story Composer


| #    | Check                        | Status | Notes                                                                                                                              |
| ---- | ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| E-22 | Text area untuk tulis cerita | `✅`    | Sebetulnya fitur Alumni Composer kurang cocok jika bisa dibuat secara user generated. Lebih baik dibuat oleh admin saja via OSCORP |
| E-23 | CTA "Publikasikan"           | `✅`    |                                                                                                                                    |


### AL-02 — Alumni Story Detail


| #    | Check                               | Status | Notes |
| ---- | ----------------------------------- | ------ | ----- |
| E-24 | Judul cerita + nama alumni          | `✅`    |       |
| E-25 | Body teks readable, tidak terpotong | `✅`    |       |


### STREAK-01 — Streak Detail


| #    | Check                        | Status | Notes |
| ---- | ---------------------------- | ------ | ----- |
| E-26 | Angka streak prominent       | `✅`    |       |
| E-27 | Kalender / visual hari aktif | `✅`    |       |
| E-28 | Milestone info               | `✅`    |       |


---

## Section F — Modals

### M-01 — Confirm Change JaKer


| #    | Check                                 | Status | Notes                                                 |
| ---- | ------------------------------------- | ------ | ----------------------------------------------------- |
| F-01 | Warning jelas: progress akan di-reset | `✅`    | Fixed: "Jalur Karir" → "Jalur Kerja" di seluruh modal |
| F-02 | CTA "Ya, ganti" + "Batal"             | `✅`    |                                                       |
| F-03 | Tone tidak menghukum, honest          | `✅`    |                                                       |


### M-02 — Confirm Decline Match


| #    | Check                                       | Status | Notes |
| ---- | ------------------------------------------- | ------ | ----- |
| F-04 | Konfirmasi tolak tawaran                    | `✅`    |       |
| F-05 | Penjelasan konsekuensi                      | `✅`    |       |
| F-06 | CTA "Tolak" (destructive/merah) + "Kembali" | `✅`    |       |


### M-03 — Confirm Jeda Mode


| #    | Check                                 | Status | Notes |
| ---- | ------------------------------------- | ------ | ----- |
| F-07 | "Aktifkan Mode Jeda?" heading         | `✅`    |       |
| F-08 | Penjelasan apa yang terjadi saat jeda | `✅`    |       |
| F-09 | CTA "Aktifkan Jeda" + "Batalkan"      | `✅`    |       |


### M-04 — Tim Gapai Chat


| #    | Check                         | Status | Notes                                                                                    |
| ---- | ----------------------------- | ------ | ---------------------------------------------------------------------------------------- |
| F-10 | Chat interface / sheet muncul | `✅`    |                                                                                          |
| F-11 | "Tim Gapai" header            | `✅`    | Fixed: "Tim Gapai" → "Admin Gapai" di seluruh prototype (global rename, 40+ occurrences) |


### M-05 — Generic Confirm Destructive


| #    | Check                            | Status | Notes |
| ---- | -------------------------------- | ------ | ----- |
| F-12 | CTA destructive (merah) + cancel | `✅`    |       |
| F-13 | Copy generic, reusable           | `✅`    |       |


---

## Section G — Edge / Error States


| #    | Screen             | Check                                          | Status | Notes                                                                                                         |
| ---- | ------------------ | ---------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| G-01 | E-01 OTP Exhausted | "Percobaan OTP Habis" + recovery path          | `✅`    | Fixed: heading, icon (ShieldAlert hijau), dan body copy dirework — tone lebih warm dengan recovery path jelas |
| G-02 | E-02 Track Failure | "Dokumen Tidak Lolos" + reason + re-upload CTA | `✅`    |                                                                                                               |
| G-03 | E-03 No Activities | Empty state visual + encouraging copy          | `✅`    | Fixed: CTA "Jelajahi Aktivitas" dihapus, diganti copy informatif tentang kapan aktivitas akan muncul          |
| G-04 | E-04 No Documents  | Empty state + CTA upload pertama               | `✅`    |                                                                                                               |
| G-05 | E-05 No Stories    | Empty state + CTA tulis cerita pertama         | `✅`    |                                                                                                               |
| G-06 | E-06 No Pipeline   | Empty state + CTA explore JaKer                |        |                                                                                                               |
| G-07 | E-07 Network Error | "Tidak Ada Koneksi" + Retry button             | `✅`    |                                                                                                               |
| G-08 | E-08 404           | "Halaman Tidak Ditemukan" + back to home       | `✅`    |                                                                                                               |
| G-09 | E-09 500 Server    | "Kesalahan Server" + Retry / contact support   | `✅`    |                                                                                                               |


---

## Section H — Settings


| #    | Screen                  | Check                                            | Status | Notes                                                                                                                                                                      |
| ---- | ----------------------- | ------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H-01 | S-01 Edit Profile       | Fields: nama, foto, HP, email + Save CTA         | `✅`    |                                                                                                                                                                            |
| H-02 | S-02 Demographics       | Birth date, gender, domicile, KTP address        | `✅`    | - Label "Demografi & Domisili" perlu dirework - Birth date belum menggunakan datepicker                                                                                    |
| H-03 | S-03 Certifications     | Add/remove language + skill certs                | `✅`    | S-03a built: category segmented control (Bahasa/Keahlian/Lisensi), name + level + issuer fields, "Simpan Sertifikat" CTA. S-03 "Tambah Sertifikat" now navigates to S-03a. |
| H-04 | S-04 Notifications      | Toggle per notification type (WA/email)          | `✅`    |                                                                                                                                                                            |
| H-05 | S-05 Privacy & Security | Ganti password, 2FA, export data, delete account | `✅`    | - Screen ganti passwordnya bagaimana? apakah sama dengan L-02?                                                                                                             |
| H-06 | S-06 App Language       | Toggle ID / EN                                   | `✅`    |                                                                                                                                                                            |
| H-07 | Semua Settings          | Back button ke PR-01 ada                         | `✅`    |                                                                                                                                                                            |
| H-08 | Semua Settings          | Save / simpan CTA ada                            | `✅`    | Dikonfirmasi: auto-save on change — tidak perlu explicit Save CTA di settings                                                                                              |


---

## Section I — Auth

### L-01 — Login


| #    | Check                                  | Status | Notes                        |
| ---- | -------------------------------------- | ------ | ---------------------------- |
| I-01 | "Selamat datang kembali" heading       | `✅`    | Belum menggunakan logo Gapai |
| I-02 | Field: Nomor HP + Password             | `✅`    |                              |
| I-03 | CTA "Masuk"                            | `✅`    |                              |
| I-04 | Link "Lupa kata sandi?" → L-02         | `✅`    |                              |
| I-05 | Link "Belum punya akun? Daftar" → R-01 | `✅`    |                              |


### L-02 — Forgot Password


| #    | Check                      | Status | Notes |
| ---- | -------------------------- | ------ | ----- |
| I-06 | "Lupa kata sandi?" heading | `✅`    |       |
| I-07 | Field Nomor HP             | `✅`    |       |
| I-08 | CTA "Kirim Kode"           | `✅`    |       |
| I-09 | Back button ke L-01        | `✅`    |       |


### L-03 — Forgot Password OTP


| #    | Check                                                | Status | Notes |
| ---- | ---------------------------------------------------- | ------ | ----- |
| I-10 | Heading "Masukkan Kode Verifikasi"                   |        |       |
| I-11 | Konteks reset password (bukan verifikasi registrasi) |        |       |
| I-12 | 6 kotak OTP input, centered                          |        |       |
| I-13 | Countdown timer + link "Kirim ulang"                 |        |       |
| I-14 | Back button ke L-02                                  |        |       |


### L-04 — New Password


| #    | Check                                                | Status | Notes |
| ---- | ---------------------------------------------------- | ------ | ----- |
| I-15 | "Buat Kata Sandi Baru" heading                       |        |       |
| I-16 | Field: kata sandi baru + konfirmasi                  |        |       |
| I-17 | Validasi min 8 karakter + harus sama                 |        |       |
| I-18 | Success state inline: CheckCircle + "Masuk Sekarang" |        |       |
| I-19 | Success state tidak navigasi ke screen baru          |        |       |


---

## Section J — Assessment Flow

### AS-01 — Assessment Entry Briefing


| #    | Check                                                        | Status | Notes |
| ---- | ------------------------------------------------------------ | ------ | ----- |
| J-01 | JaKer identity card muncul dengan nama track yang dipilih    | `✅`    |       |
| J-02 | Dua bagian dijelaskan (Bahasa + Skill) dengan estimasi waktu | `✅`    |       |
| J-03 | Reassurance bullets ada (tersimpan otomatis, satu kali, dll) | `✅`    |       |
| J-04 | Save-and-return note muncul di bawah bullets                 | `✅`    |       |
| J-05 | CTA "Mulai Penilaianku" — goal-framed, bukan "Begin Test"    | `✅`    |       |


### AS-02 — Language Assessment Question


| #    | Check                                                          | Status | Notes |
| ---- | -------------------------------------------------------------- | ------ | ----- |
| J-06 | Progress header sticky "Bagian 1 dari 2 · Kemampuan Bahasa"    | `✅`    |       |
| J-07 | Nomor pertanyaan muncul "Pertanyaan X dari 12"                 | `✅`    |       |
| J-08 | Progress bar linear menunjukkan posisi dalam komponen          | `✅`    |       |
| J-09 | Auto-save indicator "Tersimpan otomatis" muncul                | `✅`    |       |
| J-10 | Passage (bacaan) dan pertanyaan tampil terpisah                | `✅`    |       |
| J-11 | Opsi jawaban dapat dipilih, selected state visual jelas        | `✅`    |       |
| J-12 | CTA "Lanjutkan" disabled jika belum pilih jawaban              | `✅`    |       |
| J-13 | Back button "Sebelumnya" ada — bukan CTA besar (read-only nav) | `✅`    |       |


### AS-03 — Mid-Component Transition


| #    | Check                                                       | Status | Notes |
| ---- | ----------------------------------------------------------- | ------ | ----- |
| J-14 | Hero hijau "Bagian 1 Selesai" dengan positive signal        | `✅`    |       |
| J-15 | Opsi "Tinjau jawaban Bagian 1" ada dengan catatan read-only | `✅`    |       |
| J-16 | Preview Bagian 2 dengan nama dan estimasi waktu             | `✅`    |       |
| J-17 | Lock note "jawaban tidak bisa diubah" muncul sebelum CTA    | `✅`    |       |
| J-18 | CTA "Lanjut ke Bagian 2"                                    | `✅`    |       |


### AS-04 — Skill Assessment Question


| #    | Check                                                             | Status | Notes |
| ---- | ----------------------------------------------------------------- | ------ | ----- |
| J-19 | Progress header "Bagian 2 dari 2 · Kemampuan [Track]"             | `✅`    |       |
| J-20 | Label "SKENARIO" muncul di atas pertanyaan                        | `✅`    |       |
| J-21 | Scenario passage tampil terpisah dari pertanyaan utama            | `✅`    |       |
| J-22 | UX opsi jawaban sama persis seperti AS-02 (radio, selected state) | `✅`    |       |
| J-23 | Back button dan CTA "Lanjutkan" ada                               | `✅`    |       |


### AS-05 — Result Pass


| #    | Check                                                               | Status | Notes                                                                         |
| ---- | ------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| J-24 | Loading state muncul pertama dengan copy "Kami sedang mengevaluasi" | `✅`    |                                                                               |
| J-25 | Tombol prototype "Lihat hasil" tersedia di loading state            | `✅`    | Fixed: tombol dihapus, hasil muncul otomatis setelah 2 detik via useEffect    |
| J-26 | Green hero "RTD Terkonfirmasi" muncul setelah loading               | `✅`    | Fixed: copy diubah ke "Kamu Siap Berangkat! 🎉" — lebih human, tidak teknikal |
| J-27 | Language level tampil (contoh: "Setara JLPT N3")                    | `✅`    |                                                                               |
| J-28 | "Langkah selanjutnya" bullets muncul                                | `✅`    |                                                                               |
| J-29 | CTA "Mulai Aktivasimu" — goal-framed                                | `✅`    |                                                                               |


### AS-06 — Result Fail


| #    | Check                                                            | Status | Notes                                                                                                   |
| ---- | ---------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| J-30 | Loading state sama dengan AS-05                                  | `✅`    |                                                                                                         |
| J-31 | Variant switcher (Bahasa / Skill / Keduanya) berfungsi           | `✅`    | Apakah perlu ada switcher? apakah cukup tampilkan langsung semuanya saja tergantung hasil assessmentnya |
| J-32 | Hero neutral (bukan merah/error) — tone warm, bukan menghukum    | `✅`    | Perlu dipolish                                                                                          |
| J-33 | Tidak ada kata "gagal" — bahasa development digunakan            | `✅`    |                                                                                                         |
| J-34 | Area gap spesifik disebutkan per variant                         | `✅`    |                                                                                                         |
| J-35 | Reassurance bullets ada ("bukan akhir perjalanan", dll)          | `✅`    |                                                                                                         |
| J-36 | CTA berbeda per variant (Program Bahasa / Pelatihan JAKER / dll) | `✅`    | Seperti J-31, CTA dibuat general saja karena semua result pasti akan diarahkan ke Akademi Gapai         |


---

## Section K — Pre-Assessment Flow

### PA-01 — Eligibility Gate


| #    | Check                                                                  | Status | Notes |
| ---- | ---------------------------------------------------------------------- | ------ | ----- |
| K-01 | ShieldCheck icon + "Cek Kondisi Kesehatan" heading                     | `✅`    |       |
| K-02 | Deskripsi singkat tujuan layar di bawah heading                        | `✅`    |       |
| K-03 | Card berisi pertanyaan "Apakah kamu memiliki riwayat kondisi berikut?" | `✅`    |       |
| K-04 | TB dan HIV/AIDS muncul di list (bukan kondisi lain)                    | `✅`    |       |
| K-05 | CTA primer (hijau) "Tidak, saya bebas dari kondisi ini" → PA-03        | `✅`    |       |
| K-06 | CTA sekunder (border muted) "Ya, saya memiliki kondisi ini" → PA-02    | `✅`    |       |
| K-07 | TIDAK ada checkbox pattern — dua CTA explicit                          | `✅`    |       |


### PA-02 — Blocked


| #    | Check                                                            | Status | Notes                                              |
| ---- | ---------------------------------------------------------------- | ------ | -------------------------------------------------- |
| K-08 | Emoji 🙏 sebagai visual anchor — bukan icon error                | `✅`    |                                                    |
| K-09 | "Terima Kasih Sudah Jujur" heading — warm, tidak menghukum       | `✅`    |                                                    |
| K-10 | Copy affirming kejujuran user, bukan menghukum                   | `✅`    |                                                    |
| K-11 | Card tinted menjelaskan situasi platform saat ini                | `⚠️`   | Ganti istilah Konselor dengan Admin Gapai          |
| K-12 | TIDAK ada back button / header navigation                        | `✅`    |                                                    |
| K-13 | TIDAK ada "Kembali ke Beranda" link                              | `⚠️`   | Bagaimana handle login/logout user di kondisi ini? |
| K-14 | Single exit: CTA "Bicara dengan Konselor Gapai" + PhoneCall icon | `⚠️`   | Ganti istilah Konselor dengan Admin Gapai          |
| K-15 | TIDAK ada copy "bisa berubah seiring waktu"                      | `✅`    |                                                    |


### PA-03 — Basic Info (BMI)


| #    | Check                                                   | Status | Notes |
| ---- | ------------------------------------------------------- | ------ | ----- |
| K-16 | Progress indicator "Langkah 1 dari 7" atau equivalent   | `❌`    |       |
| K-17 | Field tinggi badan dalam cm                             | `✅`    |       |
| K-18 | Field berat badan dalam kg                              | `✅`    |       |
| K-19 | BMI result muncul (kalkulasi otomatis atau saat submit) | `❌`    |       |
| K-20 | CTA "Lanjutkan" ada                                     | `❌`    |       |


### PA-04 — Step 1 (Tujuan, Industri, Pengalaman)


| #    | Check                                                          | Status | Notes                                                                                                        |
| ---- | -------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| K-21 | Progress bar "Langkah 2 dari 7" atau equivalent                | `⚠️`   | Yang muncul bukan Langkah 2 dari 7, tapi Langkah 1 dari 3. Mana yang benar?                                  |
| K-22 | Section Tujuan Negara — min 3 destination cards, single-select | `⚠️`   | - Pilihan drop down country. - User seharusnya bisa pilih lebih dari satu. - Bentuknya berarti chips/badges? |
| K-23 | Section Industri — min 6 pilihan, multi-select                 | `⚠️`   | - Pilihan drop down industry. - User bisa pilih lebih dari satu industry.                                    |
| K-24 | Opsi "belum punya pengalaman" clear pilihan industri lain      | `✅`    |                                                                                                              |
| K-25 | Section Pengalaman Kerja — single-select                       | `✅`    |                                                                                                              |
| K-26 | CTA disabled jika ada section yang belum diisi                 | `⚠️`   | Saat ini CTA masih enable, tapi jika disubmit ada validasi error                                             |
| K-27 | Validasi inline muncul jika submit dengan section kosong       | `✅`    | Kontradiktif dengan K-26                                                                                     |


### PA-05 — Step 2 (Keahlian)


| #    | Check                                                  | Status | Notes                                                                             |
| ---- | ------------------------------------------------------ | ------ | --------------------------------------------------------------------------------- |
| K-28 | Progress bar "Langkah 3 dari 7" atau equivalent        | `⚠️`   | Yang muncul bukan Langkah 3 dari 7, tapi Langkah 2 dari 3. Mana yang benar?       |
| K-29 | Skill options tersedia, multi-select                   | `✅`    |                                                                                   |
| K-30 | Zero selection valid — tidak ada minimum wajib dipilih | `⚠️`   | Secara fungsi bukankah sudah diwakilkan dengan link "Lewati"?                     |
| K-31 | Link/button "Lewati" tersedia                          | `⚠️`   | Link kurang prominent                                                             |
| K-32 | CTA "Lanjutkan" selalu aktif (tidak disabled)          | `⚠️`   | Button aktif tapi belum ada validasi jika button diklik tanpa ada selected option |


### PA-06 — Step 3 (Tools, Opsional)


| #    | Check                                                   | Status | Notes                                                                             |
| ---- | ------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| K-33 | Progress bar "Langkah 4 dari 7" atau equivalent         | `⚠️`   | Yang muncul bukan Langkah 4 dari 7, tapi Langkah 3 dari 3. Mana yang benar?       |
| K-34 | Badge "Opsional" (hijau pill) muncul di heading section | `⚠️`   | Tidak perlu ada badge, asalkan CTA "Lewati" bisa lebih prominent                  |
| K-35 | Tool options tersedia, multi-select                     | `✅`    |                                                                                   |
| K-36 | "Lewati langkah ini" skip link ada                      | `⚠️`   | Link kurang prominent                                                             |
| K-37 | CTA "Lanjutkan" selalu aktif                            | `⚠️`   | Button aktif tapi belum ada validasi jika button diklik tanpa ada selected option |


### PA-07 — Bahasa


| #    | Check                                                              | Status | Notes                                                                                                                     |
| ---- | ------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| K-38 | Progress bar "Langkah 5 dari 7" atau equivalent                    | `❌`    |                                                                                                                           |
| K-39 | Entry bahasa: select bahasa + level 2x2 grid (A1/A2, B1/B2, C1/C2) | `⚠️`   | Apakah harus 2x2 grid? saya melihatnya menjadi tidak proporsional ketika ada salah satu opsi memiliki label yang panjang. |
| K-40 | Toggle sertifikat per entri bahasa                                 | `✅`    |                                                                                                                           |
| K-41 | "Tambah bahasa lain" button tersedia                               | `✅`    |                                                                                                                           |
| K-42 | Toggle "Saya tidak berbicara bahasa asing" — clear semua entri     | `✅`    |                                                                                                                           |
| K-43 | Reassurance note muncul jika tidak ada bahasa dipilih              | `✅`    |                                                                                                                           |
| K-44 | TIDAK ada label "Opsional" — bahasa adalah scoring input           | `✅`    |                                                                                                                           |


### PA-08 — Pendidikan


| #    | Check                                                                  | Status | Notes |
| ---- | ---------------------------------------------------------------------- | ------ | ----- |
| K-45 | Progress bar "Langkah 6 dari 7" atau equivalent                        | `❌`    |       |
| K-46 | 4 jenjang pendidikan tersedia sebagai pilihan                          | `✅`    |       |
| K-47 | Field jurusan muncul untuk SMA/SMK, Diploma, Sarjana (conditional)     | `✅`    |       |
| K-48 | Field jurusan TIDAK muncul untuk "Di bawah SMA/SMK"                    | `✅`    |       |
| K-49 | CTA "Lihat Rekomendasi Jalur Kerjaku" — goal-framed, bukan "Lanjutkan" | `✅`    |       |


### PA-09 — Hasil Rekomendasi


| #    | Check                                                              | Status | Notes                                     |
| ---- | ------------------------------------------------------------------ | ------ | ----------------------------------------- |
| K-50 | Heading results jelas (bukan generic "Loading")                    | `✅`    |                                           |
| K-51 | Rank 1 card: green border + badge "REKOMENDASI UTAMA"              | `✅`    |                                           |
| K-52 | Min 3 JaKer recommendations muncul                                 | `✅`    | Menyesuaikan dengan active Jaker yang ada |
| K-53 | Sinyal/alasan per card (italic quoted copy, bukan bullet kosong)   | `✅`    | Tidak perlu alasan per card               |
| K-54 | Rank 1 punya primary Button (hijau), rank 2–3 punya outline button | `✅`    |                                           |
| K-55 | Expectation-setting card tentang langkah berikutnya ada            | `✅`    | Perlu dirework copy nya                   |
| K-56 | "Lihat semua jalur kerja" secondary link ada                       | `✅`    | Apakah diperlukan?                        |


### PA-10 — Physical Conditions Gate


| #    | Check                                                                           | Status | Notes                                                                                                                                             |
| ---- | ------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| K-57 | JaKer yang dipilih ditampilkan (nama track) di atas layar                       | `✅`    |                                                                                                                                                   |
| K-58 | Amber warning icon — tone cautious, bukan merah/error                           | `✅`    |                                                                                                                                                   |
| K-59 | List kondisi fisik spesifik untuk JaKer yang dipilih                            | `✅`    | Ubah copy nya menjadi kondisi seperti apakah user memiliki tato yang terlihat atau tidak. Bukan kondisi kesehatan seperti yang ditanyakan di P-01 |
| K-60 | CTA primer (hijau): "Tidak, saya tidak memiliki kondisi tersebut"               | `✅`    | Polish agar konsisten dengan P-01                                                                                                                 |
| K-61 | CTA sekunder (red border): "Ya, saya memiliki kondisi tersebut" → kembali PA-09 | `✅`    | Polish agar konsisten dengan P-01                                                                                                                 |
| K-62 | TIDAK ada checkbox pattern — dua CTA explicit (konsisten dengan PA-01)          | `✅`    |                                                                                                                                                   |


---

## Priority Issues Tracking

Catat semua temuan ❌ dan ⚠️ di sini untuk triage:


| Screen ID | Check # | Issue                                       | Severity | Action                        |
| --------- | ------- | ------------------------------------------- | -------- | ----------------------------- |
| R-01      | A-01    | Logo placeholder "G", belum logo Gapai asli | 🟢 Minor | Ganti dengan asset logo final |
|           |         |                                             |          |                               |


**Severity scale:**

- 🔴 **Critical** — wrong info, broken layout, misleading copy → fix before handoff
- 🟡 **Major** — visual inconsistency, missing element per spec → fix before handoff
- 🟢 **Minor** — polish, nice-to-have → backlog

---

## QA Sign-off


| Section             | Screens                                                      | Done  |
| ------------------- | ------------------------------------------------------------ | ----- |
| A. Registration     | R-01, R-02, R-03, R-04                                       | [ ]   |
| B. Dashboard States | D-S1 to D-S7 (17 screens)                                    | [ ]   |
| C. Funnel           | F-01 to F-04                                                 | [ ]   |
| D. Pipeline         | P-01                                                         | [ ]   |
| E. Detail Screens   | DT-01, JD-01, AK-01–03, PR-01, TR-01–04, AL-01–02, STREAK-01 | [ ]   |
| F. Modals           | M-01 to M-05                                                 | [ ]   |
| G. Error States     | E-01 to E-09                                                 | [ ]   |
| H. Settings         | S-01 to S-06                                                 | [`✅`] |
| I. Auth             | L-01, L-02, L-03, L-04                                       | [`✅`] |
| J. Assessment Flow  | AS-01 to AS-06                                               | [ ]   |
| K. Pre-Assessment   | PA-01–PA-10                                                  | [ ]   |


**Final:** `[ ]` Semua critical + major issues resolved → approved for engineering handoff