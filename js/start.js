const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');

const select = []; // 선택한 답변 저장 배열

function calResult() {
    var energyPoints = [0, 0]; // 에너지 수준 카테고리별 포인트 배열
    var sociabilityPoints = [0, 0]; // 사회성 카테고리별 포인트 배열
    var intelligencePoints = [0, 0]; // 지능 수준 카테고리별 포인트 배열
    var activityPoints = [0, 0]; // 활동성 카테고리별 포인트 배열

    for (let i = 0; i < 12; i++) {
        var target = qnaList[i].a[select[i]]; // 선택한 답변 가져오기

        // 각 카테고리별 포인트 증가
        switch (target.type) {
            case 'high_energy':
                energyPoints[0]++;
                break;
            case 'moderate_energy':
                energyPoints[0]++;
                break;
            case 'low_energy':
                energyPoints[1]++;
                break;
            case 'very_social':
                sociabilityPoints[0]++;
                break;
            case 'moderately_social':
                sociabilityPoints[1]++;
                break;
            case 'shy':
                sociabilityPoints[1]++;
                break;
            case 'high_intelligence':
                intelligencePoints[0]++;
                break;
            case 'moderate_intelligence':
                intelligencePoints[1]++;
                break;
            case 'low_intelligence':
                intelligencePoints[1]++;
                break;
            case 'high_activity':
                activityPoints[0]++;
                break;
            case 'moderate_activity':
                activityPoints[1]++;
                break;
            case 'low_activity':
                activityPoints[1]++;
                break;
        }
    }

    // 각 카테고리에서 가장 높은 포인트를 가진 항목 선택
    var energyCategory = energyPoints.indexOf(Math.max(...energyPoints));
    var sociabilityCategory = sociabilityPoints.indexOf(Math.max(...sociabilityPoints));
    var intelligenceCategory = intelligencePoints.indexOf(Math.max(...intelligencePoints));
    var activityCategory = activityPoints.indexOf(Math.max(...activityPoints));

    // 결과로 선택한 카테고리들을 조합하여 성격 유형 생성
    var personalityType = `${energyCategory}${sociabilityCategory}${intelligenceCategory}${activityCategory}`;

    console.log(personalityType);
    // 결과 출력
    return personalityType;
}

function setResult() {
    let point = calResult(); // 문자열 형태의 성격 유형 (예: "0101")

    // point 문자열을 배열로 변환
    point = point.split("").map(Number);

    // 해당하는 성격 유형의 이름과 설명 가져오기
    const personalityType = infoList[point[0] * 8 + point[1] * 4 + point[2] * 2 + point[3]];

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = personalityType.name;

    
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('.resultImg');

    var imgURL = 'img/' + [point[0] * 8 + point[1] * 4 + point[2] * 2 + point[3]] + '.jpeg';
    console.log(imgURL);
    resultImg.src = imgURL;
    resultImg.alt = point;
    imgDiv.appendChild(resultImg);
    
    console.log(personalityType.name);
    console.log(personalityType.desc);
    
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = personalityType.desc;
    
}

function goResult() {
    qna.style.WebkitAnimation = 'fadeOut 1s';
    qna.style.animation = 'fadeOut 1s';
    setTimeout(() => {
        result.style.WebkitAnimation = 'fadeIn 1s';
        result.style.animation = 'fadeIn 1s';
        setTimeout(() => {
            qna.style.display = 'none';
            result.style.display = 'block';
        }, 450)
    }, 450)

    console.log(select);
    setResult();
}

function addAnswer(answerText, qIndex, idx) {
    var a = document.querySelector('.aBox');
    var answer = document.createElement('button');

    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = 'fadeOut 0.5s';
            children[i].style.animation = 'fadeOut 0.5s';
        }
        setTimeout(() => {
            select[qIndex] = idx;
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIndex);
        }, 450)
    }, false);
}

function goNext(qIndex) {
    if (qIndex === qnaList.length) {
      goResult();
      return;
    }
  
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIndex].q;
    for (let i in qnaList[qIndex].a) {
      addAnswer(qnaList[qIndex].a[i].answer, qIndex, i);
    }

    var statusImage = document.querySelector('.statusImage'); // 이미지 요소 가져오기
    var status = document.querySelector('.statusBar');
  
    var widthPercentage = (100 / qnaList.length) * (qIndex + 1);
    status.style.width = widthPercentage + '%';
  
    if (widthPercentage == 0) {
        statusImage.style.left = 0;
    }else{
        statusImage.style.left = (widthPercentage - 10 + '%');
    }
}

function begin() {
    main.style.WebkitAnimation = 'fadeOut 1s';
    main.style.animation = 'fadeOut 1s';
    setTimeout(() => {
        qna.style.WebkitAnimation = 'fadeIn 1s';
        qna.style.animation = 'fadeIn 1s';
        setTimeout(() => {
            main.style.display = 'none';
            qna.style.display = 'block';
        }, 450)
        let qIndex = 0;
        goNext(qIndex);
    }, 450)
}