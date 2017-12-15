---
layout: pos
title:  "Cara Install sBNC"
date:   2010-02-24 20:58:30 +7000
categories: irc bnc
tags: sbnc
author: goez
img: 
---
sBNC atau shroudBNC adalah salah satu bouncer yang cukup mempunyai fitur mahal, yakni bisa di kasih tcl,
jadi mirip bot eggdrop gitu, tcl eggdrop juga bisa di gunakan di sbnc kamu, jadi kamu bot nya, wkwkwk

Untuk debian/ubuntu kamu harus sudah punya tcl dtt untuk install sbnc, jika belum pastikan kamu install yang dibutuhkan via root\
{% highlight shell %}
apt-get install build-essential tcl8.5-dev libcurl4-openssl-dev
{% endhighlight %}
Proses installasi sBNC pasti sudah punya shell / user vps ya, login akun ssh kamu
<h5>Installing</h5>
1) Ambil tar ball sbnc nya
{% highlight shell %}
wget http://shroudbnc.info/files/sbnc/sbnc-1.3.9.tar.gz
{% endhighlight %}
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
{% endhighlight %}

6) Dan install
{% highlight shell %}
make install
{% endhighlight %}

7) Setelah itu kini proses konfigurasi user admin nya, sekarang masuk ke folder <code>sbnc</code>
{% highlight shell %}
cd ~
cd sbnc
{% endhighlight %}

8) Buat konfigurasi baru
{% highlight shell %}
./sbnc
{% endhighlight %}
Maka akan muncul pertanyaan seperti ini
<pre>
1. Which port should the bouncer listen on (valid ports are in the range 1025 - 65535)
2. What should the first user's name be?
3. Please enter a password for the first user:
</pre>
Isi semua yang dibutuhkan di atas lalu reload sbnc nya sampai pada
<pre>
Writing main configuration file... DONE
 Writing first user's configuration file... DONE
 Configuration has been successfully saved. Please restart shroudBNC now.
 </pre>
Reload sbnc nya
{% highlight shell %}
./sbnc
{% endhighlight %}
Jika sukses maka akan tampil kalimat bijak seperti ini
<pre>
shroudBNC (version: 1.3.9) - an object-oriented IRC bouncer
 Configuration directory: /home/bnc/bnc
 Log directory: /home/bnc/bnc
 Data directory: /home/bnc/bnc
 PID path: /home/bnc/bnc/sbnc.pid
 [Wed Feb 24 2010 12:47:11]: Log system initialized.
 [Wed Feb 24 2010 12:47:11]: Created main listener.
 [Wed Feb 24 2010 12:47:11]: Starting main loop.
 Daemonizing... DONE
</pre>

{% highlight shell %}
{% endhighlight %}



