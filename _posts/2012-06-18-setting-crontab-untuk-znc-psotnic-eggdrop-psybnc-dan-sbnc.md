---
layout: pos
title:  "Setting Crontab ZNC, sBNC, psyBNC dkk"
date:   2012-06-18 20:58:30 +7000
categories: irc vps
tags: sbnc eggdrop znc pstonic psybnc
author: genin
img: https://s17.postimg.org/91h3uvrpr/cron.jpg
---

Secara sederhana crontab adalah sebuah program yang akan menjalankan perintah kita sesuai waktu/schedule yang kita setting, apakah menitan, jam²an, harian, mingguan, bulanan atau tahunan, misalnya untuk auto backup. Selain crontab ada beberapa lain yang sejenis dengan fungsi yang sama, kira2 begitu penjelasan sederhananya..

Dibawah ini beberapa cara utk men-seting crontab bbrp aplikasi sehingga -misalnya- server restart, maka begitu on lagi aplikasi tersebut akan jalan secara otomatis tanpa kita harus menghidupkan manual.

<h5>ZNC</h5>
Buka editor crontabnya
{% highlight shell %}
crontab -e
{% endhighlight %}
kemudian masukkan kode ini
{% highlight shell %}
*/10 * * * * /home/znc/znc/znc >/dev/null 2>&1
{% endhighlight %}
(cttn: ganti folder path <code>/home/znc/znc</code> dgn folder znc anda sendiri misalnya <code>/home/sifulan/znc-0.202/znc</code>)<br />
Save dengan menekan <b>ctrl+o</b> dan <b>Enter</b>.
Keluar dengan menekan <b>ctrl-x</b>

<h5>PSOTNIC</h5>
Dari direktori aplikasi psotnicnya (bin)
{% highlight shell %}
./psotnic -a namafileconfig1.cfg namafileconfig2.cfg namafileconfig3.cfg namafileconfigdstnya.cfg
{% endhighlight %}

<h5>EGGDROP</h5>
Dari folder home eggdrop, copy file script untuk membuat crontab
{% highlight shell %}
cp scripts/autobotchk .
./autobotchk namabotconfignya -noemail
{% endhighlight %}
(cttn: -noemail utk mematikan pemberitahuan email jika crontab telah dieksekusi)

<h5>PSYBNC</h5>
Dari folder home psybncnya, edit file psyBNCchk dan ganti psyBNCPATH dengan path home psybnc anda, misalnya <code>/home/sifulan/psybnc</code>
Buka crontabnya
{% highlight shell %}
crontab -e
{% endhighlight %}
Masukan kode berikut
{% highlight shell %}
0,10,20,30,40,50 * * * * /home/foobar/psyBNCchk >/dev/null 2>&1
{% endhighlight %}
Save+exit dari crontab editor (ctrl+o kemudian ctrl+x)
Ganti file permission
{% highlight shell %}
chmod 700 psyBNCchk
{% endhighlight %}

<h5>SBNC</h5>
Masuk ke folder <code>~/sbnc</code> dan buat file <i>sbncchk.sh</i>
{% highlight shell %}
cd ~/sbnc
nano sbncchk.sh
{% endhighlight %}
kemudian isi dengan kode dibawah ini
{% highlight shell %}
#!/bin/sh
SBNCPATH=~/sbnc
if test -r $SBNCPATH/sbnc.pid; then
SBNCPID=$(cat $SBNCPATH/sbnc.pid)
if $(kill -CHLD $SBNCPID >/dev/null 2>&1)
then
exit 0
fi
fi
cd $SBNCPATH
./sbnc --lpc /dev/null
{% endhighlight %}
Save+exit

Ganti mode filenya spy bs di eksekusi
{% highlight shell %}
chmod +x ~/sbnc/sbncchk
{% endhighlight %}
Buka crontab editor
{% highlight shell %}
crontab -e
{% endhighlight %}
Masukan kode berikut ini
{% highlight shell %}
@reboot $HOME/sbnc/sbncchk.sh > /dev/null 2>&1
*/10 * * * * $HOME/sbnc/sbncchk.sh > /dev/null 2>&1
{% endhighlight %}
Sementara segitu dl koleksi crontabnya, kpn2 ditambah lg klo jodoh 😛
