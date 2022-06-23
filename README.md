# Cesium-Nasusosui

那須疎水のWEBMAP、Cesium版  
[Cesium-Nasusoui Demo](https://magn01ia.github.io/Cesium-Nasusosui/)    

## 概要  
以前からLeafletで作成中の那須疎水WEBマップをCesiumに実装したものです。  
掲載データはLeaflet版のものを流用しています。  
標高タイルをせめて地理院DEMが使えれば取水口からの助走区間の部分など検証できそう。  
Leaflet版同様疎水データは作成中の段階なので順次更新していきます。  
ディフォルトのアクセストークンはセットしていません。

## 掲載データ  
詳しくはこちら→[Leaflet-Nasusoui](https://github.com/magn01ia/Nasusosui)

## 更新履歴
20220623  
地形データとしてCesium terrainを使用するようにしました。  
流路データをgeojsonで読み込むよう変更しました。  
20211222  
CDNでCesium導入  
作成中の流路データをkmlで追加
