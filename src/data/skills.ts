import VueLogo from '../assets/skills/vuejs.svg';
import ReactLogo from '../assets/skills/react.svg';
import TypescriptLogo from '../assets/skills/typescript.svg';
import HtmlLogo from '../assets/skills/html5.svg';
import CssLogo from '../assets/skills/css3.svg';
import JavascriptLogo from '../assets/skills/js.svg';
import AWSLogo from '../assets/skills/aws.svg';
import DockerLogo from '../assets/skills/docker.svg';
import GitLogo from '../assets/skills/git.svg';
import PostgresLogo from '../assets/skills/postgresql.svg';
import PythonLogo from '../assets/skills/python.svg';
import SassLogo from '../assets/skills/sass.svg';
import VitestLogo from '../assets/skills/vitest.svg';
import FigmaLogo from '../assets/skills/figma.svg';
import GCloudLogo from '../assets/skills/gcloud.svg';
import FastAPILogo from '../assets/skills/fastapi.svg';
import PostmanLogo from '../assets/skills/postman.svg';
import KubernetesLogo from '../assets/skills/kubernetes.svg';
import JavaLogo from '../assets/skills/java.svg';
import NodeLogo from '../assets/skills/nodejs.svg';
import PlaywrightLogo from '../assets/skills/playwright.svg';
import KafkaLogo from '../assets/skills/kafka.svg';
import MySQLLogo from '../assets/skills/mysql.svg';
import RedisLogo from '../assets/skills/redis.svg';
import DynamoDBLogo from '../assets/skills/dynamodb.svg';
import JenkinsLogo from '../assets/skills/jenkins.svg';
import GitHubLogo from '../assets/skills/github.svg';
import CodeBuildLogo from '../assets/skills/aws-codebuild.svg';
import CodeDeployLogo from '../assets/skills/aws-codedeploy.svg';
import PytestLogo from '../assets/skills/pytest.svg';
import ClaudeLogo from '../assets/skills/claude.svg';
import CodexLogo from '../assets/skills/codex.svg';
import VSCodeLogo from '../assets/skills/vscode.svg';
import DataGripLogo from '../assets/skills/datagrip.svg';
import DBeaverLogo from '../assets/skills/dbeaver.svg';
import ExcalidrawLogo from '../assets/skills/excalidraw.svg';

import type { ui, defaultLang } from '../i18n/ui';

type TranslationKey = keyof typeof ui[typeof defaultLang];

export interface Skill {
  name: string;
  logo: ImageMetadata;
  /** Extra classes that keep dark logos visible in dark mode. */
  darkClass?: string;
}

export interface SkillsCategory {
  titleKey: TranslationKey;
  descriptionKey?: TranslationKey;
  skills: Skill[];
}

export const skillsCategories: SkillsCategory[] = [
  {
    titleKey: 'skills.languages',
    skills: [
      { name: 'TypeScript', logo: TypescriptLogo },
      { name: 'JavaScript', logo: JavascriptLogo },
      { name: 'Python', logo: PythonLogo },
      { name: 'Java', logo: JavaLogo },
    ],
  },
  {
    titleKey: 'skills.frontend',
    skills: [
      { name: 'Vue.js', logo: VueLogo },
      { name: 'React.js', logo: ReactLogo },
      { name: 'HTML', logo: HtmlLogo },
      { name: 'CSS', logo: CssLogo },
      { name: 'Sass', logo: SassLogo },
    ],
  },
  {
    titleKey: 'skills.backend',
    skills: [
      { name: 'FastAPI', logo: FastAPILogo },
      { name: 'Kafka', logo: KafkaLogo, darkClass: 'dark:invert' },
      { name: 'Node.js', logo: NodeLogo },
    ],
  },
  {
    titleKey: 'skills.database',
    skills: [
      { name: 'PostgreSQL', logo: PostgresLogo },
      { name: 'MySQL', logo: MySQLLogo, darkClass: 'dark:brightness-[2.5]' },
      { name: 'Redis', logo: RedisLogo },
      { name: 'DynamoDB', logo: DynamoDBLogo },
    ],
  },
  {
    titleKey: 'skills.cloud',
    skills: [
      { name: 'Kubernetes', logo: KubernetesLogo },
      { name: 'Docker', logo: DockerLogo },
      { name: 'AWS', logo: AWSLogo },
      { name: 'GCloud', logo: GCloudLogo },
    ],
  },
  {
    titleKey: 'skills.testing',
    descriptionKey: 'skills.testing.description',
    skills: [
      { name: 'Pytest', logo: PytestLogo },
      { name: 'Vitest', logo: VitestLogo },
      { name: 'Playwright', logo: PlaywrightLogo },
    ],
  },
  {
    titleKey: 'skills.ci_cd',
    skills: [
      { name: 'Jenkins', logo: JenkinsLogo },
      { name: 'GitHub', logo: GitHubLogo, darkClass: 'dark:invert' },
      { name: 'AWS CodeBuild', logo: CodeBuildLogo },
      { name: 'AWS CodeDeploy', logo: CodeDeployLogo },
    ],
  },
  {
    titleKey: 'skills.tools',
    skills: [
      { name: 'Claude Code', logo: ClaudeLogo },
      { name: 'Codex', logo: CodexLogo, darkClass: 'dark:invert' },
      { name: 'Git', logo: GitLogo },
      { name: 'VS Code', logo: VSCodeLogo },
      { name: 'DataGrip', logo: DataGripLogo },
      { name: 'DBeaver', logo: DBeaverLogo },
      { name: 'Postman', logo: PostmanLogo },
      { name: 'Figma', logo: FigmaLogo },
      { name: 'Excalidraw', logo: ExcalidrawLogo },
    ],
  },
];
