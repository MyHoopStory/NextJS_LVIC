import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/projects">Go to Projects</Link>
    </div>
  );
};

export default Home;
