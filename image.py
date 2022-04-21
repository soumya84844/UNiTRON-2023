import csv
import os

file="team.csv"
folder="team"

fields=[]
rows=[]
names=[]
pics=[]

with open(file,'r') as team:
    csv_read=csv.reader(team)
    fields=next(csv_read)
    for row in csv_read:
        rows.append(row)

for i in range(len(rows)):
    names.append(rows[i][0])

for pic in os.listdir(folder):
    pics.append(pic.split('.'))

i=1
for name in names:
    src=''
    dst=''
    for pic in pics:
        if(name.lower()==pic[0].lower()):
            src=folder+'/'+pic[0]+'.'+pic[1]
            dst=folder+'/'+str(i)+'.'+pic[1]
            i=i+1
    os.rename(src,dst)
