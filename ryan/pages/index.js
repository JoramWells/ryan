import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />

      <h1
        className="text-3xl font-bold"
        style={{
          textAlign: 'center',
        }}
      >
        Explore your Job Opportunities
      </h1>
      <div className="mt-4 mb-8 w-3/4 m-auto block">
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
      </div>
      <div>
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          We offer the following requirements
        </h1>
      </div>
      <div>
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Latest from Our Blog
        </h1>
      </div>
    </div>
  );
}
