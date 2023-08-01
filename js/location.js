const mapContainer = document.querySelector('#map');
const position = new kakao.maps.LatLng(37.56697058676817, 126.97849940948345);
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
