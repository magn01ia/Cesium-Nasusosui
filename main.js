var viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
  //terrainProvider: new Cesium.CesiumTerrainProvider({
    //url: Cesium.IonResource.fromAssetId(969835),
  //}),
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: true,
  geocoder: false,
  homeButton: false,
  navigationHelpButton: false,
  sceneModePicker: false,
  timeline: false,
  imageryProvider: new Cesium.OpenStreetMapImageryProvider({
    url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/',
    fileExtension: 'jpg',
    credit: new Cesium.Credit('<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>,<a href="https://github.com/magn01ia" target="_blank">magn01ia</a> ')
  }),
});
Cesium.GeoJsonDataSource.clampToGround = true; 

///国土数値情報の河川中心線
var river = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("./data/river.geojson",{
  stroke:Cesium.Color.AQUA.withAlpha(0.5),
  strokeWidth:2
}));

///那須疎水ラインデータ
var nasusosui = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("./data/nasusosui.geojson",{
  stroke:Cesium.Color.DODGERBLUE.withAlpha(0.9),
  strokeWidth:5
}));

viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(140.0000,36.6000, 20000),
    orientation: {
      heading: 0, 
      pitch: -0.5, 
      roll: 0
    }
});
