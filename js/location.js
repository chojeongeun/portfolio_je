const mapContainer = document.querySelector('#map');
const position = new kakao.maps.LatLng(37.56697058676817, 126.97849940948345);
const mapOption = { center: position, level: 3 };
const map = new kakao.maps.Map(mapContainer, mapOption);
const marker = new kakao.maps.Marker({ position: position });

marker.setMap(map);
