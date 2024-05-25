import { Header } from './components/Page/Header';
import { MainContent } from './components/Page/MainContent';

export default function Home() {
  return (
    <>
      <Header title="Hey There" />
      <MainContent content="Welcome to my space on the internet." />
    </>
  );
}
