// This function reads a raw VTT string and returns an array of cues, 
// where each cue is an object with start, end, and text properties. 
// Note that this is a simple parser and it doesn't handle all of the 
// features of the WebVTT format, like text positioning or styling. It 
// also assumes the timestamps are well formatted.

// In a real-world situation, you may want to consider using a library 
// or package specifically designed to handle VTT files, as they can 
// correctly handle the complete specification of the format and edge 
// cases.

function parseVtt(raw) {
    // Split VTT file into individual lines
    let lines = raw.split("\n");

    // Initialize an array to hold all the cues
    let cues = [];
    let cue = {};

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Skip the WEBVTT header
        if (line.includes("WEBVTT")) {
            continue;
        }

        // Empty line indicates the end of a cue
        if (line.trim() === "") {
            cues.push(cue);
            cue = {};
            continue;
        }

        // Detect cue timings
        if (line.includes("-->")) {
            let [start, end] = line.split(" --> ");
            cue.start = start.trim();
            cue.end = end.trim();
        } else if (cue.start) {
            // Remaining lines are cue text
            if (cue.text) {
                cue.text += "\n" + line;
            } else {
                cue.text = line;
            }
        }
    }

    // Add the last cue if it wasn't already added
    if (cue.start) {
        cues.push(cue);
    }

    return cues;
}


