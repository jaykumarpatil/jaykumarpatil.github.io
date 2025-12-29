# Stage 1: Build
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Production
FROM node:22-alpine AS runner

# Set working directory
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S angular -u 1001

# Install PM2 globally
RUN npm install -g pm2

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production --ignore-scripts && \
    chown -R angular:nodejs /app

# Copy built dist from builder stage
COPY --from=builder --chown=angular:nodejs /app/dist ./dist

# Copy PM2 ecosystem config
COPY --chown=angular:nodejs ecosystem.config.cjs ./

# Switch to non-root user
USER angular

# Expose the port (default Angular SSR port is 4000)
EXPOSE 4000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:4000/ || exit 1

# Start the SSR server with PM2
CMD ["pm2-runtime", "ecosystem.config.cjs"]