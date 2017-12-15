---
layout: pos
title:  "Cara Install sBNC"
date:   2010-02-24 20:58:30 +7000
categories: irc bnc
tags: sbnc
author: goez
img: https://s18.postimg.org/aeqmy88ux/Screenshot-2017-12-15_s_BNC_Interface_v1_3.png
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
<h5>Installasi Web Interface nya</h5>
Beda dengan sbnc yang versi sebelumnya yang sudah sepaket, di versi ini selain udah tidak pakai <code>conftool</code> untuk membuat konfig file untuk web iface nya juga ga sepaket lagi, ambil dan install dulu ya, dibutuhkan server yang open port 80, kalau di vps bisa install apache atau nginx juga bisa atau cari hosting gratisan sajalah.

1) Ambil & untar source webinterface nya dulu
{% highlight shell %}
 wget http://shroudbnc.info/files/web/sbnciface-1.3.0.tar.gz && tar zxvf sbnciface-1.3.0.tar.gz
{% endhighlight %}

2) Rename folder togelnya misal
{% highlight shell %}
 mv mv sbnciface-s* sbnc
{% endhighlight %}

3) Buka pakai SFTP atau pakai vi/nano terserah intinya adalah rename file <code>settings.php.example</code> menjadi <code>settings.php</code>
Rename via ssh
{% highlight shell %}
 mv settings.php.example settings.php
{% endhighlight %}

4) Edit bisa pakai vi, nano, pico dkk, saya pilih notepad++ edit bagian ini
{% highlight php %}
 $bncServers = array(
   $sbncsrv0 = array(
       'name'  =>  'BNC 1',
       'ip'    =>  'bnc.myserver.net',
       'port'  =>  '8000'
   ),
 );
{% endhighlight %}
Kalau ada server lain bisa di tambah kalau ga ada hapus yang <code>$sbncsrv1</code>
Setelah selesai cek ke http nya dan selesai...


<h5>Menambah TcL</h5>
TCL di simpan di dir <code>sbnc/scripts/</code> mirip eggdrop bukan? test satu tcl misal tcl buatan saya seperti ini
<script src="https://gist.github.com/eggoez/9935ab57f149dfe264036426a5f9e3b8.js"></script>
Simpan .tcl nya di folder /scripts
Jangan lupa untuk edit <code>sbnc.tcl</code> dan menambahkan baris baru contoh
{% highlight shell %}
 # This is an example configuration file for shroudBNC's TCL module
 # It will be sourced whenever you (re-)load the tcl module or
 # use the tcl command 'rehash' (e.g. /sbnc tcl :rehash)
 # You should not modify this block
 source "scripts/alltools.tcl"
 source "scripts/namespace.tcl"
 source "scripts/timers.tcl"
 source "scripts/misc.tcl"
 source "scripts/variables.tcl"
 source "scripts/pushmode.tcl"
 source "scripts/channel.tcl"
 source "scripts/bind.tcl"
 source "scripts/usys.tcl"
 source "scripts/socket.tcl"
 source "scripts/botnet.tcl"
 source "scripts/iface2.tcl"
 source "scripts/ifacecmds.tcl"
 source "scripts/partyline.tcl"
 source "scripts/defaultsettings.tcl"
 source "scripts/auth.tcl"
 source "scripts/plat.tcl"
{% endhighlight %}
Setelah itu rehash sbnc kamu via irc
<pre>/sbnc rehash</pre>
Jika tidak ada yang error berarti sukses!!


