# Stage 1: Install dependencies
FROM node:20-alpine AS dependencies

# Install libc6-compat package required by Next.js for better compatibility
RUN apk add --no-cache libc6-compat

# Set working directory for installing dependencies
WORKDIR /home/app

# Copy package.json and package-lock.json to container
COPY package.json ./
COPY package-lock.json ./

# Install npm dependencies
RUN npm i

# Stage 2: Build the Next.js application
FROM node:20-alpine AS builder

# Set working directory for building the application
WORKDIR /home/app

# Copy node_modules from the 'dependencies' stage
COPY --from=dependencies /home/app/node_modules ./node_modules

# Copy the rest of the application files
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Set NODE_ENV environment variable
ARG NODE_ENV
ENV NODE_ENV="${NODE_ENV}"

# Build the Next.js application
RUN npm run build

# Stage 3: Create a lightweight runner image
FROM node:20-alpine AS runner

# Set working directory for the runner stage
WORKDIR /home/app

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Copy built Next.js application files from the 'builder' stage
COPY --from=builder /home/app/.next/standalone ./standalone
COPY --from=builder /home/app/public /home/app/standalone/public
COPY --from=builder /home/app/.next/static /home/app/standalone/.next/static

# Expose port 3000
EXPOSE 3000

# Set PORT environment variable
ENV PORT 3000

# Command to start the Next.js application
CMD ["node", "./standalone/server.js"]
