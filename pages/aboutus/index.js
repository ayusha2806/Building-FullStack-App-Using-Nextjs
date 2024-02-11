
import Link from 'next/link';

const AboutUsPage = () => {
  const developers = [
    { id: '1', name: 'Yash' },
    { id: '2', name: 'Vaibhav' },
    { id: '3', name: 'Suresh' }
  ];

  return (
    <div>
      <h1>Meet Our Team</h1>
      <ul>
        {developers.map(developer => (
          <li key={developer.id}>
            <Link href={`/aboutus/${developer.id}`}>
              <span>{developer.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUsPage;
