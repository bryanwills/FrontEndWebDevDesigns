import sys
import os
from dotenv import load_dotenv

load_dotenv()

path = os.getenv("FILEPATH")


def create():
    dir = input("\nPlease enter the name of the directory you want to create: ")
    parent_dir = "/Users/bryanwills/code/examples/"
    path = os.path.join(parent_dir, dir)
    os.mkdir(path)
    os.chdir(path)
    print("Directory '% s' created" % path)
    print(os.getcwd())


if __name__ == "__main__":
    create()
