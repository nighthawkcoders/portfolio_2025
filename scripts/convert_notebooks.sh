#!/bin/bash

NOTEBOOKS="$(find _notebooks -name '*.ipynb')"
NOTEBOOK_COUNT=$(echo "$NOTEBOOKS" | wc -l)
CONVERTED_COUNT=0
BAR_WIDTH=30

# Move cursor to the bottom of the terminal (using tput)
tput civis  # Hide cursor

# Iterate through each notebook and update progress bar
for NOTEBOOK in $NOTEBOOKS; do
  CONVERTED_COUNT=$((CONVERTED_COUNT + 1))
  PROGRESS=$((CONVERTED_COUNT * 100 / NOTEBOOK_COUNT))
  FILLED_WIDTH=$((PROGRESS * BAR_WIDTH / 100))
  EMPTY_WIDTH=$((BAR_WIDTH - FILLED_WIDTH))
  BAR="$(printf "█%.0s" $(seq 1 $FILLED_WIDTH))$(printf " %.0s" $(seq 1 $EMPTY_WIDTH))"

  # Move cursor to the bottom of the terminal and clear the previous line
  tput sc
  tput cup $((LINES-2)) 0  # Move cursor to the second last line (for the notebook name)
  echo "Converting notebook: $NOTEBOOK"

  # Print progress bar
  tput cup $((LINES-1)) 0  # Move cursor to the last line (for the progress bar)
  printf "Converting notebooks [%s] %3d%% | %d / %d\n" "$BAR" $PROGRESS $CONVERTED_COUNT $NOTEBOOK_COUNT

  # Convert the notebook
  python3 -c "import sys; from scripts.convert_notebooks import convert_single_notebook; convert_single_notebook(sys.argv[1])" "$NOTEBOOK"
done

# Cleanup and show success
tput cnorm  # Show cursor again
tput cup $((LINES-1)) 0
echo "All notebooks converted successfully!"