var viewer = new Cesium.Viewer('cesiumContainer', {
    animation : false,
    baseLayerPicker: true,
    fullscreenButton: true,
    geocoder: false,
    homeButton: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    scene3DOnly: true,
    timeline: false,
    imageryProvider: new Cesium.OpenStreetMapImageryProvider({
      url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/',
      fileExtension: 'jpg',
      credit: new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>,<a href="https://github.com/magn01ia" target="_blank">magn01ia</a> ')
    }),
  });

  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(139.7500,36.3000, 50000),
    orientation: {
      heading: 0, 
      pitch: -1.3, 
      roll: 0
    }
});

