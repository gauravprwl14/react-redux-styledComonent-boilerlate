import React from "react";
import { Divider, Form, Grid, Header, Image, Responsive } from "semantic-ui-react";
import talentAvatar from "../../../../assets/images/icons/talent-avatar.jpg";
import "./styles.scss";

const ProfilePicture = props => {
    return (
        <div>
            <div className="">
                <Image
                  src={props.imageUrl}
                  alt="User Profile"
                  width={600}
                  className="marginB1 profile-image-responsive"
                />
            </div>
            <div>
                <a href="" className="edit-button">
                    Edit
                </a>
                {/* <Button fluid primary compact onClick={props.editButtonClick}>Edit</Button> */}
            </div>
        </div>
    );
};

const BasicInfo = () => {
    return (
        <Grid>
            <Grid.Column mobile={16} computer={8}>
                <Form>
                    <Form.Field>
                        <span>Organization</span>
                        <p>WESH Florida</p>
                    </Form.Field>
                    <Form.Field>
                        <span>Current Location</span>
                        <p>Los Angeles, CA</p>
                    </Form.Field>
                    <Form.Field>
                        <span>Compensation</span>
                        <p>$63,500</p>
                    </Form.Field>
                </Form>
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
                <Form>
                    <Form.Field>
                        <span>Current Position</span>
                        <p>Anchor</p>
                    </Form.Field>
                    <Form.Field>
                        <span>Position Subcategory</span>
                        <p>National News</p>
                    </Form.Field>
                    <Form.Field>
                        <span>Status</span>
                        <p>Staff</p>
                    </Form.Field>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

const ContactDetails = props => {
    return (
        <Grid className="contact-details-container">
            <Grid.Row className="bordered primaryBorder">
                <Grid.Column mobile={16} tablet={4} computer={2}>
                    <ProfilePicture imageUrl={props.imageUrl} />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={12} computer={14}>
                    <Header as="h3">{props.contactName}</Header>
                    <Divider horizontal />
                    <BasicInfo />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
// contact Obj property
// • imageUrl

ContactDetails.defaultProps = {
    imageUrl: talentAvatar,
    contactName: "Mason Dean"
};

export default ContactDetails;
