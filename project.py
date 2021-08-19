#!/usr/bin/env python
from pathlib import Path
import os


def main():
    project_name = input("Enter project name :")
    baseurl = "/Users/bryanwills/code/examples"
    print("Creating project structure...")
    project_path = os.path.join(baseurl, project_name)
    print("Creating project directory...")
    os.makedirs(project_path)
    print("Project directory created!")
    print("\n")
    print("Creating files for project...")
    os.chdir(project_path)
    html_file = open('index.html', 'w')
    html_file.write('''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>''')
    html_file.close()
    css_file = open('style.css', 'w')
    css_file.close()
    js_file = open('main.js', 'w')
    js_file.close()
    print("Created index.html")
    print("Created style.css")
    print("Created main.js")


if __name__ == '__main__':
    main()
