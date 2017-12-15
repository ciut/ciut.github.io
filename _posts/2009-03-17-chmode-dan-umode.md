---
layout: pos
title: "Channel Mode & User Mode di AllNetwork"
date: 2009-03-17 19:32:30 +7000
categories: irc
tags: allnetwork
author: goez
img: https://raw.githubusercontent.com/ciut/ciut.github.io/jadul/img/portfolio-2.jpg
---

Mungkin bagi pemula di dunia IRC khususnya di server Allnetwork, belum banyak yang mengetahui command – command CMode (Channel Mode) dan Umode (User Mode). Baiklah, disini saya mau berbagi apa yang saya ketahui tentang CMode dan UMode.

CMode ada 2, No Parameters dan With Parameters

Apa saja yang termasuk No Parameters? Ini dia:

+n : No external messages, artinya user yang tidak berada didalam chanel tidak dapat mengirimkan pesan/message ke channel tersebut.

+t : Ops Topik, artinya yang bisa melakukan set atau perubahan terhadap topik channel hanya bisa dilakukan oleh user yang mempunyai FLAGS +h/halfop dan dan +o/op.

+s : Secret, artinya jika user yang berada didalam channel yang di set +s, maka kalau di WHOIS, tidak akan tampak kalau user tersebut berada didalam channel yang di set +s.

+p : Paranoia, artinya +h/halfop tidak dapat melakukan set manual +h/halfop atau -h/dehalfop kepada user lain, +h/halfop tidak dapat melakukan kick terhadap sesama +h/halfop dan jika ada INVITE berasal dari channel itu akan ada NOTICE.

+m : Moderated, artinya yang dapat berbicara didalam channel hanya yang memiliki akses +o/op, +h/halfop dan +v/voice.

+i : Invite Only, artinya yang dapat memasuki channel hanya yang memiliki akses +o/op, +h/halfop dan +v/voice. User biasa juga bisa masuk, dengan syarat mendapat undangan/INVITE dari +o/op channel tersebut.

+S : SSL Only, artinya yang dapat memasuki channel hanya yang konek melalui SSL. SSL itu adalah singkatan dari Secure Socket Layer yang artinya sebuah mekanisme encryption antara pemberi informasi dan penerima informasi dengan demikian pesan yang hendak disampaikan dijamin tidak bisa dibaca oleh middle man atau orang yang menyadap diantara yang melakukan percakapan.

+R : Registered User Only, artinya yang dapat memasuki channel hanya yang NICK nya sudah di register/terdaftar dan teridentify ke servis.

+c : No Colors, artinya user tidak dapat mengirimkan pesan/message yang berwarna ke channel.

+O : Opers Only, artinya hanya membolehkan Irc Operator/IRCOP untuk memasuki channel.

+A : Admin Only, artinya hanya membolehkan admin server untuk memasuki channel.

+M : artinya yang dapat berbicara di dalam channel hanya yang NICK nya sudah teregister dan teridentify.

+N : artinya hanya +o/op channel dan IRCOP yang dapat melakukan perubahan NICK/change NICK didalam channel.

Sekarang yang termasuk With Parameters. Apa saja itu? Ini dia:

+k : Key, artinya user yang ingin masuk ke channel harus mengetahui KEY/kunci channel tersebut. Perintahnya adalah: /join #namachannel KEY-nya. Misal /join #help tolongdong

+l : Limit, artinya membatasi jumlah user yang akan masuk ke dalam channel. Perintahnya adalah: /raw mode #namachannel +l batas. Misal /raw mode #help +l 100. Angka 100 disini adalah jumlah user yang akan dibatasi untuk masuk/JOIN kedalam channel.

+v : Voice, artinya FLAGS +v/voice ini berfungsi jikalau set channel berada dalam keadaan +m/MODERATE. Perintahnya adalah /raw mode #namachannel +v nick. Misal /raw mode #help +v kamekz.

+h : Halfop, artinya setengah operator. Yang memiliki flags +h/halfop dapat melakukan perintah kick, banned, melakukan perubahan set CMode secara manual. +h/halfop tidak dapat melakukan kick, banned, -o/deop terhadap +o/op. Perintahnya adalah /raw mode #namachannel +h NICK. Misal /raw mode #help +h kamekz.

+o : Op, artinya user yang mendapat FLAGS +o/op dapat melakukan kendali penuh terhadap channel, seperti mengatur CMode dan menghapus/DELETE FLAGS baik itu +o/op, +h/halfop, +v/voice, +b/ban. Semua itu bisa dilakukan jika FLAGSnya minimal SOP/Super Operator dichannel. Perintah +o adalah /raw mode #namachannel +o NICK. Misal /raw mode #help +o kamekz.

+b : Ban, artinya mencegah user memasuki channel. jenis BAN ini ada 3, ban NICK, ban IDENT dan ban IP/HOST.

+e : Exempt, artinya memungkinkan user masuk channel walau sudah di set +b/ban. Set +e bisa terhadap NICK, IDENT dan IP/HOST. Perintahnya /raw mode #namachannel +e NICK. Misal /raw mode #help +e kamekz.

+I : Invite Exempt, artinya memudahkan user untuk bergabung jika set channel +i/INVITE ONLY. Set +I bisa terhadap NICK, IDENT dan IP/HOST. Perintahnya /raw mode #namachannel +I NICK. Misal /raw mode #help +I kamekz.

Sekarang masuk kepada UMode/User Mode:

+o : menandakan bahwa user adalah Irc Operator/IRCOP.

+i : menandakan kalau user tidak terlihat/INVISIBLE.

+D : Deaf, user tidak dapat menerima pesan/message dari channel.

+G : Soft Caller Id, blok pesan/message user lain yang tidak berada dalam satu channel dengan user yang set +G, kecuali di /ACCEPT

+g : Caller Id, hanya mengijinkan user yang telah di /ACCEPT untuk dapat mengirimkan pesan secara pribadi/PRIVATE MESSAGE.

+S : menandakan kalau user tersebut terhubung melalui server SSL/Secure Socket Layer.

+r : menandakan kalau user sudah berhasil melakukan IDENTIFY NICK ke servis.

+X : menandakan kalau user tersebut menggunakan SPOOF.

+R : hanya dapat menerima pesan pribadi/PRIVATE MESSAGE dari user yang NICKnya telah teregister dan teridentify.

Silahkan dipahami dan dicoba ^^

