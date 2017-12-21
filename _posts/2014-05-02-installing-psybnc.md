---
layout: pos
title: "Cara Install psyBNC"
date: 2014-05-02 19:32:30 +7000
categories: irc bnc
tags: psybnc
author: goez
img: https://s14.postimg.org/we2bmk5ch/install-psybnc2-by-goez.png
---

Sebetulnya ini dah jadul, tapi pikir2 lagi mau buat bot banyak kenapa gak pake psybnc aja, bisa scripting dan layaknya bot, proses nya pun terbilang simple dan makan resources ram ngirit, log gak usah khawatir, ipv6 oke, nanti terakhir ane bagikan patch script buatan ane untuk memerintah USER1 sebagai komandan rusuh user lainya.
Login ke shell / vps kalian
ambil src nya dengan cara
{% highlight shell %}
wget http://psybnc.at/download/beta/psyBNC-2.3.2-7.tar.gz
{% endhighlight %}
extract dengan cara
{% highlight shell %}
tar zxvf psyBNC-2.3.2-7.tar.gz
{% endhighlight %}
masuk directory psybnc
{% highlight shell %}
cd psybnc
{% endhighlight %}
kompile pertama (ini penting)
jika anda menginginkan user lebih dari 50 karena untuk default max usernya 50 anda bisa kompile dengan cara
{% highlight shell %}
make menuconfig
{% endhighlight %}
<p class="alert alert-warning">Catatan: tidak semua shell / vps sudah terinstall curses, jika anda menemukan masalah error seperti ini:
This needs the ncurses library. If it is not available, menuconf wont work. If you are using curses, use make menuconfig-curses instead.
make: *** [menuconfig] Error 1</p>
ini sebabnya pada server anda tidak terinstall <a href="http://eg-goez.blogspot.com/2014/05/installing-libncurses5-dev-centos-debian.html">libncurses</a>, jika anda pemegang <b>root</b>, ada baiknya anda install <code>libncurses5-dev</code> dahulu, tapi meskipun anda melewati ini, proses installasi tetap bisa di jalankan, hanya anda tidak bisa enable untuk bagian misal SSL Support / Identd / Max Users, tapi jangan worry, dont khawatir, anda bisa merubah manual,,
jalankan saja perintah <code>make menuconfig</code> seperti di atas,, lalu edit file <i>config.h</i>
dengan cara:
{% highlight shell %}
nano config.h
{% endhighlight %}
cari tulisan ini
<pre>
#define MAXUSER 50
</pre>
ganti 50 dengan sembarang dehh.. 99999 juga boleh,, tapi # jangan di hapus ea..
setelah oke,, simpan dengan cara tekan
<b>CRTL+X (yes)</b>
jalankan kompile lagi
{% highlight shell %}
make
{% endhighlight %}
setelah itu edit file psybnc.conf
{% highlight shell %}
nano psybnc.conf
{% endhighlight %}
stell port nya,,
setelah di CTRL+X (yes)
jalankan dengan perintah
{% highlight shell %}
./psybnc
{% endhighlight %}
done, dan jika kamu ingin buat bot dari psybnc kamu bisa pake patch/script yang ane coding <a href="https://github.com/duniairc/cla">di sini</a>.
di atas ane bisa load 300+ psybnc admin & user. just duplicate aja config nya diperbanyak line nya.
