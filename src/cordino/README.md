##Cordino
`Javascript` `Faye` `NodeJS`

================

Cordino is short name for cordinator. This is a server + client module helps to cordinate the communication between ipad controller to the playout in the desktop. future scope is to maintin cordination between different musical instruments like synth with the playout. Cordino based on Pub-Sub communication implemented using Faye.

###Channels
____

#####playout
- `/playout/pub` channel to publish playout details.
- `/playout/sub` channel to listen to the playout.

#####Controller
- `/controller/invitation/pub` channel to publish controllers invitaions to join the playout. 
- `/controller/invitation/sub` channel to listen to the new controller invitations.

#####Filters
- `/filter/highpass/pub` channel to publish highpass filter changes.
- `/filter/highpass/sub` channel to listen to highpass filter changes.
- `/filter/lowpass/pub` channel to publish lowpass filter changes.
- `/filter/lowpass/sub` channel to listen to lowpass filter changes.
- `/filter/bandpass/pub` channel to publish bandpass filter changes.
- `/filter/bandpass/sub` channel to listen to bandpass filter changes.
- `/filter/lowshelf/pub` channel to publish lowshelf filter changes.
- `/filter/lowshelf/sub` channel to listen to lowshelf filter changes.
- `/filter/highshelf/pub` channel to publish highshelf filter changes.
- `/filter/highshelf/sub` channel to listen to highshelf filter changes.
- `/filter/peaking/pub` channel to publish peaking filter changes.
- `/filter/peaking/sub` channel to listen to peaking filter changes.
- `/filter/notch/pub` channel to publish notch filter changes.
- `/filter/notch/sub` channel to listen to notch filter changes.
- `/filter/allpass/pub` channel to publish allpass filter changes.
- `/filter/allpass/sub` channel to listen to allpass filter changes.

