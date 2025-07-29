FROM node:22-alpine

ARG PROJECT
ENV PROJECT=${PROJECT}

WORKDIR /app/${PROJECT}

# Copy only the chosen snippet folder
COPY ${PROJECT}/package.json ./
RUN npm install

# Copy all files of the snippet (assumes they are self-contained)
COPY ${PROJECT}/ ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
