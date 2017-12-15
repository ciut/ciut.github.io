---
layout: pos
title:  "Cara Install sBNC"
date:   2010-02-24 20:58 +7000
categories: irc bnc
tags: sbnc
---
sBNC atau shroudBNC adalah salah satu bouncer yang cukup mempunyai fitur mahal, yakni bisa di kasih tcl,
jadi mirip bot eggdrop gitu, tcl eggdrop juga bisa di gunakan di sbnc kamu, jadi kamu bot nya, wkwkwk

Untuk debian/ubuntu kamu harus sudah punya tcl dtt untuk install sbnc, jika belum pastikan kamu install yang dibutuhkan via root
apt-get install build-essential tcl8.5-dev libcurl4-openssl-dev

Proses installasi sBNC pasti sudah punya shell / user vps ya, login akun ssh kamu

1) Ambil tar ball sbnc nya
{% highlight shell %}
wget http://shroudbnc.info/files/sbnc/sbnc-1.3.9.tar.gz
2) Extrack ya
{% highlight shell %}
tar zxf sbnc-1.3.9.tar.gz
{% endhighlight %}
3) Masuk ke dir sbnc
{% highlight shell %}
cd sbnc-*
{% endhighlight %}
4) Konfigure dulu ya
{% highlight shell %}
./configure
{% endhighlight %}
5) Kalau ga ada yang error lanjut make
{% highlight shell %}
make
make install
{% endhighlight %}


