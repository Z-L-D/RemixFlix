# RemixReel
A Video Player for Fans of FanEdits

--------------------

VTT Extensions

Video Timelines

* [VIDEO_0::GOTO::TIME::00:00:00.000]
* [VIDEO_0::GOTO::CUE::1]
* [VIDEO_0::PAUSE::00:00:00.000] - 0 or 00:00:00.000 = indefinite, any other value is a duration
* [VIDEO_0::OPACITY::100] - 0-100 - in layer structure for videos, VIDEO_0 is top layer, does not have duration, instant action
* [VIDEO_0::EFFECT::OPACITY::100::0::00:00:00.000] - specific a start opacity and an end opacity and finally a duration between those values, going to 0 on all layers is a black background
* [VIDEO_0::EFFECT::WIPE_LR::100::0::00:00:00.000] - left to right
* [VIDEO_0::EFFECT::WIPE_RL::100::0::00:00:00.000] - right to left
* [VIDEO_0::EFFECT::WIPE_TB::100::0::00:00:00.000] - top to bottom
* [VIDEO_0::EFFECT::WIPE_BT::100::0::00:00:00.000] - bottom to top
* [VIDEO_0::EFFECT::WIPE_CC::100::0::00:00:00.000] - circular clockwise
* [VIDEO_0::EFFECT::WIPE_CA::100::0::00:00:00.000] - circular anti-clockwise 

Image Timelines


Audio Timelines

* [AUDIO_0::VOLUME::100] - 0-100
