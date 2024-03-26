import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '슬롯 게임',
      startedAt: '2022-09',
      endedAt: '2023-10',
      where: 'CandiCode',
      descriptions: [
        { content: '슬롯 게임 서버 개발 (C# ASP.NET)' },
        { content: 'DB 설계 ( MariaDB )'},
        { content: '파시트 설계 및 가이드' },
        { content: '환수율 검증기 (C#)' },
        { content: '타사 슬롯 분석 프로그램 (Go)' },
        { content: '환수율 모니터링 시스템 (Node.js Express)' },
      ],
    },
    {
      title: 'Crush Project',
      startedAt: '2022-09',
      endedAt: '2023-10',
      where: 'CandiCode',
      descriptions: [{ content: '플래폼 서버 개발 (C# ASP.NET)' }],
    },
    {
      title: '코인 플랫폼 운영',
      startedAt: '2022-02',
      endedAt: '2022-08',
      where: 'VanillaCode',
      descriptions: [
        { content: '코인 플랫폼 유지, 보수' },
        { content: '이더리움 노드(geth) 운영' },
        { content: '노드 모니터링, 알림 시스템 개발' },
      ],
    },
    {
      title: '모바일 앱서비스 런칭, 운영',
      startedAt: '2022-01',
      endedAt: '2022-08',
      where: 'VanillaCode',
      descriptions: [
        { content: '대만 복권 예측번호 알림 앱 개발' },
        { content: '서버, 클라이언트 리드 프로그래머 역할 수행' },
        { content: '네트워크 구조 설계 및 nCloud 서버 구축' },
      ],
    },
    {
      title: 'No Pickles - pet escape',
      startedAt: '2020-11',
      endedAt: '2021-11',
      where: 'Flysher',
      descriptions: [
        { content: 'MO ACTION GAME "NoPickles - pet escape" 개발' },
        {
          content: '클라이언트 (Cocos Creator 2.4.4)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '전장의 안개',
              weight: 'MEDIUM',
              descriptions: [
                { content: '시야 차단 오브젝트 입력 툴 제작' },
                {
                  content:
                    '해당 오브젝트 읽어서 실시간으로 시야 반경, 차폐물 계산후 시야 부위 랜더링',
                },
                { content: '시야 내부의 오브젝트를 랜더링' },
                { content: '시야 밖에서도 보이는 오브젝트 렌더링' },
                { content: '두 텍스쳐를 합쳐서 최종 시야 구현' },
              ],
            },
            { content: '네트워크 클라이언트' },
            { content: '애니메이션, 움직임 네트워크 동기화 객체' },
            { content: '인게임 로직' },
            { content: '씬 관리 시스템' },
            // { content: '팝업 관리 시스템' },
            { content: '캐릭터 스킨 관리 시스템' },
            // { content: '플레이어의 상황에 따라 실시간으로 변화하는 UI 구현' },
            // { content: 'Landscape, Portrait view 동시 지원 UI 설계' },
            { content: '게임 화면 스크린샷 공유' },
            { content: '리플레이 기능' },
            { content: 'Facebook Instant game API(로그인, 결제, 포스팅, 친구 초대 등)' },
            { content: 'Asset bundle 을 사용하여 CDN 세팅' },
            // { content: '//todo 상세 내용 다 적기 -- 그 외 모든 클라이언트 로직'},
          ],
        },
        {
          content: '서버',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'MYSQL DB 구축' },
            { content: 'Pomelo javascript Framework 사용' },
            { content: 'Token Login system' },
            { content: '플레이어 정보 관리 시스템' },
            { content: '대기실, 인게임 방 구현 및 관리 시스템' },
            { content: '퀵 매칭 시스템' },
            { content: '인게임, 인앱 결제 시스템' },
            { content: '채팅과 구글 번역 내장' },
            { content: 'Funnel and Play Log' },
            { content: '염색 알고리즘' },
            { content: '인게임 로직' },
            { content: '플레이어 움직임 동기화' },
            // { content: '//todo 상세 내용 다 적기 -- 인프라 구축을 제외한 모든 서버 로직'}
          ],
        },
      ],
    },
    {
      title: '웹, 모바일 게임 외적 콘텐츠',
      startedAt: '2019-04',
      endedAt: '2020-11',
      where: 'Flysher',
      descriptions: [
        {
          content: '사내 연출 툴 관련 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: '이미지 로딩 시스템 개선' },
            { content: '비트맵 폰트' },
            { content: 'ui 개선' },
            // { content:'bug fix'}
          ],
        },
        {
          content: '메인 시스템 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '지속적인 버그 수정 및 remain issue 처리' },
            { content: '각종 신규 이벤트' },
            // { content:'신규 유저 이벤트'},
            { content: '키노 슬롯 웹, 모바일 출시' },
            { content: '프로필, 레벨 시스템 리워크' },
            // { content:'신규 weekly event ( puzzle matching)'},
            // { content:'신규 7 days mission'},
            { content: '인게임 튜토리얼' },
            { content: '로그인 시퀀스 클라이언트 단 재설계' },
            // { content:'ios, aos 샵 코드 통합'},
            { content: 'apple connect ' },
            { content: 'apple game center' },
            { content: '복권 긁기 시스템 ' },
          ],
        },
      ],
    },
    {
      title: '모바일 프로젝트',
      startedAt: '2018-08',
      endedAt: '2019-04',
      where: 'Flysher',
      descriptions: [
        { content: '소셜 카지노 모바일 게임 개발' },
        {
          content: '메인 화면',
          weight: 'MEDIUM',
          descriptions: [
            { content: '스크롤링 보정과 Image Skew를 사용하여 2D View에 깊이감 구현' },
            { content: '랜덤하게 표현되는 연출 작업 ( e.g. 당첨후 동전 흩뿌리기)' },
            { content: '인게임 아이콘 배치 구조 설계' },
          ],
        },
      ],
    },
    {
      title: '3D 런 게임 개선',
      startedAt: '2015-12',
      endedAt: '2016-04',
      where: '토키 스튜디오',
      descriptions: [
        { content: '곡선맵 추가 및 그에 맞는 이동 방법 구현' },
        { content: '곡선맵 제작을 위해 맵툴 개선' },
        { content: '캐릭터를 세분화하여 각각의 스킬들 기획, 제작' },
        { content: '캐릭터 움직임 네트워크 동기화' },
        { content: '보스전, 미션 모드 제작' },
      ],
    },
  ],
};

export default project;
