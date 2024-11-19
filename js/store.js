var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.49580188586962, 127.0415920333647), // 지도의 중심좌표표
        level: 13 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    // 서울지역
    {
        title: '백미당 공방', address: '서울특별시 강남구 언주로 149 2층', call: '02-2195-6842', 
        time: {
            mon: '09:30 - 21:30',
            tue: '09:30 - 21:30',
            wed: '09:30 - 21:30',
            thu: '09:30 - 21:30',
            fri: '09:30 - 21:30',
            sat: '10:00 - 21:30',
            sun: '10:00 - 21:30'
        },

        latlng: new kakao.maps.LatLng(37.5206187, 127.0334161)
    },
    {
        title: '롯데월드몰점', address: '서울특별시 송파구 올림픽로 300 5층', call: '02-3213-4518', 
        time: {
            mon: '10:30 - 22:00',
            tue: '10:30 - 22:00',
            wed: '10:30 - 22:00',
            thu: '10:30 - 22:00',
            fri: '10:30 - 22:00',
            sat: '10:30 - 22:00',
            sun: '10:30 - 22:00'
        },
        
        latlng: new kakao.maps.LatLng(37.5136603, 127.1030245)
    },
    {
        title: '롯데백화점 잠실점', address: '서울특별시 송파구 올림픽로 240 11층', call: '02-411-6083', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.5120232, 127.09943)
    },
    {
        title: '현대백화점 무역센터점', address: '서울특별시 강남구 테헤란로 517 지하1층', call: '02-3467-6568', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:00',
            sat: '10:30 - 20:00',
            sun: '10:30 - 20:00'
        },
        
        latlng: new kakao.maps.LatLng(37.5086154, 127.0597808)
    },
    {
        title: '롯데백화점 강남점', address: '서울특별시 강남구 도곡로 401 지하1층', call: '02-512-5825', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:00',
            sat: '10:30 - 20:00',
            sun: '10:30 - 20:00'
        },

        latlng: new kakao.maps.LatLng(37.4969375, 127.0533459)
    },
    {
        title: '현대백화점 천호점', address: '서울특별시 강동구 천호대로 1005 지하1층', call: '02-2225-8861', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.538851, 127.124463)
    },
    {
        title: '롯데백화점 노원점', address: '서울특별시 노원구 동일로 1414 지하1층', call: '02-950-2404', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:00',
            sat: '10:30 - 20:00',
            sun: '10:30 - 20:00'
        },
        
        latlng: new kakao.maps.LatLng(37.654819, 127.0613369)
    },
    {
        title: '종로타워점', address: '서울특별시 종로구 종로 51 지하2층', call: '02-722-5825', 
        time: {
            mon: '11:30 - 20:30',
            tue: '11:30 - 20:30',
            wed: '11:30 - 20:30',
            thu: '11:30 - 20:30',
            fri: '11:30 - 20:30',
            sat: '휴무',
            sun: '휴무',
            break: '16:00 - 17:00'
        },

        latlng: new kakao.maps.LatLng(37.5704929, 126.9837758)
    },
    {
        title: '타임스퀘어점', address: '서울특별시 영등포구 영종로 15 지하1층', call: '02-762-5825', 
        time: {
            mon: '10:30 - 22:00',
            tue: '10:30 - 22:00',
            wed: '10:30 - 22:00',
            thu: '10:30 - 22:00',
            fri: '10:30 - 22:00',
            sat: '10:30 - 22:00',
            sun: '10:30 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5170751, 126.9033411)
    },
    {
        title: '디큐브시티점', address: '서울특별시 구로구 경인로 662 1층', call: '02-2210-9187', 
        time: {
            mon: '11:00 - 21:00',
            tue: '11:00 - 21:00',
            wed: '11:00 - 21:00',
            thu: '11:00 - 21:00',
            fri: '11:00 - 21:30',
            sat: '11:00 - 21:30',
            sun: '11:00 - 21:30'
        },

        latlng: new kakao.maps.LatLng(37.5088862, 126.8900343)
    },
    {
        title: '마리오아울렛 구로점', address: '서울특별시 금천구 디지털로9길 23 마리오아울렛 1관 1층', call: '02-6747-0009', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:30',
            sun: '10:30 - 21:30'
        },

        latlng: new kakao.maps.LatLng(37.4781885, 126.8870913)
    },
    {
        title: '현대시티몰 가든파이브점', address: '서울특별시 송파구 충민로 66 아울렛관 5층', call: '02-2673-2597', 
        time: {
            mon: '10:30 - 20:30',
            tue: '10:30 - 20:30',
            wed: '10:30 - 20:30',
            thu: '10:30 - 20:30',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.4782043, 127.1243279)
    },
    {
        title: 'SK증권 빌딩 여의도점', address: '서울특별시 영등포구 국제금융로8길 31', call: '02-6484-5135', 
        time: {
            mon: '09:00 - 21:00',
            tue: '09:00 - 21:00',
            wed: '09:00 - 21:00',
            thu: '09:00 - 21:00',
            fri: '09:00 - 21:00',
            sat: '12:00 - 20:00',
            sun: '12:00 - 20:00'
        },

        latlng: new kakao.maps.LatLng(37.5198562, 126.9279038)
    },
    {
        title: '홍대점', address: '서울특별시 마포구 동교동 159-5 1층', call: '02-2250-7790', 
        time: {
            mon: '11:00 - 22:30',
            tue: '11:00 - 22:30',
            wed: '11:00 - 22:30',
            thu: '11:00 - 22:30',
            fri: '11:00 - 22:30',
            sat: '11:00 - 22:30',
            sun: '11:00 - 22:30'
        },

        latlng: new kakao.maps.LatLng(37.5568942, 126.9233194)
    },
    {
        title: '광화문점', address: '서울특별시 종로구 종로3길 17', call: '02-2251-8340', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(37.5710468, 126.97883)
    },
    {
        title: '김포공항점', address: '서울특별시 강서구 하늘길 112 국내선 4층', call: '02-2663-2677', 
        time: {
            mon: '08:00 - 20:00',
            tue: '08:00 - 20:00',
            wed: '08:00 - 20:00',
            thu: '08:00 - 20:00',
            fri: '08:00 - 20:00',
            sat: '08:00 - 20:00',
            sun: '08:00 - 20:00'
        },

        latlng: new kakao.maps.LatLng(37.5567557, 126.8084734)
    },
    {
        title: '강남358타워점', address: '서울특별시 강남구 강남대로 358 1층', call: '02-558-1230', 
        time: {
            mon: '08:00 - 21:30',
            tue: '08:00 - 21:30',
            wed: '08:00 - 21:30',
            thu: '08:00 - 21:30',
            fri: '08:00 - 21:30',
            sat: '10:00 - 21:30',
            sun: '10:00 - 21:30'
        },

        latlng: new kakao.maps.LatLng(37.4949459, 127.0297871)
    },
    {
        title: '한남점', address: '서울특별시 용산구 독서당로 81 로얄샤르망 2층 201호', call: '02-3785-0700', 
        time: {
            mon: '11:00 - 21:00',
            tue: '11:00 - 21:00',
            wed: '11:00 - 21:00',
            thu: '11:00 - 21:00',
            fri: '11:00 - 21:00',
            sat: '11:00 - 21:00',
            sun: '11:00 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.5344326, 127.0093382)
    },
    {
        title: '을지로점', address: '서울특별시 중구 남대문로9길 24', call: '02-3789-3500', 
        time: {
            mon: '09:00 - 21:00',
            tue: '09:00 - 21:00',
            wed: '09:00 - 21:00',
            thu: '09:00 - 21:00',
            fri: '09:00 - 21:00',
            sat: '휴무',
            sun: '휴무'
        },

        latlng: new kakao.maps.LatLng(37.5670698, 126.9811915)
    },
    {
        title: '삼청점', address: '서울특별시 종로구 삼청로 48', call: '02-720-8947', 
        time: {
            mon: '10:00 - 20:00',
            tue: '10:00 - 20:00',
            wed: '10:00 - 20:00',
            thu: '10:00 - 20:00',
            fri: '10:00 - 20:00',
            sat: '10:00 - 20:00',
            sun: '10:00 - 20:00'
        },

        latlng: new kakao.maps.LatLng(37.5800908, 126.9802258)
    },
    {
        title: '서송타워점', address: '서울특별시 동작구 동작대로 137', call: '02-593-1964', 
        time: {
            mon: '10:00 - 20:00',
            tue: '10:00 - 20:00',
            wed: '10:00 - 20:00',
            thu: '10:00 - 20:00',
            fri: '10:00 - 20:00',
            sat: '10:00 - 20:00',
            sun: '10:00 - 20:00'
        },

        latlng: new kakao.maps.LatLng(37.4889416, 126.9819028)
    },
    {
        title: '용산아이파크점', address: '서울특별시 용산구 한강대로23길 55 7층', call: '02-2012-1611', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5297133, 126.9647528)
    },
    {
        title: 'IFC몰점', address: '서울특별시 영등포구 국제금융로 10 지하1층 152호', call: '02-6137-5130', 
        time: {
            mon: '10:00 - 22:00',
            tue: '10:00 - 22:00',
            wed: '10:00 - 22:00',
            thu: '10:00 - 22:00',
            fri: '10:00 - 22:00',
            sat: '10:00 - 22:00',
            sun: '10:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5251644, 126.9255491)
    },
    {
        title: '강남고속터미널점', address: '서울특별시 서초구 신반포로 194 1층', call: '02-532-1964', 
        time: {
            mon: '09:00 - 21:00',
            tue: '09:00 - 21:00',
            wed: '09:00 - 21:00',
            thu: '09:00 - 21:00',
            fri: '09:00 - 21:00',
            sat: '09:00 - 21:00',
            sun: '09:00 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.5053147, 127.0057824)
    },
    {
        title: '더현대서울점', address: '서울특별시 영등포구 여의대로 108 7층', call: '02-3277-0662', 
        time: {
            mon: '10:30 - 22:00',
            tue: '10:30 - 22:00',
            wed: '10:30 - 22:00',
            thu: '10:30 - 22:00',
            fri: '10:30 - 22:00',
            sat: '10:30 - 22:00',
            sun: '10:30 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5257361, 126.9282004)
    },
    {
        title: '딜리버리샵 성산점', address: '서울특별시 마포구 월드컵북로 126 1층', call: '', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.5643625, 126.9130838)
    },
    {
        title: '은평성모병원점', address: '서울특별시 은평구 통일로 1021 93-12 지하2층', call: '', 
        time: {
            mon: '08:00 - 20:00',
            tue: '08:00 - 20:00',
            wed: '08:00 - 20:00',
            thu: '08:00 - 20:00',
            fri: '08:00 - 20:00',
            sat: '휴무',
            sun: '휴무'
        },

        latlng: new kakao.maps.LatLng(37.6335822, 126.9161092)
    },
    {
        title: '현대미아점', address: '서울특별시 성북구 동소문로 315 지하1층', call: '02-2117-1032', 
        time: {
            mon: '10:30 - 20:30',
            tue: '10:30 - 20:30',
            wed: '10:30 - 20:30',
            thu: '10:30 - 20:30',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(37.6080757, 127.0288683)
    },
    {
        title: '역삼 1호점', address: '서울특별시 강남구 논현로94길 30', call: '', 
        time: {
            mon: '08:00 - 22:00',
            tue: '08:00 - 22:00',
            wed: '08:00 - 22:00',
            thu: '08:00 - 22:00',
            fri: '08:00 - 22:00',
            sat: '10:00 - 22:00',
            sun: '10:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.5028464, 127.0387795)
    },
    {
        title: '교대점', address: '서울특별시 서초구 서초대로50길 30', call: '', 
        time: {
            mon: '08:00 - 22:00',
            tue: '08:00 - 22:00',
            wed: '08:00 - 22:00',
            thu: '08:00 - 22:00',
            fri: '08:00 - 22:00',
            sat: '10:00 - 22:00',
            sun: '10:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.4919575, 127.0129452)
    },

    // 경기.인천.강원지역
    {
        title: '신세계백화점 하남점', address: '경기도 하남시 미사대로 750 지하1층', call: '031-8072-1344', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.5458653, 127.2223392)
    },
    {
        title: '현대백화점 킨텍스점', address: '경기도 고양시 일산서구 호수로 817 지하1층', call: '031-822-3012', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(37.667941, 126.751797)
    },
    {
        title: '롯데백화점 분당점', address: '경기도 성남시 분당구 황새울로200번길 45 지하1층', call: '031-738-2002', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:00',
            sat: '10:30 - 20:00',
            sun: '10:30 - 20:00'
        },

        latlng: new kakao.maps.LatLng(37.3826575, 127.1189065)
    },
    {
        title: '롯데백화점 수원점', address: '경기도 수원시 권선구 세화로 134 지하1층', call: '031-8066-2906', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(37.2640396, 126.9970839)
    },
    {
        title: '광교 아비뉴프랑점', address: '경기도 수원시 영통구 센트럴타운로 85', call: '031-216-0039', 
        time: {
            mon: '11:00 - 21:00',
            tue: '11:00 - 21:00',
            wed: '11:00 - 21:00',
            thu: '11:00 - 21:00',
            fri: '11:00 - 21:00',
            sat: '11:00 - 21:00',
            sun: '11:00 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.290414, 127.050727)
    },
    {
        title: '현대아울렛 송도점', address: '인천 연수구 송도국제대로 123', call: '032-727-2613', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.3814548, 126.6578468)
    },
    {
        title: 'AK플라자 원주점', address: '강원도 원주시 봉화로 1 4층', call: '033-811-5890', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.3456122, 127.927826)
    },
    {
        title: '롯데아울렛 광명점', address: '경기도 광명시 일직로 17 3층', call: '02-6226-2317', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.4245517, 126.8842226)
    },
    {
        title: '부천성모병원점', address: '경기도 부천시 소사로 327', call: '032-342-0300', 
        time: {
            mon: '08:00 - 20:00',
            tue: '08:00 - 20:00',
            wed: '08:00 - 20:00',
            thu: '08:00 - 20:00',
            fri: '08:00 - 20:00',
            sat: '휴무',
            sun: '휴무'
        },

        latlng: new kakao.maps.LatLng(37.4870307, 126.7923894)
    },
    {
        title: '판교 아비뉴프랑점', address: '경기도 성남시 동판교로177번길 25', call: '031-602-1964', 
        time: {
            mon: '11:00 - 22:00',
            tue: '11:00 - 22:00',
            wed: '11:00 - 22:00',
            thu: '11:00 - 22:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(37.3972827, 127.1135331)
    },
    {
        title: '현대아울렛 김포점', address: '경기도 김포시 아라육로152번길 100 3층', call: '031-8048-2513', 
        time: {
            mon: '10:00 - 21:00',
            tue: '10:00 - 21:00',
            wed: '10:00 - 21:00',
            thu: '10:00 - 21:00',
            fri: '10:00 - 21:00',
            sat: '10:00 - 21:00',
            sun: '10:00 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.5994092, 126.7856279)
    },
    {
        title: 'AK플라자 수원점', address: '경기도 수원시 팔달구 덕영대로 924 6층', call: '1661-1114', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.265977, 127.0001373)
    },
    {
        title: '갤러리아백화점 광교점', address: '경기도 수원시 영통구 광교중앙로 124 9층', call: '', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(37.2852961, 127.0572888)
    },
    {
        title: '현대아울렛 남양주점', address: '경기도 남양주시 다산순환로 50 1층', call: '031-8078-2091', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.6157351, 127.1517041)
    },
    {
        title: '타임테라스 동탄점', address: '경기도 화성시 동탄중앙로 200 1층', call: '031-8003-4679', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(37.2047507, 127.0691442)
    },

    // 영남.충청.호남지역
    {
        title: '롯데백화점 서면부산본점', address: '부산광역시 부산진구 가야대로 772 지하2층', call: '051-810-3002', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(35.1566418, 129.0560026)
    },
    {
        title: '해운대 신라스테이점', address: '부산광역시 해운대로570번길 46 1층', call: '070-5167-7989', 
        time: {
            mon: '10:00 - 21:30',
            tue: '10:00 - 21:30',
            wed: '10:00 - 21:30',
            thu: '10:00 - 21:30',
            fri: '10:00 - 21:00',
            sat: '10:00 - 21:00',
            sun: '10:00 - 21:00'
        },

        latlng: new kakao.maps.LatLng(35.1598682, 129.1586644)
    },
    {
        title: '현대백화점 충청점', address: '충청북도 청주시 흥덕구 직지대로 308 1층', call: '043-909-4950', 
        time: {
            mon: '10:30 - 20:30',
            tue: '10:30 - 20:30',
            wed: '10:30 - 20:30',
            thu: '10:30 - 20:30',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(36.6443683, 127.4264979)
    },
    {
        title: '갤러리아백화점 대전점', address: '대전광역시 서구 대덕대로 211 11층', call: '042-480-5060', 
        time: {
            mon: '10:30 - 20:30',
            tue: '10:30 - 20:30',
            wed: '10:30 - 20:30',
            thu: '10:30 - 20:30',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(36.3519375, 127.3781875)
    },
    {
        title: '신세계백화점 광주점', address: '광주광역시 서구 무진대로 932 지하1층', call: '062-360-1902', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:00',
            sat: '10:30 - 20:00',
            sun: '10:30 - 20:00'
        },

        latlng: new kakao.maps.LatLng(35.1605431, 126.8826817)
    },
    {
        title: '신세계백화점 대구점', address: '대구광역시 동구 동부로 149 6층', call: '053-660-6668', 
        time: {
            mon: '11:00 - 21:30',
            tue: '11:00 - 21:30',
            wed: '11:00 - 21:30',
            thu: '11:00 - 21:30',
            fri: '11:00 - 21:30',
            sat: '11:00 - 21:30',
            sun: '11:00 - 21:30'
        },

        latlng: new kakao.maps.LatLng(35.877782, 128.628567)
    },
    {
        title: '신세계백화점 센텀시티점', address: '부산광역시 해운대구 센텀남대로 35', call: '051-745-1543', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(35.1689218, 129.1296311)
    },
    {
        title: '신세계백화점 마산점', address: '경상남도 창원시 마산합포구 합포로 251 지하1층', call: '1588-1234', 
        time: {
            mon: '10:30 - 21:00',
            tue: '10:30 - 21:00',
            wed: '10:30 - 21:00',
            thu: '10:30 - 21:00',
            fri: '10:30 - 21:00',
            sat: '10:30 - 21:00',
            sun: '10:30 - 21:00'
        },

        latlng: new kakao.maps.LatLng(35.2196364, 128.5866421)
    },
    {
        title: '롯데몰 군산점', address: '전라북도 군산시 조촌로 130 3층', call: '063-447-0198', 
        time: {
            mon: '11:00 - 21:00',
            tue: '11:00 - 21:00',
            wed: '11:00 - 21:00',
            thu: '11:00 - 21:00',
            fri: '11:00 - 22:00',
            sat: '11:00 - 22:00',
            sun: '11:00 - 22:00'
        },

        latlng: new kakao.maps.LatLng(35.9764485, 126.738587)
    },
    {
        title: '신세계백화점 김해점', address: '경상남도 김해시 김해대로 2232', call: '055-272-1984', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:30',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(35.229051, 128.8725425)
    },
    {
        title: '천안불당점', address: '충청남도 천안시 서북구 불당21로 71', call: '041-554-3331', 
        time: {
            mon: '10:00 - 21:00',
            tue: '10:00 - 21:00',
            wed: '10:00 - 21:00',
            thu: '10:00 - 21:00',
            fri: '10:00 - 21:00',
            sat: '10:00 - 21:00',
            sun: '10:00 - 21:00'
        },

        latlng: new kakao.maps.LatLng(36.8128516, 127.1083068)
    },
    {
        title: '신세계백화점 천안아산점', address: '충청남도 천안시 동남구 만남로 43 B관 4층', call: '', 
        time: {
            mon: '',
            tue: '',
            wed: '',
            thu: '',
            fri: '',
            sat: '',
            sun: ''
        },

        latlng: new kakao.maps.LatLng(36.8195465, 127.156151)
    },
    {
        title: '대전복합터미널점', address: '대전광역시 동구 동서대로 1689 서관 EW132호', call: '', 
        time: {
            mon: '11:00 - 20:00',
            tue: '11:00 - 20:00',
            wed: '11:00 - 20:00',
            thu: '11:00 - 20:00',
            fri: '11:00 - 20:00',
            sat: '11:00 - 20:00',
            sun: '11:00 - 20:00'
        },

        latlng: new kakao.maps.LatLng(36.3502842, 127.4366222)
    },
    {
        title: '갤러리아백화점 천안센터시티점', address: '충청남도 천안시 서북구 공원로 227 8층', call: '', 
        time: {
            mon: '10:30 - 20:00',
            tue: '10:30 - 20:00',
            wed: '10:30 - 20:00',
            thu: '10:30 - 20:00',
            fri: '10:30 - 20:00',
            sat: '10:30 - 20:30',
            sun: '10:30 - 20:30'
        },

        latlng: new kakao.maps.LatLng(36.3502842, 127.4366222)
    },
    {
        title: '현대아울렛 대전점', address: '대전광역시 유성구 테크노중앙로 123 3층', call: '042-332-2825', 
        time: {
            mon: '',
            tue: '',
            wed: '',
            thu: '',
            fri: '',
            sat: '',
            sun: ''
        },

        latlng: new kakao.maps.LatLng(36.4234842, 127.3984443)
    },
    {
        title: '부산역사점', address: '부산광역시 동구 중앙대로 206 부산역 2층', call: '051-710-1964', 
        time: {
            mon: '09:00 - 20:00',
            tue: '09:00 - 20:00',
            wed: '09:00 - 20:00',
            thu: '09:00 - 20:00',
            fri: '09:00 - 20:00',
            sat: '09:00 - 20:00',
            sun: '09:00 - 20:00'
        },

        latlng: new kakao.maps.LatLng(35.1155664, 129.041755)
    },
    
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = './백미당/아이콘/marker.png'; 
    
// 현재 표시된 마커들을 저장할 배열
var markers = [];

function createMarker(position) {
    var imageSize = new kakao.maps.Size(50, 50); 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    var marker = new kakao.maps.Marker({
        map: map, 
        position: position.latlng, 
        title : position.title, 
        image : markerImage 
    });

    // 마커 클릭 이벤트
    kakao.maps.event.addListener(marker, 'click', function() {
        var infoBox = document.querySelector('#map_info .info_box');
        infoBox.querySelector('.title').innerText = position.title;
        infoBox.querySelector('.address').innerText = '주소: ' + position.address;
        infoBox.querySelector('.call').innerText = '전화번호: ' + position.call;
        var timeInfo = '영업 시간:<br>' +
            '월요일: ' + position.time.mon + '<br>' +
            '화요일: ' + position.time.tue + '<br>' +
            '수요일: ' + position.time.wed + '<br>' +
            '목요일: ' + position.time.thu + '<br>' +
            '금요일: ' + position.time.fri + '<br>' +
            '토요일: ' + position.time.sat + '<br>' +
            '일요일: ' + position.time.sun;
            // '일요일: ' + position.time.sun + '<br>' +
            // '브레이크: ' + position.time.break;
        if (position.time.break) {
            timeInfo += '<br>브레이크: ' + position.time.break;
        }
        infoBox.querySelector('.time').innerHTML = timeInfo;

        document.getElementById('map_info').style.display = 'block';
    });

    markers.push(marker);
}

// 초기 마커 생성
positions.forEach(createMarker);

function filterMarkers() {
    var sido = document.getElementById('sido').value;
    var sigungu = document.getElementById('sigungu').value;
    var search = document.getElementById('search').value.toLowerCase();

    // 기존 마커 제거
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    var filteredPositions = positions.filter(position => {
        var addressParts = position.address.split(' ');
        var addressSido = addressParts[0];
        var addressSigungu = addressParts[1];
        var title = position.title.toLowerCase();

        return (!sido || addressSido === sido) &&
               (!sigungu || addressSigungu === sigungu) &&
               (!search || title.includes(search));
    });

    // 필터링된 마커 생성
    filteredPositions.forEach(createMarker);

    // 필터링 결과가 있을 경우에도 map_info는 숨긴 상태 유지
    document.getElementById('map_info').style.display = 'none';

    // 선택된 시/도 및 군/구의 중심 좌표 설정
    if (filteredPositions.length > 0) {
        var centerLat = 0;
        var centerLng = 0;
        filteredPositions.forEach(function(position) {
            centerLat += position.latlng.getLat();
            centerLng += position.latlng.getLng();
        });
        centerLat /= filteredPositions.length;
        centerLng /= filteredPositions.length;
        var centerPosition = new kakao.maps.LatLng(centerLat, centerLng);

        // 지도의 중심을 변경하고 레벨을 5로 설정
        map.setCenter(centerPosition);
        map.setLevel(6);
    }
}

// 페이지 로드 시 map_info 숨기기
document.getElementById('map_info').style.display = 'none';

// Enter 키로 필터링하기
document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        filterMarkers();
    }
});