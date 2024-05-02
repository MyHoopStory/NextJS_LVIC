import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../components/navbar';


const Home = () => {
  return (

    <div className='container'>
      <MyNavbar/>
      <h1>Welcome to the LVIC</h1>
      <Link href="/projects">Go to Projects</Link>
      <Link href="/newProjects">Go to Submit New Project</Link>
    </div> 
  );
};

export default Home;
