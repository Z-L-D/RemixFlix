# RemixReel
A Video Player for Fans of FanEdits

--------------------

VTT Extensions

Timelines

* {Layer: {Start Time, End Time, Instruction, Properties: {}}}
    * Layer: VIDEO_{i}, AUDIO_{i}, IMAGE_{i}
        * Description: Used to designate the specific layer to which you are changing properties
        * Example: VIDEO_8 - video layer 8 has been specified to change properties
    * Start Time: {i}:{i}:{i}.{i}
        * Description: Used to specify the start time of a clip segment in the format - hours : minutes : seconds . milliseconds
        * Example: 01:50:02.045 - the clip starts at 1 hour, 50 minutes, 2 seconds and 45 milliseconds
    * End Time: {i}:{i}:{i}.{i}
        * Description: Used to specify the start time of a clip segment in the format - hours : minutes : seconds . milliseconds
        * Example: 00:00:40.167 - the clip ends at 40 seconds and 167 milliseconds
    * Instruction: CLIP, GOTO, PAUSE, EFFECT
        * Description: Used to specify the type of action that will take place
        * CLIP: a basic segment of video or audio with not effects specified.
        * PLAY: play the layer
        * PAUSE: pause the layer
        * EFFECT: perform the specified effect listed in the properies
    * Properties: Various depending on instruction.
        * Description: Used to specify properties that better define the intended action
        * EFFECT
            * JUMP: {i}:{i}:{i}.{i}
                * Description: jump cuts to a specific point in the timeline in the format - hours : minutes : seconds . milliseconds
                * Example: 00:10:08.001 - sends the transport to 10 minutes, 8 seconds, and 1 millisecond
            * OPACITY: Value range [0-100,0-100]
                * Description: commands the layer to change its opacity to from the first value to the second value over the length of the clip
                * Example: [100,10] - fades from 100% opacity to 10% over the duration of the clip
            * WIPE: Position range [ [0-100,0-100],[0-100,0-100] ]
                * Description: commands a wipe transition to execute from the first to the second value, from left to right, and bottom to top
                    * The left most position is 0, the right most position is 100
                    * The bottom most position is 0, the top most position is 100
                * Example: [ [100,0],[40,100] ] - the fade will start 100% to the right and 40% up from the bottom, and will transition to the left most position at 0% and the top most position at 100% over the duration of the clip.
            * SPEED: Value range [0-200,0-200]
                * Description: commands the timeline to change the playback speed from the first value to the second value
                * Example: [100,90] - the playback speed will change from 100% to 90% over the duration of the clip
            * VOLUME: Value range [0-100,0-100]
                * Description: commands the volume of the media to change from the first value to the second value
                * Example: [100,0] - the media volume will decrease from 100 to 0 over the duration of the clip

Full Examples
* {LAYER:"VIDEO_2": {START_TIME:"00:00:00.000", END_TIME:"00:00:02.000", INSTRUCTION:"EFFECT", PROPERTIES: {OPACITY:[0,100]}}}
    * In this example, video layer 2 will fade from black to full opacity during the first 2 seconds in the clip
* {LAYER:"VIDEO_3": {START_TIME:"00:04:55.000", END_TIME:"00:05:00.000", INSTRUCTION:"EFFECT", PROPERTIES: {OPACITY:[100,0], SPEED:[100,85]}}}
    * In this example, video layer 3 will fade from full opacity to black and decrease the speed from 100% to 85% during the last 5 seconds in a clip
    * PLEASE NOTE: Changing the playback speed, will change the duration of a clip. The speed effect will remain active until the full clip has played. In this example, viewers will experience the effect of the speed change for longer than 5 actual seconds. Also note that audio may or may not be adjusted formantly by your browser, possibly resulting in higher or lower pitches in the audio.


--------------------------------------
Depricated below this line

Video Timelines
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:CLIP::]
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:GOTO::TIME::00:00:00.000]
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:GOTO::CUE::1]
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:PAUSE::00:00:00.000] - 0 or 00:00:00.000 = indefinite, any other value is a duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::OPACITY::100::0::00:00:00.000] - start opacity and end opacity, effect duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::WIPE_LR::100::0::00:00:00.000] - left to right - start position, end position, effect duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::WIPE_RL::100::0::00:00:00.000] - right to left - start position, end position, effect duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::WIPE_TB::100::0::00:00:00.000] - top to bottom - start position, end position, effect duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::WIPE_BT::100::0::00:00:00.000] - bottom to top - start position, end position, effect duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::WIPE_CC::100::0::00:00:00.000] - circular clockwise - start position, end position, effect duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::WIPE_CA::100::0::00:00:00.000] - circular anti-clockwise - start position, end position, effect duration
* [VIDEO_0:-:00:00:00.000:-:00:00:00.000:-:EFFECT::SPEED::100::0::00:00:00.000] - change speed of video - external timer?

Image Timelines


Audio Timelines

* [AUDIO_0::VOLUME::100] - 0-100
