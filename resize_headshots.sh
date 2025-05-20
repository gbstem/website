#!/bin/bash

# Script to resize all headshot images to a maximum width of 300px
# Using macOS built-in sips command (no need to install additional software)
# Preserves aspect ratio and only resizes images that are larger than 300px wide

# Path to headshots directory
HEADSHOTS_DIR="./src/images/headshots"

# Check if running on macOS
if [[ $(uname) != "Darwin" ]]; then
    echo "Error: This script is designed for macOS which has the built-in sips command."
    exit 1
fi

# Check if the headshots directory exists
if [ ! -d "$HEADSHOTS_DIR" ]; then
    echo "Error: Headshots directory not found at $HEADSHOTS_DIR"
    exit 1
fi

echo "Starting to resize headshot images..."
echo "Target directory: $HEADSHOTS_DIR"

# Create backup directory
BACKUP_DIR="${HEADSHOTS_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "Created backup directory: $BACKUP_DIR"

# Copy original files to backup directory
cp "$HEADSHOTS_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG} "$BACKUP_DIR/" 2>/dev/null || true
echo "Original images backed up"

# Counter for resized images
count=0
total=0

# Process each image in the headshots directory
for img in "$HEADSHOTS_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    # Skip if no matches found (in case the glob doesn't match any files)
    [ -e "$img" ] || continue
    
    # Increment total counter
    total=$((total+1))
    
    # Get the image filename
    filename=$(basename "$img")
    echo "Processing $filename..."
    
    # Get current image width
    width=$(sips -g pixelWidth "$img" | grep pixelWidth | awk '{print $2}')
    
    # Only resize if the image is wider than 300px
    if [ $width -gt 300 ]; then
        echo "  Resizing $filename from ${width}px to 300px width..."
        
        # Resize the image to 300px width while maintaining aspect ratio
        sips --resampleWidth 300 "$img" &>/dev/null
        
        count=$((count+1))
        echo "  ✅ Successfully resized $filename"
    else
        echo "  ✓ $filename is already ${width}px wide, no resize needed"
    fi
done

echo "----------------------------------------"
echo "Resize complete! Resized $count out of $total images to max width of 300px"
echo "Original images backed up to $BACKUP_DIR"
echo "Resized images are located in $HEADSHOTS_DIR"
