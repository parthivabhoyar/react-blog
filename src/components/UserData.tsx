import React from 'react';
import { connect } from 'react-redux';

interface IRecipeProps {
    fetchUser?: any;
    user?: any;
    userId: number;
    dataIndex: number;
}

class UserData extends React.Component<IRecipeProps> {

    render() {
        const { dataIndex, user } = this.props;

        let nodes = [<div key={`emptyuser${dataIndex}`}>...</div>];
        if (user) {
            nodes = [<div key={`user${dataIndex}`}>{user.username}</div>];
        }
        return nodes;
    }
}

const mapStateToProps = (state: any, myProps: IRecipeProps) => {
    return { user: state.user.find((d: any) => d.userId === myProps.userId) };
};

export default connect(mapStateToProps)(UserData);