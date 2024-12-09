import { useHistory } from 'react-router-dom';

const Welcome = ({ organizationId }: { organizationId: string }) => {
  const { replace } = useHistory();
  if (organizationId) {
    replace(`account/organizations/${organizationId}/teams`);
    return null;
  }
  return <div>Loading...</div>;
};

export default Welcome;
