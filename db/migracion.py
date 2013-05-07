#!/usr/bin/python
# -*- coding: utf-8 -*-
import MySQLdb
import re
import yaml
import Rx

#Conexion
db = MySQLdb.connect(host="localhost", user="alfonso", passwd="alfonsopass",
db = "ljzac_db")

cursor = db.cursor()

#executar

cursor.execute('SELECT title, alias, introtext, `fulltext`, publish_up, catid, id FROM jos_content WHERE state = 1' )

numrows = int(cursor.rowcount)
print "Num ROws!!! -->>> %d" % numrows

c = 1
for x in range(0, numrows):
    c = c +1
    try:
        row = cursor.fetchone()
        cat = db.cursor()
        cat.execute('SELECT title FROM jos_categories WHERE id = ' + str(row[5]))
        titulo_url = str(row[1])
        introText = str(row[2])
        img = re.search(r'<img\ssrc="(.*)\.\w\w\w"\s', introText)
        found = 'hola'
        if img:
            found = img.group(1)

        fullText = str(row[3])
        a = re.sub(r'(</?(.|\n)*?>)|(\[/?(.|\n)*?\])', '', fullText)
        b = re.sub(r'(</?(.|\n)*?>)|(\[/?(.|\n)*?\])', '', introText)
        date = str(row[4])
        firstpart= date[0:10]
        secondpart = date[12:16]
        secondpart = secondpart.replace(r':', '')
        date = firstpart #+"-"+ secondpart
        try:
            archivo = open('/home/alfonso/Documentos/ljzac/db/_posts/'+date+'-'+titulo_url, 'w')
            archivo.write("---\n")
            archivo.write("layout: posts\n")
            archivo.write("title: " + row[0] + "\n")
            archivo.write("twitt: Aqui Twitt \n")
            categoria = cat.fetchone()
            if isinstance(categoria, tuple):
                archivo.write("categories: [\'%s\'] \n" %(categoria[0],))
            else:
                archivo.write("categories: [\'General\']\n")
            archivo.write("published: true\n")
            archivo.write("---\n\n\n")
            if "images" in found:
                archivo.write('![alt text](\"www.ljz.mx/%s.jpg\")' % found)
            archivo.write(a+"\n")
            archivo.write(b+"\n")
            archivo.close()
#        print(x)
        except:
            print(x)
    except:
        print(x)
print c


print("fin =)")
