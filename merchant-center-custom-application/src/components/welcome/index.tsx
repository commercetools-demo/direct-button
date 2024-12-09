import { useOrganization } from '../../hooks/use-organization';

const Welcome = () => {
  const { organizationId } = useOrganization();

  if (organizationId) {
    window.location.replace(`${window.location.origin}/account/organizations/${organizationId}/teams`);
    return null;
  }
  return <div>Loading...</div>;
};

export default Welcome;
