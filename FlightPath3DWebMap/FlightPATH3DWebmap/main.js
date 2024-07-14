
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MjAzMmZiZS02ZWE4LTQ4ZmMtODVkZC1kNDU3NGQyZDU5NGEiLCJpZCI6MTc2MTU2LCJpYXQiOjE3MjA4NzA3MTl9.oCsjFRvXF-eZfl8qPTL2rS-ARu1sUEgvE8uMrjkdbB8';


// Create the Cesium Viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
        credit: 'Map tiles by Stadia Maps, under CC BY 4.0. Data by OpenStreetMap, under ODbL.',
    }),
    terrain: Cesium.Terrain.fromWorldTerrain(),
    animation: false,
    timeline: false,
    fullscreenButton: false,
    homeButton: false,
    sceneModePicker: false,
    baseLayerPicker: true,
    geocoder: false,
    navigationHelpButton: false,
    infoBox: false,
    selectionIndicator: false
    });

// Set the initial view to the specified coordinates
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(8.377847, 46.991973, 10000) // Adjust the height (last parameter) as needed
});

// Function to load KML files from a specified folder with a specified color
async function loadKmlFiles(kmlFiles, color) {
    const dataSource = new Cesium.KmlDataSource();

    for (const kmlUrl of kmlFiles) {
        try {
            const loadedDataSource = await Cesium.KmlDataSource.load(kmlUrl);
            loadedDataSource.entities.values.forEach(entity => {
                // Check if the entity is a polyline and set its color
                if (entity.polyline) {
                    entity.polyline.material = color;
                    entity.polyline.width = 2;
                }
                // Add the entity to the main data source
                dataSource.entities.add(entity);
            });
        } catch (error) {
            console.error(`Error loading KML file ${kmlUrl}:`, error);
        }
    }

    return dataSource;
}
const kmlFiles_BuochsAR = [
    './FlightRecordings_KML/BUOCHS_AR/01_Buochs_AR_2024-06-18-12-59.kml',
    './FlightRecordings_KML/BUOCHS_AR/04_BuochsAR2024-07-03-11-01.kml',
    './FlightRecordings_KML/BUOCHS_AR/05_Buochs_AR2024-07-03-13-44.kml'
    // Add more KML file paths here
];
const kmlFiles_Buochs= [
    './FlightRecordings_KML/BUOCHS/02_Buochs2024-06-24-08-46.kml',
    './FlightRecordings_KML/BUOCHS/03_BuochsExport 2024-07-02-12-13.kml',
    './FlightRecordings_KML/BUOCHS/06_Buochs2024-07-08-16-58.kml',
    './FlightRecordings_KML/BUOCHS/07_Buochs2024-07-09-16-38.fltrec.kml'
    // Add more KML file paths here
];

const kmlFiles_GrenchenAR = [
    './FlightRecordings_KML/GRENCHEN_AR/02_Gren_AR_2024-06-24-09-04.kml',
    './FlightRecordings_KML/GRENCHEN_AR/03_Gren_AR_2024-07-02.kml',
    './FlightRecordings_KML/GRENCHEN_AR/06_GrenchAR2024-07-08-17-10.kml',
    './FlightRecordings_KML/GRENCHEN_AR/07_GrenchAR2024-07-09-16-29.kml'
    // Add more KML file paths here
];

const kmlFiles_Grenchen = [
    './FlightRecordings_KML/GRENCHEN/01_Gren2024-06-18-13-11.kml',
    './FlightRecordings_KML/GRENCHEN/04_Grench2024-07-03-10-43.kml',
    './FlightRecordings_KML/GRENCHEN/05_Grench2024-07-03-14-05.kml'
    // Add more KML file paths here
];

// Load KML files for all groups
const buochsDataSources = Promise.all([
    loadKmlFiles(kmlFiles_BuochsAR, Cesium.Color.RED),
    loadKmlFiles(kmlFiles_Buochs, Cesium.Color.BLUE)
]);

const grenchenDataSources = Promise.all([
    loadKmlFiles(kmlFiles_GrenchenAR, Cesium.Color.RED),
    loadKmlFiles(kmlFiles_Grenchen, Cesium.Color.BLUE)
]);

// Function to update the dropdown menu based on the selected location
function updateDropdown(location) {
    const layerSelect = document.getElementById('layerSelect');
    layerSelect.innerHTML = `
        <option value="none">Hide All Layers</option>
        <option value="group1">Flight Paths with AR</option>
        <option value="group2">Flight Paths without AR</option>
        <option value="both">Show Both Layers</option>
    `;

    // Reset data sources   
    viewer.dataSources.removeAll();

    // Load the corresponding data sources
    let dataSourcesPromise;
    if (location === 'buochs') {
        dataSourcesPromise = buochsDataSources;
    } else {
        dataSourcesPromise = grenchenDataSources;
    }

    dataSourcesPromise.then(([dataSource1, dataSource2]) => {
        layerSelect.addEventListener('change', function() {
            viewer.dataSources.removeAll();
            switch (this.value) {
                case 'group1':
                    viewer.dataSources.add(dataSource1);
                    viewer.zoomTo(dataSource1);
                    break;
                case 'group2':
                    viewer.dataSources.add(dataSource2);
                    viewer.zoomTo(dataSource2);
                    break;
                case 'both':
                    viewer.dataSources.add(dataSource1);
                    viewer.dataSources.add(dataSource2);
                    viewer.zoomTo(dataSource1);
                    break;
                default:
                    // Do nothing for 'none' as all layers are already removed
                    break;
            }
        });

        // Initial setup: show both layers by default
        layerSelect.value = 'both';
        viewer.dataSources.add(dataSource1);
        viewer.dataSources.add(dataSource2);
        viewer.zoomTo(dataSource1);
    }).catch(error => {
        console.error('Error loading KML files:', error);
    });
}

// Event listeners for location checkboxes
document.querySelectorAll('input[name="location"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            updateDropdown(this.value);
        }
    });
});

// Initial setup for Buochs
updateDropdown('buochs');