import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import MyCustomApps from './fetch-my-project.setting.graphql';
import { useApplicationContext, useMcQuery } from '@commercetools-frontend/application-shell-connectors';
import { MyProject } from './types/app';

export const useOrganization = () => {

    const project = useApplicationContext(context => context.project);

    const {
        data: myProjectData,
    } = useMcQuery<{
        project: MyProject;
    }>(MyCustomApps, {
        context: {
            target: GRAPHQL_TARGETS.SETTINGS_SERVICE,
        },
        variables: {
            projectKey: project?.key
        }
    });

    return {
        organizationId: myProjectData?.project?.owner?.id
    };
};