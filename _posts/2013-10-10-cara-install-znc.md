---
layout: pos
title: "Cara Install ZNC"
date: 2010-10-10 19:32:30 +7000
categories: irc bnc
tags: znc
author: goez
img: https://wiki.znc.in/images/c/c8/Znc-0.99-black.png
---

Install <a href="http://wiki.znc.in/ZNC/id" rel="nofollow" target="_blank">ZNC</a> bisa dilakukan pada <i>user</i> vps atau <i>shell</i>, namun kali ini saya akan mencoba install ZNC pada <i>root</i>, pada intinya sama saja, yang berbeda hanyalah jika kita install pada root, semua user yang ada di vps tersebut bisa langsung buat konfig, tidak perlu install kembali znc pada <i>home/user</i> mereka, baiklah mari kita mulai step step nya:

Login vps anda, disini saya menggunakan root, jika anda tidak punya akses root, login ke <i>shell/user</i> tidak masalah.
ika anda menggunakan root taruh file znc yang akan di install pada dir <i>/usr/local/src</i> ya, kalau user taruh di <i>/home/username</i> ajah.
{% highlight shell %}cd /usr/local/src{% endhighlight %}

Lalu wget source nya, anda bisa lihat pada <a href="http://wiki.znc.in/">wiki.znc.in</a> untuk versi stabil, disini saya menggunakan znc nightly latest.
{% highlight shell %}wget znc.in/nightly/znc-latest.tar.gz{% endhighlight %}

Setelah itu Extrack file nya:
{% highlight shell %}tar zxf znc-latest.tar.gz{% endhighlight %}

Masuk directory hasil extrack barusan anda bisa <i>ls</i> terlebih dahulu untuk melihat foldernya:
{% highlight shell %}cd znc*{% endhighlight %}

Kofigurasi ZNC anda dengan cara:
{% highlight shell %}./configure{% endhighlight %}
Jika anda install ZNC ini pada <i>user/shell </i>(<b>bukan root</b>) gunakan ini:
{% highlight shell %}./configure --prefix=$HOME --enable-extra{% endhighlight %}

<b>NB</b>: Jika anda menemukan error seperti ini (Khusus root)
<pre>
checking whether the C++ compiler works... no
configure: error: in `/usr/local/src/znc-git-2014-10-01':
configure: error: C++ compiler cannot create executables
See `config.log' for more details</pre>

itu berarti anda belum install <a href="http://eg-goez.blogspot.com/2010/04/error-C-compiler-cannot-create-executablestuto-cara-install-c-pada-vps.html" target="_blank">C++</a> pada vps anda. Jika anda pengguna <b>Unbuntu/Debian</b> install dahulu menggunakan:
{% highlight shell %}apt-get install c++ && apt-get install g++{% endhighlight %}
Jika anda pengguna <b>CentOS</b> silahkan gunakan perintah:
{% highlight shell %}yum install gcc-c++{% endhighlight %}
Setelah selesai<i> ./configure</i> ulang
Jika anda menemukan masalah seperti ini:<pre>
checking for icu... no
configure: WARNING: support for charset conversion not found and thus disabled
checking for GNU make... configure: error: could not find GNU make</pre>
Tandanya vps anda baru :D hehe, install dulu make nya:
Pada <b>Debian/Unbuntu</b> kasih perintah ini:
{% highlight shell %}apt-get install make{% endhighlight %}
Kalau <b>CentOs</b> mungkin ini:
{% highlight shell %}yum install make{% endhighlight %}
Lalu <i>./configure</i> ulang sampai anda menemukan seperti ini:
{% highlight shell %}ZNC 1.5 configured
Now you can run "make" to compile ZNC{% endhighlight %}

ZNC sudah dikonfigurasi lakukan <i>make</i>
{% highlight shell %}make{% endhighlight %}

Setelah itu lakukan <i>make install</i>
{% highlight shell %}make install{% endhighlight %}

ika Sukses anda akan menemukan pesan ini (jika root)<pre>
 ZNC was successfully installed.
 You can use '/usr/local/bin/znc --makeconf'
 to generate a config file.

 If you need help with using ZNC, please visit our wiki at:
 http://znc.in</pre>

Baik install ZNC nya selesai, sekarang proses pembuatan file konfigurasi ZNC, untuk root dulu ya, jika anda install tadi as root, anda harus membuat user baru, atau yang sudah ada tidak apa², misal saya ingin membuat user <b>znc</b>, dengan perintah
{% highlight shell %}adduser znc{% endhighlight %}
Oke sudah, untuk lebih jelasnya tentang pembuatan user baru baca <a href="http://eg-goez.blogspot.com/2010/04/tuto-cara-menambah-newuser-via-ssh-di-vps.html" target="_blank">di sini</a>.
Sekarang anda login sebagai znc
{% highlight shell %}su - znc{% endhighlight %}

Buat file konfigurasi ZNC pada user ini dengan cara
{% highlight shell %}/usr/local/bin/znc -c{% endhighlight %}
Dan jawab pertanyaan pertanyaannya, saya rasa ini semua bisa :)
ika anda tadi pada install ZNC di user/shell, tinggal perintah aja
{% highlight shell %}./znc -c{% endhighlight %}
Dan jawab pertanyaan pertanyaanya.

Mudah bukan? <b>NB</b>: untuk installasi pada root tadi, semua user (umum) bisa membuat konfigurasi ZNC langsung tanpa harus install ZNC pada <i>home/user </i>mereka ;) ini akan mudah berbagi webskins atau modul karena sumbernya dari 1, atau mungkin bisa sedikit menghemat HDD :D
Jika proses mati, untuk menghidupkan kembali, login as user itu dan nyalakan kembali dengan:
{% highlight shell %}/usr/local/bin/znc{% endhighlight %}
atau langsung aja ketik perintah
{% highlight shell %}./znc{% endhighlight %} atau
{% highlight shell %}znc{% endhighlight %}
Beres :) untuk lebih jelasnya tentang install ZNC dengan support Secure Connection (SSL), oident dengan ZNC dll next post aja, kalau sempet :D Atau anda bisa melihat Tutorial Bahasa Indonesia langsung di <a href="http://wiki.znc.in/Installation/id">http://wiki.znc.in/Installation/id</a>
Tutorial Menambah External modul bisa di lihat <a href="http://eg-goez.blogspot.com/2014/09/tutorial-menambah-external-modules-pada-znc.html" target="_blank">di sini</a>.
Tutorial Update/Upgrade ZNC bisa di lihat <a href="http://eg-goez.blogspot.com/2014/10/tutorial-update-upgrade-version-znc.html" target="_blank">di sini</a>.

Sekian semoga bermanfaat ;)
