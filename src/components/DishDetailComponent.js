import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';

const DishDetail = (props) => {
        if(props.dish == null) {
            return (<div></div>);
        }
        else {
            return (
                <div class="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem> 
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                    <div className="row">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
        }
    }
    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.title}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    function RenderComments({comments}) {
        const arr = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                {arr}
            </div>
        );
    }

export default DishDetail;