import os

print("Counting lines of code...")
print("calling tokei...")
print("ignoring node_modules, build, json, xml, txt, svg")
os.system('tokei -e ./node_modules -e ./build -e "*.json" -e "*.xml" -e "*.txt" -e "*.svg')
