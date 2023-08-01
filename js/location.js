const mapContainer = document.querySelector('#map');
const [btnBranch1, btnBranch2] = document.querySelectorAll('.branch li');
const position = new kakao.maps.LatLng(37.56697058676817, 126.97849940948345);
const position2 = new kakao.maps.LatLng(37.57534, 126.977128);
const mapOption = { center: position, level: 3 };
const map = new kakao.maps.Map(mapContainer, mapOption);
//마커이미지 등록에 필요한 변수들
const imageSrc = 'img/marker1.png';
const imageSize = new kakao.maps.Size(232, 99);
const imageOption = { offset: new kakao.maps.Point(116, 99) };
//위의 정보로 최종 마커이미지 인스턴스 생성
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

//해당 이미지 인스턴스를 마커생성하는 구문에 추가
const marker = new kakao.maps.Marker({ position: position, image: markerImage }); //마커 인스턴스 생성
marker.setMap(map);

//마커2 정보
const imageSrc2 = 'img/marker2.png';
const imageSize2 = new kakao.maps.Size(232, 99);
const imageOption2 = { offset: new kakao.maps.Point(116, 99) };
const markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2);
const marker2 = new kakao.maps.Marker({ position: position2, image: markerImage2 });
marker2.setMap(map);

btnBranch1.addEventListener('click', () => map.panTo(position));
btnBranch2.addEventListener('click', () => map.panTo(position2));

map.setZoomable(false);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
const mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
