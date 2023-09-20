// Kakao SDK 스크립트 로드 후 실행
Kakao.init('d9b94e44acb050f0954294af3b16dbbc'); // 여기서 'YOUR_APP_KEY'를 실제 Kakao 애플리케이션 키로 대체하세요.
Kakao.isInitialized(); // SDK 초기화 여부를 리턴합니다.

function shareKakao() {
 Kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
        },
        },
        itemContent: {
        profileText: 'Kakao',
        profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageText: 'Cheese cake',
        titleImageCategory: 'Cake',
        items: [
            {
            item: 'Cake1',
            itemOp: '1000원',
            },
            {
            item: 'Cake2',
            itemOp: '2000원',
            },
            {
            item: 'Cake3',
            itemOp: '3000원',
            },
            {
            item: 'Cake4',
            itemOp: '4000원',
            },
            {
            item: 'Cake5',
            itemOp: '5000원',
            },
        ],
        sum: 'Total',
        sumOp: '15000원',
        },
        social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
        },
        buttons: [
        {
            title: '웹으로 이동',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
            },
        },
        {
            title: '앱으로 이동',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
            },
        },
        ],
    });
}