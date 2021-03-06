const options = {
    key: 'Fvv8c9wzZYuXRZv9Czmyi0G24uTrhaFH', // Can only be used with my own domain, set on the Windy API manager
    lat: 46.85,
    lon: 2.25,
    zoom: 5,
};

windyInit(options, windyAPI => {
    const { store, map } = windyAPI;
    store.set('overlay', 'waves');

    //  Surf Icon displayed on each spot fetched
    const MARKER = encodeURIComponent(`<svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Flat"><path d="m232 304-48 24-16 104-40 8 13.97-125.75a32.023 32.023 0 0 1 18.81-25.71l.54-.24 54.68-24.3z" fill="#fec9a3"/><path d="m232 304-48 24-22.68-39.7 54.68-24.3z" fill="#f35244"/><path d="m317.4 280h-77.4l40 128-32 8-50.57-137.26a34.731 34.731 0 0 1 32.59-46.74h121.98a36.472 36.472 0 0 1 -34.6 48z" fill="#fec9a3"/><path d="m440 179.84v92.16h-40v-16l-8 8-8-8 16-32v-48l-24-24h-50.67l26.67 80h-88l-10.75-37.61-5.25-18.39-24-16h-24l-14.44 43.33a24.038 24.038 0 0 1 -4.83 8.35l-60.73 68.32-32-24 14-16h-14l8-16h20l28-32 23.95-59.88a32.01 32.01 0 0 1 29.72-20.12h177.77a36.01 36.01 0 0 1 27.34 12.57l29.52 34.44a32.013 32.013 0 0 1 7.7 20.83z" fill="#fec9a3"/><path d="m440 179.84v92.16h-40v-16l-8 8-8-8 16-32v-48l-24-24h-50.67l26.67 80h-88l-10.75-37.61a463.415 463.415 0 0 0 62.7-82.39h59.49a36.01 36.01 0 0 1 27.34 12.57l29.52 34.44a32.013 32.013 0 0 1 7.7 20.83z" fill="#fec093"/><path d="m280 112h-40v-56h64v32a24 24 0 0 1 -24 24z" fill="#fec9a3"/><path d="m304 56h-40l-24 16v-32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16 16 16 0 0 1 -16 16z" fill="#ffb531"/><path d="m317.4 280h-77.4v-48h112a36.472 36.472 0 0 1 -34.6 48z" fill="#f35244"/><path d="m456 383.62a35.912 35.912 0 0 1 -16.44 30.03 184.657 184.657 0 0 1 -67.99 26.97l-245.44 44.4a186.039 186.039 0 0 1 -33.19 2.98c-.83 0-1.66-.01-2.49-.02a186.32 186.32 0 0 1 -37.67-4.36 36.46 36.46 0 0 1 -28.16-28.66 35.054 35.054 0 0 1 -.62-6.58 35.912 35.912 0 0 1 16.44-30.03 184.657 184.657 0 0 1 67.99-26.97l172.26-31.16 73.18-13.24a186.31 186.31 0 0 1 73.35 1.4 36.46 36.46 0 0 1 28.16 28.66 35.054 35.054 0 0 1 .62 6.58z" fill="#60d1e0"/><path d="m456 383.62a35.912 35.912 0 0 1 -16.44 30.03 184.657 184.657 0 0 1 -67.99 26.97l-245.44 44.4a186.039 186.039 0 0 1 -33.19 2.98c-.83 0-1.66-.01-2.49-.02 68.25-25.63 135.08-66.45 190.24-127.76l73.18-13.24a186.31 186.31 0 0 1 73.35 1.4 36.46 36.46 0 0 1 28.16 28.66 35.054 35.054 0 0 1 .62 6.58z" fill="#5ac6d4"/><path d="m488 384a104 104 0 0 1 -104 104h-280a108.068 108.068 0 0 1 69.57-49.97l175.83-38.46a50.079 50.079 0 0 0 19.41-88.94c-5-3.76-8.81-6.63-8.81-6.63h48a80 80 0 0 1 80 80z" fill="#348fd9"/><g fill="#2d7dbf"><path d="m415.23 398.12a90.633 90.633 0 0 1 -57.28 40.52l-128.07 27.19a62.417 62.417 0 0 0 -35.97 22.17h-19.88c1.47-1.93 2.67-3.53 3.37-4.52a78.424 78.424 0 0 1 49.15-33.3l128.03-27.18a74.531 74.531 0 0 0 47.06-33.33z"/><path d="m422.39 383.947-14.861-5.927a73.838 73.838 0 0 0 4.678-18.185l15.877 1.984a89.826 89.826 0 0 1 -5.694 22.128z"/><path d="m390.83 463.38a236.756 236.756 0 0 1 -47.48 13.56 400.2 400.2 0 0 0 -45.71 11.06h-52.18l24.07-7.61 14.6-4.87a410.485 410.485 0 0 1 56.36-14.32 224.725 224.725 0 0 0 44.27-12.62z"/><path d="m405.362 456.662-7.387-14.193c30.424-15.834 47.057-38.077 49.437-66.11l15.942 1.354c-2.874 33.854-22.385 60.417-57.992 78.949z"/></g></g></svg>`);
    const MARKER_ICON_URL = `data:image/svg+xml;utf8,${MARKER}`;

    const spotIcon = L.icon({
        iconUrl: MARKER_ICON_URL,
        iconSize: [35, 35],
        iconAnchor: [17, 17],
        popupAnchor: [2, -15],
    });

    const markers = [];

    const updateIconStyle = () => {
        for (const marker of markers) {
            const icon = marker._icon;
            if (!icon) {
                continue;
            }
            const heading = icon.getAttribute('data-heading');
        }
    };

    // Browse the json file
    fetch('spots.json')
        .then(response => response.json())
        .then(result => result.result)
        .then(result => {
            try {

                for (const spotName of Object.keys(result)) {

                    const spot = result[spotName];

                    const marker = L.marker(spot.location[spot.location.length - 1], {
                        icon: spotIcon,
                    }).addTo(map);

                    markers.push(marker);
                    marker._icon.setAttribute('data-heading', spot.heading);
                    // Message box of the spot
                    marker.bindPopup('\ud83c\udf0a ' + spot.name + '<br> \ud83d\udccd ' + spot.city + '<br> \ud83d\ude97 <a target="_blank" href="https://www.google.com/maps/dir//' + spot.location + '">Y aller');

                    updateIconStyle();
                }
            } catch (error) {
                console.error(`Error querying spots: ${error.message}`);
            }
        })
        .catch(error => {
            console.error(`Error querying spots: ${error.message}`);
        });

    // Handle some events. We need to update the rotation of icons ideally each time
    // leaflet re-renders. them.
    map.on('zoom', updateIconStyle);
    map.on('zoomend', updateIconStyle);
    map.on('viewreset', updateIconStyle);
});
