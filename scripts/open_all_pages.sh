#!/bin/bash
# Linux bash script to bulk open all the pages of the website.
# for visually comparing production against local changes.
#
# Usage:
#   ./scripts/open_all_pages.sh
#       Opens major pages on localhost:3000
#
#   ./scripts/open_all_pages.sh --all
#       Opens all pages on localhost:3000
#
#   ./scripts/open_all_pages.sh <url>
#       Opens major pages on <url>
#
#   ./scripts/open_all_pages.sh --all <url>
#       Opens all pages on <url>
# 
# Default is to open major pages on localhost:3000

OPEN_ALL=false
BASE_URL="http://localhost:3000"

for arg in "$@"; do
    if [ "$arg" == "--all" ]; then
        OPEN_ALL=true
    else
        BASE_URL="$arg"
    fi
done

# Remove trailing slash from BASE_URL if present
BASE_URL="${BASE_URL%/}"

# Array of major site paths
MAJOR_PAGES=(
    "/"
    "/team"
    "/faq"
    "/testimonials"
    "/reports"
    "/cs"
    "/math"
    "/engineering"
    "/science"
    "/robotics"
    "/donate"
)

MINOR_PAGES=(
    "/cs/python1"
    "/cs/python2"
    "/cs/python3"
    "/cs/scratch1"
    "/cs/scratch2"
    "/cs/scratch3"
    "/cs/webdev"
    "/math/math1a"
    "/math/math1b"
    "/math/math2a"
    "/math/math2b"
    "/math/math3a"
    "/math/math3b"
    "/math/math4a"
    "/math/math4b"
    "/math/math5a"
    "/math/math5b"
    "/engineering/engineering1"
    "/engineering/engineering2"
    "/engineering/engineering3"
    "/science/science1"
)

PAGES=("${MAJOR_PAGES[@]}")
if [ "$OPEN_ALL" = true ]; then
    PAGES+=("${MINOR_PAGES[@]}")
fi

# Construct full URLs
URLS=()
for PAGE in "${PAGES[@]}"; do
    URLS+=("${BASE_URL}${PAGE}")
done

echo "Opening pages with base URL: ${BASE_URL}"
echo "Pages to open: ${#URLS[@]}"

# Open all pages in a new chromium window
# The first URL opens the window, and subsequent URLs open as tabs in that window
chromium --new-window "${URLS[@]}" > /dev/null 2>&1 &
