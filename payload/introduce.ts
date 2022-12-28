import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    // '게임 클라이언트 개발자로 시작하여, 렌더링, 실시간 게임 서버, 웹서버 등 다양한 분야들을 시도해보고 있는 호기심 많은 개발자입니다.',
    // '주된 업무로 게임 클라이언트 개발을 하고 있으며, 최근 신규 프로젝트에서는 클라이언트 뿐만 아니라, 빌드 머신 세팅, 테스트 서버, 라이브 서버 같은 게임 서버 인프라 구축도 해보았습니다.',
    // '그 외 개인 서버를 운영하면서 서버 인프라에 대한 다양한 시도를 해보고 있습니다.',
    '게임 클라이언트 개발로 시작하여, 렌더링, 실시간 게임 서버, 웹서버 등 다양한 분야들을 시도해보고 있는 호기심 많은 개발자입니다.',
    '주된 업무로 서버 개발을 하고 있으며, 현재 회사에서는 사내 서버의 테섭, Redmine, Wiki, Homepage 등을 구축,운영등의 업무도 맡고 있습니다.',
    '그 외 개인적으로 최근에 급격하게 발표되고 있는 AI 기술들에 관심이 많으며 여러가지 사용 방법들을 시도해보고 있습니다.',
  ],
  sign: 'Lavumi',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
