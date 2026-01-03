#!/bin/bash

# Production Deployment Script for jaykumarpatil.github.io
# This script builds the Angular app and copies the output to docs folder

set -e  # Exit on any error

echo "🚀 Starting production deployment..."

# Step 1: Remove existing docs folder
echo "📁 Removing existing docs folder..."
rm -rf docs

# Step 2: Build the Angular application
echo "🔨 Building Angular application..."
npm run build

# Step 3: Copy build output to docs folder
echo "📋 Copying build output to docs folder..."
cp -r dist/jaykumarpatil/. docs/

echo "✅ Production deployment complete!"
echo "📂 Output available in: docs/"
