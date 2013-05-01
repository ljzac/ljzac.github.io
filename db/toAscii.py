#!/usr/bin/python

import subprocess
import yaml
import Rx

from os import listdir
from os.path import isfile,join

mypath = "/home/alfonso/Documentos/ljzac/db/_posts/"
files = [ f for f in listdir(mypath) if isfile(join(mypath, f)) ]

print len(files)

for f in files:
    a = f
    b = subprocess.Popen("iconv -c -f utf-8 -t ascii "+join(mypath,f)+" > "+join(mypath,a)+".markdown", shell =True )
    c = subprocess.Popen("rm -f "+f, shell=True)
