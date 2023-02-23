#/bin/bash

scp -r -i ~/.ssh/aws.pem  build ec2-user@ec2-35-180-42-91.eu-west-3.compute.amazonaws.com:~/my_app/