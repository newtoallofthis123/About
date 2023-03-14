import json

def get_content():
    with open("package.json", "r") as f:
        package = dict(json.loads(f.read()))
        p = package["version"].split(".")
        if p[2] == '9':
            p[2] = '0'
            p[1] = str(int(p[1]) + 1)
        else:
            p[2] = str(int(p[2]) + 1)
        package['version'] = '.'.join(p)
        to_write = json.dumps(package, indent=2)
        return to_write

def write_content(content):
    with open("package.json", "w") as f:
        f.write(content)
        print("Version updated to: " + content.split('"')[11])
    import os
    print("Deploying to GitHub Pages")
    input("Press enter to continue...")
    os.system("npm run deploy")
    commit_choice = input("Commit and push to github? (y/n): ")
    if commit_choice == 'y':
        msg = input("Commit message: ")
        os.system("git add .")
        os.system("git commit -m \"" + msg + "\"")
        os.system("git push")
        print("Commited to git and pushed to github")
    else:
        print("Not commited to git or pushed to github")

if __name__ == "__main__":
    write_content(get_content())