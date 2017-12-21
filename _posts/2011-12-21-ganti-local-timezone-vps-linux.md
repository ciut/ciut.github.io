---
layout: pos
title:  "Setting Time Zone di VPS"
date:   2011-12-21 18:21:30 +7000
categories: timezone vps
tags: vps linux debian ubuntu
author: goez
img: https://s14.postimg.org/8dw6mly1d/timezone-change-by-goez.png
---
Untuk VPS yang baru apalagi belinya di server luar negeri biasanya tanggal dan jam server ikut sama zone lokasi servernya, kebanyakan CST kalau beli di area United State, jika kamu ingin run cronjob/crontab dan butuh waktu lokal agar mungkin jam local subuh jam 4 saat orang tidur atau pengunjung sepi untuk backup semua data atau update script2 yang basic nightly ini bisa di atur jika timezone kamu cocok, yaitu WIB/WIT. Mudah aja kok.

Copy lokasi yang ada di <code>/usr/share/zoneinfo</code> ke <code>/etc/localtime</code> langsung jadi.
Contoh untuk Jakarta
{% highlight shell %}
cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
date
{% endhighlight %}
Untuk melihat list selain jakarta bisa di 
{% highlight shell %}
cd /usr/share/zoneinfo/Asia/
ls
{% endhighlight %}
mudah bukan?