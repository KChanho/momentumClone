//KOSPI Companies from wiki
const companies = [
{
    title: "삼성전자",
    description: "삼성전자주식회사(영어: Samsung Electronics Co., Ltd.)는 전자 제품을 생산하며 정보통신기술(ICT)에 대한 개발을 진행하고 있는 대한민국의 기업이다."
},
{
    title: "SK하이닉스",
    description: "SK하이닉스는 대한민국의 메모리 반도체 제조사로 SK그룹의 계열사다."
},
{
    title: "LG화학",
    description: "LG화학(엘지化學)은 대한민국의 화학물질 제조기업이자 의약품 분야, 정밀화학 기업이다. 매출액 기준, 대한민국 내 1위 화학기업이며, ICIS에 따르면 2012년 매출 기준 세계 15위의 화학물 제조기업이다."
},
{
    title: "삼성바이오로직스",
    description: "삼성바이오로직스(영어: Samsung BioLogics, 三星바이오로직스)는 바이오 의약품 위탁생산(CMO)을 목적으로 인천 송도에 설립한 삼성그룹 계열 회사다."
},
{
    title: "셀트리온",
    description: "셀트리온은 대한민국의 종합 생명공학 기업이다. 셀트리온은 항체 의약품을 만드는 생명공학 기업이다. 2002년 의약품 CMO(위탁생산) 사업으로 시작하였다. 2009년에는 다수의 바이오시밀러 제품의 개발, 임상, 판매 허가를 진행하였다."
},
{
    title: "네이버",
    description: "네이버(영어: NAVER)는 1999년 6월에 출시된 대한민국의 포털사이트이다. 또한 네이버는 1997년 2월 26일 이해진, 권혁일, 김보경, 구창진, 오승환, 최재영, 강석호 등으로 구성된 삼성SDS의 사내 벤처에서 '웹글라이더'라는 이름으로 시작해 1998년 1월에 분리된 네이버컴 주식회사에서 운영하다가 2000년 자회사인 한게임과 합병하여 NHN이 된 후 재분리하여 현재는 네이버(주)에서 운영하고 있다."
},
{
    title: "현대자동차",
    description: "현대자동차(現代自動車, 영어: Hyundai Motor Company)는 1967년 12월 29일에 설립된 현대자동차그룹 계열의 완성차 생산·판매 업체이다. 본사는 서울특별시 서초구 헌릉로 12 (양재동)에 위치해있다. 약칭이자 코스피 시장에서의 명칭은 현대차이다."
},
{
    title: "삼성SDI",
    description: "삼성SDI(영어: Samsung SDI, 三星SDI)는 대한민국의 IT 기업으로, 삼성그룹의 전자 계열사이다. 삼성SDI는 브라운관, PDP, AMOLED 등의 디스플레이 제품 생산을 주력 사업으로 하였으나, 2000년 리튬이온 2차전지 사업에도 진출하여 사업을 다각화하였다."
},
{
    title: "카카오",
    description: "주식회사 카카오(영어: Kakao Corp.)는 대한민국의 IT 기업이다. 1995년 2월 설립된 (주)다음커뮤니케이션을 전신으로 하고, (주)다음커뮤니케이션이 2014년 10월 (주)카카오와 합병하면서 상호를 (주)다음카카오로 변경했고, 2015년 10월 상호를 (주)카카오로 변경했다. 국내 1위인 모바일 메신저인 카카오톡을 비롯하여, 다음, 카카오 T, 멜론 등 다양한 모바일 서비스를 제공하고 있다."
},
];

const title = document.querySelector("#quote span:first-child");
const description = document.querySelector("#quote span:last-child")
const todaysCompany = companies[Math.floor(Math.random() * companies.length)];

title.innerText = todaysCompany.title;
description.innerText = todaysCompany.description;