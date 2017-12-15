---
layout: pos
title:  "Cara Install sBNC"
date:   2010-02-24 20:58:30 +7000
categories: irc bnc
tags: sbnc
---

sBNC atau shroudBNC adalah salah satu bouncer yang cukup mempunyai fitur mahal, yakni bisa di kasih tcl,
jadi mirip bot eggdrop gitu, tcl eggdrop juga bisa di gunakan di sbnc kamu, jadi kamu bot nya, wkwkwk

Untuk debian/ubuntu kamu harus sudah punya tcl dtt untuk install sbnc, jika belum pastikan kamu install yang dibutuhkan via root
apt-get install build-essential tcl8.5-dev libcurl4-openssl-dev

Proses installasi sBNC pasti sudah punya shell / user vps ya, login akun ssh kamu

1) Ambil tar ball sbnc nya
<pre>
wget http://shroudbnc.info/files/sbnc/sbnc-1.3.9.tar.gz
2) Extrack ya
<pre>
tar zxf sbnc-1.3.9.tar.gz
</pre>

3) Masuk ke dir sbnc
<pre>
cd sbnc-*
</pre>

4) Konfigure dulu ya
<pre>
./configure
</pre>

5) Kalau ga ada yang error lanjut make
<pre>
make
</pre>

6) Dan install
<pre>
make install
</pre>




