import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UserData from './UserData';

interface IRecipeProps {
    fetchPostsAndUsers: any;
    posts: any;
}

class PostList extends React.Component<IRecipeProps> {

    useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            maxWidth: '360px',
            backgroundColor: theme.palette.background.paper,
        },
    }));

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    listBlogs() {
        return this.props.posts.map((d: any, index: number) => {
            return (
                <ListItem button divider key={`blog${index}`}>
                    <ListItemText primary={d.title} />
                    <UserData userId={parseInt(d.userId)} dataIndex={index} />
                </ ListItem>
            );
        });
    }

    printBlogs() {
        return (
            <List component="nav" aria-label="Mailbox folders">
                {this.listBlogs()}
            </List>
        );
    }

    render() {
        if (this.props.posts && this.props.posts.length > 0) {
            return this.printBlogs();
        } else {
            return <div>Loading...</div>;
        }
    }
}

const mapStateToProps = (state: any) => {
    return { posts: state.posts, user: state.user };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);