FROM node:12.16.2
RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@latest

RUN mkdir -p /home && \
  mkdir -p /app

ENV HOME=/home/app

USER root
COPY package*.json $HOME/
#RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/
RUN npm install 

USER root
COPY . $HOME/
RUN chown -R app:app $HOME/*

#EXPOSE 3333:3333
#CMD ["npm", "run", "start"]