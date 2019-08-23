FROM python:3.6

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1

# create root directory for our project in the container
RUN mkdir /online_server

# Set the working directory to /music_service
WORKDIR /online_server

# Copy the current directory contents into the container at /music_service
ADD . /online_server/

# Install any needed packages specified in requirements.txt
RUN pip3 install -r requirement.txt
