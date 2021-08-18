import sys
import os
import github
from dotenv import load_dotenv

load_dotenv()

path = os.getenv("FILEPATH")
username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")


def create():
    folderName = str(sys.argv[0])
    os.makedirs(path + str(folderName))
    user = github.Github(username, password).get_user()
    repo = user.create_repo(folderName)
    print("Succesfully created repository {}".format(folderName))


if __name__ == "__main__":
    create()
