# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8

ADD main.py .
WORKDIR /python_harvester
COPY requirements.txt .
RUN apt update && apt dist-upgrade -qy && apt install -qy git python3 python3-pip libffi-dev libxml2-dev libxslt1-dev && /usr/bin/python3 -m pip install --upgrade pip && apt autoremove -qy
RUN /usr/bin/python3 --version && pip3 install --no-cache-dir -r requirements.txt && chmod +x ./*.py

CMD ["python","./main.py"]

