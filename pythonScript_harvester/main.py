# Import the os module
import os
import subprocess
import json

# Print the current working directory
print("Current working directory: {0}".format(os.getcwd()))

# Change the current working directory
os.chdir('C:/Users/matan/theharvester')

# Print the current working directory
print("Current working directory: {0}".format(os.getcwd()))
cmd = "theharvester.py -d linkedin.com -l 500 -b bing -f domain_result"
f = open("result.txt", "w")
d = json.loads(subprocess.check_output(cmd, shell=True))
result=subprocess.Popen(cmd, shell=True, stdout=f)

print(d)

