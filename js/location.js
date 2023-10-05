const mapContainer = document.querySelector('#map');
const [btnBranch1, btnBranch2] = document.querySelectorAll('.branch li');
const position = new kakao.maps.LatLng(37.43827950685416, 127.00570633235834);
const position2 = new kakao.maps.LatLng(37.6419861074858, 127.07741813461034);
const mapOption = { center: position, level: 3 };
const map = new kakao.maps.Map(mapContainer, mapOption);

const imageSrc = 'img/marker1.png';
const imageSize = new kakao.maps.Size(232, 99);
const imageOption = { offset: new kakao.maps.Point(116, 99) };

const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

const marker = new kakao.maps.Marker({ position: position, image: markerImage });
marker.setMap(map);

const imageSrc2 = 'img/marker2.png';
const imageSize2 = new kakao.maps.Size(232, 99);
const imageOption2 = { offset: new kakao.maps.Point(116, 99) };
const markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2);
const marker2 = new kakao.maps.Marker({ position: position2, image: markerImage2 });
marker2.setMap(map);

btnBranch1.addEventListener('click', () => map.panTo(position));
btnBranch2.addEventListener('click', () => map.panTo(position2));

map.setZoomable(false);

const mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

const traffic = document.querySelectorAll('.traffic li');

traffic.addEventListener('click', () => {
	traffic.classList.toggle('on');
	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
});
