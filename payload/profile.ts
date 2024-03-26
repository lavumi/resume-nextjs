import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김도영',
    small: '(Lavumi)',
  },
  contact: [
    {
      title: 'me@lavumi.net',
      link: 'mailto:me@lavumi.net',
      icon: faEnvelope,
    },
    // {
    //   title: 'Please contact me by email',
    //   icon: faPhone,
    //   badge: true,
    // },
    {
      title: 'https://github.com/lavumi',
      link: 'https://github.com/lavumi',
      icon: faGithub,
    },
    {
      title: 'https://lavumi.net/',
      link: 'https://lavumi.net/',
      icon: faHtml5,
    },
    {
      title: 'LinkedIn',
      // title: '서울시 강남구',
      link : 'https://www.linkedin.com/in/doyoung-kim-3a933b227/',
      icon: faAddressCard,
    },
  ],
  // ,
  // notice: {
  //   title: "Email을 통해 연락해주시면 감사하겠습니다.",
  //   icon: faBell,
  // },
};

export default profile;
