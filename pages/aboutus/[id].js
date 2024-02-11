
import { useRouter } from 'next/router';

const TeamMemberPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Hardcoded team details
  const details = [
    { id: '1', name: 'Yash', role: 'Senior Developer' },
    { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
    { id: '3', name: 'Suresh', role: 'Frontend Developer' }
  ];

  // Find team member details based on id
  const member = details.find(member => member.id === id);

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <div>
          <h1>Developer doesn't exist</h1>
        </div>
      )}
    </div>
  );
};

export default TeamMemberPage;
