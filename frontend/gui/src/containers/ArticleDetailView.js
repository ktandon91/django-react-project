import React from 'react';
import axios from 'axios';

import {Card, Button} from 'antd';

import CustomForm from '../components/Form';


class ArticleDetailView extends React.Component {

    state = {
        article: {}
    }

    handleDelete = (event)=>{
        const artID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${artID}`);
        this.props.history.push("/");
        this.forceUpdate();
    }

    componentDidMount() {
        const artID = this.props.match.params.articleID;

        axios.get(`http://127.0.0.1:8000/api/${artID}`)
            .then(res => {
                this.setState({
                    article: res.data
                })
            })
    }

    render() {
        return (
            <div>
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
            <CustomForm
            requestType="put"
            articleID={this.props.match.params.articleID}
            btnText="Update Article"/>

            <form onSubmit={this.handleDelete}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form>
            </div>
        )
    }

}

export default ArticleDetailView;
