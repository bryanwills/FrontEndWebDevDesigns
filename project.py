#!/usr/bin/env python
from pathlib import Path
import time
import os


def main():
    project_name = input("Enter project name :")
    baseurl = "/Users/bryanwills/code/examples"
    print("Creating project structure...")
    time.sleep(1.5)
    project_path = os.path.join(baseurl, project_name)
    print("Creating project directory...")
    os.makedirs(project_path)
    time.sleep(1.5)
    print("Project directory created!")
    time.sleep(1.5)
    print("Creating files for project...")
    os.chdir(project_path)
    time.sleep(1.5)
    print("Creating project image directory...")
    os.mkdir("img", 0o0755)
    time.sleep(1.5)
    html_file = open('index.html', 'w')
    html_file.write('''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

<script src="main.js"></script>
</body>
</html>''')
    html_file.close()
    css_file = open('style.css', 'w')
    css_file.close()
    js_file = open('main.js', 'w')
    js_file.close()
    time.sleep(2)
    print("Created index.html")
    time.sleep(1)
    print("Created style.css")
    time.sleep(1)
    print("Created main.js")
    time.sleep(1)


if __name__ == '__main__':
    main()
