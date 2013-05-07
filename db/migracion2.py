#!/usr/bin/python
import MySQLdb
import re
import yaml
import Rx
import HTMLParser

#Conexion
db = MySQLdb.connect(host="localhost", user="alfonso", passwd="alfonsopass",
db = "ljzac_db")

cursor = db.cursor()

#executar

cursor.execute('SELECT title, alias, introtext, `fulltext`, publish_up, catid, id FROM jos_content WHERE state = 1 and id between 10000 and 10050' )

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
        a = re.sub(r'(</?(.|\n)*?>)|(\[/?(.|\n)*?\])', '', introText)
        b = re.sub(r'(</?(.|\n)*?>)|(\[/?(.|\n)*?\])', '', fullText)
        date = str(row[4])
        firstpart= date[0:10]
        secondpart = date[12:16]
        secondpart = secondpart.replace(r':', '')
        date = firstpart #+"-"+ secondpart
        try:
            data = {}
            archivoNuevo = "/home/alfonso/Documentos/ljzac/db/_posts/"+date+"-"+titulo_url+".markdown"
            archivo = file(archivoNuevo,'w')
            categoria = cat.fetchone()
            if isinstance(categoria, tuple):
                data = {'layout' : 'posts', 'title' : row[0], 'twitt' : 'Aqui el twitt', 'categories' : '[\''+categoria[0]+'\']', 'published' : 'true' }
            else:
                data = {'layout' : 'posts', 'title' : row[0], 'twitt' : 'Aqui el twitt', 'categories' : ['General'], 'published' : 'true' }
            archivo.write("---\n")
            print "si"
	    # ESCRIBIR METADATA
            for key in data:
                archivo.write(key + ": " + data[key] + "\n")
            archivo.write("---\n")
	    # ESCRIBIR CONTENIDO
            if "images" in found:
                archivo.write('![alt text](\"www.ljz.mx/%s.jpg\")' % found)
 #           ad = a.decode("latin1")
#	    ae = ad.encode("ascii")
	    print "tambien"
            print type(a)
#            ae = HTMLParser.HTMLParser()
#	    ae = html_parser.unescape(ae)
#	    a.decode('latin1').encode('utf-8')
            lista = list(a)
            for l in lista:
                
                h = HTMLParser.HTMLParser()
                ah = h.unescape(l)
                archivo.write(ah)
#            archivo.write(b+"\n")
            archivo.close()
        except:
            print("hubo excepcion en arch num:"+titulo_url)
            os.remove(archivo)
    except:
        print(x)
print c

print("fin =)")
