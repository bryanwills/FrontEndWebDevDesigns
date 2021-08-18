import os
import subprocess

def create_dir():

    dir = input("\nPlease enter the name of the directory you want to create: ")
    parent_dir = "/Users/bryanwills/code/examples/"
    path = os.path.join(parent_dir, dir)
    os.mkdir(path)
    os.chdir(path)
    print("Directory '% s' created" % path)
    print(os.getcwd())
    #command to execute
    cmd = 'touch index.html && touch style.css && touch main.js'
    #execute commands to create filesself.
    files_created = subprocess.Popen([cmd], stdout = subprocess.PIPE)
    #files_created = os.system(cmd)
    output = str(files_created)

    print("Directory created: '% s'" % dir)
    print("Files created: '% s'" % files_created)

if __name__ == '__main__':
    create_dir()


# while True:
#     dir = input("\nPlease enter the name of the directory you want to create: ")
#     os.mkdir(dir)
#     try:
#         os.chdir(dir)
#     except:
#         break

#     new_path = dir
#     with open('index.html', 'w') as fp:
#         pass
#     with open('style.css', 'w') as fp:
#         pass
#     with open('main.js', as 'w') as fp:
#         pass
