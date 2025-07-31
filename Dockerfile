FROM node:22-alpine

ARG PROJECT
ENV PROJECT=${PROJECT}

WORKDIR /app/${PROJECT}

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
