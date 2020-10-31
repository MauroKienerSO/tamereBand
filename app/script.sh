# copy files from local machine to remote server
scp -r /c/dev/workspace/tamereBand/app root@116.203.118.198:/opt/tamereband

# build apache image
docker build -t apache-container .

# run apache container
docker run -dit --name tamereband -p 8080:80 apache-container