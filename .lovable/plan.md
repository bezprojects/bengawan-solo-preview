## Bengawan Solo Food Hub — Landing Page

Single-page landing bergaya **modern minimalis**: dominan putih, 1 warna aksen biru dongker (oranye terakota — masih nyambung dengan nuansa Solo tapi tetap clean), banyak white space, tipografi serif elegan untuk heading + sans-serif untuk body. Semua data menu pakai dummy yang nanti tinggal di-edit.

### Struktur Halaman (urut atas ke bawah)

1. **Navbar (sticky)**
  - Logo Bengawan Solo Food Hub di kiri
  - Link anchor: Beranda · Menu · Tentang · Testimoni · Kontak
  - Tombol "Pesan Sekarang" (aksen) → scroll ke section pemesanan / buka WhatsApp
2. **Hero Section**
  - Heading besar: nama restoran + tagline (mis. "Hub Kuliner Solo dalam Genggaman")
  - Sub-text singkat 1–2 kalimat
  - 2 tombol: "Lihat Menu" (scroll) & "Pesan via WhatsApp"
  - Foto signature dish besar di kanan (placeholder)
3. **Tentang Singkat**
  - 2–3 kalimat cerita restoran
  - 3 highlight kecil dengan icon: Resep Autentik · Bahan Segar · Pelayanan Ramah
4. **Menu Preview**
  - Tab toggle: **Makanan (5)** | **Minuman (5)**
  - Grid kartu menu (3 kolom desktop, 2 tablet, 1 mobile): foto, nama, deskripsi singkat, harga
  - Badge "Best Seller" di 1–2 menu unggulan
  - Tombol "Lihat Menu Lengkap" di bawah → buka section/modal berisi sisa 5 makanan + 15 minuman (accordion per kategori, tanpa pindah halaman supaya hemat token)
5. **Jam Operasional**
  - Kiri: tabel jam buka hari Senin–Minggu - 24 jam
6. **Testimoni**
  - 3 kartu kutipan pelanggan + nama + rating bintang
7. **Footer / Kontak**
  - CTA besar "Pesan Sekarang Lewat:" 1 kontak Whatsapp. Nomer WhatsApp 08877831354
  - Info kontak singkat dengan 4 tombol ikon: **WhatsApp · Instagram · ShopeeFood · GoFood · GrabFood**
  - Copyright
8. **WhatsApp Floating Button** (pojok kanan bawah, selalu muncul saat scroll)

### Detail Desain

- **Warna:** background biru dongker (#**001122**), teks abu-abu, aksen  kuning emas untuk tombol & highlight, bisa menggunakan putih untuk penetral warna
- **Font:** heading pakai serif modern (Playfair Display / Cormorant), body pakai Inter/Geist.
- **Komponen:** pakai shadcn/ui yang sudah tersedia (Card, Button, Tabs, Accordion, Badge) — hemat token, tidak perlu bikin dari nol.
- **Responsif:** mobile-first, navbar jadi hamburger menu di mobile.
- **Animasi:** minimal (fade-in saat scroll pakai CSS) — tidak pakai library berat.

### Data Dummy yang Akan Disiapkan

- 5 menu makanan khas Solo (Nasi Dada penyet Besar--terlaris, Nasi ayam kremes, nasi ayam bakar, nasi ayam bakar dada besar, nasi ayam penyet ayam besar) — 5 tampil di preview, 5 di "Menu Lengkap".
- 5 menu minuman (Susu, Es Jeruk/panas, Es teh kampul/panas, Es teh/panas, Susu sirup) — 5 di preview, 15 di "Menu Lengkap".
- 3 testimoni dummy.
- Jam operasional dummy Senin–Minggu 24 jam.
- Link sosmed & ojol pakai placeholder `#` yang tinggal kamu ganti.

### Tips Hemat Token

- Semua dibangun dalam **1 prompt implementasi** sekaligus, jadi tidak perlu bolak-balik.
- Gambar menu pakai `placeholder.svg` dulu — kamu tinggal ganti URL setelah punya foto asli (tidak perlu generate AI image).
- Logo: setelah plan disetujui, kamu upload file logo lewat chat lalu tinggal bilang "pakai logo ini" — 1 prompt ringan.

### Yang Perlu Kamu Siapkan Setelah Implementasi (gratis, tanpa token)

- Ganti foto menu dengan foto asli
- Ganti link WhatsApp (`https://wa.me/62xxx`), Instagram, ShopeeFood, GoFood, GrabFood
- Ganti alamat & embed Google Maps
- Edit nama menu / harga jika berbeda dari dummy
- Upload & pasang logo

Setelah kamu klik **Implement plan**, saya akan langsung bangun semuanya sekaligus.