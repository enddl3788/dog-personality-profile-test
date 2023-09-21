import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';

// Firebase 설정 객체
var firebaseConfig = {
    apiKey: "AIzaSyCZlwzGfbsGW_fSuaQGwVzRniFQfp73eNI",
    authDomain: "dog-personality-profile-test.firebaseapp.com",
    projectId: "dog-personality-profile-test",
    storageBucket: "dog-personality-profile-test.appspot.com",
    messagingSenderId: "1018394908243",
    appId: "1:1018394908243:web:e328bdd85d52fb57d4d8a6",
    measurementId: "G-9V91EGCVZ8"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 참조
const db = getFirestore(app);

// updateProfile 함수 정의
function updateProfile() {
    // 입력 값 가져오기
    var name = document.getElementById("dogName").value;
    var breed = document.getElementById("dogBreed").value;

    // Firestore에 데이터 추가
    db.collection("dogProfiles").add({
        name: name,
        breed: breed
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        // 여기에 추가 성공 메시지 또는 리다이렉션을 추가할 수 있습니다.
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        // 여기에 오류 처리 코드를 추가할 수 있습니다.
    });

    // 입력 칸 초기화
    document.getElementById("dogName").value = "";
    document.getElementById("dogBreed").value = "";
}