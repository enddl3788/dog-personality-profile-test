Kakao.init('d9b94e44acb050f0954294af3b16dbbc'); // 여기서 'YOUR_APP_KEY'를 실제 Kakao 애플리케이션 키로 대체하세요.
Kakao.isInitialized(); // SDK 초기화 여부를 리턴합니다.

const url = 'https://enddl3788.github.io/dog-personality-profile-test/';

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '반려견 성격 프로필 테스트 결과'
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.jpeg';    
    const shareURL = url + 'page/result-' + resultAlt + '.html';

    Kakao.Link.sendDefault({
        //container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        },

        buttons: [
        {
            title: '결과확인하기',
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        },
        ],
    });
}