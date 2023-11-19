import React from 'react';
import DashboardSkeleton from '../../ui/skeletons';

interface ILoadingProps {
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    const { } = props;

    return (
        <DashboardSkeleton />
    );
};

export default Loading;