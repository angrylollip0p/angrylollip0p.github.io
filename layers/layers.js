var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_locations_1 = new ol.format.GeoJSON();
var features_locations_1 = format_locations_1.readFeatures(json_locations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_locations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_locations_1.addFeatures(features_locations_1);
var lyr_locations_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_locations_1, 
                style: style_locations_1,
                interactive: true,
                title: '<img src="styles/legend/locations_1.png" /> locations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_locations_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_locations_1];
lyr_locations_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'film': 'film', });
lyr_locations_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'film': 'TextEdit', });
lyr_locations_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'film': 'no label', });
lyr_locations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});