'use strict';

/**
 * @ngdoc function
 * @name T6SLiveVideoClientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the T6SLiveVideoClientApp
 */
angular.module('T6SLiveVideoClientApp')
  .controller('HomeCtrl', ["$scope", function ($scope) {
    $scope.videoDevices = null;
    $scope.selectedVideoDevice = {"id" : -1};

    if (typeof MediaStreamTrack === 'undefined') {
      console.log('This browser does not support MediaStreamTrack.');
      $scope.videoDevices.push({
        id: 'default',
        label: 'Default'
      });
    } else {

      MediaStreamTrack.getSources(function (sourceInfos) {
        $scope.videoDevices = [];
        for (var i = 0; i !== sourceInfos.length; ++i) {
          var sourceInfo = sourceInfos[i];
          if (sourceInfo.kind === 'video') {
            var videoDeviceDesc = {
              "id" : sourceInfo.id,
              "label" : sourceInfo.label || 'camera ' + ($scope.videoDevices.length + 1)
            }
            $scope.videoDevices.push(videoDeviceDesc);
          }
        }
      });
    }

    $scope.connectToLive = function(selectedVideoDevice) {
      //default media options
      var mediaOptions = {
        audio: false,
        video: true
      };
      if (selectedVideoDevice && selectedVideoDevice.id) {
        $scope.selectedVideoDevice = selectedVideoDevice;
        mediaOptions.video = {
          mandatory: [
            { sourceId: selectedVideoDevice.id }
          ]
        };
      }

      var webrtc = new SimpleWebRTC({
        localVideoEl: 'localVideo',
        remoteVideosEl: '',
        autoRequestMedia: true,
        //use the media options to pass constraints for getUserMedia requests
        media: mediaOptions
      });
      /*
       var webrtc = new SimpleWebRTC({
       // the id/element dom element that will hold "our" video
       localVideoEl: 'localVideo',
       // the id/element dom element that will hold remote videos
       remoteVideosEl: '',
       // immediately ask for camera access
       autoRequestMedia: true
       });
       */

      // mute
      webrtc.mute();

      // we have to wait until it's ready
      webrtc.on('readyToCall', function () {
        // you can name it anything
        webrtc.joinRoom('t6s-test');
      });

      // local p2p/ice failure
      webrtc.on('iceFailed', function (peer) {
        var pc = peer.pc;
        console.log('had local relay candidate', pc.hadLocalRelayCandidate);
        console.log('had remote relay candidate', pc.hadRemoteRelayCandidate);
      });

      // remote p2p/ice failure
      webrtc.on('connectivityError', function (peer) {
        var pc = peer.pc;
        console.log('had local relay candidate', pc.hadLocalRelayCandidate);
        console.log('had remote relay candidate', pc.hadRemoteRelayCandidate);
      });
    };
  }]);
